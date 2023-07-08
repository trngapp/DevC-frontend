/* eslint-disable */
import React, { useEffect ,useState} from "react";
import Card from "./requestCard.js"
import { Grid, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import axios from "axios"
import Loading from "../loading.js"
import RequestNa from "./requestNA.js";
const GridWrapper = styled(Grid)({
    '.search_wrapper': {
      display: 'flex',
      alignItems: 'center',
    },
  });
  const TextAreaWrapper = styled(Paper)({
    marginLeft: '16px',
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    border:'groove',
    backgroundColor: 'white !important',
    width: 400,

    '.Search_Input': {
      fontSize: '20px',
      padding: '0px 6px',
      width: '100%',
    },
  });
  const CardContainer = styled(Grid)({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 350px)',
    justifyContent: 'space-between',
    marginTop: '3rem',
   // marginLeft:'2rem',
    marginRight:'2rem'
  });
const Request =()=>{

  const [load,setLoad]=useState(true);
        const [arr,setarr]=useState([]);
        useEffect(()=>{
            const value=localStorage.getItem("user");
            axios.get(`https://main--polite-syrniki-ad57c8.netlify.app/.netlify/functions/api/request?from=${value}`).then((result)=>{
                 console.log(result);
                 const Json=result.data;
                 console.log(Json.data);
     var d=[];
     Object.keys(Json).forEach(function(key) {
       d.push(Json[key]);
     });
    // d.push(Json);

    setarr(d);

     console.log(d);

     setTimeout(()=>{
       setLoad(false);
     },1000)



              })
              .catch((err)=>{
                console.log(err);
              })
        },arr)



      const RenderCards =()=>{

        //var arr = [];
        /*Object.keys(Json).forEach(function(key) {
          arr.push(Json[key]);
        });*/
        return(
            <>

           {arr[0]!==undefined} ?
<CardContainer container>
{arr.map(item => <Card name={item?item.first_name:""}  last={item?item.last_name:""} email={item?item.email:""} skill={item?item.skill:""} linkedin={item?item.linkedin:""} twitter={item?item.twitter:""} github={item?item.github:""} date={item?item.date:""}/> )}
    </CardContainer>: null}
            </>
        )
    }
    const content=(
<>
      {arr[0]!==undefined ?  <RenderCards/>: <RequestNa/>}

</>

    )
    return (
           <>
           {load?<Loading/>:
<div>
        <GridWrapper container spacing={2} sx={{ margin:"10px" }}>
        <Grid item xs={10} sm={4} className="search_wrapper">
          <TextAreaWrapper >
            <SearchIcon sx={{ color: 'darkgrey' }} />
            <InputBase
              disabled
              className="Search_Input"
              placeholder="Search by expertise level"
              inputProps={{
                'aria-label': 'Search by Company Position',
              }}
            />
          </TextAreaWrapper>
        </Grid>
        <Grid item xs={12} sm={4} lg={3} className="search_wrapper">
          <Paper
            sx={{ display: 'flex', minWidth: '240px', marginLeft: '16px' }}>
           {/* <Select
              menuPlacement="auto"
              name="Expertise"
              sx={{ fontSize: '20px' }}
             // options={expertiseOptions}
              //value={expertise}
              //onChange={setExpertise}
              //isSearchable={matches}
              classNamePrefix="select"
              placeholder={<span>Filter by Expertise</span>}
           />*/}
          </Paper>
        </Grid>
      </GridWrapper>
{content}
</div>
           }
        </>
    )
}
export default Request;