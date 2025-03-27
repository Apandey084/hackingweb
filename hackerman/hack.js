let a = document.getElementById("init");
let b = document.getElementById("name");
let c = document.getElementById("found");
let d = document.getElementById("connect");

let inp = prompt("Enter your name guys !!").toUpperCase();
console.log(inp)


setTimeout(()=>{
    a.innerHTML=""+ ".......Initializing Hack Programe......";
},2000)


setTimeout(()=>{
    b.innerHTML=""+ "....... Hacking "+inp+ " Username......";
},4000)


setTimeout(()=>{
    c.innerHTML=""+ "......Username Found......@" +inp+"23";
},6000)

setTimeout(()=>{
    d.innerHTML=""+ "......Connecting to Facebook ......";
},8000)