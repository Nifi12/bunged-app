import { IconContext } from 'react-icons'

import { LuWallet } from 'react-icons/lu'
import { RiGovernmentLine } from 'react-icons/ri'

interface CardSmTypes {
  bgColor: string
  iconBgColor: string
  label: 'Income' | 'Expense'
  moneyAmount: number
}

export const CardSm = ({ bgColor, iconBgColor, moneyAmount, label }: CardSmTypes) => {
  return (
    <div className={`flex flex-col p-5 rounded-3xl shadow-md ${bgColor} min-w-40`}>
      <div className={`${iconBgColor} p-3 rounded-full w-12`}>
        <IconContext.Provider value={{ size: '1.5em', color: 'white' }}>
          {label === 'Income' ? <RiGovernmentLine /> : <LuWallet />}
        </IconContext.Provider>
      </div>
      <p className="text-2xl font-semibold mt-4">${moneyAmount.toFixed(2)}</p>
      <p className="text-gray-500 mt-2">{label}</p>
    </div>
  )
}
