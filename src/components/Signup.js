import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
//import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
//import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Switch, Route, Link } from "react-router-dom";
import Signin from "./Signin";

class Signup extends React.Component {

  theme = createTheme();
  constructor(props) {
    super(props);

    this.state = {
      fields: {},
      errors: {},
      firstName:'',
      lastName:'',
      phone:'',
      email:'',
      username:'',
      password:''
    };
    this.baseState=this.state
  }
 
  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //firstname
    if (!fields["firstName"]) {
      formIsValid = false;
      errors["firstName"] = "Cannot be empty";
    }

    if (typeof fields["firstName"] !== "undefined") {
      if (!fields["firstName"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["firstName"] = "Only letters";
      }
      else if (fields["firstName"].length>50) {
        formIsValid = false;
        errors["firstName"] = "should be less then 50 letters";
      }
    }
    //lastName
    if (!fields["lastName"]) {
      formIsValid = false;
      errors["lastName"] = "Cannot be empty";
    }

    if (typeof fields["lastName"] !== "undefined") {
      if (!fields["lastName"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["lastName"] = "Only letters";
      }
      else if (fields["lastName"].length>50) {
        formIsValid = false;
        errors["lastName"] = "should be less then 50 letters";
      }
    }

     //Phone number
     if (!fields["phone"]) {
      formIsValid = false;
      errors["phone"] = "Cannot be empty";
    }

    if (typeof fields["phone"] !== "undefined") {
      if (!fields["phone"].match(/^[0-9]+$/)) {
        formIsValid = false;
        errors["phone"] = "Only digits";
      }
      else if (fields["phone"].length>10 || fields['phone'].length<10) {
        formIsValid = false;
        errors["phone"] = "should be 10 digits";
      }
    }

    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }
    //username
    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "Cannot be empty";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["username"] = "Only letters";
      }
      else if (fields["username"].length>5) {
        formIsValid = false;
        errors["username"] = "should be minimum 5 characters";
      }
    }

  //username
  if (!fields["password"]) {
    formIsValid = false;
    errors["password"] = "Cannot be empty";
    }
  if (typeof fields["password"] !== "undefined") {
    if (!fields["password"].match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)) {
        formIsValid = false;
        errors["password"] = "should contain 1 uppercase letter, 1 lowercase letter,1 digit,1 special character";
      }
    else if (fields["password"].length<8) {
      formIsValid = false;
            errors["password"] = "should be atleast 8 characters";
          }
        }

    this.setState({ errors: errors });
    return formIsValid;
  }

  contactSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log({
      firstName:data.get('firstName'),
      lastName:data.get('lastName'),
      phone:data.get('phone'),
      email: data.get('email'),
      username:data.get('username'),
      password: data.get('password'),
    });
    if (this.handleValidation()) {
      alert("Form submitted");
    } else {
      alert("Input values are invalid.");
    }
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }
 
  render() {
    return (
      <ThemeProvider theme={this.theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
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
        <Box component="form" name="contactform" className="contactform" noValidate onSubmit={this.contactSubmit.bind(this)} sx={{ mt: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
                  autoComplete="given-name"
                  name="firstName"
                  ref="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={this.handleChange.bind(this, "firstName")}
                value={this.state.fields["firstName"]}
                />
              <span style={{ color: "red" }}>{this.state.errors["firstName"]}</span>
              <br />
              </Grid>
              <Grid item xs={12}>
              <TextField
                  autoComplete="given-name"
                  name="lastName"
                  ref="lastName"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  autoFocus
                  onChange={this.handleChange.bind(this, "lastName")}
                value={this.state.fields["lastName"]}
                />
              <span style={{ color: "red" }}>{this.state.errors["lastName"]}</span>
              <br />
              </Grid>
              <Grid item xs={12}>
              <TextField
                  autoComplete="phone"
                  name="phone"
                  ref="phone"
                  required
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  autoFocus
                  onChange={this.handleChange.bind(this, "phone")}
                value={this.state.fields["phone"]}
                />
              <span style={{ color: "red" }}>{this.state.errors["phone"]}</span>
              <br />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  refs="email"
                  autoComplete="email"
                  onChange={this.handleChange.bind(this, "email")}
                value={this.state.fields["email"]}
                />
              <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
              <br />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="User Name"
                  name="username"
                  refs="username"
                  autoComplete="username"
                  onChange={this.handleChange.bind(this, "username")}
                value={this.state.fields["username"]}
                />
              <span style={{ color: "red" }}>{this.state.errors["username"]}</span>
              <br />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={this.handleChange.bind(this, "password")}
                value={this.state.fields["pasword"]}
                />
              <span style={{ color: "red" }}>{this.state.errors["password"]}</span>
              <br />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
              </Grid>
              <br />
              <Button
              type="submit"
              fullWidth
              variant="contained"
              color="success"
              sx={{ mt: 3, mb: 2 }}
                
              >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to={"/Signin"} variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
      </Box>
    </Box>
    <Copyright sx={{ mt: 5 }} />
      </Grid>
      </Grid>
      
      <div className="container mt-3">
          <Switch>
            <Route exact path={"/signin"} component={Signin} />
          </Switch>
        </div>
      </ThemeProvider>
    );
    function Copyright(props) {
      return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
          {'Copyright © '}
          <Link color="inherit" href="">
            Rachitha
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      );
    }
  }
}
export default Signup;