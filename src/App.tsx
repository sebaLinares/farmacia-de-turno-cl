import { useState } from 'react'
import './App.css'
import { esCl } from './i18n/es-cl'
import HomeGradient from './components/home-gradient'
import Sidemenu from './components/sidemenu'
import Nav from './components/nav'

const navigation = [
	{ name: 'Product', href: '#' },
	{ name: 'Features', href: '#' },
	{ name: 'Marketplace', href: '#' },
	{ name: 'Company', href: '#' },
]

export default function Example() {
	const [isSidemenuOpen, setIsSidemenuOpen] = useState(false)
	const closeSidemenu = () => {
		setIsSidemenuOpen(false)
	}

	const openSidemenu = () => {
		setIsSidemenuOpen(true)
	}

	const triggerError = () => {}

	return (
		<div className=' bg-white fixed inset-0'>
			{/* Header */}
			<div className='fixed inset-x-0 top-0 px-6 pt-6 lg:px-8'>
				<div className='relative'>
					{/* Nav */}
					<Nav openSidemenu={openSidemenu} />
				</div>
			</div>

			<main className='flex items-center h-full'>
				{/* Hero */}
				<div className='flex flex-col gap-y-6 lg:gap-y-8 mx-auto max-w-3xl px-6'>
					<div className='flex flex-col gap-y-4 lg:gap-y-6'>
						<h1 className='text-4xl font-bold tracking-tight sm:text-center sm:text-6xl'>
							{esCl.welcome.title}
						</h1>

						<p className='text-lg leading-8 text-gray-600 sm:text-center'>
							{esCl.welcome.subtitle}
						</p>
					</div>
					<div className='flex flex-col gap-y-4 lg:flex-row lg:gap-x-4 sm:justify-center'>
						<a
							href='#'
							className='inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700'
						>
							{esCl.welcome.shiftDrugstoreButtonLabel}
							<span className='ml-2 text-indigo-200' aria-hidden='true'>
								&rarr;
							</span>
						</a>
						<a
							href='#'
							className='inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20'
						>
							{esCl.welcome.emergencyDrugstoreButtonLabel}
							<span className='ml-2 text-gray-400' aria-hidden='true'>
								&rarr;
							</span>
						</a>
					</div>
				</div>

				{/* Sidemenu */}
				<Sidemenu closeSidemenu={closeSidemenu} isOpen={isSidemenuOpen} />
			</main>

			{/* Background gradients */}
			<HomeGradient />
		</div>
	)
}
