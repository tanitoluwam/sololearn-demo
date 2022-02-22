let courseCards = document.getElementsByClassName("course-card")

for(index=0; index < courseCards.length; index++) {

  const element= courseCards[index];

  element.addEventListener("click" , function() {

    const displayNoneElement = element.querySelector(".display-none");

    if (displayNoneElement.style.display =="flex") {

      displayNoneElement.style.display = "none" ;

    } else{
      displayNoneElement.style.display = "flex" ;
    }
  });
}


