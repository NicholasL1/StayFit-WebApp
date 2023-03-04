import React from 'react'
import { Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles"
import { Link } from 'react-router-dom'
import Stayfit from './Stayfit.jpeg'

const styles = makeStyles({
    bar: {
        position: "sticky",
        paddingTop: "0px",
        backgroundColor: "#203D71",
        '@media (max-width:780px)': {
            flexDirection: "horizontal"
        }
    },
    logo: {
        width: "100%",
        height: "75px",
        '@media (max-width:360px)': {
            display: "none"
        }
    },
    logoMobile: {
        width: "6%",
        display: "none",
        '@media (max-width:360px)': {
            display: "inline-block"
        }
    },
    menuItem: {
        fontFamily: "Nunito",
        cursor: "pointer",
        flexGrow: 0.5,
        '@media (max-width:780px)': {
            paddingBottom: "1rem"
        }
    },
    link: {
        textDecoration: 'none',
        color: "#E2E7EB",
        "&:hover": {
            color: "#3070F2",
            transition: "color .3s"
        },
    },
    button: {
        cursor: "pointer",
        fontFamily: "Nunito",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "44px",
        padding: "0 25px",
        boxSizing: "border-box",
        borderRadius: 0,
        background: "#728ACD",
        color: "#fff",
        transform: "none",
        boxShadow: "3px 3px 0 0 #c7d8ed",
        border: "none",
        transition: "background .3s,border-color .3s,color .3s",
        "&:hover": {
            backgroundColor: "#3070F2"
        }
    },
})

function NavBar() {
    const classes = styles()
    return (
        <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>
            <a href='/'>
                <img src={Stayfit} className={classes.logo} alt="StayFit Logo" href="/" />
                <img src={Stayfit} className={classes.logoMobile} alt="StayFit Logo" />
            </a>
            <Typography variant="h6" className={classes.menuItem}>
                <Link to="/" className={classes.link}>Home</Link>
            </Typography>

            <Typography variant="h6" className={classes.menuItem}>
                <Link to="/bmicalculator" className={classes.link}>BMI Calculator</Link>
            </Typography>

            <Typography variant="h6" className={classes.menuItem}>
                <Link to="/findyourworkout" className={classes.link}>Find your workout</Link>
            </Typography>

            <Typography variant="h6" className={classes.menuItem}>
                <Link to="/buildyourplan" className={classes.link}>Build your plan</Link>
            </Typography>

            <button className={classes.button}>
                <Link to="/signup" className={classes.link}>Sign Up</Link>
            </button>
        </Toolbar>
    )
}

export default NavBar
