
function createContact(){
    const menu=document.createElement('div')
    menu.classList.add('contact_menu')

    //create phone number and title element
    const phoneInfo=document.createElement('div')
    phoneInfo.classList.add('menu_phoneInfo')
    const phoneTitle=document.createElement('h2')
    phoneTitle.textContent='Contact us at:'
    const phoneNumber=document.createElement('h3')
    phoneNumber.textContent="1(234)567-8901"
    const addTitle=document.createElement('h2')

    const restaurantLocation=document.createElement('img')
    restaurantLocation.src='/restaurant/dist/images/map.jpg'  
    restaurantLocation.classList.add('location') 


    phoneInfo.appendChild(phoneTitle)
    phoneInfo.appendChild(phoneNumber)

    menu.appendChild(phoneInfo)
    menu.appendChild(restaurantLocation)






    return menu;


}












function loadContact(){
    const main=document.getElementById('main')
    main.textContent=""
    main.appendChild(createContact())

}

export default loadContact;