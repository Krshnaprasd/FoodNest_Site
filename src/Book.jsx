import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

 const Book = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState("");
    return (
        <>

            <div className='container-fluid res-bg'>


                <div className="row d-flex justify-content-center">
                    <div className="col-md-6 align-content-center text-center">
                    <h1 className='fw-bolder text-white '>Reserve a Table</h1>
                        <h5 className='fw-bolder text-white pb-4'>Select your details and we’ll try get the best seats for you</h5>

                    </div>
                    <div className="col-md-5 text-center" >
                        <form>
                            {/* Name Input */}
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control input-even-size"
                                    id="floatingName"
                                    placeholder="John Doe"
                                />
                                <label htmlFor="floatingName">Name</label>
                            </div>

                            {/* Mobile Number Input */}
                            <div className="form-floating mb-3">
                                <input
                                    type="tel"
                                    className="form-control input-even-size"
                                    id="floatingMobile"
                                    placeholder="Mobile No"
                                />
                                <label htmlFor="floatingMobile">Mobile No</label>
                            </div>

                            {/* Party Guests Select Box */}
                            <div className="form-floating mb-3">
                                <select className="form-control input-even-size" id="floatingGuests">
                                    <option value="1">1 Person</option>
                                    <option value="2">2 Persons</option>
                                    <option value="3">3 Persons</option>
                                    <option value="4">4 Persons</option>
                                    <option value="5">5 Persons</option>
                                    <option value="6">6 Persons</option>
                                </select>
                                <label htmlFor="floatingGuests">Party Guests</label>
                            </div>

                            {/* Date Picker */}
                            <div className="form-floating mb-3">
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={(date) => setSelectedDate(date)}
                                    dateFormat="dd/MM/yyyy"
                                    className="form-control input-even-size"
                                    placeholderText="Select Date"
                                />
                                <label htmlFor="floatingDatePicker"></label>
                            </div>

                            {/* Time Input */}
                            <div className="form-floating mb-3">
                                <input
                                    type="time"
                                    className="form-control input-even-size"
                                    id="floatingTime"
                                    value={selectedTime}
                                    onChange={(e) => setSelectedTime(e.target.value)}
                                />
                                <label htmlFor="floatingTime">Booking Time</label>
                            </div>

                            {/* Submit Button */}
                            <div className="d-grid gap-3">
                                <button className="bg-dark bg-gradient border-0 rounded-2 text-white fw-bold p-3" type="button">
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