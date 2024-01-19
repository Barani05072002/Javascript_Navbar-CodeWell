const Products = document.getElementById('Products')
const DropDown = document.querySelector('.drop-down')
const Close = document.querySelector('.close')
const MenuBar = document.querySelector('.menu-bar')
const clickFunction = () => {
    if(DropDown.style.display == 'block'){
        console.log('block to none')
        DropDown.style.display = 'none'
    }  
    else
    {
        console.log('none to block')
        DropDown.style.display = 'block'
    }
}
Close.addEventListener('click',clickFunction)
Products.addEventListener('click',clickFunction)
MenuBar.addEventListener('click',clickFunction)
