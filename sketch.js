let buttonMain;
let buttonStyler;
let radio;
let boring = "none";
let cx = 0;
let cy = 0;
let cSize = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  buttonMain = createButton("Surprise Button")
    buttonStyler = createColorPicker("#FFFFFF")
  
  buttonMain.mousePressed(explore);
  
  radio = createRadio();
  radio.option('epic', "Epic Mode\n");
  radio.option('boring', "Boring Mode");
  radio.style('width', '400px');
  radio.style('font-size', "30px")
  radio.style('float', "CENTER")
  textAlign(CENTER);

  styleTime()

  repositionElements();

  
  cx = width/2;
  cy = height/2;
}


function explore(){
    if(boring === "youtube"){
       window.open("https://www.youtube.com/channel/UCxQ7OUHXtPupWLl-vfEeUsQ") 
    }else if(boring === "cc"){
        window.open("https://creativecoding1133c.wordpress.com/")
    }else{
        window.alert("Please select a mode")
    }
    
}

function draw() {
  background(100);
  if(radio.value() === "boring"){
      boring = "cc";
  }else if(radio.value() === "epic"){
      boring = "youtube";
  }else{
      boring = "none"
  }
 print(radio.value() + " and " + boring)
  styleTime()

}

function repositionElements() {
  
  buttonMain.position(windowWidth/2 - buttonMain.width/2, windowHeight/2 - buttonMain.height/2);
     buttonStyler.position(windowWidth/2 - buttonStyler.width/2, windowHeight/2 - buttonStyler.height/2 + 200)
    radio.position(windowWidth/2 - radio.width/2, windowHeight/2 - radio.height/2 - 200)
}
function styleTime(){
     

    buttonStyler.style("width", "50px")
    buttonStyler.style("height", "50px")
    let dumb = buttonStyler.value().toString()
    let currentR = dumb.substring(1, 3)
    let currentG = dumb.substring(3, 5)
    let currentB = dumb.substring(5)
    let r = int(currentR, 16)
    let g = int(currentG, 16)
    let b = int(currentB, 16)
    let altR = 255 - r
    let altG = 255 - g
    let altB = 255 - b
    let newColor =  "#" + componentToHex(altR) + componentToHex(altG) + componentToHex(altB)
    let temp = buttonStyler.color()
    buttonMain.style("width", "200px")
    buttonMain.style("height", "200px")
    buttonMain.style("background", temp)
    buttonMain.style("font-size", "30px")
    buttonMain.style("font-family", "Century Gothic")
    buttonMain.style("color", newColor)
    buttonMain.style("border", "6px solid")
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  repositionElements();
}
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}