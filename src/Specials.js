function Specials() {
    return(
        <section className="specials-main">
            <div className="specials-top">
                <h3 className="specials">Specials</h3>
                <button>Online Menu</button>
            </div>
            <div className="special-menu-items">
                <div className="special-menu-item">
                    <img class="specials-image" src="/images/greeksalad.jpeg" alt="Greek Salad"/>
                    <div className="specials-h4">
                        <h4 className="specials-item-title">Greek Salad</h4>
                        <h4 className="price-tag">$12.99</h4>
                    </div>
                    <div className="specials-text">
                    <p className="specials-description">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                <p className="order-link">Order a delivery</p>
                    <img src="/images/Union.svg" alt=""/>
                </div>
            </div>
            <div className="special-menu-item">
                <img className="specials-image" src="/images/bruschetta.jpeg" alt="bruschetta"/>
                <div className="specials-h4">
                    <h4 className="specials-item-title">Bruschetta</h4>
                    <h4 className="price-tag">$5.99</h4>
                </div>
                <div className="specials-text">
                <p className="specials-description">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                <p className="order-link">Order a delivery</p>
                <img src="/images/Union.svg" alt=""/>
                </div>
            </div>
            <div className="special-menu-item">
            <img className="specials-image" src="/images/lemon-cake.jpeg" alt="lemon cake"/>
                <div className="specials-h4">
                    <h4 className="specials-item-title">Lemon Dessert</h4>
                    <h4 className="price-tag">$8.99</h4>
                </div>
                <div className="specials-text">
                <p className="specials-description">This comes straight from grandma&apos;s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                <p className="order-link">Order a delivery</p>
                <img src="/images/Union.svg" alt=""/>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Specials;
