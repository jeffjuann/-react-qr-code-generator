import { useState } from "react";
import '../assets/css/Form.css';


const InputForm = ({ handleTextLink }) =>
{
    const [text, setText] = useState('');

    return (
        <div className="form">
            <div className="textinput">
                <label htmlFor="text-input">Text/Link :</label>
                <input type="text" onChange={(e) => setText(e.target.value)} placeholder="input text or link here ..."/>
            </div>
            <button onClick={() => handleTextLink(text)}>Generate</button>
        </div>
    )
}

export default InputForm;