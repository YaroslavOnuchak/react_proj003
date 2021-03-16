const Balance = ({ balance, children }) => {
  return (
    <div>
      {children}
      {balance === 0 ? "total Z" : balance}
    </div>
  );
};
export default Balance;
