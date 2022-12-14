import React, { useState } from 'react';
import {AppBar,Tab,Tabs,Toolbar,Typography} from "@mui/material";
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooks';
import {NavLink} from 'react-router-dom'

const Header = () => {
    const [value, setValue]= useState();
  return (
    <div>
        <AppBar sx={{backgroundColor:"#232F3D"}} position="sticky">
          <Toolbar><Typography><LibraryBooksOutlinedIcon/></Typography>
          <Tabs sx={{ml:"auto"}}
         textColor="inherit" 
          indicatorColor="Primary" 
          value={value} onChange={(e,val)=>setValue(val)}>
            <Tab LinkComponent={NavLink} to="/add" label="Add Product"/>
            <Tab LinkComponent={NavLink} to="/Books" label="Books"/>
            <Tab LinkComponent={NavLink} to="/about" label="About us"/>
          </Tabs>
            </Toolbar> 
            
            </AppBar>
    </div>
  );
};

export default Header;