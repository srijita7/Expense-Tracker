import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const NewExpenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler} />

      {props.items.map((expense) => (<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />))}
      
    </Card>
  );
};

export default NewExpenses;
