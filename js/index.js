const menu = document.querySelector('.menu');
const nav = document.querySelector('.header-nav');

menu.addEventListener('click',function(){
    if(!nav.classList.contains('active')){
        nav.classList.add('active');
    }else{
        nav.classList.remove('active');
    }
})