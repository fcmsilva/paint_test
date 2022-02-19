

function openFullscreen() {
  let elem =document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}


let backdropImgs = {
  "plaza":{
    "main":"plaza.jpg",
    "mask":"plaza_mask.png"
  },
  "portas":{
    "main":"castelo.png",
    "mask":"castelo_mask.png"
  }
}
let currImg = 'portas';

function loadImg(key){
  if(currImg!=key){
    currImg = key;
    let mainImg = backdropImgs[key]['main']
    let maskImg = backdropImgs[key]['mask']
    $("#img-mask").css("background-image","url('"+maskImg+"')")
    $("#backdrop").css("background-image","url('"+mainImg+"')")
    globalHistory.redo_list=[]
    globalHistory.undo_list=[]
    canvasList.forEach(canvas=>{
      canvas.getContext("2d").clearRect(0,0,canvas.width,canvas.height);
    })
  }
}

$(".img-list .bg-img").click(function(){
  let imgKey = $(this).attr('name');
  console.log("change to:"+imgKey);
  loadImg(imgKey);
  $(".img-list .bg-img").removeClass('active');
  $(this).addClass('active');
})
$(".img-list").hide();

let canvasList=[];

window.onload = function () {

  $("#start-cover button").click(()=>{
    openFullscreen();
    $("#start-cover").hide();
    /*window.addEventListener('resize', function(event) {
    ...
}, true);*/
    function start(){
      loadCanvas('paint-canvas')
      loadCanvas('paint-global-canvas');


      $(".brushes button").click(function(){
      $(".brushes button").removeClass("active");
        $(this).addClass("active");
      })
        
      $(".castle-selector").click(()=>{
        //if no paint in castle
        let castleCanvas = document.getElementById('paint-canvas');
        let l = globalHistory.undo_list;
        for(let i=0;i<l.length;i++){
          if(l[i][0]==castleCanvas){
            console.log('castle has been painted, abort')
            return;
          }
        }
        $("main").addClass('castle-pending')
      })
      $(".brushes button").click(function(){
        if(!$(this).hasClass('castle-selector'))
          $("main").removeClass('castle-pending');
      })
    }
    //window.addEventListener('resize', ()=>{console.log('RESIZE');start()}, true);
    setTimeout(start,1000)
  });
}

var globalHistory = {
  redo_list: [],
  undo_list: [],
  saveState: function(canvas, list, keep_redo) {
    keep_redo = keep_redo || false;
    if(!keep_redo) {
      this.redo_list = [];
    }

    (list || this.undo_list).push([canvas,canvas.toDataURL()]);
    let l = (list || this.undo_list)
    if(l.length>40){
      l.shift();
    }   
  },
  undo: function(canvas, ctx) {
    if(this.undo_list.length){
      let canvas = this.undo_list[this.undo_list.length-1][0]
      let ctx = canvas.getContext("2d");
      this.restoreState(canvas, ctx, this.undo_list, this.redo_list);
    }
  },
  redo: function(canvas, ctx) {
    if(this.redo_list.length){
      let canvas = this.redo_list[this.redo_list.length-1][0]
      let ctx = canvas.getContext("2d");
      this.restoreState(canvas, ctx, this.redo_list, this.undo_list);
    }
  },
  restoreState: function(canvas, ctx,  pop, push) {
    if(pop.length) {
      this.saveState(canvas, push, true);
      var restore_state_pair = pop.pop();
      var restore_state = restore_state_pair[1]
      var canvas = restore_state_pair[0];
      var ctx = canvas.getContext("2d");
      /*var img = new Element('img', {'src':restore_state});*/
      var img = new Image(cW,cH);
      img.src = restore_state;
      img.onload = function() {
        ctx.clearRect(0, 0, cW, cH);
        ctx.drawImage(img, 0, 0, cW, cH, 0, 0, cW, cH);  
      }
    } else{
      //ctx.clearRect(0,0,cW,cH);
    }
  }
}

var globalState = {
  "color":"#000000",
  "lastCanvas":undefined,
  "history":"",
  "canvas":{
    /*"id":canvas*/
    
  }
}
  


function loadCanvas(id){ 
  // Definitions
  var canvas = document.getElementById(id);
  canvasList.push(canvas);
  console.log("LOADING CANVAS: "+id+"...")
  globalState.canvas[id]=canvas;
  var context = canvas.getContext("2d");
  var ctx = context;
  var boundings = canvas.getBoundingClientRect();
  
  //enable img change
  setTimeout(()=>{
    $(".img-list").show();
  },50)
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  window.cW = canvas.width;
  window.cH = canvas.height;
  

  var gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  let rainbowColors = ["red","orange","yellow","green","blue","indigo","violet"]
  //let step = 0.05;
  let step = 40/canvas.width;
  for(let i=0;i<=(1/step);i++){
    let currStep = Math.min(1,i*step)
    let currColor = rainbowColors[i%(rainbowColors.length)]
    gradient.addColorStop(currStep+"", currColor);
  }  
  
  // Specifications
  var mouseX = 0;
  var mouseY = 0;
  context.strokeStyle = 'black'; // initial brush color
  context.lineWidth = 6; // initial brush width
  var isDrawing = false;


  // Handle Colors
  $(".colors button").click(function(){
    let color = $(this).attr('value');
    let id = $(this).attr('id')
    if(id=="rainbow-brush")
      context.strokeStyle=gradient;
    else
      context.strokeStyle = color || 'black';

    $(".colors button").removeClass('active')
    $(this).addClass('active')
    
    if($(".img-brush.active").length){
      //img brush active, switch to normal brush
      $(".brushes button:nth-child(2)").click();
    }
  })
  // Handle Brushes
  //var brushes = document.getElementsByClassName('brushes')[0];
  $(".brushes button").click(function(){
    if($(this).attr('value')=='-1'){
      console.log('dino');
      context.lineWidth=0;
    }
    context.lineWidth = $(this).attr('value') || 1;
  })
  /*brushes.addEventListener('click', function(event) {
    context.lineWidth = event.target.value || 1;
  });*/

  var lineStart = false;
  // Mouse Down Event
  
  function mouseDown(event) {
    setMouseCoordinates(event);
    if($(".brushes button.img-brush.active").length){
      //paint dino
      let imgname=$(".brushes button.img-brush.active").attr('imgname')
      let img=imgname;
      paintImg(img,mouseX,mouseY);
    } else {
    setMouseCoordinates(event);
    isDrawing = true;

    // Start Drawing
    lineStart = true;
    context.beginPath();
    context.moveTo(mouseX, mouseY);
    }
  };
  canvas.addEventListener('mousedown', mouseDown);
  canvas.addEventListener('touchstart', mouseDown);

  // Mouse Move Event

  function mouseMove(event) {
    setMouseCoordinates(event);
    if(event.clientX){
      
    }
    //alert('move,'+mouseX+":"+mouseY)
    if(isDrawing){
      //saveState();
      if(lineStart){
        console.log('started line');
        $("main").removeClass('castle-pending')
        globalHistory.saveState(canvas)
      }
      //context.strokeStyle=gradient;//colors[selecI];
      context.lineTo(mouseX, mouseY);
      context.stroke();
      lineStart = false;
    }
  }
  canvas.addEventListener('mousemove', mouseMove);
  canvas.addEventListener('touchmove', mouseMove);

  // Mouse Up Event
  function mouseUp(event) {
    setMouseCoordinates(event);
    isDrawing = false;
    lineStart = false;
  }
  canvas.addEventListener('mouseup', mouseUp);
  canvas.addEventListener('touchend', mouseUp);
  canvas.addEventListener('touchcancel', mouseUp);

  // Handle Mouse Coordinates
  function setMouseCoordinates(event) {
    mouseX = event.clientX - boundings.left;
    mouseY = event.clientY - boundings.top;
    if(event.touches && event.touches.length){
      let touch = event.touches[0];
       mouseX = touch.clientX - boundings.left;
       mouseY = touch.clientY - boundings.top;
    }
  }

  // Handle Clear Button
  var clearButton = document.getElementById('clear');

  clearButton.addEventListener('click', function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    globalHistory.redo_list=[]
    globalHistory.undo_list=[]
  });

  // Handle Save Button
  /*var saveButton = document.getElementById('save');

  saveButton.addEventListener('click', function() {
    var imageName = prompt('Please enter image name');
    var canvasDataURL = canvas.toDataURL();
    var a = document.createElement('a');
    a.href = canvasDataURL;
    a.download = imageName || 'drawing';
    a.click();
  });*/
   
   function undo(){
    globalHistory.undo(canvas,context)
   }
  function redo(){
    globalHistory.redo(canvas,context)
  }
  
  window.undo=undo;
  window.redo=redo;
  
  
  
  
  /*CURSOR*/
  
  $("body").on('mousemove',function(ev){
    let x = ev.clientX;
    let y = ev.clientY;
    let padd = Math.floor(context.lineWidth/2);
    //TODO:mudar para selec brush
    $("#cursor").css("padding",padd+"px")
    $("#cursor").css("background",context.strokeStyle)
    $("#cursor").css("left",(x-padd)+"px")
    $("#cursor").css("top",(y-padd)+"px")
  })
  
  let imgSize=70;
  function paintImg(imgsrc,x,y){
    x-=Math.floor(imgSize/2);
    y-=Math.floor(imgSize/2);
    globalHistory.saveState(canvas);
    //let imgW=100;let imgY=100;
    var img = new Image(5,5);
    img.src = imgsrc;
    img.src=eval(imgsrc);
    img.onload = function() {
      context.drawImage(img,x,y,imgSize,imgSize);  
    }
    console.log(canvas)
  }
  window.paintImg=paintImg;
};








/*64's*/

var dinobase64 = " data:image/png;base64,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"

var star64="data:image/png;base64,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"

