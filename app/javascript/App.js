import React from 'react';
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Greeting from './components/Greeting';
import { fetchGreeting } from './features/greetSlice';

const App = () => {
    const dispatch = useDispatch();
    dispatch(fetchGreeting);


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Greeting />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;