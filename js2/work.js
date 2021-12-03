if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else{
    ready()
}


function ready(){

    var removeCartItemButton = document.getElementsByClassName('fa fa-trash')

    console.log(removeCartItemButton)

    for (var i= 0; i< removeCartItemButton.length;i++){
    var button = removeCartItemButton[i]
    button.addEventListener('click', removeCartItem)
        
    }


    var quantityInputs = document.getElementsByClassName('Quantity')

    for (var i= 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change',quantityChanged)
    }


}






function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event){
    var input = event.target
    if(isNaN(input.value) || input.value <=  0 ){
        input.value = 1
    }
    updateCartTotal()
}








function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('table') [0]
    // var cartRows = cartItemContainer.getElementsByClassName('table-responsive')
    var cartRows = cartItemContainer.getElementsByClassName('align-middle cart')
    var total = 0
       
    for(var i = 0; i < cartRows.length; i++){
        var cartRows = cartRows[i]
        var priceElement = cartRows.getElementsByClassName('price') [0]
        var quantityElement = cartRows.getElementsByClassName('Quantity') [0]
       
        // console.log(priceElement,quantityElement)

   
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
       
// console.log(price *quantity)

        total = total +  (price * quantity)
        }

    // total = Math.round(total * 100) / 100 
   
    document.getElementsByClassName('total-price')[0].innerText = '$' + total
    
}