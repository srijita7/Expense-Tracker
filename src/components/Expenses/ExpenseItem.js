import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
      <Card className="expense-item">
        {console.log(props)}
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <p className="expense-item__price">₹ {props.amount}</p>
        </div>
      </Card>
  );
}
export default ExpenseItem;
