import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { message } from "antd";
const Update=()=>{
    const [data,mydata]=useState([]);

    const getdata=()=>{
        let api="http://localhost:3000/cars";
        axios.get(api).then((res)=>{
            mydata(res.data);
        })
    }

const ans=data.map((item)=>{
    return(
        <tr>
            <td >{item.id}</td>
            <td>{item.make}</td>
            <td>{item.model}</td>
            <td>{item.year}</td>
            <td ><FontAwesomeIcon icon={faPenToSquare} /></td>
            <td onClick={()=>{deldata(item.id)}}><FontAwesomeIcon icon={faTrash} /></td>
        </tr>
    )
})
    useEffect(()=>{
        getdata();
    })
    
    const deldata=(id)=>{
        let api=`http://localhost:3000/cars/${id}`;
        axios.delete(api).then((res)=>{
        message.success("data deleted");
        })
         }

    return(
        <>
          <Table striped style={{width:"60%", marginLeft:"180px"}}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Maker</th>
          <th>Model</th>
          <th>Year</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody >
        {ans}
      </tbody>
    </Table>
        </>
    )
}
export default Update;