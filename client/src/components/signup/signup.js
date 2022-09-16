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



function Copyright(props) {

  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
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
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    clearErrors,
  } = useForm();
  const onsubmit = (formData) => {
    console.log(formData.first_name);
    console.log(formData.last_name);
    console.log(formData.email);
    console.log(formData.city);
    console.log(formData.skills);
    console.log(formData.github);
    console.log(formData.twitter);
    console.log(formData.linkedin);
    console.log(formData.password);
    console.log(formData.passwordr);

  }
  
  function matchPassword() {  
    var pw1 = document.getElementById("password").value;  
    var pw2 = document.getElementById("passwordr").value;  
    if(pw1 != pw2)  
    {   
      console.log("hi")
    } else {  
    
    }  
  }  


  return (

    <>

      <Grid container columnGap={{ md: 16 }} columnSpacing={{ xs: 4, md: 8 }}>
        <Grid item>
          <MediaQuery minWidth={1224}>
            <img src={Entry} alt="Girl" style={{ width: '80vh', height: '80vh', marginTop: '20%' }}>

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
                              error={!!errors.first_name}
                              // helperText={errors.last_name && errors.first_name? message:null}
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
                              error={!!errors.last_name}
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
                              error={!!errors.email}
                              id="email"
                              label="Email Address"
                              name="email"
                              autoComplete="email"
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
                              error={!!errors.city}
                              id="city"
                              label="City"
                              name="city"
                              autoComplete="city"
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
                              error={!!errors.skills}
                              id="skills"
                              label="Skill"
                              name="skills"
                              autoComplete="skills"
                              helperText="Multiple values seperated with comma"
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
                              error={!!errors.github}
                              id="github"
                              label="GitHub"
                              name="github"
                              autoComplete="github"
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
                              error={!!errors.linkedin}
                              fullWidth
                              id="linkedin"
                              label="Linkedin"
                              name="linkedin"
                              autoComplete="linkedin"
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
                              error={!!errors.password}
                              fullWidth
                              name="password"
                              type="password"
                              id="password"
                              autoComplete="new-password"
                            />
                          )}
                        />

                      </Grid>
                      <Grid item xs={12}>
                        <Controller
                          name="passwordr"
                          control={control}
                          defaultValue=""
                          rules={{ required: "Confirm Password is required" }}
                          render={({ field }) => (

                            <TextField
                              {...field}
                              label="Password"
                              required
                              //  type={visible ? "text" : "password"}
                              error={!!errors.passwordr}
                              
                              fullWidth
                              name="passwordr"
                              type="password"
                              id="passwordr"
                              autoComplete="new-passwordr"
                            />
                          )}
                        />

                      </Grid>
                      <Grid item xs={12}>
                        <FormControlLabel
                          control={<Checkbox value="allowExtraEmails" color="primary" />}
                          label="I want to receive inspiration, marketing promotions and updates via email."
                        />
                      </Grid>
                    </Grid>
                    <Button
                      onclick={matchPassword()}
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
    </>
  );
}