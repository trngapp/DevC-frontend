import React, { useState } from 'react'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import TextField from '@mui/material/TextField';
import { Grid, InputLabel } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { Image } from 'react-bootstrap';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Card } from '@mui/material';








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
            value: 'none',
            label: 'NONE',
        },
        {
            value: 'EUR',
            label: '1',
        },
        {
            value: 'BTC',
            label: '2',
        },
        {
            value: 'JPY',
            label: '3',
        },

        {
            value: 'EUR',
            label: '4',
        },
        {
            value: 'BTC',
            label: '5',
        },
        {
            value: 'JPY',
            label: '6',
        },
    ]
    const [ON, setON] = useState('');

    const handleChange = (event) => {
        setOT(event.target.value);
        setPT(event.target.value);
        setOE(event.target.value);
        setON(event.target.value);
    };

    const ColorButton = styled(Button)(({ theme }) => ({
        //color: theme.palette.getContrastText(purple[500]),
        background: "linear-gradient(90deg, rgba(200, 17, 50, 0.8) 0%, rgba(214, 25, 0, 0.8) 50.31%, rgba(202, 0, 0, 0.8) 100%)",
        //backgroundColor: "#1C4774",
        '&:hover': {
            // backgroundColor:  "#1C4774",
            background: "linear-gradient(90deg, rgba(200, 17, 50, 0.8) 0%, rgba(214, 25, 0, 0.8) 50.31%, rgba(202, 0, 0, 0.8) 100%)"
        },
    }));


    const card = () => {
        return (
            <>
                <div >

                </div>
            </>
        );
    };










    return (
        <>
            <h2 id='Form-heading'
                style={{
                    textAlign: "center",
                    fontWeight: 200
                }}>
                Create Form</h2>
            <center>

                <Card sx={{ width: { xs: '100%', md: 1100 } }}>




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
                        <br></br>

                        {/* Leader's Email*/}
                        <Grid item xs={12}>

                            <Box sx={{
                                "& > :not(style)": { m: 1, width:{xs:"96%",md:"98.5%"} },
                            }}>
                                <TextField
                                    id="outlined-password-input"
                                    label="Leader's Email"
                                    type="email"
                                    autoComplete="current-password"
                                    required
                                />
                            </Box>

                        </Grid>




                        {/* Project Name*/}
                        <Grid item xs={12}>

                            <Box sx={{
                                "& > :not(style)": { m: 1, width: {xs:"96%",md:"98.5%"} },
                            }}>
                                <TextField
                                    id="outlined-password-input"
                                    label="Project-Name"
                                    type="text"
                                    autoComplete="current-password"
                                    required
                                />
                            </Box>

                        </Grid>






                        {/* Project Type*/}


                        <Grid item xs={12} md={6}>

                            <Box sx={{ '& .MuiTextField-root': { ml: {xs:0.25,md:1}, width: {xs:"96%",md:"98%"} } }}
                                noValidate
                                autoComplete="off">
                                <TextField id="project_type"
                                    select
                                    value={PT}
                                    label="Project-type"
                                    onChange={handleChange}
                                >


                                    {Typeoe.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Box>

                        </Grid>



                        {/* Opening Type*/}


                        <Grid item xs={12} md={6}>

                            <Box sx={{ '& .MuiTextField-root': {  ml: {xs:0.25} ,mr:{md:1.0}, width: {xs:"96%",md:"98%"}  } }}
                            >
                                <TextField id="opening" label="Opening-type"
                                    select
                                    value={OT}
                                    onChange={handleChange}

                                >
                                    {Type.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Box>

                        </Grid>





                        {/* Opening Expertise*/}
                        <Grid item xs={12} md={6}>

                            <Box sx={{ '& .MuiTextField-root': { ml: {xs:0.25,md:1}, width: {xs:"96%",md:"98%"} } }}
                            >
                                <TextField id="openingexper"
                                    label="Opening-Expertise"
                                    select
                                    value={OE}
                                    onChange={handleChange}
                                >


                                    {Expertise.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Box>

                        </Grid>



                        {/* Opening Number*/}
                        <Grid item xs={12} md={6}>

                            <Box sx={{ '& .MuiTextField-root': { ml:{xs:0.25},mr:{md:1.0}, width: {xs:"96%",md:"98%"} } }}
                            >
                                <TextField id="openingnumbr" label="Opening-Number"
                                    select
                                    value={ON}
                                    onChange={handleChange}

                                >


                                    {Number.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Box>

                        </Grid>


                        {/*Project Description*/}

                        <Grid item xs={12}>

                            <Box
                                sx={{
                                    m: 1, width:{xs:"96%",md:"98.5%"},
                                    maxWidth: '98.5%',
                                }}
                            >
                                <TextField
                                    fullWidth
                                    multiline
                                    maxRows={10}
                                    label="Project Description"
                                    id="fullWidth" />
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
                                    <ColorButton variant="contained" onClick={card} type="submit" >
                                        Submit
                                    </ColorButton>
                                </center>
                                <br/>
                            </Box>

                        </Grid>
                    </Grid>





                </Card>
            </center>

        </>
    )
}

export default Createus