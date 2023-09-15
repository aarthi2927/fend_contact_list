import { useEffect, useState } from 'react';
import '../App.css';

import Data from './data';
import TableHeader from './tablehead';
import { useNavigate } from 'react-router-dom';

function Table() {
  const nav=useNavigate();
  const [datalist,setdatalist]=useState([]);
    const getdatadetails=async()=>{
        return  await fetch(`/contact/view`)
           .then((res)=>res.json())
           .then((d1)=>setdatalist(d1));
    }
           useEffect(()=>{getdatadetails();
     },[])
   
     const deleteitem=(_id)=>{
      fetch(`/contact/${_id}`,{
        method:"DELETE",
      }).then(()=>getdatadetails());
     }
    return (
      <div> {datalist ?
        <div>
          <h1>Contact List <span><button onClick={()=>nav("/contact/add")}>Add</button></span></h1>
         <table>
    <TableHeader/>
    {datalist.map((d1,index)=>{
     return(
<Data key={index} name={d1.name} age={d1.age} email={d1.email} id={d1._id}
deletebutton={<button onClick={()=>deleteitem(d1._id)}>Delete</button>}
 />
)
})}
 </table> </div>: <h1>Loading</h1> }
 </div>
    );
  }
  export default Table;