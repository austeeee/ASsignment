import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'
import Forms from './Forms'

const Navbar = () => {
  return (
    <div>
        <Box>
            <AppBar style={{backgroundColor:'#6ef',color:'red'}}>
                <Toolbar>
                    <Typography varient='h6' sx={{flexGrow:1}} align='left'>App</Typography>
                    
                    <Button color='inherit' > <Link to='/' >Home</Link></Button>
                    <Button color='inherit' > <Link to='/Forms' >Form</Link></Button>
                    
                    {/* <Button color='inherit'>Table</Link></Button>
                    <Button color='inherit'>Forms</Link></Button>
                    <Button color='inherit'>View</Link></Button> */}


                </Toolbar>
            </AppBar>
        </Box>
    </div>
  )
}

export default Navbar