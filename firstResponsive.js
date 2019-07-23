var nvBrTgl = document.getElementsByClassName('navBarToggle')
var navBar = document.getElementById('navBarId');

nvBrTgl.item(0).onclick = function myFunction() {
    
    // alert(navBar.classList,navBar.style.display);
    
    if(navBar.classList.contains('navBarReverse'))
    {
      navBar.classList.add("navBarNone")
      navBar.classList.remove("navBarReverse")
    }
    else{
            navBar.classList.remove("navBarNone")
            navBar.classList.add("navBarReverse")
            // alert(navBar.classList,navBar.style.display);
    }
    // {
    //   navBar.style.display = "flex" ;
    //   navBar.style.flexDirection = "column";
    //   navBar.style.margin = "0px 15px 0px 15px";
    // }
    // else
    // {
    //   navBar.style.display === "none"
    // }
  }

  window.onscroll = function () {  
    navBar.classList.add("navBarNone")
      navBar.classList.remove("navBarReverse")
    // called when the window is scrolled.  
    } 
//   nvBrTgl.item(0).onmouseenter = function(){
//     navBar.classList.remove("navBarNone")
//   navBar.classList.add("navBarReverse")
// } 

// nvBrTgl.item(0).onmouseleave = function(){
//   navBar.classList.add("navBarNone")
//   navBar.classList.remove("navBarReverse")
// }

var carouselButtonList = document.getElementsByClassName("imageCarouselRadioButton");
var carouselImage= document.getElementById("carouselImage1");
var isMouseDown;
carouselImage.onmousedown = function(){
   isMouseDown = true;
   console.log(isMouseDown)
}
carouselImage.onmouseup = function(){
  isMouseDown = false;
  console.log(isMouseDown)
}

setInterval(carouselAnimation, 2000)
function carouselAnimation(){
  if(!isMouseDown && isInViewport(carouselImage)){
  rightClickHandler();
  }
}

var isInViewport = function (elem) {
	var distance = elem.getBoundingClientRect();
	return (
		distance.top >= 0 &&
		distance.left >= 0 &&
		distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		distance.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};

carouselButtonList[0].onclick = f1;
carouselButtonList[1].onclick = f2;
  carouselButtonList[2].onclick = f3;
    function f1(){    
      showRandomDog()
      .then(
      function(){carouselButtonList[0].checked = "true";},
      )
      }
      function f2(){
        showRandomDog();
        carouselButtonList[1].checked = "true";
        }
        function f3(){
          showRandomDog();
          carouselButtonList[2].checked = "true";
          }

  var rightCarouselArrow = document.getElementById("carouselRightArrow");
  var leftCarouselArrow = document.getElementById("carouselLeftArrow");
  rightCarouselArrow.onclick =  rightClickHandler;
  function rightClickHandler(){
    if(carouselButtonList[0].checked)
    {
      f2();
    }
    else if(carouselButtonList[1].checked)
    {
      f3();
    }
    else if(carouselButtonList[2].checked)
    {
      f1();
    }
  }

  leftCarouselArrow.onclick = function(){
    if(carouselButtonList[0].checked)
    {
      f3();
    }
    else if(carouselButtonList[1].checked)
    {
      f1();
    }
    else if(carouselButtonList[2].checked)
    {
      f2();
    }
  }

const RANDOM_IMAGE_URL = "/randomImage";
function showRandomDog(){

  return new Promise(function(resolve,reject){

    fetch(RANDOM_IMAGE_URL,
    //   {
    //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //     mode: 'cors', // no-cors, cors, *same-origin
    //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //     credentials: 'same-origin', // include, *same-origin, omit
    //     headers: {
    //         'Content-Type': 'application/json',
    //         // 'Content-Type': 'application/x-www-form-urlencoded',
    //     },
    //     redirect: 'follow', // manual, *follow, error
    //     referrer: 'no-referrer', // no-referrer, *client
    //     body: JSON.stringify(data), // body data type must match "Content-Type" header
    // } 
    )
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        // document.querySelector(".complement").innerText = data.complement;
        carouselImage.src = "./public/" + data.imgSrc;
        resolve();
      })

    // const prom = fetch(RANDOM_IMAGE_URL); 
    // prom
    // .then(
    // function(response){
    // const processProm = response.json();
    // return processProm;}
    // )
    // .then(
    // function(processedResponse){
    //   carouselImage.src = processedResponse.imgSrc;
    //   resolve();
        // setTimeout(
        //   function(){resolve();}, 300
        // )      
    // })
  });
}

document
  .querySelector("#clickMe")
  .addEventListener("click", function() {
    fetch("/complement")
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        document.querySelector("#motiveQuote").innerText = data.complement;
      })
      .catch(function(err) {
        console.error(err);
      });
  });
