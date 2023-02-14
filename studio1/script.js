(function(){
    "use strict";
    console.log('reading js');

    const form = document.querySelector('#myForm');
    const madlib = document.querySelector('#madlib');

    form.addEventListener('submit', function(event){
        event.preventDefault();
        const adj1 = document.querySelector('#adj1').value;
        const adj2 = document.querySelector('#adj2').value;
        const noun1 = document.querySelector('#noun1').value;
        const verb1 = document.querySelector('#verb1').value;
        const noun2 = document.querySelector('#noun2').value;

        let myText;

        if(adj1 && adj2 && noun1 && verb1 && noun2){
            `Clarence the bear, the owner of the shop, traveled all the corners of the world to grab the freshest ingredients for your dessert. They collected ${adj1} fruits and plants that had the sweetest taste and earthiest textures. In the kitchen while making your dessert, they found a  ${adj2} bowl that was perfect to mix the ingredients. They added a sprinkle of stardust and ${noun1} into the batter to make it extra special. While waiting for dessert to bake, Clarence ${verb1} ten times to pass the time. The dessert was made with love just for you and he gave ${noun2}merch as a token of appreciation for visiting!`

            document.querySelector('#adj1').value = '';
            document.querySelector('#adj2').value = '';
            document.querySelector('#noun1').value = '';
            document.querySelector('#verb1').value = '';
            document.querySelector('#noun2').value = '';
        }else{ 
            myText = 'Please fill in the form';
        }

        madlib.innerHTML = myText;

    });


    document.querySelector('.send-lib').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#overlay').className = 'showing';

    });

    var img = document.querySelector('#dessert_img');
     if (document.getElementById('#dessert').value == "cake"){
        img.setAttribute('src', 'images/desserts12.svg');
     } else if (document.getElementById('#dessert').value == "swiss-roll"){
        img.setAttribute('src', 'images/desserts13.svg');
     } else{
        img.setAttribute('src', 'images/desserts12.svg');
     }

})();