import { useEffect, useState } from 'react';
import '../App.css';
import Data from './data';
import TableHeader from './tablehead';
import { useNavigate } from 'react-router-dom';
import { mockapi } from '../mockapi';
export default function Table() {
  const nav=useNavigate();
  const apiurl='/contact/view';
  
  const [datalist,setdatalist]=useState([]);
async function getdata(){
    try  {
        const response = await fetch(mockapi+apiurl)
        if (response.ok) {
          const jsonData = await response.json();
          setdatalist(jsonData);
        } else {
          console.error('Failed to fetch data:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
 
  useEffect(()=>{getdata()},[]);
  
  const deleteitem=(_id)=>{
      fetch(`https://contactlist-bxgk.onrender.com/contact/${_id}`,{
        method:"DELETE",
      }).then(()=>getdata());
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
    )
  }
