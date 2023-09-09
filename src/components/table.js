import { useEffect, useState } from 'react';
import '../App.css';

import Data from './data';
import TableHeader from './tablehead';
function Table() {
    const [datalist,setdatalist]=useState([]);
    const getdatadetails=()=>{
        return  fetch(`/contact/view`)
           .then((res)=>res.json())
           .then((d1)=>setdatalist(d1));
       }
      useEffect(()=>{getdatadetails();
     },[])
    return (
 <table>
    <TableHeader/>
    {datalist.map((d1,index)=>{
     return(
<Data name={d1.name} age={d1.age} email={d1.email}
id={d1.id} />
     )

})}
 </table>  
     
    );
  }
  export default Table;