/* eslint-disable */
import React,{useState,useContext,useEffect} from "react"
import { Card } from '@mui/material';
import { Grid, InputLabel } from '@mui/material';
import { Box } from '@mui/material';
import { useForm, Controller } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {Typography}  from '@mui/material';
import PsychologyIcon from '@mui/icons-material/Psychology';
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';
import Select from '@mui/material/Select';
import PopUp from "./card.js"
import axios from "axios"
import Success from "./card.js"
import Error from "./cardError.js"
import Info from "./infoCard.js"
import {InfoContext} from "./context.js"
//import {useNavigate} from "react-router-dom"
import { CircleSpinnerOverlay, FerrisWheelSpinner } from 'react-spinner-overlay'

const Create=()=>{
   /* const Open=()=>{
        console.log(Card);
        setpop(Card.show);

    }*/
 const [pop,setpop]=useState(false);
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();
    useEffect(()=>{
        document.title="Create-Welcome!"
     })
 
    const {open,setopen} = useContext(InfoContext);
    const [OT, setOT] = useState('');
    const [PT, setPT] = useState('');
    const [workplace,setWorkplace]=useState('');
    const [expertise,setExpertise]=useState('');

    const [sub,setsub]=useState(false);
    const [done,setdone]=useState(false);
    const [error,seterror]=useState(false);
    //const navigate =useNavigate();
    const [errorMessage,seterrorMessage]=useState("");
    const Type0 = [
        {
            value: 'Remote',
            label: 'Remote',
        },
        {
            value: 'On-Site',
            label: 'On-Site',
        },
        {
            value: 'Hybrid',
            label: 'Hybrid',
        },]
        const Type2 = [

            {
                value: 1,
                label: '1',
            },
            {
                value: 2,
                label: '2',
            },
            {
                value: 3,
                label: '3',
            },

            {
                value: 4,
                label: '4',
            },
            {
                value: 5,
                label: '5',
            },
            {
                value: 6,
                label: '6',
            },
        ]

        const Type1 = [
            {
                value: 'Web',
                label: 'Web-Development',
            },
            {
                value: 'App',
                label: 'App-Development',
            },
            {
                value: 'Cyber',
                label: 'Cyber-Security',
            },
            {
                value: 'AnalysisD',
                label: 'Data-Analysis',
            },
            {
                value: 'IOThings',
                label: 'IOT',
            },
            {
                value: 'AIntel',
                label: 'Artificial Intelligence',
            },
        ];
        const Type3=[
            {
                value:"Beginner",
                label:"Beginner"
            }
            ,{
                value:"Intermediate",
                label:"Intermediate"
            }
            ,{
                value:"Advance",
                label:"Advance"
            }
        ]
        const handleWorkplace = (event) => {
            console.log(event.target.value);
            setWorkplace(event.target.value);
        };
        const handleOpening  = (event) => {
            setOT(event.target.value);
        };

        const handleProject = (event) => {
            setPT(event.target.value);
        };
        const handleExpertise = (event) => {
            setExpertise(event.target.value);
        };
        const onsubmit = (event) => {

console.log(event);
          const email=localStorage.getItem("user");

            const form =event;
            form.leaderEmail=email;
            setsub(true);
             console.log(form);
            axios.post('https://main--polite-syrniki-ad57c8.netlify.app/.netlify/functions/api/creating',form,
            {withCredentials:true}).then((res)=>{

             console.log(res);
             setTimeout(()=>{
                //setLoading(false);
                //navigate("/");
               setsub(false);
               setdone(true);
              // navigate("/");
               },3000)


             setdone(false);


        }).catch(error=>{
            console.log(error.response.data);


     setTimeout(()=>{
     //setLoading(false);
     setsub(false);
seterrorMessage(error.response.data);
     seterror(true);
     },3000)

     seterror(false);
     seterrorMessage("");
        })




        }

        const infoclick=()=>{
            setopen(true);
        }

    return (

        <>
        { done===true? <Success/>:null}
        {error===true?<Error message={errorMessage}/>:null}
        {open===true?<Info/>:null}
{pop==true?<PopUp/>:null}
         <div style={{backgroundColor:"#F5F5F5"}}>

         <center>
         <CircleSpinnerOverlay
      　　loading={sub}
       overlayColor="rgba(0,153,255,0.2)"
      />
         <br/>
         <Card  sx={{ width: { xs: '100%', md: 500 }, backgroundColor: "white",padding:"20px",paddingRight:"26px" }} >
        <PsychologyIcon sx={{display:"inline",color:"#00BFFF",fontSize:"50px"}}/> <Typography style={{fontWeight:"bold",fontFamily:"sans-serif",display:"inline",fontSize:"27px",marginTop:"2px"}}>Find a great hire, fast</Typography>
        <br/>

<div onClick={infoclick}  style={{cursor:"pointer",textAlign:"center",borderRadius:"50%",height:"90px",width:"90px",backgroundColor:"#F0F8FF"}}><center>  <WbIncandescentIcon sx={{width:"4vh",height:"4vh",color:"#007FFF",marginTop:"22px"}}/>  <Typography style={{fontWeight:"bold",fontFamily:"sans-serif",fontSize:"17px",marginTop:"2px"}}>Tips</Typography> </center></div>
<br/>
<form onSubmit={handleSubmit(onsubmit)} enctype="multipart/form-data">
<Box  noValidate onSubmit={handleSubmit(onsubmit)} >

         <Grid container spacing={1}>

         <Grid item xs={12}>
         <Box sx={{
                                "& > :not(style)": { m: 1, width: { xs: "96%", md: "98.5%" } },
                            }}>
                                <Controller
                                    name="position"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: "Position is required" }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            name="position"
                                            label="Position"
                                            type="text"
                                            id="position"
                                            //autoComplete="current-password"
                                            required
                                            error={!!errors['position']}
                                            helperText={errors['position'] ? errors['position'].message : ''}
                                        />
                                    )}
                                />
                            </Box>
         </Grid>
        <Grid item xs={12}>
         <Box sx={{
                                "& > :not(style)": { m: 1, width: { xs: "96%", md: "98.5%" } },
                            }}>
                                <Controller
                                    name="projectName"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: "Project Name is required" }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            name="projectName"
                                            label="Project Name"
                                            type="text"
                                            id="projectName"
                                            //autoComplete="current-password"
                                             required
                                            error={!!errors['projectName']}
                                            helperText={errors['projectName'] ? errors['projectName'].message : ''}
                                        />
                                    )}
                                />
                            </Box>
         </Grid>
       <Grid item xs={12}>
   <Box sx={{
                                "& > :not(style)": { m: 1, width: { xs: "96%", md: "98.5%" } },
                            }}>
                                <Controller
                                    name="workplace"
                                    control={control}
                                 defaultValue=""
                                    rules={{ required: "Workplace is required" }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            name="workplace"
                                            label="Workplace Type"

                                            id="workplace"
                                            select
                                            native="true"
                                            required
                                           // value={workplace}
                                           // onChange={handleWorkplace}
                                            //autoComplete="current-password"

                                            error={!!errors['workplace']}
                                            helperText={errors['workplace'] ? errors['workplace'].message : ''}
                                        >
                                            {Type0.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    )}
                                            />

                  </Box>
                  </Grid>

          <Grid item xs={12} >
         <Box sx={{
                                "& > :not(style)": { m: 1, width: { xs: "96%", md: "98.5%" } },
                            }}>
                                <Controller
                                    name="projectType"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: "Project Type is required" }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            name="projectType"
                                            label="Project Type"

                                            id="projectType"
                                            select
                                            native="true"
                                            required
                                           // value={PT}
                                           // onChange={handleProject}
                                            //autoComplete="current-password"
                                           sx={{textAlign:"left"}}
                                            error={!!errors['projectType']}
                                            helperText={errors['projectType'] ? errors['projectType'].message : ''}
                                        >
                                            {Type1.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    )}
                                />
                            </Box>
                                            </Grid>
      {/*<Grid item xs={12} lg={6}>
         <Box sx={{
                                "& > :not(style)": { m: 1, width: { xs: "96%", md: "98.5%" } },
                            }}>
                                <Controller
                                    name="openingType"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: "Opening Type is required" }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            name="openingType"
                                            label="Opening Type"

                                            id="openingType"
                                            select
                                            native="true"
                                            required
                                            //value={OT}
                                            //onChange={handleOpening}
                                            //autoComplete="current-password"

                                            error={!!errors['openingType']}
                                            helperText={errors['openingType'] ? errors['openingType'].message : ''}
                                        >
                                            {Type1.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    )}
                                />
                            </Box>
                                            </Grid>*/}
         <Grid item xs={12} lg={6}>
         <Box sx={{
                                "& > :not(style)": { m: 1, width: { xs: "96%", md: "98.5%" } },
                            }}
                            >
                                <Controller
                                    name="openingNum"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: "Opening number is required" }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            name="openingNum"
                                            id="openingNum"
                                            label="Number of Openings"
                                            type="number"
                                            inputProps={{ min:1, max:6 }}
                                            required
                                            error={!!errors['openingNum']}
                                            helperText={errors['openingNum'] ? errors['openingNum'].message : ''}

                                        >


                                            {Type2.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    )}
                                />
                            </Box>
             </Grid>
             <Grid item xs={12} lg={5.9}>
             <Box sx={{
                                "& > :not(style)": { m: 1, width: { xs: "96%", md: "98.5%" } },
                            }}>
                                <Controller
                                    name="expertise"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: "Expertise Type is required" }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            name="expertise"
                                            label="Expertise Required"

                                            id="expertise"
                                            select
                                            native="true"
                                            required
                                            //value={expertise}
                                           // onChange={handleExpertise}
                                            //autoComplete="current-password"

                                            error={!!errors['expertise']}
                                            helperText={errors['expertise'] ? errors['expertise'].message : ''}
                                        >
                                            {Type3.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    )}
                                />
                            </Box>
             </Grid>
             <Grid item xs={12}>
             <Box
                                sx={{
                                    m: 1, width: { xs: "96%", md: "98.5%" },
                                    maxWidth: '98.5%',
                                }}
                            >
                                <Controller
                                    name="projDesc"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: "Project Description is required" }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            name="projDesc"
                                            id="projDesc"
                                            fullWidth
                                            multiline
                                            maxRows={10}
                                            label="Project Description"
                                            required
                                            error={!!errors['projDesc']}
                                            helperText={errors['projDesc'] ? errors['projDesc'].message : ''}

                                        />
                                    )}
                                />
                            </Box>
                                    </Grid>


                                    </Grid>
<br/>
         <Button  type="submit" variant="contained" sx={{borderRadius:"30px",width:"300px",color:"0A66C2",height:"50px",fontWeight:"bold",fontFamily:"inherit",fontSize:"18px"}}>Post the Project</Button>
</Box>
</form>
         </Card>

         <br/>
         </center>
         </div>



        </>
    )
}
export default Create;