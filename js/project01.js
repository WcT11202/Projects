//allies
$(function () {
    $(".alliessticker img").click(function () {
      var N = $(this).attr("id").substr(0);
      console.log(N)
      $("#photo img").attr("src", "./img/char/Sticker/character_detail_" + N + "_pic.png")
      $("#alname img").attr("src", "./img/char/Allies_content/character_detail_" + N + "_name.png")
      $("#alcvname img").attr("src", "./img/char/Allies_content/character_detail_" + N + "_cv.png")
      $("#altext img").attr("src", "./img/char/Allies_content/character_detail_" + N + "_text.png")
      var photodiv = document.getElementById("photo");
      var namediv = document.getElementById("alname");
      var cvnamediv = document.getElementById("alcvname");
      var textdiv = document.getElementById("altext");
      switch (N) {
        case 'lyria':
          photodiv.style.width="450px";
          photodiv.style.top = "";
          photodiv.style.left = "";
          namediv.style.bottom="430px";
          namediv.style.left="500px"
          cvnamediv.style.bottom="470px";
          cvnamediv.style.left="680px";
          textdiv.style.bottom="430px"
          break;
        case 'vyrn':
          photodiv.style.top = "150px";
          photodiv.style.left = "150px";
          photodiv.style.right = "";
          namediv.style.bottom="200px";
          namediv.style.left="490px";
          cvnamediv.style.bottom="240px";
          cvnamediv.style.left="625px";
          textdiv.style.bottom="180px"
          break;
        case 'katalina':
          photodiv.style.width="550px";
          photodiv.style.top = "30px";
          photodiv.style.right ="5%";
          photodiv.style.left ="";
          namediv.style.bottom="405px";
          namediv.style.left="495px";
          cvnamediv.style.bottom="430px";
          cvnamediv.style.left="728px";
          textdiv.style.bottom="385px"
          break;
        case 'rackam':
          photodiv.style.width="300px";
          photodiv.style.top = "30px";
          photodiv.style.right ="";
          photodiv.style.left ="120px";
          namediv.style.bottom="398px";
          namediv.style.left="495px";
          cvnamediv.style.bottom="420px";
          cvnamediv.style.left="728px";
          textdiv.style.bottom="380px"
          break;
        case 'io':
          photodiv.style.width="500px";
          photodiv.style.top = "30px";
          photodiv.style.right ="1%";
          photodiv.style.left ="";
          namediv.style.bottom="372px";
          namediv.style.left="500px";
          cvnamediv.style.bottom="403px";
          cvnamediv.style.left="620px";
          textdiv.style.bottom="350px"
          break;
        case 'eugen':
          photodiv.style.width="400px";
          photodiv.style.top = "30px";
          photodiv.style.right ="";
          photodiv.style.left ="50px";
          namediv.style.bottom="396px";
          namediv.style.left="505px";
          cvnamediv.style.bottom="440px";
          cvnamediv.style.left="755px";
          textdiv.style.bottom="380px"
          break;
        case 'rosetta':
          photodiv.style.width="450px";
          photodiv.style.top = "30px";
          photodiv.style.right ="30px";
          photodiv.style.left ="";
          namediv.style.bottom="380px";
          namediv.style.left="500px";
          cvnamediv.style.bottom="405px";
          cvnamediv.style.left="755px";
          textdiv.style.bottom="360px"
          break;
      }

    });
  });

//primal beats
$(function () {
    $(".primalsticker img").click(function () {
      var N = $(this).attr("id").substr(0);
      console.log(N)
      $("#photo img").attr("src", "./img/char/Sticker/primal_detail_" + N + "_pic.png")
      $("#pbname img").attr("src", "./img/char/Primal_content/primal_detail_" + N + "_name.png")
      $("#pbtext img").attr("src", "./img/char/Primal_content/primal_detail_" + N + "_text.png")
      var photodiv = document.getElementById("photo");
      var namediv = document.getElementById("pbname");
      var cvnamediv = document.getElementById("pbcvname");
      var textdiv = document.getElementById("pbtext");

    });
  });
//world
  console.log(document.getElementById('mcbc'))
  // Get the modal
  var modal = document.getElementsByClassName("mymodal");
  console.log(modal[12])
  // Get the button that opens the modal
  var btn = document.getElementsByClassName("island-name");
  console.log(btn[11])
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close");
  console.log(span[6])
  // When the user clicks the button, open the modal 
  btn[0].onclick = function () {
          modal[0].style.display = "block";
  }
  btn[1].onclick = function () {
          modal[1].style.display = "block";
  }
  btn[2].onclick = function () {
          modal[2].style.display = "block";
  }
  btn[3].onclick = function () {
          modal[3].style.display = "block";
  }
  btn[4].onclick = function () {
          modal[4].style.display = "block";
  }
  btn[5].onclick = function () {
          modal[5].style.display = "block";
  }
  // btn[6].onclick = function () {
  //         modal[6].style.display = "block";
  // }
  btn[7].onclick = function () {
          modal[7].style.display = "block";
  }
  btn[8].onclick = function () {
          modal[6].style.display = "block";
  }
  btn[9].onclick = function () {
          modal[8].style.display = "block";
  }
  btn[10].onclick = function () {
          modal[9].style.display = "block";
  }
  btn[11].onclick = function () {
          modal[10].style.display = "block";
  }
  btn[12].onclick = function () {
          modal[11].style.display = "block";
  }
  btn[13].onclick = function () {
          modal[12].style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span[0].onclick = function () {
          modal[0].style.display = "none";
  }
  span[1].onclick = function () {
          modal[1].style.display = "none";
  }
  span[2].onclick = function () {
          modal[2].style.display = "none";
  }
  span[3].onclick = function () {
          modal[3].style.display = "none";
  }
  span[4].onclick = function () {
          modal[4].style.display = "none";
  }
  span[5].onclick = function () {
          modal[5].style.display = "none";
  }
 
  span[6].onclick = function () {
          modal[6].style.display = "none";
  }
  span[7].onclick = function () {
          modal[7].style.display = "none";
  }
  span[8].onclick = function () {
          modal[8].style.display = "none";
  }
  span[9].onclick = function () {
          modal[9].style.display = "none";
  }
  span[10].onclick = function () {
          modal[10].style.display = "none";
  }
  span[11].onclick = function () {
          modal[11].style.display = "none";
  }
  span[12].onclick = function () {
          modal[12].style.display = "none";
  }
  
//media

 
    
