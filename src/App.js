import {React,useState,useEffect} from 'react'
import Tour from './Tour'
import Tours from './Tours'
import Loading from './Loading'
const url='https://course-api.com/react-tours-project';

function App() {
const [loading,setLoading]=useState(true);
const [tours,setTours]=useState([]);
 
const removeData=(id)=>{
const newtours=tours.filter((tour)=>tour.id!==id);
setTours(newtours);
}
const fetchData=async ()=>{
  setLoading(true);
  try {
  const response=await fetch(url);
  const tours= await response.json();
  setLoading(false);
  setTours(tours);
    
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
    console.log(tours);

}
useEffect(()=>{
fetchData();
},[]);


if(loading) {
  return ( 
  <main>
    <Loading/>
  </main>
  );
 
}
 if(tours.length===0){
   return(<main>
     <div className='title'>
     <h3>No tours left</h3>
     <button  onClick={()=>fetchData()}>Refresh</button>
     </div>
   </main>); 
  }
return ( <main><Tours tours={tours} removeData={removeData}/> </main>);
}



export default App;
