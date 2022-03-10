import React from 'react';

const DailyHoroscope = () => {
  return (
    <section className='dh-section'>
      <div className='dh-container'>
        <div className='dh-yesterday'>Yesterday</div>
        <div className='dh-today'>Today</div>
        <div className='dh-tomorrow'>Tomorrow</div>
      </div>
    </section>
  );
};

export default DailyHoroscope;
