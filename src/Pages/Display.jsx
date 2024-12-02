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
            <td>{item.make}</td>
            <td>{item.model}</td>
            <td>{item.year}</td>
            <td>{item.price}</td>
        </tr>
    )
})
    useEffect(()=>{
        getdata();
    },[])

    return(
        <>
        <Table striped style={{width:"60%", marginLeft:"180px" ,fontSize:"20px"}}>
      <thead>
        <tr>
          <th>Maker</th>
          <th>Model</th>
          <th>Year</th>
          <th>Price</th>
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