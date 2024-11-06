import { useFinance } from './FinanceContext'

const Income = () => {
  const { records, deleteRecord } = useFinance()
  const incomeRecords = records.filter((record) => record.type === 'Income')

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800">Income</h2>
      {incomeRecords.length > 0 ? (
        incomeRecords.map((incomeRecord) => (
          <div
            key={incomeRecord.id}
            className="flex justify-between items-center mt-4 p-2 border-b"
          >
            <span className="text-lg font-medium">${incomeRecord.amount}</span>
            <button
              onClick={() => deleteRecord(incomeRecord.id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p className="text-gray-500 mt-4">No income recorded.</p>
      )}
    </div>
  )
}

export default Income
