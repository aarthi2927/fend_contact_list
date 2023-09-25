import { useState } from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";

function Add(){
    const [datalist,setdatalist]=useState([]);
const [name,setname]=useState("");
const [age,setage]=useState("");
const [email,setEmail]=useState("");
const nav=useNavigate();

const Adddata=async(e)=>{
    e.preventDefault();
    const newdata={
        name:name,email:email,age:age
    };
    try {
        const res=await fetch(`https://contactlist-bxgk.onrender.com/contact/add`,{
            method:'POST',body:JSON.stringify(newdata),
            headers:{'Content-type':"application/json"}
        })
        if (res.ok) {
            // Data was successfully added, update the data list
            setdatalist([...datalist, newdata]);
            
            // Navigate to the '/contact/view' route
            nav('/contact/view');
          } else {
            console.error('Failed to add data:', res.statusText);
          }
        } catch (error) {
          console.error('Error:', error);
        }
 

}

return(
<div>
    <form onSubmit={Adddata}>
   <input onChange={(e)=>setname(e.target.value)}  name="name" placeholder="Name"/>    <br/>
  <input onChange={(e)=>setEmail(e.target.value)} name={email}placeholder="Email"/>    <br/>
   <input onChange={(e)=>setage(e.target.value)} placeholder="Age"/><br/>
    <button type="submit">add</button>
    </form>
 </div>
    )
}
export default Add;