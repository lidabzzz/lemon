import { useReducer } from "react";
import BookingForm from "./BookingForm"
import { fetchAPI,initializeTimes, bookingReducer, submitAPI } from "../../utils/api";
import { useNavigate } from "react-router-dom";

function BookingPage() {
    const navigate = useNavigate();
    const [availableTimes, dispatch] = useReducer(bookingReducer,  initializeTimes(new Date()));

    const updateTimes = (selectedDate) => {
        dispatch({ type: 'SET_AVAILABLE_TIMES', payload: fetchAPI(selectedDate) });
    }

    const submitForm = (e, formData)  => {
        e.preventDefault();
        const result = submitAPI(formData)
        if(result){
            navigate('/confirmed')
        }
    }

    return (
        <BookingForm
            availableTimes={availableTimes}
            updateTimes={updateTimes}
            submitForm={submitForm}
        />
    );
}

export default BookingPage;