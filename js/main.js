
const elLis = document.querySelectorAll('#gnb > ul > li')
const elBar = document.querySelector('.bar')



elLis.forEach(function(menu){
  menu.onmouseover = function(){
    elBar.style = `width:${this.offsetWidth}px;
                   left:${this.offsetLeft}px;`              
  }
  menu.mouseout = function(){
    elBar.style = `width:0px;
                   left:${this.offsetLeft}px;
                   transform:yranlateX(${this.offsetWidth / 2}px)
                   ` 
  }
})