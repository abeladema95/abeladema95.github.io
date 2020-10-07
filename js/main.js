document.getElementById("js--header").style.opacity = 0;
document.getElementById("js--picture--grid").style.opacity = 0;

window.onscroll = function(event){
  if(window.scrollY >= 900){
    document.getElementById("js--header").style.opacity = 1;
  }
  if(window.scrollY >= 1300){
    document.getElementById("js--picture--grid").classList.add("fromLeft");
  }
}
