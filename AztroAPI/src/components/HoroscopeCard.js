// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { getSingleSign } from '../lib/api';

// const HoroscopeCard = () => {
//   const [sign, setSign] = React.useState(null);
//   const params = useParams();
//   const { name } = params;

//   console.log(params);

//   React.useEffect(() => {
//     const getData = async () => {
//       try {
//         const { data } = await getSingleSign(name);
//         setSign(data);
//         console.log(data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     getData();
//   }, []);
//   // console.log(mood);
//   return (
//     <div className='column is-one-quarter-desktop is-one-third-tablet'>
//       {/*  CARD NAME */}
//       <div className='card'>
//         <div className='card-header'>
//           <h2 className='card-header-title'></h2>
//         </div>
//         {/* MAKE A PARAGRAPH WITH EACH PARAM */}
//         <div className='card-text'>
//           <p>{sign?.date_range}</p>
//           <p>{sign?.current_date}</p>
//           <p>{sign?.description}</p>
//           <p>{sign?.compatibility}</p>
//           <p>you're feeling....{sign?.mood}</p>
//           <p>{sign?.color}</p>
//           <p>{sign?.lucky_number}</p>
//           <p>{sign?.lucky_time}</p>
//           {/* <figure className="image image-is-1by1">
//               <img src={image} alt={name} />
//             </figure> */}
//         </div>
//         {/* <div className="card-content">
//             <h5>{origin}</h5>
//           </div> */}
//       </div>
//     </div>
//   );
// };

// export default HoroscopeCard;
