import { useNavigate } from 'react-router-dom';
import '../App.css';
function Data({name,email,age,id,deletebutton}) {
 console.log(name,email,age,id);
 const nav=useNavigate(); 
    return (
      <tbody >
      <tr key={id}>
        <td>{name}</td>
         <td>{age}</td>
         <td>{email}</td>
         <td><button onClick={()=>{nav(`/contact/${id}`)}}>Edit</button></td>
         <td>{deletebutton}</td>
         </tr>
           </tbody>
    
     
    );
  }
  export default Data;
  /*
  <div>
     <h1>Contact list</h1>
       <table>
<th><td>id</td><td>Name</td><td>Email</td><td>Age</td></th>
<tbody>
    <tr>
    <td>id</td><td>{name}</td><td>{email}</td><td>{age}</td>
    </tr>
</tbody>
       </table>
       
       </div>
  
  */