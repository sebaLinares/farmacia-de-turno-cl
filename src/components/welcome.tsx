import { esCl } from '../i18n/es-cl'
import Button from './button'

const Welcome = () => {
	return (
		<div
			className='flex flex-col justify-center items-center gap-y-8 text-gray-900 border-4 shadow-xl border-gray-900 p-8 rounded h-1/2 w-4/5'
			style={{
				boxShadow:
					'1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px',
			}}
		>
			<h2 className='text-xl font-semibold tracking-widest'>
				{esCl.welcome.title}
			</h2>
			<p className='font-semibold tracking-widest'>{esCl.welcome.subtitle}</p>
			<Button>{esCl.welcome.startButtonLabel}</Button>
		</div>
	)
}

export default Welcome
