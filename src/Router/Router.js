import React from 'react'
import { Routes, Route } from "react-router-dom";
import {Main ,Home , About , Contact , Resume} from '../Pages/index';

const Router = () => {

    return (
    <Routes>
      <Route path="/" element={<Main/>}>
                <Route path="home" element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="contact" element={<Contact />} />
                <Route path="resume" element={<Resume />} />
            </Route>
        <Route path="*" element={(()=> <h1>Page NOT FOUND - 404 :( </h1>) ()}></Route> 
    </Routes>
    )
}
export default Router









