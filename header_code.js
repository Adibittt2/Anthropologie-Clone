document.querySelector("#header-line2-right-cart").addEventListener("click",cart);

    function cart(){

        // alert(" sfs");
        window.location.href= "cart.html";
    }

    var  cart_array = JSON.parse(localStorage.getItem("anth_products")); 

    document.querySelector("#cart_count").innerHTML = cart_array.length;
   

document.querySelector("#header-line2-left-left").addEventListener("click",home);

function home(){

    window.location.href = "home.html";
}

document.querySelector("#sign_in").addEventListener("click",sign);

function sign(){

    window.location.href = "login.html";
}