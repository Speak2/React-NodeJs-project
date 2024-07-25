import React, { useState } from 'react';


const CalendarPopup = () => {
  const [activeTab, setActiveTab] = useState('dates');
  const [currentMonth, setCurrentMonth] = useState('July 2024');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="calendar-popup" style={{ display: 'none' }}>
      <div className="calendar-header">
        <button
          className={`tab ${activeTab === 'dates' ? 'active' : ''}`}
          onClick={() => handleTabClick('dates')}
          data-tab="dates"
        >
          Dates
        </button>
        <button
          className={`tab ${activeTab === 'months' ? 'active' : ''}`}
          onClick={() => handleTabClick('months')}
          data-tab="months"
        >
          Months
        </button>
        <button
          className={`tab ${activeTab === 'flexible' ? 'active' : ''}`}
          onClick={() => handleTabClick('flexible')}
          data-tab="flexible"
        >
          Flexible
        </button>
      </div>
      <div className="calendar-content">
        <div className="month-navigation">
          <button className="prev-month" onClick={() => {/* handle previous month */}}>&lt;</button>
          <span className="current-month">{currentMonth}</span>
          <button className="next-month" onClick={() => {/* handle next month */}}>&gt;</button>
        </div>
        <div className="calendar-grid">
          Calendar days will be dynamically inserted here
        </div>
      </div>
      <div className="flexible-options">
        <button className="exact-dates">Exact dates</button>
        <button className="flexible-date" data-days="1">± 1 day</button>
        <button className="flexible-date" data-days="2">± 2 days</button>
        <button className="flexible-date" data-days="3">± 3 days</button>
        <button className="flexible-date" data-days="7">± 7 days</button>
        <button className="flexible-date" data-days="14">± 14 days</button>
      </div>
    </div>
  );
};

export default CalendarPopup;
