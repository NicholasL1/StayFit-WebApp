import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { useState } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";


const styles = makeStyles({
    bmi: {
        width: "100%",
        float: "left",
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bmibackground.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '1600px',
        height: "1000px",
    },
    title: {
        marginTop: "20px",
        textAlign: "center", 
        fontSize: "30px",
        marginBottom: "30px",
        color: "#666666",
    },
    label: {
        textAlign: "left",
        display: "block",
        marginLeft: "15.3%",
    },
    input: {
        width: "60%",
        textAlign: "center",
        padding: "3px 10px",
        margin: "10px 0",
        border: "3px solid #ddd",
        boxSizing: "border-box",
        display: "inline",
    },
    button: {
        fontWeight: "bold",
        width: "150px",
        fontFamily: "Nunito",
        marginTop: "20px",
        textAlign: "center",
        marginLeft: "30%",
        marginRight: "50%",
        display: "block",
        marginBlock: "center",
        height: "35px",
        padding: "0 20px",
        boxSizing: "border-box",
        borderRadius: "8px", 
        background: "#9CB3D3",
        color: "#fff",
        // boxShadow: "6px 6px 0 0 #c7d8ed",
        cursor: "pointer",
        margin: "10px 0",
        transition: "background .3s,border-color .3s,color .3s",
        "&:hover": {
            backgroundColor:  "#3070F2"
          },
    },
    image: {
        width: "40%",
        height: "40%",
        float: "right",
        marginRight: "150px",
        marginTop: "80px",
        marginBottom: "100%",
        display: 'block',
        verticalAlign: "top",
        boxShadow: "15px 35px 10px 10px #404040",
        '@media (max-width 360px)': {
            paddingBottom: '1rem'
        }
    },
    dropdown: {
        display: "block",
        marginLeft: "20%",
        width: "60%",
        marginTop: "10px",
        padding: "1px 2px",
        border: "3px solid #ddd",
        boxSizing: "border-box",
        fontFamily: "Nunito",
    },
    resultone: {
        fontSize: "30px",
        color: "#666666", 
    },
    resulttwo: {
        fontSize: "20px",
        color: "#666666",
    },
    feedback: {
        width: "90%",
        fontSize: "20px",
        marginTop: "30px",
        marginLeft: "20px",
        textAlign:"center",
        color: "#000000",
        marginBottom: "10px",
    },
    form: {
        textAlign: "center",
        marginTop: "80px",
        backgroundColor: "#fff",
        marginRight: "60%",
        marginLeft: "10%",
        boxShadow: "10px 5px 10px 10px #404040",
        display: "flex",
        flexDirection: "column",
    },

})



const BMICalculator = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 });
      }, [])

    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmiValue, setBMIValue] = useState(null);
    const [level, setLevel] = useState("");
    const [feedback, setFeedback] = useState("");
    const [system, setSystem] = useState("metric");

    function calculateBMI() {
        let bmi;
        if (system === "metric") {
            bmi = Number(weight / (height * height)).toFixed(2);
        }
        else {
            bmi = Number((703 * weight) / (height * height)).toFixed(2);
        }
        setBMIValue(bmi);

        let bmiResult = getLevel(bmi);
        setLevel(bmiResult);

        let tempfeed = getFeedback(bmi);
        setFeedback(tempfeed);

        setWeight("");
        setHeight("");
    }

    function getLevel(val) {
        if (val < 18.5) {
            return "You are underweight!"
        }
        else if (val >= 18.5 && val <= 24.9) {
            return "You are normal!"
        }
        else if (val >= 25 && val <= 29.9) {
            return "You are overweight!"
        }
        else if (val >= 30 && val <= 34.9) {
            return "You are obese!"
        }
        else if (val >= 35) {
            return "You are extremely obese!"
        }
        else {
            return "Error calculating BMI."
        }
    }

    function getFeedback(val) {
        if (val < 18.5) {
            return "If your goal is to gain a healthy amount of weight, we suggest you implement a surplus of calories in your daily diet. To do this, track the amount of calories you eat in a day and add 200-300, this is your new daily caloric goal.\n Remember to supplement this with frequent exercizing!"
        }
        else if (val >= 18.5 && val <= 24.9) {
            return "You are at a normal weight. If your goal is to improve muscularity, we suggest maintaining the same amount of daily calories but incorporating more protein in your diet."
        }
        else if (val >= 25 && val <= 29.9) {
            return "Depending on your body fat and preference, if your goal is to lose weight, a slight caloric deficit will help. This means tracking the amount of calories you consume in a day and subtracting 100-200 from it, this is your new daily caloric goal.\n Try implementing more cardio in your workouts."
        }
        else if (val >= 30 && val <= 34.9) {
            return "If your goal is to lose weight, going into a caloric deficit will help. You may do this by tracking your daily caloric consumption, then subtracting 300-400 calories from it, this is your new daily caloric goal.\n We suggest doing more cardio in your daily workout sessions."
        }
        else if (val >= 35) {
            return "Consider going into a major caloric deficit. This means tracking the amount of calories consumed daily and subtracting 500 calories from it, this is your new daily caloric goal. Remember to encorporate plenty of cardio and HIIT in your workouts.\nYou can always start off slow and increase the difficulty of your dieting and workouts.\nBelieve in yourself!"
        }
        else {
            return "No feedback."
        }
    }

    const classes = styles();
    return (
        <div className={classes.bmi}>
                <div className={classes.image} data-aos="fade-right">
                    <img src="./images/bmiimage.jpg" alt="bmi"/>
                </div>
                <div className={classes.form} data-aos="fade-left">
                    <form>
                        <h1 className={classes.title}>BMI Calculator</h1>
                        <div marginTop="80px">
                            <label className={classes.label}>Enter Weight:</label>
                            <input className={classes.input} 
                                type="text"
                                id='weight'
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className={classes.label}>Enter Height:</label>
                            <input className={classes.input}
                                type="text"
                                id='height'   
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                            />
                        </div>
                        <select 
                            className={classes.dropdown}
                            value={system}
                            onChange={(e) => setSystem(e.target.value)}>
                            <option value = "metric">Metric (Kilograms/Metres)</option>
                            <option value = "imperial">Imperial (Pounds/Inches)</option>
                        </select>
                        <button 
                            type = "button" 
                            className={classes.button} 
                            onClick={calculateBMI}>Calculate BMI
                        </button>
                        {bmiValue && (
                            <div>
                                <h1 className={classes.resultone}>Your BMI is: {bmiValue}</h1>
                                <h2 className={classes.resulttwo}>{level}</h2> 
                            </div>
                        )}
                        <div className={classes.feedback}>
                            <p>{feedback}</p>
                        </div>
                    </form>
                </div>
        </div>
    )
}

 
export default BMICalculator;