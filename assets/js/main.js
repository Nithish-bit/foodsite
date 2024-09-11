//   SHOW MENU
function showMenu(toggleId ,navId)
{
 const toggle = document.getElementById(toggleId);
 const nav= document.getElementById(navId);
 if(toggle && nav)
    {
        toggle.addEventListener('click',function(){
              nav.classList.toggle('show-menu');
        });
    };

};
showMenu('nav-toggle','nav-menu')

// REMOVE MOBILE MENU
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link =>{
    link.addEventListener('click',()=>{
        const navMenu = document.getElementById('nav-menu');
        navMenu.classList.remove('show-menu');
    });
});

// SCROLL SECTION ACTIVE LINK
const sections = document.querySelectorAll('section[id');
function setActiveLink(){
    const scrolly= window.pageXOffset;
    sections.forEach(section =>{
        const{offsetTop , offsetHeight,id}= section;
        const sectionTop =offsetTop - 50;
        const navLink = document.querySelector('.nav-menu a[href*=${id}');
        if(scrolly>sectionTop && scrolly <= sectionTop+offsetHeight){
            navLink?.classList.add('.active-link');
        }else{
            navLink?.classList.remove('.active-link');
        }
    });
}
window.addEventListener('scroll',setActiveLink);
// CHANGE BACKGROUND HEADER 

function toggleScrollHeader(){
    const header =document.getElementById('header');
    const shoulAddClass = window.scrolly>=200;
    if(shoulAddClass){
        header.classList.add('scroll-header');
    }else{
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll',toggleScrollHeader);
// DARK LIGHT THEME
const themeButton = document.getElementById('theme-btn');
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// previously selected topic
const selectedTheme = localStorage.getItem('selected-theme');
const seletedIcon = localStorage.getItem('selected-icon');

//WE obbtain the current theme
const getCurrentTheme = () =>document.body.classList.contains(darkTheme)? 'dark':'light';
const getCurrentIcon = ()=> themeButton.classList.contains(iconTheme)?'bx-moon':'bx-sun';

// validation

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark'? 'add' :'remove'](darkTheme)
    themeButton.classList[seletedIcon === 'bx-moon'?'add':'remove'](iconTheme)
}
// ACTIVATE / DE-ACTIVATE the same manually with button

themeButton.addEventListener('click',()=>{
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme',getCurrentTheme());
    localStorage.setItem('selected-icon',getCurrentIcon());
    
});
// SCROLL REVEAL ANIMATION
