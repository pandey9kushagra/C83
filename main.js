canvas= document.getElementById("myCanvas")
ctx= canvas.getContext("2d")

mouseve="empty"
var lpx, lpy

color="black"
widthline=3

var wh = screen.width
var nw = screen.width - 70
var nh = screen.height - 300

if (wh < 992){

    document.getElementById("myCanvas").width = nw
    document.getElementById("myCanvas").height = nh
    document.body.style.overflow="hidden"

}


canvas.addEventListener("touchstart", mytouchstart)

canvas.addEventListener("touchmove", mytouchmove)

function mytouchstart(e){

    color = document.getElementById("cl").value

    widthline = document.getElementById("wl").value

    lpx = e.touches[0].clientX - canvas.offsetLeft
    lpy = e.touches[0].clientX - canvas.offsetTop

}


function  mytouchmove(e){

    cpx = e.touches[0].clientX - canvas.offsetLeft
    cpy = e.touches[0].clientY - canvas.offsetTop

    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.lineWidth = widthline
    ctx.moveTo(lpx, lpy)
    ctx.lineTo(cpx, cpy)
    ctx.stroke()

    lpx = cpx
    lpy = cpy
}




function erase(){

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}
