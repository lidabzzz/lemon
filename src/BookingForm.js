import { useState } from "react";
import './Form.css';

function BookingForm() {
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        numberOfGuests: "4",
        occasion: "None",
        selectedTime: "17:00",
        date: ""

    });
    const [availableTimes] = useState(['17:00', '18:00', '19:00', '20:00', '21:00']);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }


      const handleSubmit = (event) => {
        event.preventDefault();
        alert("Form Submitted!")
        setInputs({
        username: "",
        email: "",
        numberOfGuests: "4",
        occasion: "None",
        date: "",
        selectedTime: "17:00"
    });
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
                        value={inputs.username}
                        onChange={handleChange}
                        required
                        />
                    </label>
                    <label className="email-input">
                        Email:
                        <input
                        type="email"
                        name="email"
                        value={inputs.email}
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
                            value={inputs.numberOfGuests}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label className="occasion-input">
                        Special occasion:
                        <select name="occasion" value={inputs.occasion} onChange={handleChange}>
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
                        value={inputs.date}
                        onChange={handleChange}
                        required
                        />
                    </label>
                    <label className="time-input">
                        Reservation time:
                        <select
                            name="selectedTime"
                            required
                            onChange={handleChange}
                            value={inputs.selectedTime}
                        >
                            {availableTimes.map((time) => (
                                <option value={time}>{time}</option>
                            ))}
                        </select>
                    </label>
                    <button className="submit-button" type="submit">Reserve</button>
                </form>
            </div>
        </section>
    )
}

export default BookingForm;