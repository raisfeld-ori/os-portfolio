import { AppInterface } from "../../App";
import App from "../../App";
import './text_viewer.css';

export default function text_viewer(file_selected: string | null) : AppInterface{
    let update = async () => {
        if (file_selected == null) {return;}
    }
    let context_menu = <div>

    </div>
    let html = <div className="outer">
        <textarea className="inner" readOnly={true} value={""}>
        </textarea>
    </div>
    let [screen, set_display, fullscreen] = App(html, 'text viewer');
    return {screen, set_display, fullscreen, context_menu, update};
}