import React, { useEffect } from 'react';
import { Typography, createTheme, ThemeProvider, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CalculateIcon from '@mui/icons-material/Calculate';
import { Link } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer"

const theme = createTheme({
    palette: {
      primary: {
        main:"#2e1667",
      },
      secondary: {
        main:"#E2E7EB",
      },
    },
    typography: {
      fontFamily: [
        'Nunito'
      ],
      h4: {
        fontWeight: 600,
        fontSize: 28,
        lineHeight: '2rem',
        },
      h5: {
        fontWeight: 100,
        lineHeight: '2rem',
      },
    },
  });
  

const styles = makeStyles({
    bigSpace:{
      marginTop: "5rem",
    },
    wrapper: {
      textalign: 'center',
      margin: 'auto',
      minHeight: '100vh',
      backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/backgroundtwo.jpg'})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      overflow: "auto",
      },
    subtitle: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#E2E7EB",
      height: "30vh",
      fontSize: "x-large",
      marginRight: "90vh",
      marginTop: "40px",
    },
    body: {
      color: "#E2E7EB",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "45%",
      marginTop: "100px",
      marginLeft: "7vh",
    },
    subtwo: {
      width: "50%",
      color: "#2e1667",
      marginTop: "2.5rem",
      marginLeft: "14rem",
    },
    bodytwo: {
      width: "50%",
      marginLeft: '14rem',
      marginTop: "1.5rem",
      color: "#2e1667",
    },
    second: {
      float: 'left',
      width: "65%",
      marginLeft: "100px",
    },
    button: {
      cursor: "pointer",
      fontFamily: "Nunito",
      boxSizing: "border-box",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      height: "44px",
      padding: "0 25px",
      background: "#728ACD",
      color: "#fff",
      transform: "none",
      boxShadow: "6px 6px 0 0 #c7d8ed",
      transition: "background .3s,border-color .3s,color .3s",
      "&:hover": {
          backgroundColor:  "#3070F2"
        },
      label: {
        textTransform: 'capitalize',
      },
    },
    third: {
      float: 'right',
      marginTop: "1rem",
      marginRight: '17rem',
      display: "block",
      marginBottom: "1rem",
    },
    link: {
      fontFamily: "Nunito",
      fontSize: "13px",
      fontWeight: "bold",
      textDecoration: 'none',
      color: "#E2E7EB",
  },
    wrapperTwo: {
      textalign: 'center',
      minHeight: '102vh',
      backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/floorweights.jpg'})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      marginTop: "250px",
      overflow: "auto",
    },

    buttonTwo: {
      cursor: "pointer",
      fontFamily: "Nunito",
      boxSizing: "border-box",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      height: "44px",
      padding: "0 25px",
      background: "#282737",
      color: "#fff",
      transform: "none",
      boxShadow: "4px 4px 0 0 #c2c2c2",
      transition: "background .3s,border-color .3s,color .3s",
      "&:hover": {
          backgroundColor:  "#3070F2"
        },
      label: {
        textTransform: 'capitalize',
      },
      marginTop: "590px",
      marginLeft: "70%",
    },
    subtitleTwo: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#E2E7EB",
      fontSize: "xx-large",
      float: "right",
      marginRight: "145px",
      marginTop: "50px",
    },   
    bodyThree: {
      width: "45%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#E2E7EB",
      marginTop: "30px",
      float: "right",
      marginLeft: "243px",
      marginRight: "70px",
    },
    wrapperThree: {
      textalign: 'center',
      minHeight: '100vh',
      backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/forestbackground.jpg'})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      overflow: "auto",
    },
    subtitleThree: {
      marginTop: "175px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#E2E7EB",
      fontSize: "xx-large",
    },
    bodyFour: {
      width: "45%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#E2E7EB",
      marginLeft: "410px",
    },
    buttonThree: {
      cursor: "pointer",
      fontFamily: "Nunito",
      boxSizing: "border-box",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      height: "44px",
      padding: "0 25px",
      background: "#368FB4",
      color: "#fff",
      transform: "none",
      boxShadow: "4px 4px 0 0 #c2c2c2",
      transition: "background .3s,border-color .3s,color .3s",
      "&:hover": {
          backgroundColor:  "#3070F2"
        },
      label: {
        textTransform: 'capitalize',
      },
      marginLeft: "690px",
      marginTop: "30px",
    },
    newBack: {
      width: "100%",
      float: "left",
      backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/blurbackground.jpg'})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '1200px',  
      minHeight: "30vh"  
    }
})

function Home() {
    useEffect(() => {
      Aos.init({ duration: 1500 });
    }, [])
    const classes = styles();
    return (
      //Intro picture
        <ThemeProvider theme={theme}>
         <div className={classes.wrapper}>
            <CssBaseline />
            <div className={classes.subtitle}>
              <h1 data-aos="fade-right">
                Track your fitness journey <br />at StayFit
              </h1>
            </div>
            <div>
              <h1 className={classes.body} data-aos="fade-left">
                At StayFit, we will completely revamp your fitness knowledge by establishing
                a starting point, an end goal, and detailed steps on how to get there.
              </h1>
            </div>
          </div>
        
          {/*Bmi calculator section of homepage */}
          <div className={classes.newBack}>
            <div className={classes.second}>
              <Typography variant='h4' color='primary' className={classes.subtwo} data-aos="zoom-in">
                BMI Calculator
              </Typography>
              <Typography variant='h5' color='primary' className={classes.bodytwo} data-aos="zoom-out">
                A BMI (Body-Mass Index) calculator takes the height and weight of an individual and determines if they have an
                appropriate amount of body fat for their size.
              </Typography>
            </div>
            <div className={classes.third} data-aos="slide-left">
              <h1><CalculateIcon style={{marginTop: "0", fill: "#B4391B", height: "125", width: "125"}}/></h1>
                <button className={classes.button}>
                  <Link to="/bmicalculator" className={classes.link}>Take Me There!</Link>
                </button>
            </div>
          </div>

          {/*Find your workout section of homepage */}
          <div className={classes.wrapperTwo}>
            <div className={classes.subtitleTwo}>
              <h1 data-aos="fade-down-right">
                Find your workout...
              </h1>
            </div>
            <div className={classes.bodyThree}>
              <h1 data-aos="fade-up-left">
                Want to know how to target a specific muscle group? <br /> <br />Wondering about the correct form of a certain workout? <br /> <br />Find out more... 
              </h1>
            </div>
              <button className = {classes.buttonTwo} data-aos="zoom-out">
                <Link to="/findyourworkout" className={classes.link}>HERE!</Link>
              </button>
          </div>

          {/*Build your plan section of homepage */}
          <div className={classes.wrapperThree}>
            <div className={classes.subtitleThree}>
              <h1 data-aos="zoom-in-down">
                Build your plan...
              </h1>
            </div>
            <div className={classes.bodyFour}>
              <h1 data-aos="zoom-in-up">
                Plan your fitness Journey! <br /><br />Plan your weekly workout plan with our innovative workout planner.<br />
              </h1>
            </div>
            <button className={classes.buttonThree} data-aos="zoom-in">
              <Link to="/buildyourplan" className={classes.link}>Lets Go!</Link>
            </button>
          </div>
          <div>
              <Footer />
          </div>
        </ThemeProvider>
    )
}

 
export default Home;