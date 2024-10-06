import { IconContext } from 'react-icons'

import { BsPerson } from 'react-icons/bs'
import { CiWallet } from 'react-icons/ci'
import { FiHome } from 'react-icons/fi'
import { IoCalendarClearOutline } from 'react-icons/io5'

export const NavFooter = () => {
  return (
    <footer className="border-2 border-black">
      <div className="flex items-center justify-around h-[100%]">
        <div className="flex gap-6">
          <IconContext.Provider value={{ size: '1.5em' }}>
            <FiHome />
          </IconContext.Provider>
          <IconContext.Provider value={{ size: '1.5em' }}>
            <IoCalendarClearOutline />
          </IconContext.Provider>
        </div>
        <div>
          <button
            type="button"
            className="h-16 w-16 bg-yellow-500 rounded-full border-2 border-black text-black text-4xl"
          >
            +
          </button>
        </div>
        <div className="flex gap-6">
          <IconContext.Provider value={{ size: '1.5em' }}>
            <CiWallet />
          </IconContext.Provider>
          <IconContext.Provider value={{ size: '1.5em' }}>
            <BsPerson />
          </IconContext.Provider>
        </div>
      </div>
    </footer>
  )
}
