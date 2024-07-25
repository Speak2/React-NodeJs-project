import React from 'react'; 

const MiddleRight = () => {
  return (
    <div className="middle-right">
      <div className="availability-box">
        <h3>Add dates for prices</h3>
        <div className="date-inputs">
          <div className="date-input">
            <label htmlFor="check-in">CHECK-IN</label>
            <input type="text" id="check-in" placeholder="Add date" />
          </div>
          <div className="date-input">
            <label htmlFor="check-out">CHECKOUT</label>
            <input type="text" id="check-out" placeholder="Add date" />
          </div>
        </div>
        <div className="guest-select">
          <label htmlFor="guests">GUESTS</label>
          <select id="guests">
            <option>1 guest</option>
            <option>2 guests</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <button className="check-button">Check availability</button>
      </div>
    </div>
  );
};

export default MiddleRight;
