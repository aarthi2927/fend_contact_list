import '../App.css';
function TableHeader() {
    return (
<thead>
    <th>Name</th>
    <th>Age</th>
    <th>Email id</th>
  <th colSpan={2}>Edit / Delete</th>
   </thead> 
     
    );
  }
  export default TableHeader;