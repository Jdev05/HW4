document.body.style.backgroundColor = "red";

document.getElementById("h1").style.backgroundColor = "blue";

document.body.style.fontFamily = "sans-serif";

document.getElementById("nickname").innerHTML = "JD";

document.getElementById("favorites").innerHTML = "Tennis, golf, and netflix";

document.getElementById("hometown").innerHTML = "Same as Lucille Ball";

var items = document.getElementsByTagName('li');

   for (var i = 0; i < items.length; i++) {
      items[i].className = 'listitem';
   }

   
    var myPic = document.createElement('img');

    myPic.src = 'myPic.jpg';

    document.body.appendChild(myPic);