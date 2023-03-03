(function () {
   'use strict';

   const container = document.querySelector('#container');
   const hotSpots = document.querySelectorAll('#container div');
   const theImg = document.querySelector('div img');

   //zoom into the desserts
   hotSpots.forEach(function(eachSpot) {
       //call the zoomPhoto fxn when mouse hits hotspot area
       eachSpot.addEventListener('mouseover', zoomPhoto);
       
       //calls to reset into main pic
       eachSpot.addEventListener('mouseout',
        function(){
           theImg.className = 'start';
       });
   })

   /* array of images to use for innerHTML */
   const myImages = ["suman.svg","buko.svg","puto.svg","taho.svg","turon.svg"];

   function zoomPhoto(event ) {
       const thisSpot = event.target.id;
       switch (thisSpot) {
        //each case for dessert zooms into respective area
        // each section has showing overlay, header, description and image
           case 'suman': theImg.className = 'suman'; 
            document.getElementById('overlay').className="showing";
            document.querySelector('h2').innerHTML = "Suman";
            document.querySelector('div p').innerHTML = "Suman is a sticky rice dessert. It is prepared by steaming the glutinous rice and coconut milk mixture in a banana leaf. It has a nice mild flavor. It's often eaten as a side dish! I remember making this with my grandma when I was little.";
            document.getElementById('dessert_img').src=`images/${myImages[0]}`;
            break;

           case 'buko': theImg.className = 'buko';
           document.getElementById('overlay').className="showing";
           document.querySelector('h2').innerHTML = "Buko Pandan";
           document.querySelector('div p').innerHTML = "Buko Pandan is a coconut based dessert. There are many different mix-ins of jello, coconut shreds and nata de coco. It's often colored green with padan leaf flavoring. I love this dessert so much I always make it for christmas celebrations.";
           document.getElementById('dessert_img').src=`images/${myImages[1]}`;
           break;

           case 'puto': theImg.className = 'puto';
           document.getElementById('overlay').className="showing";
           document.querySelector('h2').innerHTML = "Puto";
           document.querySelector('div p').innerHTML = "Puto is a steamed rice cake dessert. It is made out of rice flour, coconut milk and sugar. It's steamed for the texture to be nice and chewy. My lola would make the best ones for special occasions.";
           document.getElementById('dessert_img').src=`images/${myImages[2]}`;
           break;

           case 'taho': theImg.className = 'taho';
           document.getElementById('overlay').className="showing";
           document.querySelector('h2').innerHTML = "Taho";
           document.querySelector('div p').innerHTML = "Taho is a silken tofu dessert. It is often served hot with a thick sugar syrup and boba balls. I enjoy eating it on a cold winter day to warm up! It always makes me feel nostalgic of my hometown.";
           document.getElementById('dessert_img').src=`images/${myImages[3]}`;
           break;

           case 'turon': theImg.className = 'turon';
           document.getElementById('overlay').className="showing";
           document.querySelector('h2').innerHTML = "Turon";
           document.querySelector('div p').innerHTML = "Turon is a crunchy dessert that is a banana with jack fruit wrapped in a lumpia wrapper and fried. It is coated in a sweet sugar syrup for the glossy look. I always bring this for my friends to try out because of the sweet and flaky texture!";
           document.getElementById('dessert_img').src=`images/${myImages[4]}`;
           break;

           //created to make the overlay disappear when mouse in top right
           case 'corner': theImg.className = 'corner'; 
           document.getElementById('overlay').className="hidden";
           break; 
       }
   }
})();