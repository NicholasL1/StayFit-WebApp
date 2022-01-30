import './App.css';
import React from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import NavBar from './components/Navbar/Navbar';
import Home from "./Home";
import BuildYourPlan from "./BuildYourPlan";
import BMICalculator from "./BMICalculator";
import FindYourWorkout from "./FindYourWorkout";
import Signup from './Signup';
import Login from './Login';
import { Route, Routes } from 'react-router-dom';



const theme = createTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
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


function App() {

  return (
    <div className="App">
        <ThemeProvider theme={theme}>
          <NavBar/>
          <Routes> 
            <Route exact path ="/" element={<Home/>} />
            <Route exact path ="/bmicalculator" element={<BMICalculator/>} />
            <Route exact path ="/buildyourplan" element={<BuildYourPlan/>} />
            <Route exact path ="/findyourworkout" element={<FindYourWorkout/>} />
            <Route exact path ="/signup" element={<Signup/>} />
            <Route exact path ="/login" element={<Login/>} />
            <Route path = "*" />
          </Routes>
        </ThemeProvider>
    </div>
  );
} 

export default App;
