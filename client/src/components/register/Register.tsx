import React,{useState} from 'react'
import {Grid, Avatar, Paper, Button, TextField} from '@material-ui/core';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import {Link } from 'react-router-dom'


const paperStyle = {
    padding: 20,
    height: '80vh',
    width: 300,
    margin: '20px auto'
}

const textfieldStyle = {
    margin:'10px'
}

const avatarStyle = {
    backgroundColor: '#2f7fad'
}


function Register() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');



    return (
        <div className='other'>
            <div className='col-md-6 m-auto'>
                <Grid>
                    <Paper elevation={10} style={paperStyle}>
                    <Grid item container  justifyContent="center">
                        <Avatar style={avatarStyle}>
                            <LockOpenIcon/>
                        </Avatar>
                
                    </Grid>
                <form
                
                >
                    {error && <span className="error-handle">{error}</span> }
                <TextField 
                    style={textfieldStyle}
                    type="text" 
                    value={username}
                    onChange={(e)=> setUsername(e.target.value)}
                    fullWidth 
                    placeholder="Username" 
                    label="Username" 
                    required
                    variant="standard"
                />

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
                    <TextField 
                        onChange={(e)=> setConfirmPassword(e.target.value)}
                        type="password" 
                        fullWidth 
                        value={confirmPassword}
                        placeholder="Confirm password" 
                        label="Confirm Password" 
                        required
                        variant="standard"
                        style={textfieldStyle}
                    />
                
                <Button type="submit" style={{marginTop:'20px'}} color="primary" variant="contained" fullWidth>Add User</Button>
                    <Link className='btn ' to="/login">Sign in</Link>
                </form>
                </Paper>
                </Grid>
            </div>
        </div>
    )
}

export default Register
