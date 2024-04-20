import "./box.css";

import { IncreaseIcon, InfoIcon, PathIcon } from "../icons";

const Box = ({
  label,
  Icon,
  pathIconVisible,
  progressValue,
  summaryPercantageValue,
  summaryType,
  value,
  variant,
}) => {
  return (
    <div className={`box${variant ? ` box--${variant}` : ""}`}>
      {Icon && (
        <div className="box-icon">
          <Icon />
        </div>
      )}
      <div className="box-label">
        <p>{label}</p>
        <InfoIcon />
      </div>
      <div className="box-value">{value}</div>
      <div className="box-summary">
        <IncreaseIcon />
        <p>{summaryPercantageValue}</p>
        <span>{`in ${summaryType.toLowerCase()}`}</span>
      </div>
      {progressValue && (
        <div className="progress-wrapper">
          <div className="progress-text">{progressValue}% of total</div>
          <div className="progress-value">
            <div
              className="progress-value__inner"
              style={{
                width: `${progressValue}%`,
              }}
            />
          </div>
        </div>
      )}
      {pathIconVisible && (
        <div className="box-path">
          <PathIcon />
        </div>
      )}
    </div>
  );
};

Box.defaultProps = {
  Icon: null,
  label: "Total event count",
  pathIconVisible: false,
  progressValue: null,
  summaryPercantageValue: "30.3",
  summaryType: "last 30 days",
  variant: "",
  value: "349,260",
};

export default Box;
