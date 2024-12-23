let clickMe = document.getElementById("click_me");
let title1 = document.getElementById("title_1");
let title2 = document.getElementById("title_2");
let title3 = document.getElementById("title_3");
let title4 = document.getElementById("title_4");
let title5 = document.getElementById("title_5");
let mainBackground = document.getElementById("background_main_container");
let titleStart = document.getElementById("start_title");
let happyMood = document.getElementById("happy_container");
let loveMood = document.getElementById("love_container");
let sadMood = document.getElementById("sad_container");
let videoBackground = document.getElementById("video_background");
let happyVideo = document.getElementById("happy_video_container");
let loveVideo = document.getElementById("love_video_container");
let sadVideo = document.getElementById("sad_video_container");


let fourPsPizz = document.getElementById("4ps_pizz");
let shhCute = document.getElementById("shh_cute");
let graduation = document.getElementById("graduation");
let fries = document.getElementById("fries");
let cinestar = document.getElementById("cinestar");
let cinematic = document.getElementById("cinematic");
let sexy1 = document.getElementById("sexy1");
let sexy2 = document.getElementById("sexy2");
let imageContainer = document.getElementById("image_container_center");
let imageHolder = document.getElementById("image_container");

function closeShhCute(){
  setTimeout(function(){
    shhCute.classList.remove("image_active");
  }, 505);
  imageContainer.style.top = -110 + "%";
  imageContainer.style.opacity = 0;
  setTimeout(function(){
    imageContainer.style.zIndex = 2;
  }, 505)
  videoBackground.style.opacity = 0;
  videoBackground.style.zIndex = -1;
  imageHolder.style.opacity = 0;
}

function close4psPizz(){
  setTimeout(function(){
    fourPsPizz.classList.remove("image_active");
  }, 505);
  imageContainer.style.top = -110 + "%";
  imageContainer.style.opacity = 0;
  setTimeout(function(){
    imageContainer.style.zIndex = 2;
  }, 505)
  videoBackground.style.opacity = 0;
  videoBackground.style.zIndex = -1;
  imageHolder.style.opacity = 0;
}

function closeGraduation(){
  setTimeout(function(){
    graduation.classList.remove("image_active");
  }, 505);
  imageContainer.style.top = -110 + "%";
  imageContainer.style.opacity = 0;
  setTimeout(function(){
    imageContainer.style.zIndex = 2;
  }, 505)
  videoBackground.style.opacity = 0;
  videoBackground.style.zIndex = -1;
  imageHolder.style.opacity = 0;
}

function closeFries(){
  setTimeout(function(){
    fries.classList.remove("image_active");
  }, 505);
  imageContainer.style.top = -110 + "%";
  imageContainer.style.opacity = 0;
  setTimeout(function(){
    imageContainer.style.zIndex = 2;
  }, 505)
  videoBackground.style.opacity = 0;
  videoBackground.style.zIndex = -1;
  imageHolder.style.opacity = 0;
}

function closeSexy2(){
  setTimeout(function(){
    sexy2.classList.remove("image_active");
  }, 505);
  imageContainer.style.top = -110 + "%";
  imageContainer.style.opacity = 0;
  setTimeout(function(){
    imageContainer.style.zIndex = 2;
  }, 505)
  videoBackground.style.opacity = 0;
  videoBackground.style.zIndex = -1;
  imageHolder.style.opacity = 0;
}

function closeCinematic(){
  setTimeout(function(){
    cinematic.classList.remove("image_active");
  }, 505);
  imageContainer.style.top = -110 + "%";
  imageContainer.style.opacity = 0;
  setTimeout(function(){
    imageContainer.style.zIndex = 2;
  }, 505)
  videoBackground.style.opacity = 0;
  videoBackground.style.zIndex = -1;
  imageHolder.style.opacity = 0;
}

function closeCinestar(){
  setTimeout(function(){
    cinestar.classList.remove("image_active");
  }, 505);
  imageContainer.style.top = -110 + "%";
  imageContainer.style.opacity = 0;
  setTimeout(function(){
    imageContainer.style.zIndex = 2;
  }, 505)
  videoBackground.style.opacity = 0;
  videoBackground.style.zIndex = -1;
  imageHolder.style.opacity = 0;
}

function closeSexy1(){
  setTimeout(function(){
    sexy1.classList.remove("image_active");
  }, 505);
  imageContainer.style.top = -110 + "%";
  imageContainer.style.opacity = 0;
  setTimeout(function(){
    imageContainer.style.zIndex = 2;
  }, 505)
  videoBackground.style.opacity = 0;
  videoBackground.style.zIndex = -1;
  imageHolder.style.opacity = 0;
}

function fourPsPizzContainer(){
  fourPsPizz.classList.add("image_active");
  imageContainer.style.top = 0 + "%";
  imageContainer.style.opacity = 1;
  imageContainer.style.zIndex = 2;
  videoBackground.style.opacity = 0.5;
  videoBackground.style.zIndex = 2;
  imageHolder.style.opacity = 1;
}

function shhCuteContainer(){
  shhCute.classList.add("image_active");
  imageContainer.style.top = 0 + "%";
  imageContainer.style.opacity = 1;
  imageContainer.style.zIndex = 2;
  videoBackground.style.opacity = 0.5;
  videoBackground.style.zIndex = 2;
  imageHolder.style.opacity = 1;

}


function graduationContainer(){
  graduation.classList.add("image_active");
  imageContainer.style.top = 0 + "%";
  imageContainer.style.opacity = 1;
  imageContainer.style.zIndex = 2;
  videoBackground.style.opacity = 0.5;
  videoBackground.style.zIndex = 2;
  imageHolder.style.opacity = 1;

}


function friesContainer(){
  fries.classList.add("image_active");
  imageContainer.style.top = 0 + "%";
  imageContainer.style.opacity = 1;
  imageContainer.style.zIndex = 2;
  videoBackground.style.opacity = 0.5;
  videoBackground.style.zIndex = 2;
  imageHolder.style.opacity = 1;

}


function cinematicContainer(){
  cinematic.classList.add("image_active");
  imageContainer.style.top = 0 + "%";
  imageContainer.style.opacity = 1;
  imageContainer.style.zIndex = 2;
  videoBackground.style.opacity = 0.5;
  videoBackground.style.zIndex = 2;
  imageHolder.style.opacity = 1;

}


function cinestarContainer(){
  cinestar.classList.add("image_active");
  imageContainer.style.top = 0 + "%";
  imageContainer.style.opacity = 1;
  imageContainer.style.zIndex = 2;
  videoBackground.style.opacity = 0.5;
  videoBackground.style.zIndex = 2;
  imageHolder.style.opacity = 1;

}

function sexy1Container(){
  sexy1.classList.add("image_active");
  imageContainer.style.top = 0 + "%";
  imageContainer.style.opacity = 1;
  imageContainer.style.zIndex = 2;
  videoBackground.style.opacity = 0.5;
  videoBackground.style.zIndex = 2;
  imageHolder.style.opacity = 1;

}

function sexy2Container(){
  sexy2.classList.add("image_active");
  imageContainer.style.top = 0 + "%";
  imageContainer.style.opacity = 1;
  imageContainer.style.zIndex = 2;
  videoBackground.style.opacity = 0.5;
  videoBackground.style.zIndex = 2;
  imageHolder.style.opacity = 1;

}



happyMood.addEventListener("click", function(){
  happyVideo.style.top = 0 + "%";
  happyVideo.style.opacity = 1;
  happyVideo.style.zIndex = 3;
  videoBackground.style.opacity = 0.5;
  videoBackground.style.zIndex = 2;
  

});

loveMood.addEventListener("click", function(){
  loveVideo.style.top = 0 + "%";
  loveVideo.style.opacity = 1;
  loveVideo.style.zIndex = 3;
  videoBackground.style.opacity = 0.5;
  videoBackground.style.zIndex = 2;
});

function closeVideoContainer(){
  sadVideo.style.top = -80 + "%";
  sadVideo.style.opacity = 0;
  sadVideo.style.zIndex = -1;

  loveVideo.style.top = -80 + "%";
  loveVideo.style.opacity = 0;
  loveVideo.style.zIndex = -1;

  happyVideo.style.top = -80 + "%";
  happyVideo.style.opacity = 0;
  happyVideo.style.zIndex = -1;
  
  videoBackground.style.opacity = 0;
  videoBackground.style.zIndex = -1;
}

sadMood.addEventListener("click", function(){
  sadVideo.style.top = 0 + "%";
  sadVideo.style.opacity = 1;
  sadVideo.style.zIndex = 3;
  videoBackground.style.opacity = 0.5;
  videoBackground.style.zIndex = 2;
})



titleStart.addEventListener("click", function(){
  titleStart.style.opacity = 0;
  setTimeout(function(){
    title_transition();
  }, 200);
})

function happy_background(){
  mainBackground.style.setProperty("--color1", "#fff060")
  mainBackground.style.setProperty("--color2", "#f2db00")
}

function normal_background(){
  mainBackground.style.setProperty("--color1", "#D3D3D3")
  mainBackground.style.setProperty("--color2", "#9E9E9E")

}

function love_background(){
  mainBackground.style.setProperty("--color1", "#ffbaba")
  mainBackground.style.setProperty("--color2", "#ff5252")
}


function sad_background(){
  mainBackground.style.setProperty("--color1", "#B9E5E8")
  mainBackground.style.setProperty("--color2", "#7AB2D3")
}


function title_transition(){
  setTimeout(() => {
    title1.classList.remove("inactive");
    title1.style.top = 40 + "%";
    title1.style.opacity = 1;
  }, 500);


  setTimeout(() => {
    title2.classList.remove("inactive");
    title2.style.top = 40 + "%";
    title2.style.display = "block";
    title2.style.opacity = 1;
    title1.style.top = 30 + "%";
    title1.style.opacity = 0;
  }, 3000);


  setTimeout(() => {
    title3.classList.remove("inactive");
    title3.style.top = 40 + "%";
    title3.style.display = "block";
    title3.style.opacity = 1;
    title2.style.top = 30 + "%";
    title2.style.opacity = 0;
  }, 6000);

  setTimeout(() => {
    title4.classList.remove("inactive");
    title4.style.top = 40 + "%";
    title4.style.opacity = 1;
    title3.style.top = 30 + "%";
    title3.style.opacity = 0;
  }, 9000);


  setTimeout(() => {
    title5.classList.remove("inactive");
    title5.style.top = 40 + "%";
    title5.style.display = "block";
    title5.style.opacity = 1;
    title4.style.top = 30 + "%";
    title4.style.opacity = 0;
  }, 12000);

  setTimeout(() => {
    clickMe.style.display = "block";
    clickMe.style.left = 35 + "%";
  }, 13000)

}