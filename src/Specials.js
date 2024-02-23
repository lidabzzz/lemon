function Specials() {
    return(
        <section className="specials-main">
            <div className="specials-top">
                <h3 className="specials">Specials</h3>
                <button>Online Menu</button>
            </div>
            <div className="special-menu-items">
                <div className="special-menu-item">
                    <img class="specials-image" src="/images/greek salad.jpeg" alt="greek-salad-image"/>
                    <div className="specials-h4">
                        <h4 className="specials-item-title">Greek Salad</h4>
                        <h4 className="price-tag">$12.99</h4>
                    </div>
                    <div className="specials-text">
                    <p className="specials-description">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                <p className="order-link"><a>Order a delivery</a></p>
                <img src="/images/Union.svg"/>
                </div>
            </div>
            <div className="special-menu-item">
                <img className="specials-image" src="/images/bruschetta.jpeg" alt="bruschetta image"/>
                <div className="specials-h4">
                    <h4 className="specials-item-title">Bruschetta</h4>
                    <h4 className="price-tag">$5.99</h4>
                </div>
                <div className="specials-text">
                <p className="specials-description">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                <p className="order-link"><a>Order a delivery</a></p>
                <img src="/images/Union.svg"/>
                </div>
            </div>
            <div className="special-menu-item">
            <img className="specials-image" src="/images/lemon-cake.jpeg" alt="lemon cake image"/>
                <div className="specials-h4">
                    <h4 className="specials-item-title">Lemon Dessert</h4>
                    <h4 className="price-tag">$8.99</h4>
                </div>
                <div className="specials-text">
                <p className="specials-description">{"This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."} </p>
                <p className="order-link"><a>Order a delivery</a></p>
                <img src="/images/Union.svg"/>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Specials;
