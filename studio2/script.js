(function () {
   'use strict';

   const container = document.querySelector('#container');
   const hotSpots = document.querySelectorAll('#container div');
   const theImg = document.querySelector('div img');

   hotSpots.forEach(function(eachSpot) {
       //call the zoomPhoto fxn when mouse hits hotspot area
       eachSpot.addEventListener('mouseover', zoomPhoto);
       
       //calls to reset into main pic
       eachSpot.addEventListener('mouseout',
        function(){
           theImg.className = 'start';
       });
   })

   function zoomPhoto(event) {
       const thisSpot = event.target.id;
       switch (thisSpot) {
        //each case for dessert zooms into respective area
           case 'suman': theImg.className = 'suman'; break;
           case 'buko': theImg.className = 'buko'; break;
           case 'taho': theImg.className = 'taho'; break;
           case 'puto': theImg.className = 'puto'; break;
           case 'turon': theImg.className = 'turon'; break;
       }
   }


    
})();