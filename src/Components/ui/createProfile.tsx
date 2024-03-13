import React, { useState } from "react";
import { Container, TextField, Button, Typography, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from '@mui/styles';
import {Link as RouterLink } from 'react-router-dom';
import { useMediaQuery } from "@mui/material";

const useStyles= makeStyles((theme)=>({
    root:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        // height:'100vh',
        maxWidth:'750px',
        margin:'4rem auto',
        
    },
    container:{
        borderRadius:'2%',
        boxShadow:'2px 1px #EBDEF0',
        padding:'0',
        backgroundImage:' linear-gradient(to left, #FFFFFF 40%,#EBDEF0);'
    },
    formContainer:{
        padding:'2rem',
        width:'100%',
        boxShadow:'1',
    },
    formTitle:{
        textAlign:'center'
    },
    formInput:{
        marginBottom:'2rem',
    },
    imageContainer:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        // [theme.breakpoints.down('sm')]:{
        //     display:'none',
        // }
    },
    image:{
        width:'100%',
        height:'auto',
    }
}));

const CreateProfile: React.FC = () => {

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const classes = useStyles();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const isValidEmail=()=>{
        return /^[^\s@]+@[^\s@]+[^\s@]+$/.test(email);
    };
    const isValidPassword = () =>{
        return /^(?=.*[A-Z])(?=.*[!@#$%^&*])(.{6,})$/.test(password);
    }
    const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault();
        
        if(!isValidEmail()){
            alert('Please enter a valid email address!');
            return;
        }
        if(!isValidPassword() ){
            alert('Password must be 6 characters long, contain at least one special character and one uppercase letter!');
            return;
        }
        console.log(name, email, password);
        
  };

  return (
    <div className={classes.root}>
        <Container className={classes.container}>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={6} style={{padding:'0'}}>
                    <Container className={classes.formContainer}>
                        <Typography variant="h5" className={classes.formTitle}>Create Profile</Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                label="Name"
                                value={name} className={classes.formInput}
                                onChange={(e) => setName(e.target.value)}
                                margin="normal"
                                required
                            />
                            <TextField
                                fullWidth
                                label="Email"
                                value={email} className={classes.formInput}
                                onChange={(e) => setEmail(e.target.value)}
                                margin="normal"
                                required
                                type="email"
                            />
                            <TextField
                                fullWidth
                                label="Password"
                                value={password} className={classes.formInput}
                                onChange={(e) => setPassword(e.target.value)}
                                margin="normal"
                                required
                            />
                            <Button
                                // fullWidth
                                type="submit" color='primary'
                                sx={{  borderRadius:"7%", 
                                mt: 2, padding:'10px 45px',
                                backgroundColor: "#773ab7",
                                color: "#fff",
                                "&:hover": {
                                    backgroundColor: "#509",
                                },
                                }}
                            >
                                Sign In
                            </Button>
                        </form>
                        <Typography color='textSecondary' style={{marginTop:'1rem'}} >Have an account?{' '}
                            <RouterLink to="/signin" color='primary' style={{textDecoration:'none'}}>
                                Sign In
                                </RouterLink>
                        </Typography>
                    </Container>
                </Grid>
                {!isSmallScreen && 
                <Grid item xs={10} sm={6} className={classes.imageContainer}>
                    <img alt="side-image" className={classes.image}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG01FFxbZXT2kDSw_tXQKTitG40J4OZbQGww&usqp=CAU"></img>
                </Grid>}
            </Grid>
        </Container>
    </div>
  );
};
export default CreateProfile;