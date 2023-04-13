import { useState } from "react";
import '../assets/css/Form.css'


const InputForm = ({ handleTextLink }) =>
{
    const [text, setText] = useState('');

    const handleOnChange = (e) =>
    {
        setText(e.target.value);
    }

    const submitBtn = () =>
    {
        handleTextLink(text);
    }

    return (
        <div className="form">
            <div className="textinput">
                <label htmlFor="text-input">Text/Link :</label>
                <input type="text" onChange={handleOnChange} placeholder="input text or link here ..."/>
            </div>
            <button onClick={submitBtn}>Generate</button>
        </div>
    )
}

export default InputForm;