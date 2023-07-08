/* eslint-disable */
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from "@mui/material/Card"
import Entry from './entry.png';
import MediaQuery from 'react-responsive';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';
import Loading from "../loading.js"
import {useNavigate} from "react-router-dom";



function Copyright(props) {

  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/signup">
        DevCera
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  /* const handleSubmit = (event) => {
     event.preventDefault();
     const data = new FormData(event.currentTarget);
     console.log({
       email: data.get('email'),
       password: data.get('password'),
     });
   };*/



  /*const onsubmit = (formData) => {


    console.log(formData.first_name);
  }*/
  /*const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    clearErrors,
  } = useForm();*/
  const navigate = useNavigate();
  const [isLoading,setLoading]=React.useState(false);
  const onsubmit = (formData) => {
   // alert('SUCCESS!! :-)\n\n' + JSON.stringify(formData, null, 4));

    setLoading(true);
    const value={
      first_name: formData.first_name,
    last_name: formData.last_name,
    email: formData.email,
    city: formData.city,
    skill: formData.skills,
    linkedin: formData.linkedin,
    twitter: formData.twitter,
    github: formData.github,
    password: formData.password
  }

  React.useEffect(()=>{
    console.log('enter');
    setLoading(true)
    if(localStorage.getItem("user"))
    {
      console.log(localStorage.getItem("user"));
      navigate("/");
    }
    setTimeout(()=>{
      setLoading(false);
    },1000)
  },isLoading)

  axios.post('https://main--polite-syrniki-ad57c8.netlify.app/.netlify/functions/api/signup',value,{withCredentials:true}).then((res)=>{
  console.log(res.data);
  setTimeout(()=>{
   setLoading(false);
   navigate("/signin");
  },2000)

  }).catch((error)=>{
    console.log(error);
    setTimeout(()=>{
      setLoading(false);
      },1000)
  })

    /*console.log(formData.first_name);
    console.log(formData.last_name);
    console.log(formData.email);
    console.log(formData.city);
    console.log(formData.skills);
    console.log(formData.github);
    console.log(formData.twitter);
    console.log(formData.linkedin);
    console.log(formData.password);
    console.log(formData.passwordr);
    return false;
    console.log(formData.passwordr);*/


  }



  const validationSchema = Yup.object().shape({
    first_name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Firstname is required"),
    last_name: Yup.string()
      .required('Last Name is required'),
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    city: Yup.string()
      .required('City is required'),
    skills: Yup.string()
      .required('Skills is required'),
    github: Yup.string()
      .required('GitHub is required'),
    linkedin: Yup.string()
      .required('Linkedin is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Confirm Password does not match')
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  })


  // get functions to build form with useForm() hook
  //const { register, handleSubmit, reset, formState } = useForm(formOptions);
  //const { errors } = formState;

  //function onSubmit(data) {
  // display form data on success
  //alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
  // return false;
  // }




  return (

    <>
    {isLoading===true?<Loading/>:
      <Grid container columnGap={{ md: 16 }} columnSpacing={{ xs: 4, md: 8 }}>
        <Grid item>
          <MediaQuery minWidth={1224}>
            <img src={Entry} alt="Girl" style={{ width: '80vh', height: '80vh', marginLeft: '10%', marginTop: '40%' }}>

            </img>
          </MediaQuery>
        </Grid>

        <Grid item>
          <Card sx={{ width: { xs: '100%', md: 500 }, alignitem: 'center', backgroundColor: "#F5F5F5", marginBottom: '5%' }}>
            <ThemeProvider theme={theme}>



              <Container component="main" maxWidth="xs" >

                <CssBaseline />

                <Box
                  sx={{
                    marginTop: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >

                  <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Sign up
                  </Typography>
                  <Box component="form" noValidate onSubmit={handleSubmit(onsubmit)} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <Controller
                          name="first_name"
                          control={control}
                          defaultValue=""
                          rules={{ required: "First Name is required" }}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              autoComplete="given-name"
                              name="firstName"
                              required
                              fullWidth
                              id="firstName"
                              label="First Name"
                              {...register('first_name')}
                              error={!!errors['first_name']}
                              helperText={errors['first_name'] ? errors['first_name'].message : ''}
                              autoFocus
                            />
                          )}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <Controller
                          name="last_name"
                          control={control}
                          defaultValue=""
                          rules={{ required: "Last Name is required" }}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              required
                              fullWidth
                              id="lastName"
                              label="Last Name"
                              name="lastName"
                              error={!!errors['last_name']}
                              helperText={errors['last_name'] ? errors['last_name'].message : ''}
                              autoComplete="family-name"
                            />
                          )}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Controller
                          name="email"
                          control={control}
                          defaultValue=""
                          rules={{
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                              message: 'Enter a valid e-mail address',
                            },
                          }}
                          render={({ field }) => (

                            <TextField
                              {...field}
                              required
                              fullWidth
                              id="email"
                              label="Email Address"
                              name="email"
                              autoComplete="email"
                              {...register('email')}
                              error={errors.email ? true : false}
                              helperText={errors['email'] ? errors['email'].message : ''}
                            />
                          )}
                        />

                      </Grid>

                      <Grid item xs={12}>
                        <Controller
                          name="city"
                          control={control}
                          defaultValue=""
                          rules={{ required: "City Name is required" }}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              required
                              fullWidth
                              error={!!errors['city']}
                              id="city"
                              label="City"
                              name="city"
                              autoComplete="city"
                              helperText={errors['city'] ? errors['city'].message : ''}
                            />
                          )}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Controller
                          name="skills"
                          control={control}
                          defaultValue=""
                          rules={{ required: "Skill is required" }}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              required
                              fullWidth
                              error={!!errors['skills']}
                              id="skills"
                              label="Skill"
                              name="skills"
                              autoComplete="skills"
                              helperText={errors['skills'] ? errors['skills'].message : 'Multiple values seperated with comma'}
                            />
                          )}
                        />

                      </Grid>

                      <Grid item xs={12}>
                        <Controller
                          name="github"
                          control={control}
                          defaultValue=""
                          rules={{ required: "GitHub is required" }}
                          render={({ field }) => (

                            <TextField
                              {...field}
                              required
                              fullWidth
                              error={!!errors['github']}
                              id="github"
                              label="GitHub"
                              name="github"
                              autoComplete="github"
                              helperText={errors['github'] ? errors['github'].message : ''}
                            />
                          )}
                        />

                      </Grid>

                      <Grid item xs={12}>
                        <Controller
                          name="linkedin"
                          control={control}
                          defaultValue=""
                          rules={{ required: "Linkedin is required" }}
                          render={({ field }) => (

                            <TextField
                              {...field}
                              required
                              error={!!errors['linkedin']}
                              fullWidth
                              id="linkedin"
                              label="Linkedin"
                              name="linkedin"
                              autoComplete="linkedin"
                              helperText={errors['linkedin'] ? errors['linkedin'].message : ''}
                            />

                          )}
                        />

                      </Grid>

                      <Grid item xs={12}>
                        <Controller
                          name="twitter"
                          control={control}
                          defaultValue=""
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              id="twitter"
                              label="Twitter"
                              name="twitter"
                              autoComplete="twitter"
                            />
                          )}
                        />

                      </Grid>

                      <Grid item xs={12}>
                        <Controller
                          name="password"
                          control={control}
                          defaultValue=""
                          rules={{ required: "Password is required" }}
                          render={({ field }) => (

                            <TextField
                              {...field}
                              label="Password"
                              required

                              //type={visible ? "text" : "password"}
                              error={!!errors['password']}
                              fullWidth
                              name="password"
                              type="password"
                              id="password"
                              autoComplete="new-password"
                              helperText={errors['password'] ? errors['password'].message : ''}
                              {...register('password')}
                            />


                          )}

                        />

                      </Grid>
                      <Grid item xs={12}>
                        <Controller
                          name="confirmPassword"
                          control={control}
                          defaultValue=""
                          rules={{ required: "Confirm Password is required" }}
                          render={({ field }) => (

                            <TextField
                              {...field}
                              label="Confirm Password"
                              required
                              //  type={visible ? "text" : "password"}
                              error={!!errors['confirmPassword']}
                              fullWidth
                              name="confirmPassword"
                              type="password"
                              id="confirmPassword"
                              autoComplete="new-passwordr"
                              helperText={errors['confirmPassword'] ? errors['confirmPassword'].message : ''}
                              {...register('confirmPassword')}
                            />
                          )}
                        />



                      </Grid>
                      {/*<Grid item xs={12}>
                        <FormControlLabel
                          control={<Checkbox value="allowExtraEmails" color="primary" />}
                          label="I want to receive inspiration, marketing promotions and updates via email."
                        />
                          </Grid>*/}
                    </Grid>
                    <Button

                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Sign Up
                    </Button>

                    <Grid container justifyContent="flex-end">
                      <Grid item>
                        <Link href="/signin" variant="body2">
                          Already have an account? Sign in
                        </Link>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
              </Container>

            </ThemeProvider>
          </Card>
        </Grid>
      </Grid>
    }
    </>
  );
  }


