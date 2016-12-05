class World{
  constructor(howMany, width, height, network){
    this.elements = [];
    this.network = network;
    this.width = width;
    this.height = height;
    for(let i = 0; i<howMany; i++){
      this.elements.push({x:Math.random()*width-width/2,y:Math.random()*height-height/2});
    }
  }

  run(){
    let array = [];
    let movements = [];
    for(let i = 0; i<this.elements.length; i++){
      let localElement = this.elements[i];
      let localElements = this.elements.clone();
      localElements.splice(i, 1);
      localElements.sort(function(a, b){
        let ax = a.x - localElement.x;
        let ay = a.y - localElement.y;
        let bx = b.x - localElement.x;
        let by = b.y - localElement.y;
        return ax*ax+ay*ay-bx*bx-by*by;
      });
      for(let k = 0; k<localElements.length; k++){
        array[k*2+2] = localElements[k].x/this.width/2;
        array[k*2+3] = localElements[k].y/this.height/2;
      }
      array[0] = localElement.x/this.width/2;
      array[1] = localElement.y/this.height/2;
      movements[i] = this.network.activate(array);
    }
    for(let i = 0; i<this.elements.length; i++){
      this.elements[i].x += this.movements[i][0];
      this.elements[i].y += this.movements[i][1];
    }
  }

  getElements(){
    return this.elements;
  }
}

export default World;
