import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
const Display=()=>{
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
        </tr>
    )
})
    useEffect(()=>{
        getdata();
    },[])

    return(
        <>
        <Table striped style={{width:"60%", marginLeft:"180px"}}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Maker</th>
          <th>Model</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody >
        {ans}
      </tbody>
    </Table>
        </>
    )
}
export default Display;