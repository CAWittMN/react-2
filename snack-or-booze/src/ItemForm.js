import { useState } from "react";
import { useHistory } from "react-router-dom";
import Alert from "./Alert";
import "./ItemForm.css";

const ItemForm = ({ onSubmit, isLoading }) => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    recipe: "",
    serve: "",
    type: "snacks",
  });
  const [formErrors, setFormErrors] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSubmit({ ...formData });

      history.push(`/${formData.type}`);
    } catch (err) {
      setFormErrors([err.message]);
    }
  };

  return (
    <div className="ItemForm">
      {formErrors.length ? (
        <Alert
          type="danger"
          dismiss={() => setFormErrors([])}
          messages={formErrors}
        />
      ) : null}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            onChange={handleChange}
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            onChange={handleChange}
            id="description"
            name="description"
            className="form-control"
            value={formData.description}
          />
        </div>
        <div className="form-group">
          <label htmlFor="recipe">Recipe:</label>
          <textarea
            onChange={handleChange}
            id="recipe"
            name="recipe"
            className="form-control"
            value={formData.recipe}
          />
        </div>
        <div className="form-group">
          <label htmlFor="serve">Serve:</label>
          <input
            onChange={handleChange}
            id="serve"
            name="serve"
            className="form-control"
            value={formData.serve}
          />
        </div>
        <div className="form-group">
          <label htmlFor="type">Type:</label>
          <select
            onChange={handleChange}
            id="type"
            name="type"
            className="form-control"
            value={formData.type}
          >
            <option value="snacks">Snack</option>
            <option value="drinks">Drink</option>
          </select>
        </div>
        <button className="btn btn-primary float-right">Submit</button>
      </form>
    </div>
  );
};

export default ItemForm;
