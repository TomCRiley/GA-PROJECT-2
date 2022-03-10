import React from 'react';
import Dropdown from './Dropdown';
import { getSingleSign } from '../lib/api';

const signs = [
  'Aries',
  'Taurus',
  'Gemini',
  'Cancer',
  'Leo',
  'Virgo',
  'Libra',
  'Scorpio',
  'Sagittarius',
  'Capricorn',
  'Aquarius',
  'Pisces'
];

const DailyHoroscope = () => {
  const [sign, setSign] = React.useState('');
  const [horoscope, setHoroscope] = React.useState(null);

  const getRequestUrl = (starSign) => {
    setSign(starSign);
  };

  React.useEffect(() => {
    if (sign) {
      async function getData(params) {
        const { data } = await getSingleSign(sign);
        setHoroscope(data);
      }

      getData();
    }
  }, [sign]);

  return (
    <div>
      <h1>What's your sign?</h1>
      <Dropdown
        handleClick={getRequestUrl}
        formLabel="Choose a sign"
        buttonText="Send sign"
        action="/"
        signs={signs}
      >
        <option selected value="Click to see options" />
        <option value="Aries" />
        <option value="Taurus" />
        <option value="Gemini" />
        <option value="Cancer" />
        <option value="Leo" />
        <option value="Virgo" />
        <option value="Libra" />
        <option value="Scorpio" />
        <option value="Sagittarius" />
        <option value="Capricorn" />
        <option value="Aquarius" />
        <option value="Pisces" />
      </Dropdown>

      {!!horoscope && <p>{horoscope.description}</p>}
    </div>
    // <section className='dh-section'>
    // <div className='dh-container'>
    // <div className='dh-yesterday'>Yesterday</div>
    // <div className='dh-today'>Today</div>
    // <div className='dh-tomorrow'>Tomorrow</div>
    // </div>
    // </section>
  );
};

export default DailyHoroscope;
