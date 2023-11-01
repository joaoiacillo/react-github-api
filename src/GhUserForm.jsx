import PropTypes from "prop-types";
import { useState } from "react";

export const GhUserForm = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(value);
  }

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="#id-search-input">Username:</label>
        <input
          type="text"
          id="id-search-input"
          placeholder="Type an username"
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

GhUserForm.propTypes = {
  onSubmit: PropTypes.func,
};
