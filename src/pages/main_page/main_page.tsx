import { useEffect, useState } from 'react';
import './main_page.css';
import Grid from './Grid';
import menu_icon from './assets/computer-laptop-color-icon.webp';
import ibetonhakari from './assets/TOCA2.mp4';
import { desktop_app } from './Grid';
import resume_fn from './internal_apps/apps/resume/resume';
import leaveicon from './assets/leave.png';
import { useNavigate } from 'react-router-dom';
import resume_icon from './assets/resume_icon.svg';
import NotificationSystem, { NotificationType } from './internal_apps/notification';

function BinIcon(props: {display: () => Promise<void>, name: string, img: string}){
    return   <div className='appsmenu'onClick={props.display}>
    <p><i className="line right"></i></p>
    <button className='folderappmenu'>
        <img className='folderappmenu' src={props.img} alt="filesystem" />
    </button>
    <p className='filestxt'>{props.name}</p>
    </div>;
}

const Clock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);

    var day = String(currentTime.getDate()).padStart(2, '0');
    var month = String(currentTime.getMonth() + 1).padStart(2, '0');
    var year = currentTime.getFullYear();
  
    return (
        <p className='time'>{currentTime.toLocaleTimeString()}<br />{day + '/' + month + '/' + year}</p>
    );
  };

export default function MainPage() {
    const navigate = useNavigate();
    const notifications = NotificationSystem();
    const [menu, set_menu] = useState(false);
    const resume = resume_fn();
    const resume_app = desktop_app('Resume', resume_icon, resume, true);
    useEffect(() => {notifications.new_notification({name: 'Welcome to my Portfolio', 
        text: 'click here for fullscreen mode', type: NotificationType.Success, onclick: (clear_notification) => {
            document.documentElement.requestFullscreen();
            clear_notification();
        }});}, [])
    return (
        <div id='background' onContextMenu={e => {e.preventDefault();}} onClick={() => {if (menu) {set_menu(false)}}}>
            {notifications.html}
            <Grid  apps={[ resume_app,
            ]} gridSize={50} margin={120} />
            <nav className='navbar' onContextMenu={e => e.preventDefault()}>
                <img className='homeimg' onClick={() => set_menu(!menu)} src={menu_icon} alt="" />
                <Clock></Clock>
            </nav>
            <div className={`menu ${menu ? 'show' : 'hide'}`}>
            <div className="menu-header">
            <h1 className='menutext'>Applications</h1>

                <div className='menubuttons'>
                <BinIcon display={async () => {resume.set_display('inherit')}}
                name='My resume' img={resume_icon}/>
                </div>

                <div className='menubutton'>

                <button className='leave'onClick={async () => {navigate("/", {state: {name: '', password: '', refresh: false}});}} >
                    <img src={leaveicon} alt="leaveicon" />
                </button>
                </div>
       
                </div>
                </div>


            <video className='hakari' src={ibetonhakari} width="100%" height="100%" autoPlay muted loop>
    Your browser does not support the video tag
</video>
        </div>
    );
}