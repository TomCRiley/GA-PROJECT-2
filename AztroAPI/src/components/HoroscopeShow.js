// import React from 'react';
// import { useParams } from 'react-router-dom';

// import HoroscopeCard from './HoroscopeCard';

// import { todaysHoroscope } from '../lib/api';

// const HoroscopeShow = () => {
//   const { HoroscopeCard } = useParams();
//   const [sign, setSign] = React.useState(null);
//   // const [day, setDay] = React.useState(null)
//   // const [description, setDescription] = React.useState(null)
//   // const [luckynumber, setLuckyNumber] = React.useState(null)
//   // const [color, setColor] = React.useState(null)

//   React.useEffect(() => {
//     const getData = async () => {
//       try {
//         const { data } = await todaysHoroscope(sign);
//         setSign(data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     getData();
//   }, [sign]);

//   return (
//     <section className="section">
//       <div className="container">
//         {!sign ? (
//           <p>Loading...</p>
//         ) : (
//           <div>
//             <h2 className="title has-text-centered">{sign.name}</h2>
//             <hr />
//             <div className="columns">
//               <div className="column is-half">
//                 <figure className="image">
//                   <img src={sign.sign} alt={sign.name} />
//                 </figure>
//               </div>
//               <div className="column is-half">
//                 <h4 className="title is-4">
//                   <span role="img" aria-label="plate">
//                     🍽
//                   </span>
//                   Tasting Notes
//                 </h4>
//                 <hr />
//                 <p>{sign.origin}</p>
//                 <hr />
//                 <h4 className="title is-4">
//                   <span role="img" aria-label="wave">
//                     👋
//                   </span>
//                   Added By:
//                 </h4>
//                 <hr />
//                 <p>{sign.user.username}</p>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default HoroscopeShow;
