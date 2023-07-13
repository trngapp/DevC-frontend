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
import Mobile from './mobile.png';
import { Card } from '@mui/material';
import MediaQuery from 'react-responsive';
import { useForm, Controller } from "react-hook-form";
import axios from "axios"
import {AuthContext} from "../../context/AuthContext";
import Loading from "../loading.js"
import {useNavigate} from "react-router-dom";
import Betawarn from "./beta.png"
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/signin">
        DevCera
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();


export default function SignIn() {
  /*const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };*/

  const {login,logout} = React.useContext(AuthContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading,setLoading]=React.useState(false);
  const navigate = useNavigate();
  const onsubmit = (formData) => {

    setLoading(true);
    //console.log(formData.email);
   // console.log(formData.password);
    const value={email:formData.email,password:formData.password};
    axios.post('https://main--polite-syrniki-ad57c8.netlify.app/.netlify/functions/api/login',value,{withCredentials:true}).then((res)=>{

     console.log(res);
     login(formData.email);

     setTimeout(()=>{
       setLoading(false);
       localStorage.removeItem("email");
      navigate("/");
     },200)






    }).catch(error=>{
console.log(error);
setTimeout(()=>{
setLoading(false);
},1000)
    })
  }
  const signout=()=>{

         logout();

}
React.useEffect(()=>{
  setLoading(true)
  if(localStorage.getItem("user"))
  {
    navigate("/");
  }
  setTimeout(()=>{
    setLoading(false);
  },1000)
},isLoading)

  return (
    <>

{isLoading===true?<Loading/>:
      <Grid container columnGap={{ md: 20 }} columnSpacing={{ xs: 1, md: 12 }} sx={{marginTop:"90px"}}>


        {/*GIF */}
        <Grid item >
          <MediaQuery minWidth={1224} >

            {
              <img src={Mobile} alt="login" style={{ width: '80vh', height: '80vh', marginTop: '2%',marginLeft: '15%' }} >

              </img>
            }

          </MediaQuery>

        </Grid>

        {/*SIGN IN FORM */}
        <Grid item  >


          <Card sx={{ width: { xs: '100%', md: 400 }, alignitem: 'center', backgroundColor: "#F5F5F5", marginBottom: '5%' }}>
            <ThemeProvider theme={theme}>
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                  sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Sign in
                  </Typography>
                  <Box component="form" onSubmit={handleSubmit(onsubmit)} noValidate sx={{ mt: 1 }}>
                    <Controller
                      name="email"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: "E-mail is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: 'Enter a valid e-mail address',
                        },
                      }}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          margin="normal"
                          required
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                          autoFocus
                          error={!!errors['email']}
                          helperText={errors['email'] ? errors['email'].message : ''}
                        />
                      )}
                    />

                    <Controller
                      name="password"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: 'Minimum 6 characters'
                        }
                      }}

                      render={({ field }) => (
                        <TextField
                          {...field}
                          margin="normal"
                          required
                          fullWidth
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          autoComplete="current-password"
                          error={!!errors['password']}
                          helperText={errors['password'] ? errors['password'].message : ''}
                        />
                      )}
                    />


                  { /* <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Remember me"
                  />*/}
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Sign In
                    </Button>
                    <Grid container>
                      <Grid item xs>
                        {/*<Link href="#" variant="body2">
                          Forgot password?
                      </Link>*/}

                  <img style={{width:"100px"}} src={Betawarn}/>
                      </Grid>
                      <Grid item>
                        <Link href="signup" variant="body2">
                          {"Don't have an account? Sign Up"}
                        </Link>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
              </Container>
            </ThemeProvider>
          </Card>
        </Grid>


      </Grid>
      }
    </>
  );
}