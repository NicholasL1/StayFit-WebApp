import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import SearchIcon from '@mui/icons-material/Search';
import workoutData from './Data.json';
import Aos from "aos";
import "aos/dist/aos.css";


const styles = makeStyles({
    background: {
        width: "100%",
        float: "left",
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/findworkoutbackground.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '1600px',
        height: "1000px",
    },
    boxOne: {
        height: "550px",
        width: "28%",
        marginLeft: "80px",
        marginTop: "100px",
        backgroundColor: "#E2E7EB",
        boxShadow: "5px 5px 5px 5px #0d0d0d",
        // border: "20px solid #a5b3c0",
        overflow: "auto",
        float: "left",
        display: "flex",
        flexDirection: "column",
        flex: 1,
    },
    boxTwo: {
        display: "flex",
        height: "550px",
        width: "28%",
        marginLeft: "80px",
        marginTop: "100px",
        backgroundColor: "#E2E7EB",
        boxShadow: "5px 5px 5px 5px #0d0d0d",
        overflow: "auto",
        flexDirection: "column",
        flex: 1,
        float: "left",
    },
    searchBar: {
        marginLeft: "50px",
        marginTop: "20px",
        width: "60%",
        borderRadius: "5px",
        height: "20px",
        padding: "3px 10px",
        border: "3px solid #ddd",
        display: "grid",
    },
    listOne: {
        marginLeft: "40px",
        textAlign: "left",
        marginTop: "20px",
        height: "300px",
        color: "#3F3B42",
        fontSize: "15px",
        width: "80%",
    },
    workoutList: {
        width:"90%",
        textAlign: "left",
    },
    button: {
        float: "right",
        height: "20px",
        borderRadius: "5px",
        fontFamily: "Nunito",
        textAlign: "center",
        backgroundColor: "#429598",
        color: "#E2E7EB",
        cursor: "pointer",
        transition: "background .3s,border-color .3s,color .3s",
        "&:hover": {
            backgroundColor:  "#3070F2"
          },
    },
    searchIcon: {
        marginLeft: "300px",
        marginTop: "4px",
        display: "grid", 
        placeItems: "center"
    },
    secondHeader: {
        color: "#3F3B42",
        fontSize: "xx-large",
    },
    gif: {
        width: "75%",
        marginLeft: "55px",
    },
    focus: {
        color: "#3F3B42",
        height: "50%",
    },
    desc: {
        fontFamily: "Arial",
        marginLeft: "30px",
        width: "85%",
        marginTop: "0px",
        fontSize: "20px",
        color: "#666666",
        height: "1000px",
    },
    boxThree: {
        display: "flex",
        width: "21%",
        float: "right",
        boxShadow: "5px 5px 5px 5px #0d0d0d",
        marginRight: "6%",
        flex: 1,
        height: "57%",
        marginTop: "90px",
    },
    flipButton: {
        background: "#728ACD", 
        fontFamily: "Nunito", 
        color: "#E2E7EB", 
        fontStyle: "italic", 
        fontWeight: "bold", 
        cursor: "pointer",
        transition: "background .3s,border-color .3s,color .3s",
        "&:hover": {
            backgroundColor:  "#3070F2"
          },
    }
})

function FindYourWorkout() {
    useEffect(() => {
        Aos.init({ duration: 1500 });
      }, [])

    const [index, setIndex] = useState(24);
    const [picture, setPicture] = useState(0)

    const classes = styles(); 
    let data = workoutData.map(function(element) {
        return element;
    })
    const [searchTerm, setSearchTerm] = useState("");

    const calculateBMI = (num) => {
        setIndex(num)
    }

    function flipPicture() {
        if (picture === 0) {
            setPicture(1);
        }
        else {
            setPicture(0);
        }
    }

      
    return (
        <div className={classes.background}>
            <div className={classes.boxOne} data-aos="fade-left">
                <div style={{marginLeft: "30px", height: "20px"}}>
                    <input className={classes.searchBar} 
                        type="text"
                        placeholder='Enter workout...'
                        onChange={event => {setSearchTerm(event.target.value)}}
                    />
                </div>
                <div style={{width: "30px",}}>
                    <SearchIcon className={classes.searchIcon}/>
                </div>
                    {/*Filtering for certain workout using Data.json*/}
                    {workoutData.filter((val) => {
                        if (searchTerm === "") {
                            return null
                        }
                        else if (val.workout.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val
                        }
                        return null
                    }).map((val, key) => {
                        return (
                            <div>
                                <ul className={classes.workoutList}>
                                    <button className={classes.button} onClick={() => calculateBMI(val.index)}>More Info</button>
                                    <li>{val.workout}</li>
                                </ul> 
                            </div>
                        );
                    })}
                    {/* Displaying workout organised by the primary muscle being worked */}
                <div className={classes.listOne}>
                    <h1>{data[0].focus}</h1>
                    <ul className={classes.workoutList}>
                        <button onClick={() => calculateBMI(0)} className={classes.button}>More Info</button>
                        <li>{data[0].workout}</li> 
                        <button onClick={() => calculateBMI(1)} className={classes.button}>More Info</button>
                        <li>{data[1].workout}</li> 
                        <button onClick={() => calculateBMI(2)} className={classes.button}>More Info</button>
                        <li>{data[2].workout}</li> 
                    </ul>
                    <h1>{data[3].focus}</h1>
                    <ul className={classes.workoutList}>
                        <button onClick={() => calculateBMI(3)} className={classes.button}>More Info</button>
                        <li>{data[3].workout}</li> 
                        <button onClick={() => calculateBMI(4)} className={classes.button}>More Info</button>
                        <li>{data[4].workout}</li> 
                        <button onClick={() => calculateBMI(5)} className={classes.button}>More Info</button>
                        <li>{data[5].workout}</li> 
                    </ul>
                    <h1>{data[6].focus}</h1>
                    <ul className={classes.workoutList}>
                        <button onClick={() => calculateBMI(6)} className={classes.button}>More Info</button>
                        <li>{data[6].workout}</li> 
                        <button onClick={() => calculateBMI(7)} className={classes.button}>More Info</button>
                        <li>{data[7].workout}</li> 
                        <button onClick={() => calculateBMI(8)} className={classes.button}>More Info</button>
                        <li>{data[8].workout}</li> 
                    </ul>
                    <h1>{data[9].focus}</h1>
                    <ul className={classes.workoutList}>
                        <button onClick={() => calculateBMI(9)} className={classes.button}>More Info</button>
                        <li>{data[9].workout}</li> 
                        <button onClick={() => calculateBMI(10)} className={classes.button}>More Info</button>
                        <li>{data[10].workout}</li> 
                        <button onClick={() => calculateBMI(11)} className={classes.button}>More Info</button>
                        <li>{data[11].workout}</li> 
                    </ul>
                    <h1>{data[12].focus}</h1>
                    <ul className={classes.workoutList}>
                        <button onClick={() => calculateBMI(12)} className={classes.button}>More Info</button>
                        <li>{data[12].workout}</li> 
                        <button onClick={() => calculateBMI(13)} className={classes.button}>More Info</button>
                        <li>{data[13].workout}</li> 
                        <button onClick={() => calculateBMI(14)} className={classes.button}>More Info</button>
                        <li>{data[14].workout}</li> 
                    </ul>
                    <h1>{data[15].focus}</h1>
                    <ul className={classes.workoutList}>
                        <button onClick={() => calculateBMI(15)} className={classes.button}>More Info</button>
                        <li>{data[15].workout}</li> 
                        <button onClick={() => calculateBMI(16)} className={classes.button}>More Info</button>
                        <li>{data[16].workout}</li> 
                        <button onClick={() => calculateBMI(17)} className={classes.button}>More Info</button>
                        <li>{data[17].workout}</li> 
                    </ul>
                    <h1>{data[18].focus}</h1>
                    <ul className={classes.workoutList}>
                        <button onClick={() => calculateBMI(18)} className={classes.button}>More Info</button>
                        <li>{data[18].workout}</li> 
                        <button onClick={() => calculateBMI(19)} className={classes.button}>More Info</button>
                        <li>{data[19].workout}</li> 
                        <button onClick={() => calculateBMI(20)} className={classes.button}>More Info</button>
                        <li>{data[20].workout}</li> 
                    </ul>
                    <h1>{data[21].focus}</h1>
                    <ul className={classes.workoutList}>
                        <button onClick={() => calculateBMI(21)} className={classes.button}>More Info</button>
                        <li>{data[21].workout}</li> 
                        <button onClick={() => calculateBMI(22)} className={classes.button}>More Info</button>
                        <li>{data[22].workout}</li> 
                        <button onClick={() => calculateBMI(23)} className={classes.button}>More Info</button>
                        <li>{data[23].workout}</li> 
                    </ul>
                </div>
            </div>
            <div className={classes.boxTwo} data-aos="fade-in">
                <h1 className={classes.secondHeader}>{data[index].workout}</h1>
                <img className={classes.gif} src={data[index].imageLink} alt='Loading...'/>
                <h2 className={classes.focus}> Focus: {data[index].focus}</h2>
                <h3 className={classes.desc}>Description: {data[index].desc}</h3>
                <a href={data[index].link} target='_blank' rel="noopener noreferrer" style={{height:"1000px",}}>Find Out More</a>
            </div>
            <div className={classes.boxThree} data-aos="fade-right">
                <img src={data[picture].picture} alt='Homan muscle anatomy loading...'/>
                <button  className={classes.flipButton} onClick={flipPicture}>
                    Flip Picture
                </button>
            </div>
        </div>
    )
}

export default FindYourWorkout;