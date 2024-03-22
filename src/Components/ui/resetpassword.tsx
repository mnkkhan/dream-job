import React, { useState } from "react";
import { Container, TextField, Button, Typography, Grid, Snackbar } from "@mui/material";
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
        margin:'4rem auto 0',
        
    },
    container:{
        borderRadius:'2%',
        boxShadow:'2px 1px #EBDEF0',
        padding:'0',
        backgroundImage:' linear-gradient(to left, #FFFFFF 40%,#EBDEF0);'
    },
    formContainer:{
        padding:'2rem',
        // border:'1px solid #ccc',
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

const Resetpassword = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const [error,setError]= useState('');
    const [openbar,setOpenbar] = useState(false)
    const isValidEmail=()=>{
        return /^[^\s@]+@[^\s@]+[^\s@]+$/.test(email);
    };
    const isValidPassword = () =>{
        return /^(?=.*[A-Z])(?=.*[!@#$%^&*])(.{6,})$/.test(password);
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
       
        if(!isValidEmail()){
            alert('Please enter a valid email address!');
            return;
        }
        if(!isValidPassword() ){
            alert('Password must be 6 characters long, contain at least one special character and one uppercase letter!');
            return;
        }
        if(password!==confirmpassword){
            setError('Passwords do not match!');
            setOpenbar(true);
            setConfirmpassword('');
            return;
        }
        
        console.log( email, password);
        
  };
  const handleClosebar=()=>{
      setOpenbar(false);
  }

  return (
    <div className={classes.root}>
        <Container className={classes.container}>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={6} style={{padding:'0'}}>
                    <Container className={classes.formContainer}>
                        <Typography variant="h5" className={classes.formTitle}>Reset Password</Typography>
                        <form onSubmit={handleSubmit}>
                        
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
                            <TextField
                                fullWidth
                                label="Re-enter Password"
                                value={confirmpassword} className={classes.formInput}
                                onChange={(e) => setConfirmpassword(e.target.value)}
                                margin="normal"
                                required
                            />
                            <Button
                                type="submit" color='primary'
                                sx={{ borderRadius:"3%", 
                                mt: 2, padding:'10px 15px',
                                backgroundColor: "#773ab7",
                                color: "#fff",
                                "&:hover": {
                                    backgroundColor: "#509",
                                },
                                }}>
                                Reset Password
                            </Button>
                            <Snackbar onClose={handleClosebar} autoHideDuration={6000} open={openbar}
                                message={ error|| 'Password reset successfully!'}
                            ></Snackbar>
                        </form>
                        <Typography style={{marginTop:'.5rem'}} >
                            <RouterLink to="/signin" style={{textDecoration:'none', color:'grey'}}>Sign in</RouterLink>
                        </Typography>
                    </Container>
                </Grid>
                {!isSmallScreen && 
                <Grid item xs={10} sm={6} className={classes.imageContainer}>
                    <img alt="side-image" className={classes.image}
                        src="https://t3.ftcdn.net/jpg/04/92/75/18/360_F_492751838_Ybun2zwpQC8AZv11AwZLdXJk4cUrTt5z.jpg"></img>
                </Grid>}
            </Grid>
        </Container>
    </div>
      
  );
}
export default Resetpassword;