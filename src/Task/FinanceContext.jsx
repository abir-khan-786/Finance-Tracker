import { createContext, useState, useContext } from 'react'

export const FinanceContext = createContext()

export const useFinance = () => {
  return useContext(FinanceContext)
}

export const FinanceProvider = ({ children }) => {
  const [records, setRecords] = useState([])

  const addRecord = (type, amount, category, date) => {
    const newRecord = {
      id: Date.now(),
      type,
      amount,
      category,
      date,
    }
    setRecords((prevRecords) => [...prevRecords, newRecord])
  }

  const deleteRecord = (id) => {
    setRecords((prevRecords) =>
      prevRecords.filter((record) => record.id !== id)
    )
  }

  const totalIncome = records
    .filter((record) => record.type === 'Income')
    .reduce((acc, record) => acc + record.amount, 0)

  const totalExpense = records
    .filter((record) => record.type === 'Expense')
    .reduce((acc, record) => acc + record.amount, 0)

  const balance = totalIncome - totalExpense

  return (
    <FinanceContext.Provider
      value={{
        records,
        addRecord,
        deleteRecord,
        totalIncome,
        totalExpense,
        balance,
      }}
    >
      {children}
    </FinanceContext.Provider>
  )
}
