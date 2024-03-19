import { useState } from "react";
import './Form.css';


const initialData = {
    username: "",
    email: "",
    numberOfGuests: "4",
    occasion: "None",
    selectedTime: "",
    date: ""
}


function BookingForm({ availableTimes, updateTimes, submitForm }) {
    const [formData, setFormData] = useState(initialData);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData(values => ({...values, [name]: value}));
        if (name === 'date') {
            updateTimes(new Date(value));
        }
      }

    return(
        <section className="reservations-main">
            <div className="reservations">
                <h3>Little Lemon Reservation Form</h3>
                <form onSubmit={(e) => submitForm(e, formData)} className="reservation-form">
                    <label className="name-input" for='textInput'>
                        Name:
                        <input
                        id="textInput"
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                        minLength={3}
                        aria-label="Name"
                        />
                    </label>
                    <label className="email-input" for="emailInput">
                        Email:
                        <input
                        id="emailInput"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        aria-label="Email"
                        />
                    </label>
                    <label className="guest-input" for="guestInput">
                        Guests:
                        <input
                            id="guestInput"
                            type="number"
                            name="numberOfGuests"
                            min={1}
                            max={10}
                            value={formData.numberOfGuests}
                            onChange={handleChange}
                            required
                            aria-label="Number of guests"
                        />
                    </label>
                    <label className="occasion-input" for="occasionInput">
                        Special occasion:
                        <select
                            id="occasionInput"
                            name="occasion"
                            value={formData.occasion}
                            onChange={handleChange}
                            aria-label="Special occasion"
                        >
                            <option value="None">None</option>
                            <option value="Engagement">Engagement</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                        </select>
                    </label>
                    <label className="date-input" for="dateInput">
                        Reservation date:
                        <input
                        id="dateInput"
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        aria-label="Reservation date"
                        />
                    </label>
                    <label className="time-input" for="timeInput">
                        Reservation time:
                        <select
                            id="timeInput"
                            name="selectedTime"
                            required
                            onChange={(event) => setFormData({...formData, selectedTime:event.target.value})}
                            value={formData.selectedTime}
                            aria-label="Resercation time"
                        >
                            {availableTimes && availableTimes.map((time) => (
                                <option key={time} value={time} disabled={formData.selectedTime === time}>{time}</option>
                            ))}
                        </select>
                    </label>
                    <button className="submit-button" type="submit" aria-label="On Click">Reserve</button>
                </form>
            </div>
        </section>
    )
}

export default BookingForm;