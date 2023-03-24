(  function() {

    "use strict";
    console.log("JS is running");

    const form = document.querySelector('#myForm');
    const random = document.querySelector('#random');
    const madlib1 = document.getElementById ('madlib1');
    const madlib2 = document.getElementById ('madlib2');
    const madlib3 = document.getElementById ('madlib3');
    const madlib4 = document.getElementById ('madlib4');
    const madlib5 = document.getElementById ('madlib5');
    const madlib6= document.getElementById ('madlib6');
    const audio1 = new Audio("sounds/bubble5.mp3");
    const audio2 = new Audio("sounds/button.wav");
    const audio3 = new Audio("sounds/page.wav");


    const libOptions = {
      adj1: ['yummiest','longest','juciest','rareist','smoothest'],
      adj2: ['silly','slay','lovely','twinkly','sparkly'],
      noun1:['magic','love','mango juice','walnuts','oat milk'],
      verb: ['farted','danced','twirled','moon walked','napped'],
      noun2:['crewneck','tote bag','socks','beanie','water bottle'],
      };
  
   /* button for randomizing to auto fill the madlib */
   random.addEventListener('click', function(event){
      event.preventDefault();
      const adj1 = libOptions.adj1[Math.floor(Math.random()*5)];
      const adj2 = libOptions.adj2[Math.floor(Math.random()*5)];
      const noun1 = libOptions.noun1[Math.floor(Math.random()*5)];
      const verb = libOptions.verb[Math.floor(Math.random()*5)];
      const noun2 = libOptions.noun2[Math.floor(Math.random()*5)];

      document.querySelector('#adj1').value = adj1;
      document.querySelector('#adj2').value = adj2;
      document.querySelector('#noun1').value = noun1;
      document.querySelector('#verb1').value = verb;
      document.querySelector('#noun2').value = noun2;

      audio1.play();
   });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const adj1 = document.querySelector('#adj1').value;
        const adj2 = document.querySelector('#adj2').value;
        const noun1 = document.querySelector('#noun1').value;
        const verb1 = document.querySelector('#verb1').value;
        const noun2 = document.querySelector('#noun2').value;

        const text1 = `Clarence the bear, the owner of the shop, traveled all the corners of the world to grab the freshest ingredients for your dessert.`; 
        
        const text2 = `They collected fruits and plants that had the <span style="color:lime">${adj1}</span> taste and earthiest textures.`
        
        const text3 = `In the kitchen while making your dessert, they found a <span style="color:lime">${adj2}</span> bowl that was perfect to mix the ingredients.`;

        const text4 =`They added a sprinkle of stardust and <span style="color:lime">${noun1}</span> into the batter to make it extra special.`;

        const text5 =`While waiting for dessert to bake, Clarence <span style="color:lime">${verb1}</span> ten times to pass the time.`;

        const text6 =`The dessert was made with love just for you and he gave <span style="color:lime">${noun2}</span> merch as a token of appreciation for visiting!`;
        
        madlib1.innerHTML = text1;
        madlib2.innerHTML = text2;
        madlib3.innerHTML = text3;
        madlib4.innerHTML = text4;
        madlib5.innerHTML = text5;
        madlib6.innerHTML = text6;
      
        document.querySelector('#overlay').className = 'showing';


        //for adding the different picture depending on the chosen dessert
        
        const img = document.querySelector('#dessert_img');
        
        if (document.querySelector('#dessert').value == "cake"){
           img.setAttribute('src', 'images/cake.png');
        } else if (document.querySelector('#dessert').value == "swiss-roll"){
           img.setAttribute('src', 'images/swiss_roll.png');
        } else {
           img.setAttribute('src', 'images/toast.png');
        }

        /* to play the button sound */
        audio2.play();

      
      overlay.innerHTML += '<button id="reset">Reset!</button>';
      document.getElementById('reset').addEventListener('click', function() {
      audio3.play();
      location.reload();
      window.scrollTo(100, 0);
     }); 
    });

} )();