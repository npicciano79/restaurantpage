//restaurant homepage
function mainHome(){
   
    const home = document.createElement('div')
    home.classList.add('home');

    const chefPic=document.createElement("img")
    chefPic.src="/restaurant/dist/images/chef.jpg"  
    chefPic.alt='Chef'
   
    const home2=document.createElement('h3')
    home2.textContent="The best pizza and italian food"
    const home3=document.createElement('h4')
    home3.textContent="Free delivery"

    home.appendChild(chefPic)
    home.appendChild(home2)
    home.appendChild(home3)

    return home

    
}








function createHome(){

    const main=document.getElementById("main")
    main.textContent=""
    main.appendChild(mainHome());


}


export default createHome;