import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import Aos from "aos";
import "aos/dist/aos.css";

const styles = makeStyles({
    background: {
        width: "100%",
        float: "left",
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/planbackground.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '1690px',
        height: "861px",
    },
    box: {
        width: "70%",
        height: "60%",
        marginTop: "100px",
        marginRight: "60px",
        backgroundColor: "#274a8b",
        border: "4mm ridge #203D71",
        boxShadow: "5px 5px 5px 5px  #1a1a1a",
        float: "right",
        display: "inline",
    },
    title: {
        fontFamily: "Nunito",
        color: "#E2E7EB",
        fontSize: "50px"
    },
    subtitle: {
        fontFamily: "Nunito",
        color: "#E2E7EB",
        fontSize: "xx-large",
        marginTop: "30px",
        display: "inline",
        textDecoration: "underline",
    },
    bottomSub: {
        fontFamily: "Nunito",
        color: "#E2E7EB",
        fontSize: "xx-large",
        height: "20%",
        marginTop: "50px",
        display: "inline",
        textDecoration: "underline",
    },
    ulstyle: {
        color: "#E2E7EB",
    },
    inputBox: {
        display: "inline",
        float: "left",
        width: "240px",
        height: "280px",
        backgroundColor: "#274a8b",
        border: "4mm ridge #203D71",
        boxShadow: "5px 5px 5px 5px  #1a1a1a",
        marginLeft: "40px",
        marginTop: "260px",
    },
    label: {
        textAlign: "left",
        color: "#E2E7EB",
        marginLeft: "10%",
        display: "block",
    },
    input: {
        width: "78%",
        textAlign: "left",
        padding: "3px 10px",
        margin: "10px 0",
        border: "3px solid #ddd",
        boxSizing: "border-box",
        display: "block",
        marginLeft: "10%",
    },
    dropdown: {
        display: "inline",
        padding: "1px 2px",
        border: "3px solid #ddd",
        boxSizing: "border-box",
        fontFamily: "Nunito",
    },
    labelTwo: {
        textAlign: "left",
        color: "#E2E7EB",
        display: "inline",
        marginRight: "20px",
    },
    button: {
        cursor: "pointer",
        fontFamily: "Nunito",
        boxSizing: "border-box",
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        height: "20px",
        padding: "0 25px",
        background: "#368FB4",
        color: "#fff",
        boxShadow: "1px 1px 0 0 #c2c2c2",
        marginTop: "15px",
        textAlign: "center",
        transition: "background .3s,border-color .3s,color .3s",
        "&:hover": {
            backgroundColor: "#3070F2"
        },
        label: {
            textTransform: 'capitalize',
        },
    }
})

function BuildYourPlan() {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])

    const classes = styles();

    const [sets, setSets] = useState(1);
    const [reps, setReps] = useState(3);
    const [day, setDay] = useState("Sunday");
    const [name, setName] = useState("");



    //Arrays for storing daily workouts and corresponding indexes
    let listSun = [];
    let listMon = [];
    let listTue = [];
    let listWed = [];
    let listThu = [];
    let listFri = [];
    let listSat = [];

    function addWorkout() {
        let i = 0;
        if (day === "Sunday") {
            listSun.push(name + ": " + sets + " sets of " + reps + "reps");
            i = listSun.length - 1;
            document.getElementById("sunday").innerHTML += ('<li>' + listSun[i] + '</li>');
        }
        else if (day === "Monday") {
            listMon.push(name + ": " + sets + " sets of " + reps + "reps");
            i = listMon.length - 1;
            document.getElementById("monday").innerHTML += ('<li>' + listMon[i] + '</li>');
        }
        else if (day === "Tuesday") {
            listTue.push(name + ": " + sets + " sets of " + reps + "reps");
            i = listTue.length - 1;
            document.getElementById("tuesday").innerHTML += ('<li>' + listTue[i] + '</li>');
        }
        else if (day === "Wednesday") {
            listWed.push(name + ": " + sets + " sets of " + reps + "reps");
            i = listWed.length - 1;
            document.getElementById("wednesday").innerHTML += ('<li>' + listWed[i] + '</li>');
        }
        else if (day === "Thursday") {
            listThu.push(name + ": " + sets + " sets of " + reps + "reps");
            i = listThu.length - 1;
            document.getElementById("thursday").innerHTML += ('<li>' + listThu[i] + '</li>');
        }
        else if (day === "Friday") {
            listFri.push(name + ": " + sets + " sets of " + reps + "reps");
            i = listFri.length - 1;
            document.getElementById("friday").innerHTML += ('<li>' + listFri[i] + '</li>');
        }
        else if (day === "Saturday") {
            listSat.push(name + ": " + sets + " sets of " + reps + "reps");
            i = listSat.length - 1;
            document.getElementById("saturday").innerHTML += ('<li>' + listSat[i] + '</li>');
        }
    }

    function removeWorkout() {
        let j = 0;
        if (day === "Sunday") {
            j = listSun.length - 1;
            var listA = document.getElementById("sunday");
            listA.removeChild(listA.childNodes[j]);
            listSun.splice(j, 1);
        }
        else if (day === "Monday") {
            j = listMon.length - 1;
            var listB = document.getElementById("monday");
            listB.removeChild(listB.childNodes[j]);
            listMon.splice(j, 1);
        }
        else if (day === "Tuesday") {
            j = listTue.length - 1;
            var listC = document.getElementById("tuesday");
            listC.removeChild(listC.childNodes[j]);
            listTue.splice(j, 1);
        }
        else if (day === "Wednesday") {
            j = listWed.length - 1;
            var listD = document.getElementById("wednesday");
            listD.removeChild(listD.childNodes[j]);
            listWed.splice(j, 1);
        }
        else if (day === "Thursday") {
            j = listThu.length - 1;
            var listE = document.getElementById("thursday");
            listE.removeChild(listE.childNodes[j]);
            listThu.splice(j, 1);
        }
        else if (day === "Friday") {
            j = listFri.length - 1;
            var listF = document.getElementById("friday");
            listF.removeChild(listF.childNodes[j]);
            listFri.splice(j, 1);
        }
        else if (day === "Saturday") {
            j = listSat.length - 1;
            var listG = document.getElementById("saturday");
            listG.removeChild(listG.childNodes[j]);
            listSat.splice(j, 1);
        }
    }

    return (
        <div className={classes.background}>
            <div className={classes.inputBox} data-aos="fade-left">
                <h1 style={{ color: "#E2E7EB", fontFamily: "Nunito", fontSize: "28px" }}>Add Exercise</h1>
                <div>
                    <label className={classes.label}>Enter exercise:</label>
                    <input className={classes.input}
                        type="text"
                        id="name"
                        placeholder='Workout name...'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label className={classes.labelTwo}>Sets:</label>
                    <select className={classes.dropdown}
                        value={sets}
                        onChange={(e) => setSets(e.target.value)}>
                        <option value="1">1 Set</option>
                        <option value="2">2 Set</option>
                        <option value="3">3 Set</option>
                        <option value="4">4 Set</option>
                    </select>
                    <label className={classes.labelTwo}><br />Reps:</label>
                    <select className={classes.dropdown} style={{ marginTop: "5px", }}
                        value={reps}
                        onChange={(e) => setReps(e.target.value)}>
                        <option value="3">3 Rep</option>
                        <option value="4">4 Rep</option>
                        <option value="5">5 Rep</option>
                        <option value="6">6 Rep</option>
                        <option value="7">7 Rep</option>
                        <option value="8">8 Rep</option>
                        <option value="9">9 Rep</option>
                        <option value="10">10 Rep</option>
                        <option value="11">11 Rep</option>
                        <option value="12">12 Rep</option>
                    </select>
                    <div>
                        <label className={classes.labelTwo}>Select Day:</label>
                        <select className={classes.dropdown} style={{ marginTop: "5px", }}
                            value={day}
                            onChange={(e) => setDay(e.target.value)}>
                            <option value="Sunday">Sunday</option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                        </select>
                    </div>
                    <div style={{ marginRight: "10px" }}>
                        <button className={classes.button} onClick={addWorkout} style={{ marginLeft: "13px", }}>Add</button>
                        <button className={classes.button} onClick={removeWorkout} style={{ float: "right", marginTop: "-20px", width: "55%", fontSize: "12px" }}>Remove Last</button>
                    </div>
                </div>
            </div>

            <div className={classes.box} data-aos="fade-right">
                <h1 className={classes.title}>Build Your Weekly Plan</h1>
                <div style={{ float: "left", }}>
                    <h2 className={classes.subtitle} style={{ float: "left", marginLeft: "40px", }}>Sunday</h2>
                    <h2 className={classes.subtitle} style={{ marginLeft: "130px", float: "left" }}>Monday</h2>
                    <h2 className={classes.subtitle} style={{ marginLeft: "130px", float: "left" }}>Tuesday</h2>
                    <h2 className={classes.subtitle} style={{ marginLeft: "130px", float: "left" }}>Wednesday</h2>

                    <ul className={classes.ulstyle} style={{ float: "left", marginLeft: "-970px", marginTop: "80px", display: "inline", fontSize: "13px", }} id="sunday">
                    </ul>
                    <ul className={classes.ulstyle} style={{ float: "left", marginLeft: "-720px", marginTop: "80px", display: "inline", fontSize: "13px" }} id="monday">
                    </ul>
                    <ul className={classes.ulstyle} style={{ float: "left", marginLeft: "-450px", marginTop: "80px", display: "inline", fontSize: "13px" }} id="tuesday">
                    </ul>
                    <ul className={classes.ulstyle} style={{ float: "left", marginLeft: "-210px", marginTop: "80px", display: "inline", fontSize: "13px" }} id="wednesday">
                    </ul>
                </div>

                <div>
                    <h2 className={classes.bottomSub} style={{ float: "left", marginLeft: "160px", }}>Thursday</h2>
                    <h2 className={classes.bottomSub} style={{ float: "left", marginLeft: "160px", }}>Friday</h2>
                    <h2 className={classes.bottomSub} style={{ float: "left", marginLeft: "160px", }}>Saturday</h2>

                    <ul className={classes.ulstyle} style={{ float: "left", marginLeft: "-720px", marginTop: "105px", display: "inline", fontSize: "13px" }} id="thursday">
                    </ul>
                    <ul className={classes.ulstyle} style={{ float: "left", marginLeft: "-420px", marginTop: "105px", display: "inline", fontSize: "13px" }} id="friday">
                    </ul>
                    <ul className={classes.ulstyle} style={{ float: "left", marginLeft: "-180px", marginTop: "105px", display: "inline", fontSize: "13px" }} id="saturday">
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BuildYourPlan;