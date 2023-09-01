const cancel = document.querySelectorAll( '.popup .cancel' )
const numberInput = document.querySelector( 'form input[name=number]' )

if ( numberInput ) {

    numberInput.onfocus = () => {

        if ( numberInput.value.trim().length == 0 ) {

            numberInput.value = 91

        }

    }

}



cancel.forEach( btn => {
    btn.onclick = () => {

        let parent = btn.parentElement.parentElement
        parent.style.display = 'none'

    }
} )