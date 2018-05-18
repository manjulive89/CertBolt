// (function () {
//     "use strict";
//
// document.body.forEach((el)=>{
//     console.log(el);
// });
//
// }());




//Slider home/page 
//let slider;
//function moveSlider(e){ 
//    slider.scrollLeft = slider.scrollLeft - e.movementX; 
//} 
//document.querySelectorAll(".slider__wrapper_scroll").forEach(function(el){ 
//    el.ondragstart = function(){
//        return false;
//    }    
//    el.onselectstart = function(){
//        return false;
//    }     
//    el.addEventListener("mousedown", function(){ 
//        slider = el;
//        el.addEventListener("mousemove", moveSlider);
//    });
//    document.addEventListener("mouseup", function(){
//        slider = null;
//        el.removeEventListener("mousemove", moveSlider);
//    });  
// });
//
//
//
//
//document.querySelectorAll(".slider__arrow").forEach(function (arrow) {
//
//    arrow.addEventListener("click", function (e) {
//        let slider = e.target.parentElement.querySelector(".slider__wrapper_scroll");
//        let sliderItemWidth = slider.querySelector(".slider__item").offsetWidth;
// 
//        if (e.target.classList.contains("slider__arrow_left")) {
//            slider.scrollLeft = slider.scrollLeft - (sliderItemWidth + 30);
//        } else {
//            slider.scrollLeft = slider.scrollLeft + (sliderItemWidth + 30);
//        } 
//    });
//});

 
    
    
$('.slider_featured .slider__wrapper').each(function (i, el) {
    $(el).slick({
        dots: true,
        arrows: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });
});

$('.slider_top-vendors .slider__wrapper, .slider_top-certifications .slider__wrapper').each(function (i, el) {
    $(el).slick({
        dots: true,
        arrows: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: true,
                    arrows: true,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true
                }
    },
            {
                breakpoint: 900,
                settings: {
                    dots: true,
                    arrows: true,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
    },
            {
                breakpoint: 600,
                settings: {
                    dots: true,
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });
});
$('.slider_product').each(function (i, el) {
    $(el).slick({
        centerMode: true,
        dots: true,
        arrows: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '393px',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    centerPadding: '200px',
                    centerMode: true,
                    dots: true,
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
    }, {
                breakpoint: 768,
                settings: {
                    centerPadding: '30px',
                    centerMode: true,
                    dots: true,
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
    }
  ]
    });
});


$('.slider_exams').each(function (i, el) {
    $(el).slick({ 
        dots: false,
        arrows: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    centerPadding: '200px', 
                    dots: false,
                    arrows: true,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true
                }
    }, {
                breakpoint: 768,
                settings: {
                    centerPadding: '30px', 
                    dots: false,
                    arrows: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true
                }
    }
  ]
    });
});


//Плавный скролл
document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("click", function (e) {
        if (e.target.classList.contains("js-smooth-scroll")) {
            e.preventDefault();
            let id = e.target.getAttribute('href');
            let linkedTag = document.getElementById(id);
            if (linkedTag) {
                let top = linkedTag.offsetTop;
                $('html, body').animate({
                    scrollTop: top
                }, 1000);

            }
        }
    });
});

$(".popup__btn_close").click(function(){
    $(this).closest(".popup").remove();
    $(document).find(".blocked").removeClass("blocked");
});
     

//function getData(url) {
//    return new Promise(resolve => {
//        let xhr = new XMLHttpRequest();
//        xhr.open("GET", url, true);
//        xhr.send();
//        xhr.onreadystatechange = () => {
//            if (xhr.readyState !== 4) {
//                return;
//            }
//            if (xhr.status !== 200) {
//                alert(xhr.status + ': ' + xhr.statusText); 
//            } else {
//                resolve(xhr.responseText);
//            }
//        };
//    });
//}
//
//function changeContent(url, wrapper, callback) {
//    getData(url).then(content => {
//        wrapper.innerHTML = content;
//    }).then(() => {
//        if (callback) {
//            callback();
//        }
//    });
//}
//
//
////Загрузка первой страницы
//document.addEventListener("DOMContentLoaded", () => {
//    getData(START_PAGE_URL).then(content => {
//        document.getElementById("main").innerHTML = content;
//    });
//});
//
////Навигация
//document.addEventListener("click", (e) => {
//    if (e.target.classList.contains("nav__item")) {
//        e.preventDefault();
//        closeMobileMenu();
//        document.querySelectorAll(".nav__item").forEach((el) => {
//            el.classList.remove("nav__item_active");
//        });
//        e.target.classList.add("nav__item_active");
//        changeContent(e.target.href, document.getElementById("main"), function () {
//            if (e.target.id === "wallEditor") {
//                openDB(DB_NAME, DB_VERSION, STORE_NAME).then(db => {
//                    getGallaryImages(db);
//                });
//
//            }
//        });
//    }
//});


