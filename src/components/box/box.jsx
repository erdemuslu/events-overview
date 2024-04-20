import "./box.css";

import { ActivityIcon, IncreaseIcon, InfoIcon, PathIcon } from "../icons";

const Box = ({
  label,
  value,
  summaryPercantageValue,
  summaryType,
  variant,
}) => {
  return (
    <div className={`box${variant ? ` box--${variant}` : ""}`}>
      <div className="box-icon">
        <ActivityIcon />
      </div>
      <div className="box-label">
        <p>{label}</p>
        <InfoIcon />
      </div>
      <div className="box-value">{value}</div>
      <div className="box-summary">
        <IncreaseIcon />
        <p>{summaryPercantageValue}</p>
        <span>{summaryType}</span>
      </div>
      <div className="box-path">
        <PathIcon />
      </div>
    </div>
  );
};

Box.defaultProps = {
  label: "Total event count",
  value: "349,260",
  summaryPercantageValue: "30.3",
  summaryType: "in last 30 days",
  variant: "",
};

export default Box;
