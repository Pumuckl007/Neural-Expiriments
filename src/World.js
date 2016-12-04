class World{
  constructor(howMany, width, height){
    this.elements = [];
    for(let i = 0; i<howMany; i++){
      this.elements.push({x:Math.random()*width-width/2,y:Math.random()*height-height/2});
    }
  }

  getElements(){
    return this.elements;
  }
}

export default World;
