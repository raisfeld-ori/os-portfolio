import { AppInterface } from "../../App";
import App from "../../App";
import resume from './Ori Raisfeld - Resume.pdf';

export default function text_viewer() : AppInterface{
    let update = async () => {
    }
    let context_menu = <div></div>
    let html = <div className="outer">
        <div className='inner'>
        </div>
    </div>
    let [screen, set_display, fullscreen] = App(html, 'text viewer');
    return {screen, set_display, fullscreen, context_menu, update};
}