import React from "react";
import { Grid, InputBase, Paper, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import Json from "../home/items.json";
import Card from "../home/card"
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



const Explore=()=>{
    const RenderCards =()=>{
        var arr = [];
        Object.keys(Json).forEach(function(key) {
          arr.push(Json[key]);
        });
        return(
            <>
<CardContainer container>
{arr.map(item => <Card description={item.description} projectLeader={item.projectLeader} openings={item.openings} projectName={item.projectName}/> )}
    </CardContainer>
            </>
        )
    }
    const content=(

            <RenderCards>

            </RenderCards>

    )

    return(
        <>
        <GridWrapper container spacing={2}>
        <Grid item xs={10} sm={4} className="search_wrapper">
          <TextAreaWrapper>
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
    </>
    )
}
export default Explore;