let b1 = document.querySelector('#first-top-button');
let b2 = document.querySelector('#first-next-project-button');

function parallaxIt(e, target, movement = 1){
  let boundingRect = document.querySelector(target).getBoundingClientRect();
  let relX = e.pageX - boundingRect.left;
  let relY = e.pageY - boundingRect.top;
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  gsap.to(target, {
    x: (relX - boundingRect.width/2) * movement,
    y: (relY - boundingRect.height/2 - scrollTop) * movement,
    ease: "power1",
    duration: 0.6
  });
}

function callParallax(e,target){
  parallaxIt(e, target);
}


b1.addEventListener('mousemove', function(e){
  callParallax(e,'#first-top-button');
});

b1.addEventListener('mouseleave', function(e){
  gsap.to('#first-top-button', {
    scale:1,
    x: 0,
    y: 0,
    ease: "power3",
    duration: 0.6
  });
});


  
b2.addEventListener('mousemove', function(e){
    callParallax(e,'#first-next-project-button');
});
  
  b2.addEventListener('mouseleave', function(e){
    gsap.to('#first-next-project-button', {
      scale:1,
      x: 0,
      y: 0,
      ease: "power3",
      duration: 0.6
    });
  });

let mousePos       = { x: 0, y: 0 }
let cursorPos      = { x: 0, y: 0 }
let $cursor        = document.querySelector('.bubble');
window.addEventListener("mousemove",mouseMove);
setInterval(followMouse, 20)
function mouseMove(e) {
    mousePos.x = e.pageX
    mousePos.y = e.pageY - window.scrollY
  }
  
  function followMouse() {
    let distX = mousePos.x - cursorPos.x
    let distY = mousePos.y - cursorPos.y
  
    cursorPos.x += distX / 5
    cursorPos.y += distY / 5
    $cursor.style.left = cursorPos.x + 'px'
    $cursor.style.top = cursorPos.y + 'px'
  }