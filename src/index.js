import World from "./World.js";
import Viz from "./Viz.js";

var start = function(){

  var theWorld = new World(10, 1600, 900);
  var canvas = document.getElementById("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  var viz = new Viz(canvas, theWorld.getElements(), window.innerWidth/1600, window.innerHeight/900, 1600/2, 900/2);
  viz.renderElements();
}

requestAnimationFrame(start);

// export default Vis;
