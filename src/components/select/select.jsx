import "./select.css";

import { ArrowDownIcon } from "../icons";

const Select = ({ name, onChange, options }) => {
  return (
    <div className="select-wrapper">
      <select name={name} className="select" onChange={onChange}>
        {Array.isArray(options) &&
          options?.length > 0 &&
          options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
      </select>
      <div className="select-arrow">
        <ArrowDownIcon />
      </div>
    </div>
  );
};

Select.defaultProps = {
  name: "",
  options: [],
};

export default Select;
