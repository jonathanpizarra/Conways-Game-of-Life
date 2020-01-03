let canv, c, width, height, w, h, s, dpr;
let setInt, int, raf, button, reset, coords, state, patts, patterns, hammer;
let cells = [], copy = [], cell;
let pop = 0, gens = 0;

// simple
let p1 = [ [96,49], [97,49], [95,50], [96,50], [96,51] ];
// spaceship
let p2 = [ [53,50], [56,50], [52,51], [52,52], [56,52], [44,53], [45,53], [52,53], [53,53], [54,53], [55,53], [43,54], [44,54], [45,54], [46,54], [42,55], [43,55], [45,55], [46,55], [43,56], [44,56], [50,56], [51,56], [53,56], [54,56], [55,56], [49,57], [55,57], [56,57], [48,58], [49,58], [57,58], [49,59], [55,59], [56,59], [43,60], [44,60], [50,60], [51,60], [53,60], [54,60], [55,60], [42,61], [43,61], [45,61], [46,61], [43,62], [44,62], [45,62], [46,62], [44,63], [45,63], [52,63], [53,63], [54,63], [55,63], [52,64], [56,64], [52,65], [53,66], [56,66] ];
// spaceship 2
let p3 =  [ [44,37], [43,38], [45,38], [42,39], [43,39], [45,40], [41,41], [45,41], [38,42], [41,42], [37,43], [39,43], [42,43], [43,43], [44,43], [45,43], [36,44], [39,44], [37,45], [39,45], [42,45], [43,45], [44,45], [45,45], [38,46], [41,46], [41,47], [45,47], [45,48], [42,49], [43,49], [43,50], [45,50], [44,51] ];

let p4 =  [ [54,50], [52,51], [52,52], [44,53], [45,53], [52,53], [53,53], [54,53], [55,53], [43,54], [44,54], [45,54], [46,54], [42,55], [43,55], [45,55], [46,55], [43,56], [44,56], [50,56], [51,56], [53,56], [54,56], [55,56], [49,57], [55,57], [56,57], [48,58], [49,58], [57,58], [49,59], [55,59], [56,59], [43,60], [44,60], [50,60], [51,60], [53,60], [54,60], [55,60], [42,61], [43,61], [45,61], [46,61], [43,62], [44,62], [45,62], [46,62], [44,63], [45,63], [52,63], [53,63], [54,63], [55,63], [52,64], [52,65], [54,66] ];

let p5 =  [ [27,28], [30,28], [33,28], [36,28], [39,28], [42,28], [45,28], [48,28], [51,28], [54,28], [57,28], [60,28], [63,28], [66,28], [69,28], [72,28], [75,28], [78,28], [81,28], [84,28], [27,29], [28,29], [29,29], [30,29], [31,29], [32,29], [33,29], [34,29], [35,29], [36,29], [37,29], [38,29], [39,29], [40,29], [41,29], [42,29], [43,29], [44,29], [45,29], [46,29], [47,29], [48,29], [49,29], [50,29], [51,29], [52,29], [53,29], [54,29], [55,29], [56,29], [57,29], [58,29], [59,29], [60,29], [61,29], [62,29], [63,29], [64,29], [65,29], [66,29], [67,29], [68,29], [69,29], [70,29], [71,29], [72,29], [73,29], [74,29], [75,29], [76,29], [77,29], [78,29], [79,29], [80,29], [81,29], [82,29], [83,29], [84,29], [25,31], [26,31], [27,31], [28,31], [29,31], [30,31], [31,31], [32,31], [33,31], [34,31], [35,31], [36,31], [37,31], [38,31], [39,31], [40,31], [41,31], [42,31], [43,31], [44,31], [45,31], [46,31], [47,31], [48,31], [49,31], [50,31], [51,31], [52,31], [53,31], [54,31], [55,31], [56,31], [57,31], [58,31], [59,31], [60,31], [61,31], [62,31], [63,31], [64,31], [65,31], [66,31], [67,31], [68,31], [69,31], [70,31], [71,31], [72,31], [73,31], [74,31], [75,31], [76,31], [77,31], [78,31], [79,31], [80,31], [81,31], [82,31], [83,31], [84,31], [85,31], [86,31], [24,32], [58,32], [66,32], [77,32], [87,32], [24,33], [25,33], [26,33], [27,33], [29,33], [30,33], [32,33], [35,33], [36,33], [37,33], [38,33], [39,33], [42,33], [43,33], [44,33], [45,33], [46,33], [47,33], [48,33], [49,33], [50,33], [51,33], [52,33], [53,33], [54,33], [55,33], [56,33], [61,33], [62,33], [63,33], [64,33], [65,33], [70,33], [71,33], [72,33], [73,33], [74,33], [75,33], [76,33], [80,33], [81,33], [82,33], [83,33], [84,33], [85,33], [86,33], [87,33], [28,34], [32,34], [33,34], [39,34], [40,34], [48,34], [56,34], [65,34], [78,34], [24,35], [25,35], [26,35], [27,35], [28,35], [29,35], [32,35], [35,35], [36,35], [37,35], [38,35], [39,35], [42,35], [43,35], [44,35], [45,35], [46,35], [51,35], [52,35], [53,35], [54,35], [55,35], [56,35], [61,35], [62,35], [63,35], [64,35], [65,35], [70,35], [71,35], [72,35], [73,35], [74,35], [75,35], [76,35], [80,35], [81,35], [82,35], [83,35], [84,35], [85,35], [86,35], [87,35], [24,36], [47,36], [57,36], [66,36], [77,36], [87,36], [25,37], [26,37], [27,37], [28,37], [29,37], [30,37], [31,37], [32,37], [33,37], [34,37], [35,37], [36,37], [37,37], [38,37], [39,37], [40,37], [41,37], [42,37], [43,37], [44,37], [45,37], [46,37], [47,37], [48,37], [49,37], [50,37], [51,37], [52,37], [53,37], [54,37], [55,37], [56,37], [57,37], [58,37], [59,37], [60,37], [61,37], [62,37], [63,37], [64,37], [65,37], [66,37], [67,37], [68,37], [69,37], [70,37], [71,37], [72,37], [73,37], [74,37], [75,37], [76,37], [77,37], [78,37], [79,37], [80,37], [81,37], [82,37], [83,37], [84,37], [85,37], [86,37], [27,39], [28,39], [29,39], [30,39], [31,39], [32,39], [33,39], [34,39], [35,39], [36,39], [37,39], [38,39], [39,39], [40,39], [41,39], [42,39], [43,39], [44,39], [45,39], [46,39], [47,39], [48,39], [49,39], [50,39], [51,39], [52,39], [53,39], [54,39], [55,39], [56,39], [57,39], [58,39], [59,39], [60,39], [61,39], [62,39], [63,39], [64,39], [65,39], [66,39], [67,39], [68,39], [69,39], [70,39], [71,39], [72,39], [73,39], [74,39], [75,39], [76,39], [77,39], [78,39], [79,39], [80,39], [81,39], [82,39], [83,39], [84,39], [27,40], [30,40], [33,40], [36,40], [39,40], [42,40], [45,40], [48,40], [51,40], [54,40], [57,40], [60,40], [63,40], [66,40], [69,40], [72,40], [75,40], [78,40], [81,40], [84,40] ];

let p6 = ()=>{
  let p = [];
  let l = w > h? h/s: w/s;

  for(let y=0; y<h/s; y++){
    for(let x=0; x<w/s; x++){
      if(x == y || (x+y == l-1) || (x-l == y) || (x+y == 2 * l -2) ){
        p.push([x,y]);
      }
    }
  }
  return p;
}


let p7 = [ [61,10], [60,11], [61,11], [59,12], [61,12], [58,13], [63,14], [64,14], [58,15], [63,15], [71,15], [72,15], [73,15], [75,15], [58,16], [64,16], [76,16], [58,17], [65,17], [77,17], [64,18], [66,18], [76,18], [77,18], [78,18], [64,19], [66,19], [65,20], [73,20], [74,20], [66,21], [69,21], [70,21], [72,21], [74,21], [61,22], [62,22], [64,22], [65,22], [66,22], [68,22], [71,22], [60,23], [63,23], [65,23], [66,23], [67,23], [69,23], [70,23], [57,24], [59,24], [61,24], [62,24], [65,24], [57,25], [58,25], [66,25], [65,26], [67,26], [53,27], [54,27], [55,27], [65,27], [67,27], [54,28], [66,28], [73,28], [55,29], [67,29], [73,29], [56,30], [58,30], [59,30], [60,30], [68,30], [73,30], [67,31], [68,31], [73,32], [70,33], [72,33], [70,34], [71,34], [70,35] ];

//p7 =  [ [60,49], [61,50], [60,51], [61,51], [59,52], [61,52], [58,53], [63,54], [64,54], [58,55], [63,55], [71,55], [72,55], [73,55], [75,55], [58,56], [64,56], [76,56], [58,57], [65,57], [77,57], [79,57], [64,58], [66,58], [76,58], [77,58], [78,58], [64,59], [66,59], [65,60], [73,60], [74,60], [66,61], [69,61], [70,61], [72,61], [74,61], [61,62], [62,62], [64,62], [65,62], [66,62], [68,62], [71,62], [60,63], [63,63], [65,63], [66,63], [67,63], [69,63], [70,63], [57,64], [59,64], [61,64], [62,64], [65,64], [57,65], [58,65], [66,65], [65,66], [67,66], [53,67], [54,67], [55,67], [65,67], [67,67], [52,68], [54,68], [66,68], [73,68], [55,69], [67,69], [73,69], [56,70], [58,70], [59,70], [60,70], [68,70], [73,70], [67,71], [68,71], [73,72], [70,73], [72,73], [70,74], [71,74], [70,75], [71,76] ];

//p7 =   [ [310,149], [311,150], [310,151], [311,151], [309,152], [311,152], [308,153], [313,154], [314,154], [308,155], [313,155], [321,155], [322,155], [323,155], [325,155], [308,156], [314,156], [326,156], [308,157], [315,157], [327,157], [329,157], [314,158], [316,158], [326,158], [327,158], [328,158], [314,159], [316,159], [315,160], [323,160], [324,160], [316,161], [319,161], [320,161], [322,161], [324,161], [311,162], [312,162], [314,162], [315,162], [316,162], [318,162], [321,162], [310,163], [313,163], [315,163], [316,163], [317,163], [319,163], [320,163], [307,164], [309,164], [311,164], [312,164], [315,164], [307,165], [308,165], [316,165], [315,166], [317,166], [303,167], [304,167], [305,167], [315,167], [317,167], [302,168], [304,168], [316,168], [323,168], [305,169], [317,169], [323,169], [306,170], [308,170], [309,170], [310,170], [318,170], [323,170], [317,171], [318,171], [323,172], [320,173], [322,173], [320,174], [321,174], [320,175], [321,176] ]

p7 = [ [210,9], [211,10], [210,11], [211,11], [209,12], [211,12], [208,13], [213,14], [214,14], [208,15], [213,15], [221,15], [222,15], [223,15], [225,15], [208,16], [214,16], [226,16], [208,17], [215,17], [227,17], [229,17], [214,18], [216,18], [226,18], [227,18], [228,18], [214,19], [216,19], [215,20], [223,20], [224,20], [216,21], [219,21], [220,21], [222,21], [224,21], [211,22], [212,22], [214,22], [215,22], [216,22], [218,22], [221,22], [210,23], [213,23], [215,23], [216,23], [217,23], [219,23], [220,23], [207,24], [209,24], [211,24], [212,24], [215,24], [207,25], [208,25], [216,25], [215,26], [217,26], [203,27], [204,27], [205,27], [215,27], [217,27], [202,28], [204,28], [216,28], [223,28], [205,29], [217,29], [223,29], [206,30], [208,30], [209,30], [210,30], [218,30], [223,30], [217,31], [218,31], [223,32], [220,33], [222,33], [220,34], [221,34], [220,35], [221,36] ];

p7 = [ [210,109], [211,110], [210,111], [211,111], [209,112], [211,112], [208,113], [213,114], [214,114], [208,115], [213,115], [221,115], [222,115], [223,115], [225,115], [208,116], [214,116], [226,116], [208,117], [215,117], [227,117], [229,117], [214,118], [216,118], [226,118], [227,118], [228,118], [214,119], [216,119], [215,120], [223,120], [224,120], [216,121], [219,121], [220,121], [222,121], [224,121], [211,122], [212,122], [214,122], [215,122], [216,122], [218,122], [221,122], [210,123], [213,123], [215,123], [216,123], [217,123], [219,123], [220,123], [207,124], [209,124], [211,124], [212,124], [215,124], [207,125], [208,125], [216,125], [215,126], [217,126], [203,127], [204,127], [205,127], [215,127], [217,127], [202,128], [204,128], [216,128], [223,128], [205,129], [217,129], [223,129], [206,130], [208,130], [209,130], [210,130], [218,130], [223,130], [217,131], [218,131], [223,132], [220,133], [222,133], [220,134], [221,134], [220,135], [221,136] ];

/*THE RULES:
    For a space that is 'populated':
    Each cell with one or no neighbors dies, as if by solitude.
    Each cell with four or more neighbors dies, as if by overpopulation.
    Each cell with two or three neighbors survives.

    For a space that is 'empty' or 'unpopulated'
    Each cell with three neighbors becomes populated.

*/

const drawGrid = ()=>{

  for(let x = 0; x < w/s; x++){
    c.beginPath();
    c.moveTo(x*s, 0);
    c.lineTo(x*s, h);
    c.closePath();
    c.strokeStyle = "gray";
    c.lineWidth = 1;
    c.stroke();
  }

  for(let y = 0; y < h/s; y++){
    c.beginPath();
    c.moveTo(0, y*s);
    c.lineTo(w, y*s);
    c.closePath();
    c.strokeStyle = "gray";
    c.lineWidth = 1;
    c.stroke();
  }
}

const clearRect = ()=>{
  c.beginPath();
  c.rect(0,0,w,h);
  c.fillStyle = "black";
  c.fill();
  c.closePath();
}
const drawRect = (x, y, color)=>{
  c.beginPath();
  c.rect(x*s, y*s, s, s);
  c.fillStyle = color;
  c.fill();
  c.closePath();
}

const drawCells = () =>{
  for(let y=0; y<h/s; y++){
    for(let x=0; x<w/s; x++){
      if(cells[y][x] == 1){
        drawRect(x, y, "cyan");
      }
    }
  }
}

const resetGrid = ()=>{
  for(let y=0; y<h/s; y++){
    for(let x=0; x<w/s; x++){
      //if(cells[y][x] == 1){
        cells[y][x] = 0;
      //}
    }
  }
  pop = 0;
  gens = 0;
}

const getCoords = ()=>{
  console.log("Warning : getCoords is altered to adjust pattern positions")
  let c = "[";
  let comma = false;
  for(let y=0; y<h/s; y++){
    for(let x=0; x<w/s; x++){
      if(cells[y][x] == 1){
        if(comma)c += ","
        c += ` [${x},${y-100}]`;
        if(!comma){
          comma = true;
        }
      }
    }
  }
  c += " ]";
  console.log("Living cells : ",c);
}

const plotPattern = (p)=>{
  for(let x=0; x<p.length; x++){
    cells[p[x][1]][p[x][0]] = 1;
    pop++;
  }
}

const neighborCount = (x,y)=>{
  //console.log("nC x=" + x + ", y=" + y);
  let c = 0;
  let pos = [[-1,-1], [0,-1], [1,-1], [-1,0], [1,0], [-1,1], [0,1], [1,1]];
  let cx, cy;
  for(let z=0; z<pos.length; z++){
    cx = x+pos[z][0];
    cy = y+pos[z][1];
  //  console.log("bcy=" + cy + ", cx=" + cx + ", w=" + w + ", h=" + h);
    if(cx < 0) cx = w/s-1;
    else if(cx == w/s) cx = 0;
    if(cy < 0) cy = h/s-1;
    else if(cy == h/s) cy = 0;
//console.log("cy=" + cy + ", cx=" + cx);
    let cell = cells[cy][cx];
    if(cell == 1){
      c++;
    }
  }

  return c;
  // -1 -1, 0 -1, 1 -1,
  // -1 0,        1  0,
  // -1 1, 0 1,   1 1.
}

const animate = ()=>{
  gens++;
  //setInt = setInterval(()=>{
  pop = 0;
    for(let y=0; y<h/s; y++){
      for(let x=0; x<w/s; x++){
        cell = cells[y][x];
        if( cell == 0){
          if(neighborCount(x,y) == 3){
            copy[y][x] = 1;
            pop++;
          }else{
            copy[y][x] = cell;
          }
        }else if( cell == 1){
          if(neighborCount(x,y) < 2 || neighborCount(x,y) > 3){
            copy[y][x] = 0;
          }else{
            copy[y][x] = cell;
            pop++;
          }
        }
      }
    } // end of forloop

    cells = JSON.parse(JSON.stringify(copy));
    clearRect();
    //drawGrid();
    drawCells();
    document.querySelector("#stats").innerHTML = "Population : " + pop + "<br>Generations : " + gens;
    //console.log("animating...");
    // clearInterval(setInt);
  //}, int);
  raf = requestAnimationFrame(animate);
}

const addEvents = ()=>{
  button.addEventListener("click", ()=>{
    if(state){
      clearInterval(setInt);
      cancelAnimationFrame(raf)
      button.innerHTML = "Run";
      state = false;
    }else{
      animate();
      button.innerHTML = "Pause";
      state = true;
    }
  });

  reset.addEventListener("click", ()=>{
    if(!state){
      let chosen = patts.options[patts.selectedIndex].value;
      chosen = patterns[chosen];
      // console.log(chosen);
      resetGrid();
      clearRect();
      plotPattern(chosen);
      drawCells();
      document.querySelector("#stats").innerHTML = "Population : " + pop + "<br>Generations : " + gens;
    }
  });

  coords.addEventListener("click", ()=>{
    if(!state){
      getCoords();
    }
  });

  patts.addEventListener("change", ()=>{

    if(!state){
      let chosen = patts.options[patts.selectedIndex].value;
      chosen = patterns[chosen];
    //  console.log(chosen);
      resetGrid();
      clearRect();
      plotPattern(chosen);
      drawCells();
      document.querySelector("#stats").innerHTML = "Population : " + pop + "<br>Generations : " + gens;
    }
  });

  canv.addEventListener("click", (e)=>{

    let r = canv.getBoundingClientRect();
    let x = Math.floor(e.clientX - r.left);
    let y = Math.floor(e.clientY - r.top);
    let cx = Math.floor((e.clientX - r.left)/s);
    let cy = Math.floor((e.clientY - r.top)/s);

    //console.log("r.left=" + r.left + "\n r.top=" + r.top + "\n e.cX=" + e.clientX + "\n e.cY=" + e.clientY + "\n x=" + x + "\n y=" + y);
    //console.log("imagedata=" + c.getImageData(x, y, 1,1).data  );
    if( cells[cy][cx] == 0){
      drawRect(cx, cy, "rgb(0, 255, 255)");
      cells[cy][cx] = 1;
      //getCoords();
      pop++;
      document.querySelector("#stats").innerHTML = "Population : " + pop + "<br>Generations : " + 0;
    }else if(cells[cy][cx] == 1){
      drawRect(cx, cy, "rgb(0, 0, 0)");
      cells[cy][cx] = 0;
      //getCoords();
      pop--;
      document.querySelector("#stats").innerHTML = "Population : " + pop + "<br>Generations : " + 0;
    }

  });
/* test code
  canv.addEventListener("mousemove", (e)=>{
    let r = canv.getBoundingClientRect();
    let x = e.clientX - r.left;
    let y = e.clientY - r.top;

    clearRect();
    c.beginPath();
    c.rect(x,y,2,2);
    c.fillStyle = "yellow";
    c.fill();
    c.closePath();

  });
*/
} // end of addevents

const init = ()=>{
  canv = document.querySelector("#canvas");
  c = canv.getContext("2d");
  dpr = 2;//window.devicePixelRatio = 2;
  w = window.innerWidth;
  h = window.innerHeight;
  canv.width = w;
  canv.height = h;
  canv.style.width = w*dpr;
  canv.style.height = h*dpr;
  s = 2;
  int = 1000;
  state = false;
  w -= (w%s);
  h -= (h%s);
  p6 = p6();


  patterns = [[], p1, p2, p3, p4, p5, p6, p7];
  //let z = s;
  //console.log(z);
  //console.log("w%s=" + z + ", h=" + h);

  //console.log("h=" + canv.height);

  button = document.querySelector("#toggle");
  reset = document.querySelector("#reset");
  coords = document.querySelector("#getcoords");
  patts = document.querySelector("#patterns");
  hammer = new Hammer(canv,{});
  hammer.on("pan", (e)=>{
    console.log("e="+e);
  })
  hammer.get('pinch').set({ enable: true });
  addEvents();

  for(let y=0; y < h/s; y++){
    cells[y] = [];
    copy[y] = [];
    for(let x=0; x < w/s; x++){
        cells[y][x] = 0;
        copy[y][x] = 0;
    }
  }

//  plotPattern([]);
  //console.log("s=" + s + ", w/s=" + (w/s) + ", h/s=" + (h/s));

/*
  for(let y=0; y < h/s; y++){
    for(let x=0; x< w/s; x++){
      let rand = Math.floor(Math.random()*6);
      if(rand == 5){
        cells[y][x] = 1;
        pop++;
      }
    }
  }
*/
  //window.devicePixelRatio = dpr;
  //c.scale(dpr, dpr);
  clearRect();
  //drawGrid();
  drawCells();
  //animate();
document.querySelector("#stats").innerHTML = "Population : " + pop + "<br>Generations : " + gens;



}

/*
class Cell{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
}
*/
window.onload = init;
