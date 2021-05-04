import {React,useState} from 'react'

const Tour = ({id,name,info,image,price,removeData}) => {
    const [readMore,setReadMore]=useState(false);
    return (
        <article className='single-tour'>
            <div >
                <img src={image} alt="single-tour"/>
            </div>
            <footer>
                <div className='tour-info'>
                <h4>{name}</h4>
                <h4 className='tour-price'>${price}</h4>
                </div>
              <div>
                  <p>{info}</p>
                <p>{readMore?info:`${info.substring(0,200)}...`}</p>
              <button  onClick={()=>{
                  setReadMore(!readMore)
              }}>{readMore?'show less':'read more'}</button>
              <button className='delete-btn' onClick={()=>removeData(id)}>Not Interested</button>
              </div>  
            </footer>

        </article>
    )
}

export default Tour
