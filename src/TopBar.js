import React from 'react';
import { Link } from 'react-router-dom';
import classes from './TopBar.module.css';

const topbar =()=>{
    return(
        <div className = {classes.topBar}>
            <Link className= { classes.menuBar } to='/height'>Window width</Link>
            <Link className= { classes.menuBar } to='/width'>Window height</Link>
        </div>
    )
}

export default topbar;