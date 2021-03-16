const Transaction = (props) => (
  <div>
    <br />
    label {props.transaction.label}
    <br />
    val {props.transaction.value}
  </div>
);

export default Transaction;
