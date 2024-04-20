import "./box.css";

import { IncreaseIcon, InfoIcon, PathIcon } from "../icons";

const Box = ({
  label,
  Icon,
  pathIconVisible,
  progressValue,
  summaryPercantageType,
  summaryPercantageValue,
  summaryType,
  value,
  variant,
  xAxisData,
  yAxisData,
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
      <div
        className={`box-summary${
          summaryPercantageType !== "increase" ? " box-summary--decrease" : ""
        }`}
      >
        <IncreaseIcon />
        <p>{summaryPercantageValue}</p>
        {summaryType && <span>{`in ${summaryType.toLowerCase()}`}</span>}
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
      {xAxisData.length > 0 && yAxisData.length > 0 && (
        <div className="box-chart">
          <div className="box-chart-xAxis">
            {yAxisData.map((item, index) => (
              <div className="box-chart-xAxis__line" key={index}>
                <div />
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div className="box-chart-yAxis">
            {xAxisData.map((item, index) => (
              <div
                className="box-chart-yAxis__bar"
                key={index}
                style={{
                  height: `${item}%`,
                }}
              />
            ))}
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
  summaryPercantageType: "increase",
  summaryPercantageValue: "30.3",
  summaryType: "",
  variant: "",
  value: "349,260",
  xAxisData: [],
  yAxisData: [],
};

export default Box;
