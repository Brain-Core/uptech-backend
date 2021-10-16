import React, {useState, useEffect} from 'react'
import {Grid, Paper, Button, TextField} from '@material-ui/core';
// import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useHistory } from 'react-router-dom';
import axios, { AxiosRequestConfig } from 'axios';


const paperStyle = {
    padding: 20,
    height: '50vh',
    width: 300,
    margin: '20px auto'
}

const textfieldStyle = {
    margin:'10px'
}

const avatarStyle = {
    backgroundColor: '#2f7fad'
}


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    useEffect(()=>{
        if(localStorage.getItem("authToken")){
            history.push('/')
        }
    },[])


    return (
        <div className='col-md-6 m-auto'>
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                <Grid item container  justifyContent="center">
                    <h3 className='text-primary font-weight-bold'>ADMIN</h3>
                </Grid>
            <form
            onSubmit={async (e)=>{
                e.preventDefault();
                const config:AxiosRequestConfig = {
                    headers:{
                        "Content-type":"application/json"
                    }
                }

                try{
                    if(!email || !password ){
                        setError("Please fill Email and Password")
                    } else {
                        const { data } = await axios.post("http://localhost:3030/auth/login",{
                        email,
                        password
                        }, config);

                        localStorage.setItem("authToken", data.accessToken);
                        history.push('/')
                        setEmail("")
                        setPassword("")
                    }
                    

                }catch(error:any){
                    setError(error.response.data.error);
                    setTimeout(()=> setError(""),5000);
                }
            }}
            >
                {error && <span className="error-handle">{error}</span>}
               <TextField 
                    style={textfieldStyle}
                    type="email" 
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    fullWidth 
                    placeholder="Email address" 
                    label="Email" 
                    required
                    variant="standard"
                />
                <TextField 
                    onChange={(e)=> setPassword(e.target.value)}
                    type="password" 
                    fullWidth 
                    value={password}
                    placeholder="Password" 
                    label="Password" 
                    required
                    variant="standard"
                    style={textfieldStyle}
                />
               
               <Button type="submit" style={{marginTop:'20px'}} color="primary" variant="contained" fullWidth>Sign in</Button>
            </form>
            </Paper>
            </Grid>
        </div>
    )
}

export default Login
