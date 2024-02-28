
function Reservation() {
    return(
        <section className="reservations-main">
            <div className="reservations">
                <h3>Little Lemon Reservation Form</h3>
                <form>
                    <label>
                        Name:
                        <input type="text" name="name"/>
                    </label>
                    <label>
                        Number of guests:
                        <input type="number" name="numberOfGuests" min={1} max={10} defaultValue={4}/>
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email"/>
                    </label>
                    <label>
                        Phone number:
                    </label>
                </form>
            </div>
        </section>
    )
}

export default Reservation;