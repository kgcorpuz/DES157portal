(  function() {

    "use strict";
    console.log("JS is running");
    const form = document.querySelector('#myForm');
    const madlib1 = document.getElementById ('madlib1');
    const madlib2 = document.getElementById ('madlib2');
    const madlib3 = document.getElementById ('madlib3');
    const madlib4 = document.getElementById ('madlib4');
    const madlib5 = document.getElementById ('madlib5');
    const madlib6= document.getElementById ('madlib6');
   

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const adj1 = document.querySelector('#adj1').value;
        const adj2 = document.querySelector('#adj2').value;
        const noun1 = document.querySelector('#noun1').value;
        const verb1 = document.querySelector('#verb1').value;
        const noun2 = document.querySelector('#noun2').value;

        const text1 = `Clarence the bear, the owner of the shop, traveled all the corners of the world to grab the freshest ingredients for your dessert.`; 
        
        const text2 = `They collected <span style="color:green">${adj1}</span> fruits and plants that had the sweetest taste and earthiest textures.`
        
        const text3 = `In the kitchen while making your dessert, they found a <span style="color:green">${adj2}</span> bowl that was perfect to mix the ingredients.`;

        const text4 =`They added a sprinkle of stardust and <span style="color:green">${noun1}</span> into the batter to make it extra special.`;

        const text5 =`While waiting for dessert to bake, Clarence <span style="color:green">${verb1}</span> ten times to pass the time.`;

        const text6 =`The dessert was made with love just for you and he gave <span style="color:green">${noun2}</span> merch as a token of appreciation for visiting!`;
        
        madlib1.innerHTML = text1;
        madlib2.innerHTML = text2;
        madlib3.innerHTML = text3;
        madlib4.innerHTML = text4;
        madlib5.innerHTML = text5;
        madlib6.innerHTML = text6;

        //for adding the different picture depending on the chosen dessert
        document.querySelector('#overlay').className = 'showing';
        const img = document.querySelector('#dessert_img');
        if (document.querySelector('#dessert').value == "cake"){
           img.setAttribute('src', 'images/cake.png');
        } else if (document.querySelector('#dessert').value == "swiss-roll"){
           img.setAttribute('src', 'images/swiss_roll.png');
        } else {
           img.setAttribute('src', 'images/toast.png');
        }

        overlay.innerHTML += '<button id="reset">Reset!</button>';
        document.getElementById('reset').addEventListener('click', function () {
				location.reload();
			});
    
    });

} )();