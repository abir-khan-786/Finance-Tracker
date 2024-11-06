import { useFinance } from './FinanceContext'

const Balance = () => {
  const { balance, totalIncome, totalExpense } = useFinance()

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800">Balance Overview</h2>
      <div className="mt-4">
        <p className="text-xl">
          Balance: <span className="font-semibold">${balance.toFixed(2)}</span>
        </p>
        <p>
          Total Income:{' '}
          <span className="font-semibold text-green-500">
            ${totalIncome.toFixed(2)}
          </span>
        </p>
        <p>
          Total Expense:{' '}
          <span className="font-semibold text-red-500">
            ${totalExpense.toFixed(2)}
          </span>
        </p>
      </div>
    </div>
  )
}

export default Balance
