import { useState } from 'react'
import { useFinance } from './FinanceContext'

const SubmissionForm = () => {
  const { addRecord } = useFinance()
  const [amount, setAmount] = useState(0)
  const [type, setType] = useState('Expense')
  const [category, setCategory] = useState('')
  const [date, setDate] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addRecord(type, parseFloat(amount), category, date)
    setAmount(0)
    setCategory('')
    setDate('')
  }

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 text-center">
        Expense Tracker
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="flex mt-4">
          <button
            onClick={() => setType('Expense')}
            className={`flex-1 px-4 py-2 text-center font-semibold ${
              type === 'Expense' ? 'bg-gray-100' : ''
            }`}
          >
            Expense
          </button>
          <button
            onClick={() => setType('Income')}
            className={`flex-1 px-4 py-2 text-center font-semibold ${
              type === 'Income' ? 'bg-gray-100' : ''
            }`}
          >
            Income
          </button>
        </div>
        <div className="mt-4">
          <label className="block font-medium text-gray-700">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border rounded-md"
          >
            <option>Select a category</option>
            <option>Education</option>
            <option>Food</option>
            <option>Health</option>
            <option>Bill</option>
            <option>Insurance</option>
            <option>Tax</option>
            <option>Transport</option>
            <option>Telephone</option>
          </select>
        </div>
        <div className="mt-4">
          <label className="block font-medium text-gray-700">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mt-4">
          <label className="block font-medium text-gray-700">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="mt-6 w-full px-4 py-2 bg-teal-600 text-white rounded-md"
        >
          Save
        </button>
      </form>
    </div>
  )
}

export default SubmissionForm
