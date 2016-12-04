class Viz{
  constructor(canvas, elementList, xscale, yscale, cx, cy){
    this.canvas = canvas;
    this.elementList = elementList;
    this.ctx = this.canvas.getContext("2d");
    this.scaleX = xscale;
    this.scaleY = yscale;
    this.cx = cx;
    this.cy = cy;
  }

  renderElements(){
    this.ctx.save();
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.scale(this.scaleX, this.scaleY);
    this.ctx.translate(this.cx, this.cy);
    this.ctx.fillStyle = "blue";

    for(let element of this.elementList){
      console.log(element);
      this.ctx.beginPath();
      this.ctx.ellipse(element.x, element.y, 10, 10, 0, Math.PI*2, false);
      this.ctx.fill();

    }
    this.ctx.restore();
  }
}

export default Viz;
