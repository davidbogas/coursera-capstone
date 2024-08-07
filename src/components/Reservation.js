import { useNavigate } from "react-router-dom";
import { useReducer, useState, useEffect } from "react";
import { fetchAPI, submitAPI } from "./DateAPI.js";
import { useFormik } from "formik";
import * as Yup from 'yup';

function Reservation() {

    const navigate = useNavigate();

    const [availableTimes, setAvailableTimes] = useState([]);

    function initializeTimes() {
        const date = new Date();
        const times = fetchAPI(date);
        setAvailableTimes(times);
    }

    useEffect(() => {
        initializeTimes();
    }, []);

    function updateTimes(event) {
        const date = new Date(event.target.value);
        const times = fetchAPI(date);
        setAvailableTimes(times);
        formik.handleChange(event);
    }

    const formik = useFormik({
        initialValues: {
            date: new Date().toISOString().split('T')[0],
            time: '',
            numberGuests: '1',
            occasion: '',
        },
        validationSchema: Yup.object({
            date: Yup.date().required('Date is required'),
            time: Yup.string().required('Time is required').oneOf(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'], 'Please select a valid time'),
            numberGuests: Yup.number().required('Number of guests is required').min(1, 'At least one guest is required').max(10, 'Maximum 10 guests are allowed'),
            occasion: Yup.string().required('Occasion is required').oneOf(['Nothing', 'Birthday', 'Anniversary'], 'Please select a valid occasion'),
        }),
        onSubmit: (values) => {
            navigate('/validation', { state: { formData: values } });
        }
    });

    return (
        <section className="reservation">
            <header className="section-header">
                <h2 className="section-title">Make a reservation</h2>
                <h3>Please tell us the date and time you would like to make a reservation.</h3>
            </header>
            <div className="container">
                <div className="form-wrapper">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="date">Date*</label>
                            <input
                            type="date"
                            name="date"
                            id="date"
                            onChange={updateTimes}
                            onBlur={formik.handleBlur}
                            value={formik.values.date}
                            className={formik.touched.date && formik.errors.date ? 'input-error' : ''}
                            />
                            {formik.touched.date && formik.errors.date ? (
                                <p className="form-error">{formik.errors.date}</p>
                            ) : null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="time">Time*</label>
                            <select
                            name="time"
                            id="time"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.time}
                            className={formik.touched.time && formik.errors.time ? 'input-error' : ''}
                            >
                                <option value="Select a time">Select a time</option>
                                {availableTimes.map((time) => {
                                    return <option value={time}>{time}</option>
                                })}
                            </select>
                            {formik.touched.time && formik.errors.time ? (
                                <p className="form-error">{formik.errors.time}</p>
                            ) : null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="numberGuests">Number of guests*</label>
                            <input
                            type="number"
                            name="numberGuests"
                            id="numberGuests"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.numberGuests}
                            className={formik.touched.numberGuests && formik.errors.numberGuests ? 'input-error' : ''}
                            />
                            {formik.touched.numberGuests && formik.errors.numberGuests ? (
                                <p className="form-error">{formik.errors.numberGuests}</p>
                            ) : null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="occasion">Occasion*</label>
                            <select
                            name="occasion"
                            id="occasion"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.occasion}
                            className={formik.touched.occasion && formik.errors.occasion ? 'input-error' : ''}
                            >
                                <option value="Select an occasion">Select an occasion</option>
                                <option value="Nothing">Nothing special</option>
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversary">Anniversary</option>
                            </select>
                            {formik.touched.occasion && formik.errors.occasion ? (
                                <p className="form-error">{formik.errors.occasion}</p>
                            ) : null}
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn">Book table</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Reservation;