/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav--toggle'),
      navClose = document.getElementById('nav-close')


    //   Menu show

    // validate if constant exists

    if(navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu')
        })
    }

    // menu hidden
    // validate if constant exists

    if(navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu')
        })
    }

    /*REMOVE MENU MOBILE*/
    const navLink = document.querySelectorAll('.nav-link')

    const linkAction = () =>{
        const navMenu = document.getElementById('nav-menu')

        // when we click on each nav__link, it remove the show-menu class

        navMenu.classList.remove('show-menu')
    }

        navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
        const bgHeader = () =>{
            const header = document.getElementById('header')


            // when the scroll is greater than 50 viewpoint height,add the scroll-header class to the header tag

            this.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header')
        
        }
        window.addEventListener('scroll', bgHeader)

        //         /*testimonal swiper*/
        // let testimonalSwiper = new swiper(".testimonal-swiper",){

        // }    

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// previously selected topic
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// obtain the current theme that the interface has valiadating the dark theme class

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// validiate if user choose a topic
if (selectedTheme) {
    // if validiation if fullfilled, ask what the issue was to know activated of deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// activate/ deactivate the theme manually with the button

themeButton.addEventListener('click', () => {
    // add or remove the dark/ icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // save the theme and the current icon the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
