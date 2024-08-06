import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';

function Reservation() {

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            date: new Date().toISOString().split('T')[0],
            time: '',
            numberGuests: '1',
        },
        validationSchema: Yup.object({
            date: Yup.string().required('Date is required'),
            time: Yup.string().required('Time is required').oneOf(['7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM'], 'Please select a valid time'),
            numberGuests: Yup.number().required('Number of guests is required').min(1, 'At least one guest is required').max(10, 'Maximum 10 guests are allowed'),
        }),
        onSubmit: (values) => {
            console.log(values);
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
                            onChange={formik.handleChange}
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
                                <option value="Select a time">Select an hour</option>
                                <option value="7:00 PM">7:00 PM</option>
                                <option value="7:30 PM">7:30 PM</option>
                                <option value="8:00 PM">8:00 PM</option>
                                <option value="8:30 PM">8:30 PM</option>
                                <option value="9:00 PM">9:00 PM</option>
                                <option value="9:30 PM">9:30 PM</option>
                                <option value="10:00 PM">10:00 PM</option>
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
                            <button type="submit" className="btn">Book table</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Reservation;