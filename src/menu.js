
function createMenu(){
    const menu=document.createElement('div');
    menu.classList.add('menu')


    menu.appendChild(
        createMenuItem(
            'meat',
            "peparoni, sausage, ham",
            `peppizza.jpg`

        )

    )

    menu.appendChild(
        createMenuItem(
            'Veggie',
            "Spinach, Peppers, Onion",
            `vegpizza.jpg`
        )

    )

    menu.appendChild(
        createMenuItem(
            'White Pie',
            "Ricotta with tomatoes",
            `whitepizza.jpg`
        )

    )

    menu.appendChild(
        createMenuItem(
            'Margaritta',
            "Eggplant, Tomato and Olives",
            `marpizza.jpg`
        )

    )

    
    return menu;

}


function createMenuItem(name, description,source){
    const menuMain=document.createElement('div')
    menuMain.classList.add('menu-Main')

    const pizzaName=document.createElement('h2')
    pizzaName.textContent=name

    const pizzaDescript=document.createElement('h3')
    pizzaDescript.textContent=description

    const pizzaPicture=document.createElement('img')
    pizzaPicture.classList.add('pizzaPicture')
    pizzaPicture.src='/restaurant/dist/images/'+source
 
    menuMain.appendChild(pizzaName)
    menuMain.appendChild(pizzaDescript)
    menuMain.appendChild(pizzaPicture)
   

    return menuMain;

}




function loadMenu(){
    const main = document.getElementById('main')
    main.textContent=""
    main.appendChild(createMenu());
}

export default loadMenu;