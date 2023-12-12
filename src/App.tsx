import { useState } from 'react'
import './App.css'
import { esCl } from './i18n/es-cl'
import HomeGradient from './components/home-gradient'
import Sidemenu from './components/sidemenu'
import Nav from './components/nav'
import { Button } from '@/components/ui/button'

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
						<Button>{esCl.welcome.shiftDrugstoreButtonLabel}</Button>
						<Button variant='secondary'>
							{esCl.welcome.emergencyDrugstoreButtonLabel}
						</Button>
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
