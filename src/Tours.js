import React from 'react'
import Tour from './Tour'

const Tours = ({tours,removeData}) => {
    return (
       <section>
           <div className='title'>
               <h2>Tour list</h2>
           </div>
           <div className='underline'></div>
           <div>
               {tours.map((tour)=>{
              return <Tour key={tour.id} removeData={removeData}{...tour}/>
               })
               }
           </div>
       </section>
    )
}

export default Tours
