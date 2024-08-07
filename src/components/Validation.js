import { useNavigate, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';

function Validation() {

    const location = useLocation();

    const { formData } = location.state || {};

    const parts = formData.date.split('-');

    const date = `${parts[1]}-${parts[2]}-${parts[0]}`;

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            date: formData.date,
            time: formData.time,
            numberGuests: formData.numberGuests,
            occasion: formData.occasion,
            name: '',
            email: '',
            terms: false,
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email('Email is invalid').required('Email is required'),
            terms: Yup.boolean().required('Terms is required').oneOf([true], 'Please accept the Terms and Conditions'),
        }),
        onSubmit: (values) => {
            console.log(values);
            navigate('/confirmation', { state: { formData: values } });
        }
    });

    return (
        <section className="validation">
            <header className="section-header">
                <h2 className="section-title">Confirm your information</h2>
                <h3>Please review your information before making a reservation.</h3>
            </header>
            <div className="container">
                <div className="data-wrapper">
                    <h2 className="data-title">Date:</h2>
                    <p className="data-value">{date}</p>
                    <h2 className="data-title">Time:</h2>
                    <p className="data-value">{formData.time}</p>
                    <h2 className="data-title">Number of guests:</h2>
                    <p className="data-value">{formData.numberGuests} {formData.numberGuests > 1 ? 'people' : 'person'}</p>
                </div>
                <div className="form-wrapper" style={{ paddingTop: '1rem' }}>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="form-group">
                            <input type="hidden" name="date" value={formData.date} />
                            <input type="hidden" name="time" value={formData.time} />
                            <input type="hidden" name="numberGuests" value={formData.numberGuests} />
                            <label htmlFor="name">Name*</label>
                            <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                            className={formik.touched.name && formik.errors.name ? 'input-error' : ''}
                            />
                            {formik.touched.name && formik.errors.name ? (
                                <p className="form-error">{formik.errors.name}</p>
                            ) : null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email*</label>
                            <input
                            type="email"
                            name="email"
                            placeholder="Your email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            className={formik.touched.email && formik.errors.email ? 'input-error' : ''}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <p className="form-error">{formik.errors.email}</p>
                            ) : null}
                        </div>
                        <div className="form-checkbox">
                            <input
                            type="checkbox"
                            name="terms"
                            id="terms"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.terms}
                            className="check"
                            />
                            <label htmlFor="terms" className="check-label">I agree to the Terms and Conditions*</label>
                        </div>
                        {formik.touched.terms && formik.errors.terms ? (
                            <div className="form-checkbox">
                                <p className="form-error">{formik.errors.terms}</p>
                            </div>
                        ) : null}
                        <div className="form-group">
                            <button type="submit" className="btn">Confirm</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Validation;