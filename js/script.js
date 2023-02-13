


$(".menu-icon").click(function(){
    $(".drawer").addClass("show");
});
$(".close-btn").click(function(){
    $(".drawer").removeClass("show");
});

//==========================================
// scroll top show /hide
$(window).scroll(function (){
    if ($(window).scrollTop() < 350 ) {
        $('.scroll-top').removeClass('show-scroll-top')  
    } else {
        $('.scroll-top').addClass('show-scroll-top') 
    }
}); 
// scroll top smooth scrolling
$('.scroll-top').click(function () {
   $('html,body').animate({
     scrollTop : 0  
   },2000,'linear'); 
});

// smooth scrolling
$('.drawer ul li a[href^="#"]').click(function(e){
    e.preventDefault();

    var target = this.hash;
    $('html,body').animate({
        scrollTop: $(target).offset().top -50
    },2000);
 });
// add stiky class for stiky menu
$(window).scroll(function(){
    if ($(window).scrollTop() > 100) {
        $('body').addClass('sticky')
   }else{
    $('body').removeClass('sticky') 
   }  
});

//====================================================

$(".top-bar .drawer ul li").click(function(){
    
    $(".drawer").removeClass("show");
});

// triangle height change with window width
const wwidth = $(window).width();
$(".triangle").css({
    "height": (wwidth *0.4) + "px"
});

//======================================================================================
// bmi calculation 

const calculateForm = document.getElementById('calculate-form'),
        heightCm = document.getElementById('height-cm'),
        weightkg = document.getElementById('weight-kg'),
        message = document.getElementById('message')



const calculatebmi = (e) =>{
    e.preventDefault()
    
    if(heightCm.value === '' || weightkg.value === ''){
        // remove and add class
        message.classList.remove('green')
        message.classList.add('red')
        // show message
        message.textContent = 'You must input your height and weight 😌'
        // remove message after 3s
        setTimeout(() => {
            message.textContent = ''
        }, 3000);
    }else{
        message.classList.remove('red')
        message.classList.add('green')
        bmicalculation()
    }
}

calculateForm.addEventListener('submit', calculatebmi)

function bmicalculation(){
    const heightM = heightCm.value/100
            bmi = Math.round(weightkg.value / (heightM * heightM));
            
        if (bmi < 18) {
            message.textContent = `Your BMI is ${bmi} and you are skenny 😌`
        }else if (bmi <= 24) {
            message.textContent = `Your BMI is ${bmi} and you are healthy 😄`
        }else {
            message.textContent = `Your BMI is ${bmi} and you are overweight 😥`
        }

        // clear the input field
        heightCm.value = ''
        weightkg.value = ''

        // remove message after 5 second
        setTimeout(() => {
            message.textContent = ''
        }, 5000);
}
//=================================================================================
// SEND EMAIL BY emailjs.com

   const sendEmail = document.getElementById('send-email'),
        email = document.getElementById('email'),
        contactMessage = document.getElementById('contact-message');

  const submitMail = (e) =>{
        e.preventDefault();
    
         if (email.value === '') {
            contactMessage.classList.remove('green')
            contactMessage.classList.add('red')
            contactMessage.textContent = "please enter your valid email address.."
            setTimeout(() => {
                contactMessage.textContent = "";
            }, 3000);
        } else {
            // service_id, templete_id, #form_id , public key
            emailjs.sendForm('service_492sisn' , 'template_dgrvmuc' , '#send-email' , 'jLaz2o9uhHqnNJEBn')
                   .then(() =>{
                        contactMessage.classList.remove('red')
                        contactMessage.classList.add('green')
                        contactMessage.textContent = "you have successfully subscribed 😊"

                        setTimeout(() => {
                            contactMessage.textContent = ""
                        }, 3000);
                    },(error) =>{
                        alert("OPPs! Something is wrong ")
                    });
            email.value = "";
        }
    }
    sendEmail.addEventListener('submit' , submitMail);

// ==================================================================================

// automatic active link with scroll
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(curent =>{
        const sectionHeight = curent.offsetHeight,
              sectionTop = curent.offsetTop - 80 ,
              sectionId = curent.getAttribute('id'),
              sectionClass = document.querySelector('.top-bar .drawer ul li a[href*=' + sectionId + ']')
      
            
            if ((scrollY > sectionTop) && (scrollY <= sectionTop + sectionHeight)) {
                sectionClass.classList.add('active')
                
                // remove and add b-bottom class into the li element
                $(".top-bar .drawer ul li").removeClass('b-bottom')
                $(".top-bar .drawer ul li a.active").parent("li").addClass('b-bottom')
                        
            } else {
                sectionClass.classList.remove('active')
                
            }
        
    })
}

window.addEventListener('scroll', scrollActive);

//=======================================================
// scroll reavel js (include cdn into the head tag for better performanc)

const sr = ScrollReveal({
    origin: 'top',
    duration : 2500,
    distance: '60px',
    delay: 400,
    // reset: true // default : false
})

sr.reveal('.home-content')
sr.reveal('.homeimg, .sr-footer' ,{origin:'bottom', delay: 700})
sr.reveal('.brand-img, .card, .price-item' ,{interval: 100})
sr.reveal('.chooseimg, .calculate-bmi' ,{origin: 'left'})
sr.reveal('.choose-us-content, .bmiimg' ,{origin: 'right'})