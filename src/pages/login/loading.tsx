import './login.css';
import { useEffect, useState } from 'react';
import noenemies from '../main_page/assets/nature.jpg';
import pfp from './assets/Default_pfp.svg.png';
import { useLocation, useNavigate } from 'react-router-dom';


// loading the page requires a username and a password
function loading(){
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        setTimeout(() =>{navigate("/main_page", {state: {name: location.state.name, password: location.state.password}});}, 2000)
    }, [])
    return <div id='background' onContextMenu={e => e.preventDefault()}>
        <img className='IhaveNoEnemys' src={noenemies} alt="backgroundimg" />
        <div className='iseewhoyouare' ></div>


        <div className="dot">
            <img src={pfp} alt="Descriptive text" />
                </div>

                <p id='melody'>Welcome <span className='nameload'>{(location.state.name || "User")}</span>!</p>
        </div>

}

export default loading;
