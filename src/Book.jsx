import React, { useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import { toast,  } from 'react-toastify';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Book = () => {
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        guests: 1,
        selectedDate: null, // Set initial state as null for DatePicker
        selectedTime: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleDateChange = (date) => {
        setFormData({
            ...formData,
            selectedDate: date // Update selectedDate in formData state
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission
        const userId = localStorage.getItem('userId');

        const reservationData = {
            userId,
            name: formData.name,
            email: formData.email,
            mobile: formData.mobile,
            guests: formData.guests,
            date: formData.selectedDate ? format(formData.selectedDate, 'yyyy-MM-dd') : null, // Format date here
            time: formData.selectedTime,
        };

        try {
            const response = await axios.post('http://localhost:5050/book/add', reservationData);
            
            toast.success('Reservation successfully made!', {
                position: 'top-center',
                autoClose: 3000 // Auto-close after 3 seconds
            });
            
            setFormData({
                name: '',
                email: '',
                guests: 1,
                selectedDate: null, // Reset DatePicker state
                selectedTime: ''
            });
        } catch (error) {
            console.error('Error booking table:', error);
            toast.error('Reservation Booking Error.', {
                position: 'top-center',
                autoClose: 3000,
            });
        }
    };

    return (
        <>

            <div className='container-fluid res-bg'>


                <div className="row d-flex justify-content-center">
                    <div className="col-md-6 align-content-center text-center">
                        <h1 className='fw-bolder text-white '>Reserve a Table</h1>
                        <h5 className='fw-bolder text-white pb-4'>Select your details and we’ll try get the best seats for you</h5>

                    </div>
                    <div className="col-md-5 text-center" >
                        
                        <form onSubmit={handleSubmit}>
                            {/* Name Input */}
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control input-even-size"
                                    id="floatingName"
                                    name="name" // Add name attribute
                                    placeholder="John Doe"
                                    value={formData.name} // Set value from state
                                    onChange={handleChange} // Use handleChange
                                    required
                                />
                                <label htmlFor="floatingName">Name</label>
                            </div>

                            {/* Email Input */}
                            <div className="form-floating mb-3">
                                <input
                                    type="email"
                                    className="form-control input-even-size"
                                    id="floatingEmail"
                                    name="email" // Add name attribute
                                    placeholder="you@example.com"
                                    value={formData.email} // Set value from state
                                    onChange={handleChange} // Use handleChange
                                    required
                                />
                                <label htmlFor="floatingEmail">Email</label>
                            </div>

                            {/* Party Guests Select Box */}
                            <div className="form-floating mb-3">
                                <select
                                    className="form-control input-even-size"
                                    id="floatingGuests"
                                    name="guests" // Add name attribute
                                    value={formData.guests} // Set value from state
                                    onChange={handleChange} // Use handleChange
                                >
                                    {[1, 2, 3, 4, 5, 6].map(number => (
                                        <option key={number} value={number}>
                                            {number} Person{number > 1 ? 's' : ''}
                                        </option>
                                    ))}
                                </select>
                                <label htmlFor="floatingGuests">Party Guests</label>
                            </div>

                            {/* Date Picker */}
                            <div className="form-floating mb-3">
                                <DatePicker
                                     selected={formData.selectedDate} // Use selectedDate from formData
                                     onChange={handleDateChange} // Use handleDateChange
                                     dateFormat="dd/MM/yyyy"
                                     className="form-control input-even-size"
                                     placeholderText="Select Date" // Optional placeholder
                                     required
                                />
                                <label htmlFor="floatingDatePicker"></label>
                            </div>

                            {/* Time Input */}
                            <div className="form-floating mb-3">
                                <input
                                    type="time"
                                    className="form-control input-even-size"
                                    id="floatingTime"
                                    name="selectedTime" // Add name attribute
                                    value={formData.selectedTime} // Set value from state
                                    onChange={handleChange} // Use handleChange
                                    required
                                />
                                <label htmlFor="floatingTime">Booking Time</label>
                            </div>

                            {/* Submit Button */}
                            <div className="d-grid gap-3">
                                <button className="bg-dark bg-gradient border-0 rounded-2 text-white fw-bold p-3" type="submit">
                                    Book Table
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Book;