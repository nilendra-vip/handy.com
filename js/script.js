// For Loader
function loader(){
    gsap.to("#loader .box:nth-child(1) h1",{
        y:-210,
        duration:5,
        delay:1,
        stagger:.3
    })
    gsap.to("#loader .box:nth-child(2) h1",{
        y:-80,
        duration:2.5,
        delay:3.4,
    })
    gsap.to("#loader .box:nth-child(3) h1",{
        y:-210,
        duration:5,
        delay:1,
        stagger:.3
    })
    gsap.to('#loader',{
        height:0,
        // duration:2,
        delay:4.7,
        paddingTop: "0px",
    })
}
loader()


// For showing Nav bar
function navbarShow(){
    $(document).ready(function(){
        // Navbar
        $(window).scroll(function(){
            // sticky navbar on scroll script
            if(this.scrollY > 10){
                $('.navbar').addClass("sticky");
                $('.navbar').css('color', 'black');
                

            }else{
                $('.navbar').removeClass("sticky");
            }
            
            // scroll-up button show/hide script
            if(this.scrollY > 500){
                $('.scroll-up-btn').addClass("show");
            }else{
                $('.scroll-up-btn').removeClass("show");
            }
        });
    
        // slide-up script
        $('.scroll-up-btn').click(function(){
            $('html').animate({scrollTop: 0});
            // removing smooth scroll on slide-up button click
            $('html').css("scrollBehavior", "auto");
        });
    });
}
navbarShow();

// For pointing page height
function navbarPointer(){
    /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
    const sections =document.querySelectorAll("section[id]");
    console.log(sections)

    window.addEventListener("scroll", navHighlighter);

    function navHighlighter(){
        let scrollY = window.pageYOffset;
        sections.forEach(function(current){
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop -150,
            sectionId = current.getAttribute("id");

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector(".nav_menu a[href*=" + sectionId + ']').classList.add("active-link")
            }
            else{
                document.querySelector(".nav_menu a[href*=" + sectionId + ']').classList.remove("active-link")
            }
        })
    }
}
navbarPointer();


// Word Split
function wordSplit(){
    function splitText(){
        var clutter;
        document.querySelectorAll(".split").forEach(function(oneh1){
            clutter =""
            oneh1.textContent.split("")
            .forEach(function(char){
                clutter +=`<span> ${char} </span>`
            })
            oneh1.innerHTML = clutter; 
        })
    }
    splitText();
    function splitText2(){
        var clutter;
        document.querySelectorAll(".split2").forEach(function(oneh1){
            clutter =""
            oneh1.textContent.split(" ")
            .forEach(function(char){
                clutter +=`<span> ${char} </span>`
            })
            oneh1.innerHTML = clutter; 
        })
    }
    splitText2();
}
wordSplit()


// ===========================================================================

// Home Swiper
function homeSwiper(){
    var swiper = new Swiper("#home .mySwiper", {
        spaceBetween: 0,
        centeredSlides: true,
        loop:true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });
}
homeSwiper();

// For home text animation
function homepage(){
    gsap.from(".home-overlay .heading span",{
        y:200,
        delay:5,
        stagger:.03
    })
    gsap.from(".home-overlay p span",{
        y:300,
        opacity:0,
        delay:5,
        stagger:.08
    })

    gsap.to(".home-overlay .heading,.home-overlay p",{
        scrollTrigger:{
            trigger:".home-overlay .heading",
            start:"top 30%",
            scrub:true,
            // markers:true,
        },
        y:-100,
        duration:2,
        opacity:0,
        scale:1.1
    })

}
homepage()





// About Section
function about(){

    gsap.from('#about video', {
        scrollTrigger:{
            trigger:"#about video",
            start:"top 90%",
            end:"top 60%",
            // markers:true,
            scrub:1
        },
        y:150
        // scale:.7
    })
    gsap.from('#about .right span,#about a', {
        scrollTrigger:{
            trigger:"#about  .right,#about a",
            start:"top 80%",
            end:"top 15%",
            scrub:1,
            // markers:true
        },
        
        opacity:0,
        stagger:.3,

    })


}
about();



// New Products arrival swiper
function newArrival(){
    var swiper = new Swiper(".nilu-box .swiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        spaceBetween: 80,
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        }
        
    });
}
newArrival();



gsap.from(".nilu-box .split2  span",{
    scrollTrigger:{
        trigger:".nilu-box .split2 span",
        start:"top bottom",
        end:"top 60%",
        scrub:true,
        // markers:true
    },
    x:600,
    stagger:.09,
    scale:0,
    ease: "expo.inOut",
})

gsap.from(".nilu-box  .swiper",{
    scrollTrigger:{
        trigger:".nilu-box  .swiper",
        start:"top 90%",
        end:"top 70%",
        scrub:true,
        // markers:true
    },
    y:200
})



//  For Page 4

// gsap.from("#p4 .offer",{
//     scrollTrigger:{
//         trigger:"#p4 .offer",
//         start:"top 90%",
//         end:"top 60%",
//         scrub:true,
//         // markers:true
//     },
//     scale:0
// })

// gsap.from("#p4 .split2 span,#p4 a",{
//     scrollTrigger:{
//         trigger:"#p4 .split2 span, #p4 a",
//         start:"top 70%",
//         end:"top 40%",
//         scrub:true,
//         // markers:true
//     },
//     y:100,
//     stagger:.1,
//     opacity:0
// })
  






// For Products
function mixCard(){
    /*=============== MIXITUP FILTER PORTFOLIO ===============*/
    let mixerPortfolio = mixitup('.product_container', {
        selectors:{
            target: '.product_card'
        },
        animation:{
            duration:300
        }
    })

    /*===== Link Active product =====*/
    const linkproduct = document.querySelectorAll(".product_item")

    function activeproduct(){
        linkproduct.forEach(l=> l.classList.remove('active-product'))
        this.classList.add('active-product')
    }
    linkproduct.forEach(l=> l.addEventListener("click", activeproduct))
}
mixCard();



function likebtn(){
    $(function() {
        $(".heart").on("click", function() {
          $(this).toggleClass("is-active");
        });
    });
}
likebtn()


gsap.from("#products .top-part .split2  span",{
    scrollTrigger:{
        trigger:"#products .top-part .split2 span",
        start:"top 90%",
        end:"top 55%",
        scrub:true,
        // markers:true
    },
    x:300,
    stagger:.09,
    opacity:0,
    ease: "expo.inOut",

})


gsap.from("#products .product_filters h2,#products .product_filters span",{
    scrollTrigger:{
        trigger:"#products .product_filters h2,#products .product_filters span",
        start:"top 75%",
        end:"top 40%",
        scrub:true,
        // markers:true
    },
    x:-200,
    opacity:0,
    stagger:.2
})



// gsap.from("#data1 .text",{
//     scrollTrigger:{
//         trigger:"#data1 .text",
//         start:"top 90%",
//         end:"top 70%",
//         scrub:true,
//         // markers:true
//     },
//     y:200,
//     opacity:0,
//     stagger:.2
// })
// gsap.from("#data1 .text h1, #data1 .text h3",{
//     scrollTrigger:{
//         trigger:"#data1 .text h1, #data1 .text h3",
//         start:"top 90%",
//         end:"top 70%",
//         scrub:true,
//         // markers:true
//     },
//     y:200,
//     opacity:0,
//     stagger:.2
// })



function data1Page(){
    var swiper = new Swiper("#data1 .artisans-photo", {
        spaceBetween: 0,
        centeredSlides: true,
        loop:true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
    });
}
data1Page();



function showMenu(){
    document.querySelector(".cross-icon i").addEventListener("click", function(){
        document.querySelector(".menu-box-phone").style.width = 0
    })
    document.querySelector(".cross-icon img").addEventListener("click", function(){
        document.querySelector(".menu-box-phone").style.width = 0
    })
    document.querySelectorAll(".menu-box-phone ul li a").forEach(function(elem){
        elem.addEventListener("click", function(){
            document.querySelector(".menu-box-phone").style.width = 0
        })
    })
    document.querySelector(".menu-icon i").addEventListener("click", function(){
        document.querySelector(".menu-box-phone").style.width = "100%"
    })
}
showMenu()



function signup(){
    document.querySelector(".signup i").addEventListener("click", function(){
        document.querySelector(".signup").style.scale = 0
    })
    document.querySelector(".signupbtn").addEventListener("click", function(){
        document.querySelector(".signup").style.scale = 1
    })
}
signup();

function addToCart(){
    
    var count = 0;
    document.querySelector(".cart span").innerHTML = count; 
    

    document.querySelectorAll("#products .product_card button").forEach(function(addCartBtn){
        var flag = 0;
        addCartBtn.addEventListener("click", function(){
            if(flag === 0){
                count++;
                document.querySelector(".cart span").innerHTML = count; 
                this.innerHTML = "Remove"
                flag = 1;
            }
            else{
                count--;
                document.querySelector(".cart span").innerHTML = count; 
                this.innerHTML = "Buy Now"
                flag = 0 ;
            }
            
        })
    })    
}
addToCart();