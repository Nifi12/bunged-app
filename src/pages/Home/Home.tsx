import { IconContext } from 'react-icons'

import { AiTwotoneAppstore } from 'react-icons/ai'

export const Home = () => {
  return (
    <>
      <header className="flex items-center h-10 my-3">
        <div className="flex-none">
          <IconContext.Provider value={{ size: '1.5em' }}>
            <AiTwotoneAppstore />
          </IconContext.Provider>
        </div>
        <div className="flex-grow text-center font-bold">Dashboard</div>
      </header>
      <main>
        <div className="flex gap-3 flex-col">
          <div className="bg-bgGreyCard-100 h-40 rounded-3xl text-white">
            <div className="flex flex-col justify-around h-full ml-5">
              <div className="flex flex-col gap-5">
                <p className="opacity-70 text-base">Available balance</p>
                <p className="font-bold text-2xl">$3,0000</p>
              </div>
              <div>
                <p className="text-sm">See details</p>
              </div>
            </div>
          </div>
          <div className="bg-bgBlueCard-100 h-20 rounded-3xl text-white">
            <div className="flex h-full items-center justify-between mx-5">
              <div className="flex flex-col">
                <p className="text-base">Budger for October</p>
                <p className="text-sm opacity-70">Cash Available</p>
              </div>
              <div>
                <p className="text-xl">$2,478</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
