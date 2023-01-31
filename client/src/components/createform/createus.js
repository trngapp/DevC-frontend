import React, { useState } from 'react'
//import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import TextField from '@mui/material/TextField';
import { Grid, InputLabel } from '@mui/material';
import "react-bootstrap"
import MenuItem from '@mui/material/MenuItem';
//import Button from '@mui/material/Button';
import { Image } from 'react-bootstrap';
import { Box } from '@mui/material';
import { useForm, Controller } from "react-hook-form";
//import { styled } from '@mui/material/styles';
import { Card } from '@mui/material';
import Confirm from './card';









function Createus() {
    const [file, setFile] = useState("");


    const ImageThumb = ({ image }) => {
        return <Image className="thumbnail-img" src={URL.createObjectURL(image)} alt={image.name} roundedCircle width={200} height={200} />;
    };

    function handleUpload(event) {
        setFile(event.target.files[0]);
    }

    const Typeoe = [
        {
            value: 'WebD',
            label: 'Web-Development',
        },
        {
            value: 'AppD',
            label: 'App-Development',
        },
        {
            value: 'CyberS',
            label: 'Cyber-Security',
        },
        {
            value: 'Analysis',
            label: 'Data-Analysis',
        },
        {
            value: 'IOT',
            label: 'IOT',
        },
        {
            value: 'AI',
            label: 'Artificial Intelligence',
        },
    ];

    const [PT, setPT] = useState('');

    const Type = [
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

    const [OT, setOT] = useState('');

    const Expertise = [
        {
            value: 'Beg',
            label: 'Begginer',

        },
        {
            value: 'Intem',
            label: 'Intermediate',

        },
        {
            value: 'Exp',
            label: 'Expert',
        },

    ]


    const [OE, setOE] = useState('');

    const Number = [
       
        {
            value: 1,
            num: '1',
        },
        {
            value: 2,
            num: '2',
        },
        {
            value: 3,
            num: '3',
        },

        {
            value: 4,
            num: '4',
        },
        {
            value: 5,
            num: '5',
        },
        {
            value: 6,
            num: '6',
        },
    ]
    

    const handleChange = (event) => {
        setOE(event.target.value);
    };

    const handleChang = (event) => {
        setPT(event.target.value);
    };

    const handle = (event) => {
        setOT(event.target.value);
    };

   



    /*const ColorButton = styled(Button)(({ theme }) => ({
        //color: theme.palette.getContrastText(purple[500]),
        background: "linear-gradient(90deg, rgba(200, 17, 50, 0.8) 0%, rgba(214, 25, 0, 0.8) 50.31%, rgba(202, 0, 0, 0.8) 100%)",
        //backgroundColor: "#1C4774",
        '&:hover': {
            // backgroundColor:  "#1C4774",
            background: "linear-gradient(90deg, rgba(200, 17, 50, 0.8) 0%, rgba(214, 25, 0, 0.8) 50.31%, rgba(202, 0, 0, 0.8) 100%)"
        },
    }));*/




    /*const card = () => {
        return (
            <>
                {Confirm}
            </>
        );
    };*/
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onsubmit = (formData) => {


        console.log(formData.Leademail);



    }









    return (
        <>
            <h2 id='Form-heading'
                style={{
                    textAlign: "center",
                    fontWeight: 200,
                    fontFamily: "Georgia"
                }}
            >
                Create Form</h2>
            <center>

                <Card sx={{ width: { xs: '100%', md: 1100 }, backgroundColor: "#F5F5F5" }} onSubmit={handleSubmit(onsubmit)}>




                    <Grid container spacing={2}>




                        <Grid item xs={12}>

                            <Box >


                                {/* Project Logo */}
                                <div className="Form-logo">
                                    <div id="upload-logo">
                                        {file && <ImageThumb image={file} />}
                                        <br></br>
                                        <InputLabel>UPLOAD LOGO</InputLabel>
                                        <input type="file" className="image-upload" onChange={handleUpload} name="Upload" required="true" />
                                    </div>
                                </div>
                            </Box>

                        </Grid>


                        {/* Leader's Email*/}
                        <Grid item xs={12}>

                            <Box sx={{
                                "& > :not(style)": { m: 1, width: { xs: "96%", md: "98.5%" } },
                            }}>
                                <Controller
                                    name="leademail"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: "Leader Email is required" }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            name="leademail"
                                            label="Leader's Email"
                                            type="email"
                                            id="leademail"
                                            autoComplete="current-password"
                                            required
                                            error={!!errors['leademail']}
                                            helperText={errors['leademail'] ? errors['leademail'].message : ''}
                                        />
                                    )}
                                />
                            </Box>

                        </Grid>




                        {/* Project Name*/}
                        <Grid item xs={12}>

                            <Box sx={{
                                "& > :not(style)": { m: 1, width: { xs: "96%", md: "98.5%" } },
                            }}>
                                <Controller
                                    name="projectname"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: "Project Name is required" }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            name="projectname"
                                            id="projectname"
                                            label="Project-Name"
                                            type="text"
                                            autoComplete="current-password"
                                            required
                                        />
                                    )}
                                />
                            </Box>

                        </Grid>






                        {/* Project Type*/}


                        <Grid item xs={12} md={6}>

                            <Box sx={{ '& .MuiTextField-root': { ml: { xs: 0.25, md: 1 }, width: { xs: "96%", md: "98%" } } }}
                                noValidate
                                autoComplete="off">
                                <Controller
                                    name="projecttype"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: "Project type is required" }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            name="projecttype"
                                            id="projecttype"
                                            select
                                            required
                                            value={PT}
                                            label="Project-type"
                                            onChange={handleChang}
                                        >


                                            {Typeoe.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    )}
                                />
                            </Box>

                        </Grid>



                        {/* Opening Type*/}


                        <Grid item xs={12} md={6}>

                            <Box sx={{ '& .MuiTextField-root': { ml: { xs: 0.25 }, mr: { md: 1.0 }, width: { xs: "96%", md: "98%" } } }}
                            >
                                <Controller
                                    name="opentype"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: "Opening Type is required" }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            name="opentype"
                                            id="opentype"
                                            label="Opening-type"
                                            select
                                            native="true"
                                            required
                                            value={OT}
                                            onChange={handle}

                                        >
                                            {Type.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    )}
                                />
                            </Box>

                        </Grid>





                        {/* Opening Expertise*/}
                        <Grid item xs={12} md={6}>

                            <Box sx={{ '& .MuiTextField-root': { ml: { xs: 0.25, md: 1 }, width: { xs: "96%", md: "98%" } } }}
                            >
                                <Controller
                                    name="openexper"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: "Opening Expertise is required" }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            name="openexper"
                                            id="openingexper"
                                            label="Opening-Expertise"
                                            select
                                            native="true"
                                            value={OE}
                                            onChange={handleChange}
                                            required
                                        >


                                            {Expertise.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    )}
                                />
                            </Box>

                        </Grid>



                        {/* Opening Number*/}
                        <Grid item xs={12} md={6}>

                            <Box sx={{ '& .MuiTextField-root': { ml: { xs: 0.25 }, mr: { md: 1.0 }, width: { xs: "96%", md: "98%" } } }}
                            >
                                <Controller
                                    name="openingnum"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: "Opening number is required" }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            name="openingnum"
                                            id="openingnum"
                                            label="Opening-Number"
                                            type="number"
                                            inputProps={{ min:1, max:6 }}
                                            required

                                        >


                                            {Number.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.num}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    )}
                                />
                            </Box>

                        </Grid>


                        {/*Project Description*/}

                        <Grid item xs={12}>

                            <Box
                                sx={{
                                    m: 1, width: { xs: "96%", md: "98.5%" },
                                    maxWidth: '98.5%',
                                }}
                            >
                                <Controller
                                    name="projdesc"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: "Project Description is required" }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            name="projdesc"
                                            id="projdesc"
                                            fullWidth
                                            multiline
                                            maxRows={10}
                                            label="Project Description"
                                            required

                                        />
                                    )}
                                />
                            </Box>

                        </Grid>




                        {/*Submit Button*/}


                        <Grid item xs={12}>

                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: { xs: 'center', md: 'center' },
                                ml: 3,
                                minWidth: { md: 350 }
                            }}>
                                <center>
                                    {/*<ColorButton variant="contained" onClick={card} type="submit" >
                                        Submit
                                    </ColorButton>*/}
                                    <Confirm />
                                    {/* Condition will be added for validation */}
                                </center>
                                <br />
                            </Box>

                        </Grid>
                    </Grid>





                </Card>
            </center>
            <br />
            <br /><br />
            <br />
        </>
    )
}

export default Createus