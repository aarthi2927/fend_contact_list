import { useEffect, useState } from "react";
import '../App.css';
import { useNavigate, useParams } from "react-router-dom";
export default function Edit(){
    const [datalist,setdatalist]=useState([]);
    const nav=useNavigate();
    const {id}=useParams();
    console.log(id);
    const [data1,setdata1]=useState(null);const getdetail=()=>{
        fetch(`https://contactlist-bxgk.onrender.com/contact/${id}`,{
         method:'GET'})
            .then((res)=>res.json())
            .then((d1)=>setdata1(d1))
            .catch((err)=>console.log(err))
              }
            useEffect(()=>getdetail(),[])
     console.log(data1);
    return(
        <div>
{data1 ? <Editform data1={data1}/>:<h1>loading</h1>
}
        </div>
)
}
export function Editform({data1}){
    const [datalist,setdatalist]=useState([]);
const [name,setname]=useState(data1.name);
const [age,setage]=useState(data1.age);
const [email,setEmail]=useState(data1.email);
const id=data1._id;
const history=useNavigate();
const editdata=async(e)=>{
    e.preventDefault();
    const editdata1={
        name:name,email:email,age:age
    };
      try {
        const response = await fetch(`https://contactlist-bxgk.onrender.com/contact/${id}`, {
          method: 'PUT',
          body: JSON.stringify(editdata1),
          headers: { 'Content-type': 'application/json' },
        });
          if (response.ok) {
          const updatedData = await response.json();
          setname(updatedData.name);
          setEmail(updatedData.email);
          setage(updatedData.age);
          history("/contact/view");
        } else {
          console.error('Failed to update data:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
   console.log(editdata1)
}
return(
<div>
    <form onSubmit={editdata}>
   <input onChange={(e)=>setname(e.target.value)}  name="name" value={name} placeholder="Name"/>    <br/>
  <input onChange={(e)=>setEmail(e.target.value)} name="email" value={email} placeholder="Email"/>    <br/>
   <input name="age" value={age}onChange={(e)=>setage(e.target.value)} placeholder="Age"/><br/>
    <button type="submit" >update</button>
    </form>
 </div>
    )
}

