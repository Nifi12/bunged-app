import { IconContext } from 'react-icons'

import { CardSm } from './components'

import { TbPigMoney } from 'react-icons/tb'

export const Home = () => {
  return (
    <>
      <main className="flex flex-col gap-5 mx-5">
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
                <p className="text-base font-semibold">Budger for October</p>
                <p className="text-sm opacity-70">Cash Available</p>
              </div>
              <div>
                <p className="text-xl font-bold">$2,478</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between p-6 bg-white rounded-3xl shadow-md">
            <div>
              <p className="text-lg font-semibold">Create a Saving goal</p>
              <p className="text-gray-500 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisci.
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-300 to-gray-500 p-4 rounded-full">
              <IconContext.Provider value={{ size: '2em', color: 'white' }}>
                <TbPigMoney />
              </IconContext.Provider>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-base">Cash</p>
          <div className="flex justify-center gap-4">
            <CardSm
              bgColor="bg-green-100"
              iconBgColor="bg-teal-500"
              label="Income"
              moneyAmount={2200}
            />
            <CardSm
              bgColor="bg-purple-100"
              iconBgColor="bg-purple-500"
              label="Expense"
              moneyAmount={2000}
            />
          </div>
        </div>
      </main>
    </>
  )
}
