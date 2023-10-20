/*===== MENU =====*/
const triggerMenu=document.querySelector('#trigger-menu');
const mobileMenuCon=document.querySelector('#menu-mobile-container');
const closeMenu=document.querySelector('#menu-mobile-container .dark-part');
triggerMenu.addEventListener('click',()=>{
    mobileMenuCon.classList.add('active');
})
closeMenu.addEventListener('click',()=>{
    mobileMenuCon.classList.remove('active');
})

const nextBtn=document.querySelector('#testimonial .next');
const prevBtn=document.querySelector('#testimonial .prev');
const items=document.querySelectorAll('#testimonial .testimonial-item');

let times=items.length;
let count=1;

nextBtn.addEventListener('click',()=>{
    if(count>=times){
        count=1;
        items[0].style.marginLeft='0';

    }else{
        
        items[0].style.marginLeft=`-${items[0].offsetWidth * count}px`;
        count++;
    }
})
prevBtn.addEventListener('click',()=>{
    if(count===1){
        

        items[0].style.marginLeft=`-${items[0].offsetWidth * (times-1)}px`;
        count=times;
    }else{
        
        items[0].style.marginLeft=`
        -${items[0].offsetWidth * (count-1)-items[0].offsetWidth}px`;
        count--;
    }
})
/*===== go to up =====*/
let gotoup=document.getElementById('gotoup');
console.log(gotoup);
(window.onscroll=()=>{
    document.body.scrollTo>20 || document.documentElement.scrollTop>20
     ? gotoup.classList.add('active') : 
    gotoup.classList.remove('active');
})

gotoup.addEventListener('click',()=>{
    (document.body.scrollTop=0),(document.documentElement.scrollTop=0);
})
/*===== GSAP ANIMATION =====*/
/*===== GSAP ANIMATION =====*/
// NAV
gsap.from(".logo", {
    opacity: 0,
    duration: 1,
    delay: 0.5,
    y: 10,
  });
  gsap.from(".menu-icon", {
    opacity: 0,
    duration: 1,
    delay: 0.7,
    y: 10,
  });
  gsap.from(".desktop-menu ul li", {
    opacity: 0,
    duration: 1,
    delay: 0.6,
    y: 30,
    stagger: 0.2,
  });
  
  // sections
  gsap.from(".section > *", {
    opacity: 0,
    duration: 0.7,
    delay: 1,
    y: 30,
    stagger: 0.2,
  });
  

