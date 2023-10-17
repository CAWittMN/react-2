import "./Alert.css";

const Alert = ({ type = "danger", messages = [], dismiss }) => {
  return (
    <div className={`alert alert-${type}`} role="alert">
      {messages.map((error) => (
        <p className="mb-0 small" key={error}>
          {error}
        </p>
      ))}
      <button onClick={dismiss} className="Alert-dismiss">
        X
      </button>
    </div>
  );
};

export default Alert;
