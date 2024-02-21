function Specials() {
    return(
        <div className="specials">
            <h3>Specials</h3>
            <button>Online Menu</button>
            <div className="special-menu-item">
                <img></img>
                <div>
                    <h6>Greek Salad</h6>
                    <h6 className="price-tag">$12.99</h6>
                </div>
                <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                <p><a>Order a delivery</a></p>
                <i></i>
            </div>
            <div className="special-menu-item">
                <img></img>
                <div>
                    <h6>Bruschetta</h6>
                    <h6 className="price-tag">$5.99</h6>
                </div>
                <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                <p><a>Order a delivery</a></p>
                <i></i>
            </div>
            <div className="special-menu-item">
                <img></img>
                <div>
                    <h6>Lemon Dessert</h6>
                    <h6 className="price-tag">$8.99</h6>
                </div>
                <p>{"This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."} </p>
                <p><a>Order a delivery</a></p>
                <i></i>
            </div>
        </div>
    )
}

export default Specials;
