import { IconContext } from 'react-icons'

import { Home } from './pages/Home'

import { NavFooter } from './components/NavFooter'

import { AiTwotoneAppstore } from 'react-icons/ai'

export const App = () => {
  return (
    <div className="grid grid-rows-[80px_1fr_80px] min-h-screen  last:mx-0">
      <header className="flex items-center h-10 my-3 mx-5">
        <div className="flex-none">
          <IconContext.Provider value={{ size: '1.5em' }}>
            <AiTwotoneAppstore />
          </IconContext.Provider>
        </div>
        <div className="flex-grow text-center font-bold">Dashboard</div>
      </header>
      <Home />
      <NavFooter />
    </div>
  )
}
