import "./main-statistics.css";

import { Box } from "../../components";
import { mainBoxData, mainBoxInfo } from "../../constants";
import { useTargetData } from "../../hooks";

const MainStatistics = ({ type }) => {
  const targetData = useTargetData(mainBoxInfo, mainBoxData, type);

  return (
    <div className="main-statitics">
      {targetData.map((item, index) => {
        return (
          <Box
            key={item.value}
            Icon={item.Icon}
            label={item.label}
            pathIconVisible
            summaryPercantageValue={item.summaryPercantageValue}
            summaryType={item.summaryType}
            variant={`alt-${index + 1}`}
            value={item.value}
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
