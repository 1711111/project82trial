var mouseEvent="empty";
var canvas=document.getElementById("theCanvas");
ctx=canvas.getContext("2d");
color="red";
radius=5;
width_of_line=2;


canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent="mouseDown";
    color=document.getElementById("thecolo").value;
    radius=document.getElementById("radius").value;
    width_of_line=document.getElementById("width_of_line").value;

}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUP";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseLeave";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
var currentX=e.clientX-canvas.offsetLeft;
var currentY=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.arc(currentX,currentY,radius,0,2*Math.PI)
        ctx.stroke();
    }

}