import { useState } from "react";
import './Form.css';

function BookingForm() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }

      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
      }
    return(
        <section className="reservations-main">
            <div className="reservations">
                <h3>Little Lemon Reservation Form</h3>
                <form onSubmit={handleSubmit} className="reservation-form">
                    <label className="name-input">
                        Name:
                        <input
                        type="text"
                        name="username"
                        value={inputs.username || ""}
                        onChange={handleChange}
                        required
                        />
                    </label>
                    <label className="email-input">
                        Email:
                        <input
                        type="email"
                        name="email"
                        value={inputs.email || ""}
                        onChange={handleChange}
                        required
                        />
                    </label>
                    <label className="guest-input">
                        Guests:
                        <input
                            type="number"
                            name="numberOfGuests"
                            min={1}
                            max={10}
                            value={inputs.numberOfGuests || "4"}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label className="occasion-input">
                        Special occasion:
                        <select name="occasion" value={inputs.occasion || "None"} onChange={handleChange}>
                            <option value="None">None</option>
                            <option value="Engagement">Engagement</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                        </select>
                    </label>
                    <label className="date-input">
                        Reservation date:
                        <input
                        type="date"
                        name="date"
                        value={inputs.date || ""}
                        onChange={handleChange}
                        required
                        />
                    </label>
                    <label className="time-input">
                        Reservation time:
                        <select
                        name="selectedTime"
                        value={inputs.selectedTime || "18:00"}
                        onChange={handleChange}
                        required>
                            <option value="17:00">17:00</option>
                            <option value="18:00">18:00</option>
                            <option value="19:00">19:00</option>
                            <option value="20:00">20:00</option>
                            <option value="21:00">21:00</option>
                        </select>
                    </label>
                    <label className="note-input">
                        Notes:
                        <textarea
                        name="notes"
                        maxLength={100}
                        value={inputs.notes || ""}
                        onChange={handleChange}/>
                    </label>
                    <button className="submit-button" type="submit">Reserve</button>
                </form>
            </div>
        </section>
    )
}

export default BookingForm;