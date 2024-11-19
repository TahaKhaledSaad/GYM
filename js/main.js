function countDown()
{
    let date = new Date();
    let eventDate= new Date(2022,12,17)
    let currentTime= date.getTime();
    let eventTime=eventDate.getTime();
    let remTime= eventTime - currentTime;
    
    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24) - 30;

    h %= 24;
    m %= 60;
    s %= 60;

    document.getElementById('days').innerHTML="<h3 >" + d + "D"+"</h3>";
    document.getElementById('hours').innerHTML="<h3>"+ h + "h"+"</h3>";
    document.getElementById('minutes').innerHTML="<h3>"+m+ "m"+"</h3>";
    document.getElementById('seconds').innerHTML="<h3>"+s+ "s"+"</h3>";
    setTimeout(countDown,1000)
}
countDown();
let demo1 = document.getElementById("demo1")
let momo1 = document.getElementById("momo1")
let demo2 = document.getElementById("demo2")
let momo2 = document.getElementById("momo2")
let demo3 = document.getElementById("demo3")
let momo3 = document.getElementById("momo3")
let demo4 = document.getElementById("demo4")
let momo4 = document.getElementById("momo4")
let demo5 = document.getElementById("demo5")
let momo5 = document.getElementById("momo5")
let demo6 = document.getElementById("demo6")
let momo6 = document.getElementById("momo6")
let mi = document.getElementById("mi")
function addVal1(){
  mi.style.opacity='0'
momo1.classList.replace("d-none","d-block")
}
function addVal2(){
  mi.style.opacity='0'
momo2.classList.remove("d-none")
}
function addVal3(){
  mi.style.opacity='0'
momo3.classList.remove("d-none")
}
function addVal4(){
  mi.style.opacity='0'
momo4.classList.remove("d-none")
}
function addVal5(){
  mi.style.opacity='0'
momo5.classList.remove("d-none")
}
function addVal6(){
  mi.style.opacity='0'
momo6.classList.remove("d-none")
}

  $('#close').click(function(){
    $('#momo1').addClass('d-none');
    mi.style.opacity='1'
  })
  $('#closed').click(function(){
    $('#momo1').addClass('d-none');
    mi.style.opacity='1'
  })
  $('#close2').click(function(){
   $('#momo2').addClass('d-none');
    mi.style.opacity='2'
  })
  $('#closed2').click(function(){
   $('#momo2').addClass('d-none');
    mi.style.opacity='2'
  })
  $('#close3').click(function(){
    $('#momo3').addClass('d-none');
    mi.style.opacity='1'
  })
  $('#closed3').click(function(){
    $('#momo3').addClass('d-none');
    mi.style.opacity='1'
  })
  $('#close4').click(function(){
    $('#momo4').addClass('d-none');
    mi.style.opacity='1'
  })
  $('#closed4').click(function(){
    $('#momo4').addClass('d-none');
    mi.style.opacity='1'
  })
  $('#close5').click(function(){
    $('#momo5').addClass('d-none');
    mi.style.opacity='1'
  })
  $('#closed5').click(function(){
    $('#momo5').addClass('d-none');
    mi.style.opacity='1'
  })
  $('#close6').click(function(){
    $('#momo6').addClass('d-none');
    mi.style.opacity='1'
  })
  $('#closed6').click(function(){
    $('#momo6').addClass('d-none');
    mi.style.opacity='1'
  })

  countDown();

let max =100;
$('textarea').keyup(function(){
    let length=$(this).val().length;
    let character = max - length;
    if(character <= 0 )
    {
        $('#char').text("your available character finished");
    }
    else
    {
        $('#char').text(character);
    }
})

  function gotolink(link){
    // console.log(link.value);
    window.open(link.value);
}

$(document).ready(function () {
  $(".tips div:first").css("display", "block");
  $(".tips h3").click(function () {
      $(this).next().slideToggle(1000);
      $(".tips div").not($(this).next()).slideUp(700);
  });
});
  

 
// function validateInputName(){
//     var regex =/^[a-zA-Z0-9]+$/;
//     if(regex.test(Name.value) == true)
//     {
//         Name.classList.replace('is-invalid','is-valid');
//         return true;
//     }
//     else
//     {
//         Name.classList.add('is-invalid');
//         return false;
//     }
// }

// function validateInputEmail(){
//     var regex =/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
//     if(regex.test(Email.value) == true)
//     {
//         Email.classList.replace('is-invalid','is-valid');
//         return true;
//     }
//     else
//     {
//         Email.classList.add('is-invalid');
//         return false;
//     }
// }
// function validateInputPhone(){
//     var regex =/^01[0125][0-9]{8}$/;
//     if(regex.test(Phone.value) == true)
//     {
//         Phone.classList.replace('is-invalid','is-valid');
//         return true;
//     }
//     else
//     {
//         Phone .classList.add('is-invalid');
//         return false;
//     }
// }
// function validateInputAge(){
//     var regex =/^[1-9][0-9]?$|^100$/;
//     if(regex.test(Age.value) == true)
//     {
//         Age.classList.replace('is-invalid','is-valid');
//         return true;
//     }
//     else
//     {
//         Age.classList.add('is-invalid');
//         return false;
//     }
// }
// function validateInputPass(){
//     var regex =/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
//     if(regex.test(Pass.value) == true)
//     {
//         Pass.classList.replace('is-invalid','is-valid');
//         return true;
//     }
//     else
//     {
//         Pass.classList.add('is-invalid');
//         return false;
//     }
// }
// function validateInputRePass(){
//     var regex =/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
//     if(regex.test(RePass.value) == true && Pass.value === RePass.value )
//     {
        
//         RePass.classList.replace('is-invalid','is-valid');
//         return true;
//     }
//     else
//     {
//         RePass.classList.add('is-invalid');
//         return false;
//     }
// }

