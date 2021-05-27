document.getElementsByClassName('button-placeOrder')[0].addEventListener('click', purchaseClicked);




/*function checkEmptyFields(){
    if ( name != null ) {
        if ( email != null ) {
            if ( creditCardNo != null ) {
                if ( mobileNo != null ) {
                    return;
                    
                }else{
                    alert('Mobile Number Field is Empty!');
                }
            }else{
                alert('Credit Card Field Is Empty!');
            }
        }else{
            alert('Email Field Is Empty!');
        }
    }else{
        alert('Name Field Is Empty!')
    }
}*/

var quantityInputs = document.getElementsByClassName('cart-quantity-input');
for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener('change', quantityChanged);
}


var addToCartButtons = document.getElementsByClassName('shop-item-button');
for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    button.addEventListener('click', addToCartClicked);
}





function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateCartTotal();
}

function addToCartClicked(event) {
    var button = event.target;
    var shopItem = button.parentElement.parentElement;
    var title = shopItem.getElementsByClassName('item-title')[0].innerText;
    var price = shopItem.getElementsByClassName('item-price')[0].innerText;
    var imageSrc = shopItem.getElementsByClassName('item-image')[0].src;
    addItemToCart(title, price, imageSrc);
    updateCartTotal();
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div');
    cartRow.classList.add('cart-row');
    var cartItems = document.getElementsByClassName('cart-items')[0];
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title');
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart');
            return;
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
        </div>`;
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged);
}

function updateCartTotal() {
    var total = 0;
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart-price')[0];
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        var price = parseFloat(priceElement.innerText.replace('$', ''));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('cart-result-price')[0].innerText = '$' + total;
}


function purchaseClicked() {
    var name = document.getElementById('customer-name').value;
    var email = document.getElementById('customer-email').value;
    var creditCardNo = document.getElementById('customer-creditcard').value;
    var mobileNo = document.getElementById('customer-mobileno').value;
    
    
    alert('Thank You For Purchasing..! ' + name + email + creditCardNo + mobileNo);
    var cartItems = document.getElementsByClassName('cart-items')[0];
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild);
    }
    updateCartTotal();
}