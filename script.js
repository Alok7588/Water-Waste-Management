

const slides=document.querySelector(".slider").children;
const prev=document.querySelector(".prev");
const next=document.querySelector(".next");
const indicator=document.querySelector(".indicator");
let index=0;


  prev.addEventListener("click",function(){
  	  prevSlider();
  	  updateCircleIndicator();
  	  resetTimer();

  })

  next.addEventListener("click",function(){
  	  nextSlider();
  	  updateCircleIndicator();
  	  resetTimer();

  })

   function circleIndicator(){
   	for(let i=0; i< slides.length; i++){
   		const div=document.createElement("div");
   		         div.innerHTML=i+1;
   		      div.setAttribute("onclick","indicateSlider(this)")
   		      div.id=i;
   		      if (i==0){
   		      	div.className="active";
   		      }
   		     indicator.appendChild(div);
   	}

   }
   circleIndicator();
   function indicateSlider(element){
   	index=element.id;
   	changeSlider();
   	updateCircleIndicator();
   	resetTimer();

   }




   function updateCircleIndicator(){
   for(let i=0; i<indicator.children.length; i++){
   	indicator.children[i].classList.remove("active");

   	}
   		indicator.children[index].classList.add("active");
   }
  function prevSlider(){
  	if(index==0){
  		index=slides.length-1;
  	}
  	else{
  		index--;
  	}
  	changeSlider();

  }
  function nextSlider(){
  	if(index==slides.length-1){
  		index=0;
  	}
  	else{
  		index++;
  	}
  	
  	changeSlider();

  }
  function changeSlider(){
  	     for(let i=0; i<slides.length; i++){
  	     	slides[i].classList.remove("active");
  	     }	     
  	slides[index].classList.add("active");
  }
  function resetTimer(){
  	clearInterval(timer);
  	timer=setInterval(autoPlay,7000);
  }
  function autoPlay(){
  	nextSlider();
  	updateCircleIndicator()
  }
  let timer=setInterval(autoPlay,7000);