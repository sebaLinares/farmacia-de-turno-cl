import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Welcome from './components/welcome'

function App() {
	const [mode, setMode] = useState('light')

	return (
		<div className='transition-colors duration-500 ease-in overflow-hidden relative bg-slate-200 flex justify-center items-center'>
			<Welcome />
		</div>
	)
}

export default App
