"use strict";// interprété en mode strict le code

//Détermine les coordonnées du curseur 
function init() {
    document.onmousemove = mousemove;
  }
  
  //Cette fonction est appelée à chaque déplacement de la souris. Elle récupère les coordonnées X et Y de la souris et déplace l' élément avec l'ID 'flashlight' pour suivre le curseur
  function mousemove(event) {
    var mouse_x = event.clientX;
    var mouse_y = event.clientY;
  
    var fl = document.getElementById('flashlight');
    fl.style.transform = 'translate(calc(' + mouse_x + 'px - 50vw), ' + 'calc(' + mouse_y + 'px - 50vh))';
  }
  
  init();//appelle la fonction init
  
  var image = document.getElementById('cursor');   //définit une variable image avec les élèments de id cursor
  
  //À chaque déplacement de la souris, il met à jour les propriétés left et top de cet élément pour le faire suivre le curseur
  document.addEventListener('mousemove', function (event) {
    
    image.style.left = event.pageX + 'px';
    image.style.top = event.pageY + 'px';
  });
  
  //C'est appelée lorsque le document est prêt. Elle configure un canvas, crée et anime des particules sur le canvas.
  $(document).ready(function () {
    var canvas = $('#canvas')[0];
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    //Sa vérifie si le navigateur prend en charge le contexte 2D,et sa récupère le contexte 2D du canvas.
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      var w = canvas.width;
      var h = canvas.height;
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 1;
      ctx.lineCap = 'round';
  
  // sa initialise un tableau appelé init 
      var init = [];
      var maxParts = 1000; //nombre maximum de particule dans l'animation
      for (var a = 0; a < maxParts; a++) {
        init.push({
          x: Math.random() * w,
          y: Math.random() * h,
          l: Math.random() * 1,
          xs: -4 + Math.random() * 10 + 2,
          ys: Math.random() * 10 + 10
        })
      }
      //tableau appelé particles avec une condition for
      var particles = [];
      for (var b = 0; b < maxParts; b++) {
        particles[b] = init[b];
      }
  
      //Cette fonction draw est responsable du rendu et de l'animation des particules sur le canvas.
      function draw() {
        ctx.clearRect(0, 0, w, h);
        for (var c = 0; c < particles.length; c++) {
          var p = particles[c];
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
          ctx.stroke();
        }
        move(); //sa appelle la fonction move
      }
      
     // La fonction move gére à chaque itération pour mettre à jour les positions des particules, ainsi que la mise en place d'une animation avec setInterval.
        for (var b = 0; b < particles.length; b++) {
          var p = particles[b];
          p.x += p.xs;
          p.y += p.ys;
          if (p.x > w || p.y > h) {
            p.x = Math.random() * w;
            p.y = -20;
          }
        }
      }
  
      setInterval(draw, 30);
  
    }
  );
  
  
  