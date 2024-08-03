function setup() {
    // configuro a tela
    createCanvas(400, 400);
      background("rgb(108,251,174)");
  
  }
  
  //desenho do retângulo
  
  function draw() 
  {
  
    //rect(0, 0, 100, 150);
    fill("rgb(250,225,224)");
    stroke("red"); // cor da linha
    strokeWeight(5);// largura da linha
    
    if     (mouseIsPressed){
    rect(mouseX,mouseY,10,15);
    }
  }
  