import { Dialog, Transition } from '@headlessui/react'
import { useState, Fragment } from 'react'
import { esCl } from '../i18n/es-cl'
import { XMarkIcon } from '@heroicons/react/24/outline'

type SidemenuProps = {
  isOpen: boolean;
  closeSidemenu: () => void;
}

const Sidemenu = ({closeSidemenu, isOpen}: SidemenuProps) => {

  return (
    <Transition appear={true} show={isOpen} as={Fragment}>
    <Dialog
      as='div'
      onClose={closeSidemenu}
      className='fixed inset-0 z-10'
    >
      <Transition.Child
        as={Fragment}
        enter='transition-opacity ease-in duration-300'
        enterFrom='opacity-0'
        enterTo='opacity-30'
        leave='transition-opacity ease-out duration-300'
        leaveFrom='opacity-30'
        leaveTo='opacity-0'
      >
        <Dialog.Overlay className='z-20 fixed inset-0 bg-black' />
      </Transition.Child>

      <Transition.Child
        enter='transition ease-in-out duration-300 transform'
        enterFrom='translate-x-full'
        enterTo='translate-x-0'
        leave='transition ease-in-out duration-300 transform'
        leaveFrom='translate-x-0'
        leaveTo='translate-x-full'
        as={Fragment}
      >
        <Dialog.Panel className='fixed inset-y-0 right-0 w-4/5 lg:w-1/2 px-6 py-6 bg-gray-100 z-30'>
          <div className='flex h-9 items-center justify-between'>
            <div className='flex'>
              <a href='#' className='-m-1.5 p-1.5'>
                <span className='sr-only'>
                  {esCl.welcome.a11y.companyName}
                </span>
                {/* TODO: Add logo here */}
                {/* <img
                className="h-8"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              /> */}
              </a>
            </div>
            <div className='flex'>
              <button
                type='button'
                className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
                onClick={closeSidemenu}
              >
                <span className='sr-only'>
                  {esCl.welcome.a11y.closeSidemenu}
                </span>
                <XMarkIcon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
          </div>

          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                {/* {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10'
                  >
                    {item.name}
                  </a>
                ))} */}
              </div>

              {/* <div className="py-6">
              <a
                href="#"
                className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
              >
                Log in
              </a>
            </div> */}
            </div>
          </div>
        </Dialog.Panel>
      </Transition.Child>
    </Dialog>
  </Transition>
  )
}

export default Sidemenu
