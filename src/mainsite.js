import createHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";



function createHeader(){
    const header = document.createElement('header');
    header.classList.add('header')

    const restaurantName = document.createElement('h1')
    restaurantName.classList.add('restaurant-name');
    restaurantName.textContent=`Lucielle and Jo's`
    const restaurantDescription=document.createElement('h2')
    restaurantDescription.classList.add('restaurant-descript')
    restaurantDescription.setAttribute('id','h2')
    restaurantDescription.textContent=`St. Augustine's finest Italian Food`
    header.appendChild(restaurantName)
    header.appendChild(restaurantDescription)
    header.appendChild(createNav());

    return header;

}


function createNav(){
    const navbar=document.createElement('nav')
   
    //create homebutton for nav menu
    const homeButton=document.createElement('button')
    homeButton.textContent='Home'
    homeButton.classList.add('nav_button')
    homeButton.addEventListener('click',(e)=>{
        if (e.target.classList.contains('active')) return;
        setActiveButton(homeButton)
        createHome()
    })

    //create menu for nav menu
    const menuButton=document.createElement('button')
    menuButton.textContent="Menu"
    menuButton.classList.add('nav_button')
    menuButton.addEventListener('click',(e)=>{
        if (e.target.classList.contains('active')) return;
        setActiveButton(menuButton)
        loadMenu()
        
    })

    //create contact nav menu
    const contactButton=document.createElement('button')
    contactButton.textContent='Contact Us'
    contactButton.classList.add('nav_button')
    contactButton.addEventListener('click',(e)=>{
        if (e.target.classList.contains('active')) return;
        setActiveButton(contactButton)
        loadContact()

    })

    navbar.appendChild(homeButton)
    navbar.appendChild(menuButton)
    navbar.appendChild(contactButton)

    return navbar;
    
    

}

function setActiveButton(button){
    const buttons=document.querySelectorAll('.nav_button')

    buttons.forEach((button)=>{
        if (button!==this){
            button.classList.remove('active');
        }
    })
    button.classList.add('active');

}



//create main body 
function createBody(){
    const main = document.createElement('main');
    main.classList.add('main');
    main.setAttribute('id',"main");
    return main;

}



function createFooter(){


}




function siteinit(){

    const content=document.getElementById('content');
    content.appendChild(createHeader());
    content.appendChild(createBody());

    setActiveButton(document.querySelector(".nav_button"));
    createHome();



}

export default siteinit;