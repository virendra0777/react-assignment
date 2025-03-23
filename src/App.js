import React, { useState } from 'react';
import Form from "./components/Form";
import CalendarGfg from "./components/Calendar";

function App() {
  const [value, onChange] = useState(new Date());
  return (
    <div className="App">
      <header className="App-header mt-2 mb-2">
        <h2 className="text-center text-primary"> Receive a free quote and schedule online today! </h2>
      </header>
      <div className="px-5">
        <div className="row mt-5">
          <div className="col-lg-6">
            <Form />
          </div>
          <div className="col-lg-6">
            <CalendarGfg />
          </div>
        </div>
      </div>
      <footer class="bg-body-tertiary text-center text-lg-start">
        <div class="d-grid gap-2 px-5">
          <button class="btn btn-primary" type="button">Request Appointment</button>
        </div>
      </footer>
    </div>
  );
}

export default App;
