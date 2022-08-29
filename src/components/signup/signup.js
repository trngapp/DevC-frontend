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
import Entry from '../signup/entry.png';
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
<<<<<<< HEAD:src/components/signup/signup.js
  /* const handleSubmit = (event) => {
     event.preventDefault();
     const data = new FormData(event.currentTarget);
     console.log({
       email: data.get('email'),
       password: data.get('password'),
     });
   };*/
=======
 /* const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };*/
>>>>>>> 56b04c0772cce2660b0312825218b952c43a731f:client/src/components/signup/signup.js
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    clearErrors,
  } = useForm();
<<<<<<< HEAD:src/components/signup/signup.js
  const onsubmit = (formData) => {
=======
  const onsubmit=(formData)=>{
>>>>>>> 56b04c0772cce2660b0312825218b952c43a731f:client/src/components/signup/signup.js
    console.log(formData.first_name);
    console.log(formData.last_name);
    console.log(formData.city);
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
<<<<<<< HEAD:src/components/signup/signup.js
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
=======
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
>>>>>>> 56b04c0772cce2660b0312825218b952c43a731f:client/src/components/signup/signup.js
                        />
          )}
          />
                      </Grid>
                      <Grid item xs={12} sm={6}>
<<<<<<< HEAD:src/components/signup/signup.js
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
=======
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
>>>>>>> 56b04c0772cce2660b0312825218b952c43a731f:client/src/components/signup/signup.js
                        />
          )}
          />
                      </Grid>
                      <Grid item xs={12}>

                        <TextField

                          required
                          fullWidth
                          error={!!errors.first_name}
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                        />

                      </Grid>
                      <Grid item xs={12}>
<<<<<<< HEAD:src/components/signup/signup.js
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
=======
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
>>>>>>> 56b04c0772cce2660b0312825218b952c43a731f:client/src/components/signup/signup.js
                        />
          )}
          />
                      </Grid>
                      <Grid item xs={12}>

                        <TextField

                          required
                          fullWidth
                          error={!!errors.skills}
                          id="skills"
                          label="Skill"
                          name="skills"
                          autoComplete="skills"
                          helperText="Multiple values seperated with comma"
                        />

                      </Grid>
                      <Grid item xs={12}>

                        <TextField

                          required
                          fullWidth
                          error={!!errors.github}
                          id="github"
                          label="GitHub"
                          name="github"
                          autoComplete="github"
                        />

                      </Grid>
                      <Grid item xs={12}>

                        <TextField

                          required
                          error={!!errors.linkedin}
                          fullWidth
                          id="linkedin"
                          label="Linkedin"
                          name="linkedin"
                          autoComplete="linkedin"
                        />

                      </Grid>
                      <Grid item xs={12}>
                        <TextField

                          fullWidth
                          id="twitter"
                          label="Twitter"
                          name="twitter"
                          autoComplete="twitter"
                        />
                      </Grid>
                      <Grid item xs={12}>

                        <TextField

<<<<<<< HEAD:src/components/signup/signup.js
                          label="Password"
                          required
                          //type={visible ? "text" : "password"}
                          error={!!errors.password}
=======
                        label="Password"
                        required
                        //type={visible ? "text" : "password"}
                        error={!!errors.password}
>>>>>>> 56b04c0772cce2660b0312825218b952c43a731f:client/src/components/signup/signup.js
                          fullWidth
                          name="password"
                          type="password"
                          id="password"
                          autoComplete="new-password"
                        />

                      </Grid>
                      <Grid item xs={12}>

                        <TextField

<<<<<<< HEAD:src/components/signup/signup.js
                          label="Password"
                          required
                          //  type={visible ? "text" : "password"}
                          error={!!errors.passwordr}
=======
                        label="Password"
                        required
                      //  type={visible ? "text" : "password"}
                        error={!!errors.passwordr}
>>>>>>> 56b04c0772cce2660b0312825218b952c43a731f:client/src/components/signup/signup.js

                          fullWidth
                          name="passwordr"

                          type="passwordr"
                          id="passwordr"
                          autoComplete="new-passwordr"
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