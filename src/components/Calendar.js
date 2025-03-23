import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function CalendarGfg() {
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState('');
    console.log(time,'time');
    return (
        <div className="">
            <div className="fill-form form-box">
                <div id="box-title">
                    <h4 className="text-center">SELECT A PREFERRED DATE AND TIME FOR INSULATION ESTIMATE</h4>
                </div>
                <table class="table timezone">
                    <thead>
                        <tr>
                            <th className="text-center">Morning</th>
                            <th className="text-center">Afternoon</th>
                            <th className="text-center">Evening</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 pt-4 pb-3">
                                <button type="button" value="8.00 AM - 9:00 AM" class="btn btn-primary" onClick={ () => setTime('8.00 AM - 9:00 AM')}>Arrival Window<br />8.00 AM - 9:00 AM (EST)</button>
                            </td>
                            <td class="p-2 pt-4 pb-3">
                                <button type="button" value="11.00 AM - 1:00 PM" class="btn btn-primary" onClick={ () => setTime('11.00 AM - 1:00 PM')}>Arrival Window<br />11.00 AM - 1:00 PM (EST)</button>
                            </td>
                            <td class="p-2 pt-4 pb-3">
                                <button type="button" value="1.00 PM - 4:00 PM" class="btn btn-primary" onClick={ () => setTime('1.00 PM - 4:00 PM')}>Arrival Window<br />1.00 PM - 4:00 PM (EST)</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Calendar minDate={new Date()}
                    onChange={setDate}
                    value={date}
                    selectRange={false}
                />
                <div className="mt-3">
                    <h3>Your Selected:<br></br>
                        <label><span>Date and Time: <span>{date.toDateString()+' '+ time}</span></span></label><br></br>
                    </h3><br></br>
                </div>
            </div>
        </div>
    );
}