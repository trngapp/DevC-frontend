import React,{useState,useEffect}from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Loading from "../loading.js"
import axios from "axios";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor:"#64b9f7", //theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 18
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, <button style={{width:"50px",height:"30px",borderRadius:"10px"}}>Desc</button>, 4.0),
  createData('Ice cream sandwich', 237, 9.0, <button style={{width:"50px",height:"30px",borderRadius:"10px"}}>Desc</button>, 4.3),
  createData('Eclair', 262, 16.0, <button style={{width:"50px",height:"30px",borderRadius:"10px"}}>Desc</button>,5.0),
  createData('Cupcake', 305, 3.7, <button style={{width:"50px",height:"30px",borderRadius:"10px"}}>Desc</button>, 4.3),
  createData('Gingerbread', 356, 16.0, <button style={{width:"50px",height:"30px",borderRadius:"10px"}}>Desc</button>, 3.9),
  createData('Frozen yoghurt', 159, 6.0, <button style={{width:"50px",height:"30px",borderRadius:"10px"}}>Desc</button>, 4.0),

];

function CustomizedTables() {
  const [load,setLoad]=useState(true);
  const [arr,setArray]=useState([]);
  useEffect(()=>{

    const value=localStorage.getItem("user");
    axios.get(`http://localhost:3336/apply/get?from=${value}`).then((result)=>{
         console.log(result.data);
         setArray(result.data);

      })
      .catch((err)=>{
        console.log(err);
      })







     setTimeout(()=>{
       setLoad(false);
     },1000)
  },arr)

  return (

    <>
    {load?<Loading/> :
    <>
<center><div style={{padding:"20px",marginTop:"45px",width:"500px",borderRadius:"5px",border:"1px solid black",backgroundColor:"#F0F0F0"}}><ProductionQuantityLimitsIcon style={{display:"inline-block"}}/> <h5 style={{display:"inline-block"}}>&nbsp;&nbsp;Application Limit:&nbsp;6</h5></div></center>
    <TableContainer sx={{marginRight:"5px",marginTop:"50px"}}component={Paper}>
      <Table sx={{ minWidth: 700,overflowY:"auto"}} aria-label="customized table">
        <TableHead >
          <TableRow >
            <StyledTableCell><strong>Project Name</strong></StyledTableCell>
            <StyledTableCell /*align="right"*/><strong>Project Email</strong></StyledTableCell>
            <StyledTableCell ><strong>Date</strong></StyledTableCell>
            <StyledTableCell ><strong>Description&nbsp;</strong></StyledTableCell>
            <StyledTableCell ><strong>Status&nbsp;</strong></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {arr.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.project_name}
              </StyledTableCell>
              <StyledTableCell /*align="right"*/>{row.leader_email}</StyledTableCell>
              <StyledTableCell >10/11/22</StyledTableCell>
              <StyledTableCell ><button style={{width:"50px",height:"30px",borderRadius:"10px"}}>Desc</button></StyledTableCell>
              <StyledTableCell >{row.status}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> </>}
    </>
  );
}
/*const CustomizedTables =()=>
{
    return(
        <>
        <h1>hello</h1>
        </>
    )
}*/
export default CustomizedTables;