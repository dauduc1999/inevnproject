
// Login
const loginBtns = document.querySelectorAll('.js-login')
    const modal = document.querySelector('.js-modal')
    const modalClose = document.querySelector('.js-modal-close')

    function showLogin() {
        modal.classList.add('open')
    }

    function hideLogin() {
        modal.classList.remove('open')
    }

    for (const loginBtn of loginBtns) {
        loginBtn.addEventListener('click', showLogin)
    }

    modalClose.addEventListener('click', hideLogin)


// Show menu mobile

var header =  document.getElementById('header')

var mobilemenu = document.getElementById('mobile-menu')
var nav = document.getElementById('nav')
var headerClientHeight = header.clientHeight

mobilemenu.onclick = function(){
    var isClosed = header.clientHeight === headerClientHeight
 if(isClosed){
     header.style.height = 'auto'
 }else{
     header.style.height = null
 }
}

//Auto close menu
var btnLogin = document.querySelector('#nav li button')
var menuItems = document.querySelectorAll('#nav li a[href*="#"]')
 for(var menuItem of menuItems){
    
     menuItem.onclick= function(event){
var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav')
       if(!isParentMenu){
        header.style.height = null
       }else{
           event.preventDefault();
       }
        
     }
 }
 btnLogin.onclick= function(){
    header.style.height = null
 }
