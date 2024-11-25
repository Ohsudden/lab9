import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Button from './Button';
import Filter from './Filter';
import ExpensesChart from './ExpensesChart';


const initialExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [selectedYear, setSelectedYear] = useState(null);

  const addExpense = (expense) => {
    const newExpense = {
      ...expense,
      id: Date.now().toString(),
      date: new Date(expense.date),
    };
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  const filterByYear = (year) => {
    setSelectedYear(year);
  };

  const filteredExpenses = selectedYear
    ? expenses.filter((expense) => expense.date.getFullYear() === selectedYear)
    : expenses;

  const listItems = filteredExpenses.map((expense) => (
    <div className="card expense-item" key={expense.id}>
      <div className="expense-date">
        <div className="expense-date__month">
          {months[expense.date.getMonth()]}
        </div>
        <div className="expense-date__year">
          {expense.date.getFullYear()}
        </div>
        <div className="expense-date__day">
          {expense.date.getDate()}
        </div>
      </div>
      <div className="expense-item__description">
        <h2>{expense.title}</h2>
        <div className="expense-item__price">${expense.amount}</div>
      </div>
    </div>
  ));

  return (
    <div>
      <h1>My Expenses Template</h1>
      <ExpensesChart expenses={filteredExpenses} />
      <div className="card expenses"> <div id="filter"><Filter filterByYear={filterByYear} /></div> {listItems}
      </div>
      <Button addExpense={addExpense} />
    </div>
  );
}

export default App;