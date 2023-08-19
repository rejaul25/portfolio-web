function changingbg(){
    let navbar = document.getElementById('navbar');
    let scrollvalue = window.scrollY;
    if (scrollvalue < 150){
        navbar.classList.remove( 'head-color');
    }else{
        navbar.classList.add( 'head-color');
    }
}

window.addEventListener('scroll',changingbg)


// this is for faq 

// function myFunction() {
//     var x = document.getElementById("faq-drop");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }


//   function myFunction2() {
//     var x = document.getElementById("faq-drop-2");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }

//   function myFunction3() {
//     var x = document.getElementById("faq-drop-3");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }

//   function myFunction4() {
//     var x = document.getElementById("faq-drop-4");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }

//   function myFunction5() {
//     var x = document.getElementById("faq-drop-5");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }


document.addEventListener("DOMContentLoaded", function() {
  const faqItems = document.querySelectorAll(".faq-det-items-con");

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-drop");

    question.addEventListener("click", () => {
      // Toggle active class to show/hide the answer
      answer.classList.toggle("active");

      // Hide other answers when a new question is clicked
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.querySelector(".faq-drop").classList.remove("active");
        }
      });
    });
  });
});
