var dinobase64 = " data:image/png;base64,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"

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
  "portas":{
    "main":"https://www.vagamundos.pt/wp-content/uploads/2021/04/1-49.jpg",
    "mask":"https://i.imgur.com/BKf3Qdr.png"
  },
  "plaza":{
    "main":"https://i.imgur.com/lOUR0hs.jpg",
    "mask":"https://fcmsilva.github.io/rne_demo/plaza_mask.png"
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
  openFullscreen();
    setTimeout(function(){

    loadCanvas('paint-canvas')
    loadCanvas('paint-global-canvas');


    $(".brushes button").click(function(){
    $(".brushes button").removeClass("active");
      $(this).addClass("active");
    })
  },2000);
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
    if($(".brushes button.dino-selector.active").length){
      //paint dino
      goDino(mouseX-50,mouseY-50);
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
  
  function goDino(x,y){
    globalHistory.saveState(canvas);
    let imgW=100;let imgY=100;
    var img = new Image(20,20);
    img.src = dinobase64;
    img.onload = function() {
      context.drawImage(img,x,y);  
    }
    console.log(canvas)
  }
  window.goDino=goDino;
};

