const menuicon=document.querySelector('#menu-icon');
const navlink=document.querySelector('.nav');
menuicon.onclick=()=>{
    navlink.classList.toggle('active')
}