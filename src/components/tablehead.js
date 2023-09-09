import '../App.css';
function TableHeader() {
    return (
<thead>
    <th>Name</th>
    <th>Email id</th>
    <th>Age</th>
    <th colSpan={2}>Edit / Delete</th>
   </thead> 
     
    );
  }
  export default TableHeader;