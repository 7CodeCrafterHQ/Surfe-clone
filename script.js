

var tl = gsap.timeline()

tl.from("nav #nav-part1 , #nav-part2",{
    y:-100,
    duration : 0.5,
    stagger:0.1,
    opacity:0,
    
})
.from("#page1 h1 , #page1 p , #page1 button , #page1 a",{
    x:300,
    duration:0.5,
    stagger:0.2,
    opacity:0
})

var video =  document.querySelector("#page2-part2 video")
var icon1 = document.querySelector("#page2-part2 #icon1")
var img = document.querySelector("#page2-part2 img")
var overflow2 = document.querySelector("#page2-part2 #overflow2")
var icon2 = document.querySelector("#page2 #icon2")
var flag = 0;
icon1.addEventListener("click",function(){
    img.style.opacity = 0
    video.style.opacity = 1
    overflow2.style.opacity = 0
    icon2.style.opacity = 1
    video.muted = false;
    video.play()

})
icon2.addEventListener("click", function(){
    img.style.opacity = 1
    video.style.opacity = 0
    overflow2.style.opacity = 1
    icon2.style.opacity = 0
  video.muted = true;
  video.pause()
})
