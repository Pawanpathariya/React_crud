import { useState } from "react";
import { message } from "antd";
import { Table } from "react-bootstrap";
import axios from "axios";
const Search=()=>{
    const [disdata,setdisdata]=useState([]);
     const [input,setinput]=useState({});

     const handle=(e)=>{     
        let name=e.target.name;     
        let value=e.target.value;     
     setinput(value);
     console.log(input);  
    }
    
    const search=()=>{
        let api=   `http://localhost:3000/cars/?model=${input}`;
        axios.get(api).then((res)=>{ 
            
            if(res.data.length===0){
                message.error("No data found");
            }

            else{
                message.success("data found");
            setdisdata(res.data);
            }
        })
    }

    const dis=disdata.map((item)=>{
        return(
            <tr>
            <td >{item.id}</td>
            <td>{item.make}</td>
            <td>{item.model}</td>
            <td>{item.year}</td>
        </tr>
        )
    })
    return(
        <>
        <div id="cont">
       <div id="display">
Enter Car Name <input type="text" name="modelin" placeholder="Enter car Model" onChange={handle}/> <br />
           <button onClick={search}>Search</button>
        </div>


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
        {dis}
      </tbody>
    </Table>
    </div>
        </>
    )
}
export default Search;