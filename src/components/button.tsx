type ButtonProps = {
	children: string
}

const Button = ({ children }: ButtonProps) => {
	return (
		<button
			className='flex justify-center items-center w-44 h-12 border-4 border-gray-900 rounded
      focus:outline-none 
      hover:ease-in hover:duration-150 hover:-translate-y-2
      '
			type='button'
			style={{
				boxShadow:
					'1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px',
			}}
		>
			<span className='w-full m-0 p-0 tracking-widest text-sm'>{children}</span>
		</button>
	)
}

export default Button
