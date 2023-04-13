import './assets/css/App.css';
import Inputform from './Form';
import { useState } from 'react';
import QRCode from 'react-qr-code';

function App()
{
	const [text, setText] = useState('');

	const handleGenerate = (text) =>
	{
		setText(text);
	}	

	return (
		<div className="App">
			<div className='QR'>
				<QRCode
					value={text}
					bgColor='#FFFFFF'
					fgColor='#000000'
				/>
			</div>
			<Inputform handleTextLink={handleGenerate}/>
		</div>
	);
}

export default App;
