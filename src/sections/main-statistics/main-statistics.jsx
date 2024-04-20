import { useMemo } from "react";

import "./main-statistics.css";

import { Box } from "../../components";
import { mainBoxData, mainBoxInfo } from "../../constants";

const MainStatistics = ({ type }) => {
  const targetData = useMemo(
    () =>
      mainBoxInfo.map((item) => {
        return {
          ...item,
          ...mainBoxData[item.type][type],
        };
      }),
    [type]
  );

  return (
    <div className="main-statitics">
      {targetData.map((item, index) => {
        return (
          <Box
            key={item.value}
            Icon={item.Icon}
            label={item.label}
            value={item.value}
            summaryPercantageValue={item.summaryPercantageValue}
            summaryType={item.summaryType}
            variant={`alt-${index + 1}`}
          />
        );
      })}
    </div>
  );
};

MainStatistics.defaultProps = {
  type: "last-30-days",
};

export default MainStatistics;
