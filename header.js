function header() {


    // return your html component here
    //Make sure to give input search box id as ""


    return `<div class="header">

    <div class="header-line1">

    <div id="language">
        <h4>English $</h4>
    </div>

    <div id="sign_in">
        <h4>Sign in/ Sign Up</h4>
    </div>

    </div>

    <div class="header-line2">

        <div class="header-line2-left">
            <div id="header-line2-left-left">
                <h3>ANTHROPOLOGIE</h3>
            </div>
            <div id="header-line2-left-right">
                <h3>anthro-living-home</h3>
            </div>
           
        </div>

<!-- left part ends -->

        <div class="header-line2-right">
            <div id="header-line2-right-search-bar">
               <input placeholder="search anthropologie">
            </div>
            <div id="header-line2-right-cart">

               <div><h2 id="cart_count" style="color:greenyellow;
                background-color: black;">0</h2></div>
               <div>
                   <img src="https://w7.pngwing.com/pngs/657/152/png-transparent-shopping-bags-trolleys-shopping-cart-shopping-cart-rectangle-logo-shopping-bags-trolleys.png">
            
               </div>
            </div>
           
        </div>

        <!-- right part ends -->

    </div>


    <div class="header-line3">

        <ul>
            <li><a href="#">New!</a>
                <ul class="dropdown">
                    <li><a href="#">Accessories</a></li>
                    <li><a href="#">Beauty & Wellness</a></li>
                    <li><a href="#">Clothing</a></li>
                    <li><a href="#">Dresses</a></li>
                    <li><a href="#">Home & Furniture</a></li>
                    <li><a href="#">Plus</a></li>
                    <li><a href="#">Shoes</a></li>
                </ul>
            </li>
            <li><a href="#">Dresses</a>
                <ul class="dropdown">
                    <li><a href="#">Shop All Dresses</a></li>
                    <li><a href="#">New!</a></li>
                    <li><a href="#">Occassion & Party Dresses</a></li>
                    <li><a href="#">Lounge & Casual Dresses</a></li>
                    <li><a href="#">Formal Dresses</a></li>
                    <li><a href="#">Maxi Dresses</a></li>
                    <li><a href="#">Mini & Tunic Dresses</a></li>
                    <li><a href="#">Midi Dresses</a></li>
                    <li><a href="#">Petite Dresses</a></li>
                    <li><a href="#">Plus Dresses</a></li>
                </ul>
            </li>
            <li>
                <a href="#">Clothing</a>
                <ul class="dropdown">
                    <li><a href="#">Shop All Clothing</a></li>
                    <li><a href="#">New!</a></li>
                    <li><a href="#">Top-Rated</a></li>
                    <li><a href="#">Activewear</a></li>
                    <li><a href="#">Dresses</a></li>
                    <li><a href="#">Intimates & Lingerie</a></li>
                    <li><a href="#">Jackets</a></li>
                    <li><a href="#">Jeans</a></li>
                    <li><a href="#">Jumpsuits</a></li>
                    <li><a href="#">Pants</a></li>
                    <li><a href="#">Petites</a></li>
                    <li><a href="#">Plus</a></li>
                    <li><a href="#">Sets</a></li>
                    <li><a href="#">Shorts</a></li>
                    <li><a href="#">Skirts</a></li>
                    <li><a href="#">Sleepwear</a></li>
                    <li><a href="#">Sweaters</a></li>
                    <li><a href="#">Swimwear</a></li>
                </ul>
            </li>
            <li><a href="#">Shoes</a>
                <ul class="dropdown">
                    <li><a href="#">Shop All Shoes</a></li>
                    <li><a href="#">New!</a></li>
                    <li><a href="#">Boots & Booties</a></li>
                    <li><a href="#">Flats</a></li>
                    <li><a href="#">Heels</a></li>
                    <li><a href="#">Mules & Clogs</a></li>
                    <li><a href="#">Sandals</a></li>
                    <li><a href="#">Slippers</a></li>
                    <li><a href="#">Sneakers</a></li>
                  
                </ul>
            </li>
            <li><a href="#">Accessories</a>
                <ul class="dropdown">
                    <li><a href="#">Shop All Accessories</a></li>
                    <li><a href="#">New!</a></li>
                    <li><a href="#">Top-Rated</a></li>
                    <li><a href="#">Bags & Small Accessories</a></li>
                    <li><a href="#">Beits</a></li>
                    <li><a href="#">Hair Accessories</a></li>
                    <li><a href="#">Hats</a></li>
                    <li><a href="#">Jewelry</a></li>
                    <li><a href="#">Scarves & Kimonos</a></li>
                    <li><a href="#">Socks & Legwear</a></li>
                    <li><a href="#">Sunglasses & Reading Glasses</a></li>
                    <li><a href="#">Travel & Tech</a></li>
                </ul>
            </li>
            <li><a href="#">Home & Furniture</a>
                <ul class="dropdown">
                    <li><a href="#">Explore All Home & Furniture</a></li>
                    <li><a href="#">New!</a></li>
                    <li><a href="#">Bath</a></li>
                    <li><a href="#">Bedding</a></li>
                    <li><a href="#">Candles</a></li>
                    <li><a href="#">Decor</a></li>
                    <li><a href="#">Furniture</a></li>
                    <li><a href="#">Kids</a></li>
                    <li><a href="#">Kitchen & Dinning</a></li>
                    <li><a href="#">Outdoor</a></li>
                    <li><a href="#">Stationery</a></li>
                    <li><a href="#">Sale Home & Furniture</a></li>
                    <li><a href="#">Explore Terrain</a></li>
                </ul>
            </li> 
            <li><a href="#">Beauty & Wellness</a>
                <ul class="dropdown">
                    <li><a href="#">Shop All Beauty & Wellness</a></li>
                    <li><a href="#">New!</a></li>
                    <li><a href="#">Top-Rated</a></li>
                    <li><a href="#">Bath & Body</a></li>
                    <li><a href="#">Caandles & Home Fragrance</a></li>
                    <li><a href="#">Hair Care</a></li>
                    <li><a href="#">Makeup</a></li>
                    <li><a href="#">Nails</a></li>
                    <li><a href="#">Perfume</a></li>
                    <li><a href="#">Skincare</a></li>
                    <li><a href="#">Sun Care</a></li>
                    <li><a href="#">The Wellness Shop</a></li>
                    <li><a href="#">Tools & Brushes</a></li>
                    <li><a href="#">Workout Geaar</a></li>
                    <li><a href="#">Sale Beauty & Wellness</a></li>
                </ul>
            </li>
            <li><a href="#">Weddings</a>
              <ul class="dropdown">
                    <li><a href="#">Shop All Weddings</a></li>
                    <li><a href="#">New</a></li>
                    <li><a href="#">Bride</a></li>
                    <li><a href="#">Bridesmaids & Bridal Party</a></li>
                    <li><a href="#">Mother of the Bride</a></li>
                    <li><a href="#">Formal Dresses</a></li>
                    <li><a href="#">Plus</a></li>
                    <li><a href="#">Shoes & Accessories</a></li>
                </ul>
            </li>
            <li><a href="#">Gifts & Candles</a>
                <ul class="dropdown">
                    <li><a href="#">Shop All Gifts & Candles</a></li>
                    <li><a href="#">The Mother's Day Gift Shop</a></li>
                    <li><a href="#">Candles</a></li>
                    <li><a href="#">Home Gifts</a></li>
                    <li><a href="#">Gifts by Recipient</a></li>
                    <li><a href="#">Top-Rated Gifts</a></li>
                    <li><a href="#">Gifts Cards</a></li>
                    <li><a href="#">Gift Ideas</a></li>
                </ul>
            </li>
            <li><a href="#">Sale</a>
                <ul class="dropdown">
                    <li><a href="#">Shop all Sale</a></li>
                    <li><a href="#">Freshly Cut</a></li>
                    <li><a href="#">Accessories</a></li>
                    <li><a href="#">Beauty & Wellness</a></li>
                    <li><a href="#">Clothing</a></li>
                    <li><a href="#">Home & Furniture</a></li>
                    <li><a href="#">Petites</a></li>
                    <li><a href="#">Plus</a></li>
                    <li><a href="#">Shoes</a></li>
                </ul>
            </li>
        </ul>

    </div>
    
    </div>
`;
 
}
export default header