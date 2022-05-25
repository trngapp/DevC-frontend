import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Serial,Name,Place, State, Coordinators, Contact) {
  return { Serial,Name,Place, State, Coordinators, Contact };
}

const rows = [


  createData( "1","FOCUS"," Vijaynagaram",
    "AndhraPradesh",
    "Mr. J.CHANDRASEKHAR RAO",

    "chandujoga1@gmail.com)"),
  createData("2"," PATNA", "Patna" ,"Bihar"," Dr. Rakesh Singh", "rakeshsinghpu@gmail.com"),
    createData("3", "VSS"," MUNGER", "Bihar", "DR. K. N. RAI ","knraimgr@gmail.com"),
    createData("4"," SIWAN" ,"Siwan"," Bihar", "Mr. RAJJEV RANJAN","ranjansw@yahoo.com"),

    createData(  "5", "VKSU", "ARA", "Bihar" ,"Dr Amarendra Narayan Bharat", "bholasmiles@gmail.com"),
        createData(  "6", "BVN", "NEW DELHI"
        ,"Delhi" ,"MRS. PRAGYA NOPANY",

        "bvniaptanveshika@gmail.com"),

        createData(  "7", "HAPPY", "Udhampur",
        "J&amp","K Mr. MineeshGulati", "mineesh.gulati@gmail.com"),

        createData( "9" ,"Ammanni", "Bangalore",
        "Karnataka"
        ,
        "Dr. SarmisthaSahu" ,"sarmistha.sahu@gmail.com"),

        createData( "10","GCG", "Kolhapur", "Maharashtra",

        "Dr. ShivanandMasti",

        "shivanandmasti@yahoo.co.in"),

        createData( "11", "SSB", "Bhilawadi",
        "Maharashtra",
        "Mr. GAJANAN BALOUNDA PATIL", "gajananpatil2004@msn.com"),

        createData( "12", "OHM" ,"Gwalior" ,"MadhyaPradesh",
        "Mr. DEVENDRA SHARMA","dpsharma74@gmail.com"),

        createData( "13", "KIIT", "Odisha", "Odisha", "MRS.RAJASHREE MOHAPATRA",

        "rajashreemohapatra@yahoo.com"),

        createData( "14" ,"SGGS", "CHANDIGARH",
        "Punjab", "MR. M S MARWAHA", "marwahams@yahoo.com"),

        createData( "15" ,"BPS", "PILANI", "Rajasthan",

        "MR. MANORANJAN KUMAR", "mksphysics@gmail.com"),

        createData( "16", "Vibha" ,"Hyderbad",
        "Telangana",
        "Mr. Jitender Singh/Ramesh Babu" ,"jsinghdrdo@gmail.com"),

        createData( "17", "Pt. G. D. V", "Dehradun",
        "Uttarakhand",

        "Mr. Rohit Sharma", "rohitsharmadavdun@gmail.com"),

        createData( "18", "Mitra", "Lucknow", "UP", "Dr. R. K. Mitra", "mitra_rk2005@yahoo.co.in"),
            createData( "19", "SGM", "Kanpur", "UP", "Mr. Amit Kumar Bajpai", "sopanbajpai@gmail.com"),
                createData( "20", "RAMAN", "Agra", "UP", "DR. R. K. AWASTHI", "rakeshawa@gmail.com"),
                    createData( "21", "GO&amp;GO" ,"Auraiya","UP", "MR. BRAJESH DIXIT/Vikas" ,"dixit.brajesh58@gmail.com"),
                        createData( "22", "SAMADHAN" ,"PILIBHEET",
        "UP ","MR. LAXMIKANT SHARMA", "luxmi.urmila@gmail.com"),

        createData( "23", "Janata Vedic" ,"Baraut UP",
        "UP", "Mr Mukul Rathi", "Mukulrathi1@gmail.com"),

        createData( "24", "TAXXILA", "KOLKATA", "WB", "DR. AMIT KUMAR JANA", "akjana4321@gmail.com"),
            createData( "25", "Shishukunj", "Indore", "MP", "Arvind K Pathak", "akp.d401@gmail.com"),
                createData( "26", "Varde" ,"Jaipur", "Rajast", "Ghanshyam Menaria", "gsmenaria6@gmail.com"),


        createData( "27", "HIM", "Darmashala",
        "Himachal Pradesh",

        "Dinesh Sharma", "dineshquiz@gmail.com"),

        createData( "28", "Adarsh ","Balurghat",
        "West Bengal",

        "Nani Gopal Mondol", "Ngmondol78@gmail.com")


];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>S.No</TableCell>
            <TableCell align="right">Name &nbsp;of&nbsp; Anveshika</TableCell>
            <TableCell align="right">Place</TableCell>
            <TableCell align="right">State</TableCell>
            <TableCell align="right">Coordinators&nbsp;Name</TableCell>
            <TableCell align="right">Contact&nbsp;Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Serial}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Serial}
              </TableCell>
              <TableCell align="right">{row.Name}</TableCell>
              <TableCell align="right">{row.Place}</TableCell>
              <TableCell align="right">{row.State}</TableCell>
              <TableCell align="right">{row.Coordinators}</TableCell>
              <TableCell align="right">{row.Contact}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
