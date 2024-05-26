import React from 'react'

function Card({ data }) {
// console.log(data[0])
  return (
    <>
      {
        data.map(elem => (
          <div key={elem.id} className='w-72 border border-white text-center rounded-lg'>
            <img src={elem.url} alt="" className='w-[70%] mx-auto text-center'/>
            <p>{elem.title}</p>
          </div>
        ))
      }
    </>
  )



}

export default Card;

// <div key={elem.id} className='w-72 border border-white text-center'>
//               <h5 className='text-3xl'>{elem.title}</h5>
//               <p>{elem.body}</p>
//             </div>