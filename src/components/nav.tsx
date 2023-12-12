import { esCl } from '../i18n/es-cl'
import { Bars3Icon } from '@heroicons/react/24/outline'
type NavProps = {
	openSidemenu: () => void
}

const Nav = ({ openSidemenu }: NavProps) => {

	return (
		<nav className='flex h-9 items-center justify-between' aria-label='Global'>
			<div className='flex relative'>
			</div>

			<div className='flex'>
				<button
					type='button'
					className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
					onClick={openSidemenu}
				>
					<span className='sr-only'>{esCl.welcome.a11y.openSidemenu}</span>
					<Bars3Icon className='h-6 w-6' aria-hidden='true' />
				</button>
			</div>
		</nav>
	)
}
export default Nav
