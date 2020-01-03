/*
  A version using table. Abandoned the idea because it is too slow.
*/
let w, h;
let setInt, int, raf, state;
let table, td, len, stats, row, col, cell, button;
let cells = [];

const getColor = (el)=> window.getComputedStyle(el).getPropertyValue("background-color");


const neighborCount = (x, y)=>{
  let c = 0, cx, cy, prop;
  let pos = [[-1,-1], [0,-1], [1,-1], [-1,0], [1,0], [-1,1], [0,1], [1,1]];

  for(let z=0; z<pos.length; z++){
    cx = x+pos[z][0];
    cy = y+pos[z][1];
    if (cx < 0) cx = w-1;
    else if(cx == w) cx = 0;
    if(cy < 0) cy = h-1;
    else if(cy == h) cy = 0;
    prop = getColor(td[ (w*cy) + cx ]);
    if(prop == "rgb(255, 255, 255)"){
      c++;
    }

  }
  return c;

}

const animate = ()=>{
  let x, y;
  setInt = setInterval(()=>{
    for(let z=0; z<len; z++){
      x = z%w;
      y = Math.floor(z/w);
      cell = getColor(td[z]);
      if( cell == "rgb(0, 0, 0)" ){
        if(neighborCount( x, y ) == 3){
          cells[y][x] = 1;
        }else{
        //  console.log("z=" + z + ", z/w=" + (z/w));
          cells[y][x] = 0;
        //  console.log("zz=" + z);
        }
      }else if(cell == "rgb(255, 255, 255)"){
        if(neighborCount(x, y) < 2 || neighborCount(x, y) > 3){
          cells[y][x] = 0;
        }else{
          cells[y][x] = 1;
        }
      }
    } // end of forloop

    for(let y=0; y<h; y++){
      for(let x=0; x<w; x++){
        if( cells[y][x] ==1 ){
          td[y*w+x].style.backgroundColor = "white";
        }else{
          td[y*w+x].style.backgroundColor = "black";
        }
      }
    }

  }, int);
}

const addEvents = ()=>{
  console.log("len=" + td.length);
  for(let x=0; x<len; x++){
    td[x].addEventListener("click", ()=>{
      let color = getColor(td[x]);
      if(color == "rgb(0, 0, 0)"){
        td[x].style.backgroundColor = "white";
      }else if(color == "rgb(255, 255, 255)"){
        td[x].style.backgroundColor = "black";
      }
      console.log("this=" + x);
    });
  }

    button = document.querySelector("#toggle");
    button.addEventListener("click", ()=>{
      if(state){
        clearInterval(setInt);
        button.innerHTML = "Start";
        state = false;
      }else{
        animate();
        button.innerHTML = "Stop";
        state = true;
      }
    });
}

const init = ()=>{
  w = 100;
  h = 100;
  int = 1;
  state = false;
  table = document.querySelector("#grid");

  for(let y=0; y<h; y++){
    row = "<tr>";
    cells[y] = [];
    for(let x=0; x<w; x++){
      row += "<td></td>";
      cells[y][x] = 0;
    }
    row += "</tr>";
    table.innerHTML += row;
  }
  td = document.querySelectorAll("td");
  len = td.length;
  for(let y=0; y<h; y++){
    for(let x=0; x<w; x++){
      td[(x*w)+x].style.backgroundColor = "white";
      td[(x*w)+(w-x)].style.backgroundColor = "white";
    }
  }
  addEvents();



}

window.onload = init;
