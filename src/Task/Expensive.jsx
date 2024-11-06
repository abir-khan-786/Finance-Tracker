import { useFinance } from './FinanceContext'

const Expensive = () => {
  const { records, deleteRecord } = useFinance()
  const expenses = records.filter((record) => record.type === 'Expense')

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800">Expenses</h2>
      {expenses.length > 0 ? (
        expenses.map((expense) => (
          <div
            key={expense.id}
            className="flex justify-between items-center mt-4 p-2 border-b"
          >
            <span className="text-lg font-medium">${expense.amount}</span>
            <button
              onClick={() => deleteRecord(expense.id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p className="text-gray-500 mt-4">No expenses recorded.</p>
      )}
    </div>
  )
}

export default Expensive
