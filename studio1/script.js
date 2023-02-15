(  function() {

    "use strict";
    console.log("JS is running");
    const form = document.querySelector('#myForm');
    const madlib = document.getElementById ('madlib');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const adj1 = document.querySelector('#adj1').value;
        const adj2 = document.querySelector('#adj2').value;
        const noun1 = document.querySelector('#noun1').value;
        const verb1 = document.querySelector('#verb1').value;
        const noun2 = document.querySelector('#noun2').value;

        const myText = `Clarence the bear, the owner of the shop, traveled all the corners of the world to grab the freshest ingredients for your dessert. They collected <span style="color:green">${adj1}</span> fruits and plants that had the sweetest taste and earthiest textures. In the kitchen while making your dessert, they found a <span style="color:green">${adj2}</span> bowl that was perfect to mix the ingredients. They added a sprinkle of stardust and <span style="color:green">${noun1}</span> into the batter to make it extra special. While waiting for dessert to bake, Clarence <span style="color:green">${verb1}</span> ten times to pass the time. The dessert was made with love just for you and he gave <span style="color:green">${noun2}</span> merch as a token of appreciation for visiting!`;
        
        console.log(myText);
        madlib.innerHTML = myText;

        //for adding the different picture depending on the chosen dessert
        document.querySelector('#overlay').className = 'showing';
        const img = document.querySelector('#dessert_img');
        if (document.querySelector('#dessert').value == "cake"){
           img.setAttribute('src', 'images/cake.svg');
        } else if (document.querySelector('#dessert').value == "swiss-roll"){
           img.setAttribute('src', 'images/swiss_roll.svg');
        } else {
           img.setAttribute('src', 'images/toast.svg');
        }
    
    });

} )();