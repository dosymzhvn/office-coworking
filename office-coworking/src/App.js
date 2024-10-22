import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header'; // Убедись, что путь к Header правильный
import Home from './components/home'; // Убедись, что путь к Home правильный
import Register from './components/register';
import Login from './components/login';
import './App.css';


const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/header' element={<Header/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                </Routes>
               
            </div>
        </Router>
    );
};

export default App;
