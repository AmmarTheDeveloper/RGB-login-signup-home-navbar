const menu = document.querySelector( '.navbar .menu' )
const links = document.querySelector( '.navbar .links' )

menu.onclick = () => {
    menu.classList.toggle( 'active' )
    links.classList.toggle( 'active' )
}