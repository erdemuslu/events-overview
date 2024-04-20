import "./main-statistics.css";

import { Box } from "../../components";
import { mainBoxData, mainBoxInfo } from "../../constants";
import { useTargetData } from "../../hooks";

const MainStatistics = ({ progressLabel, type }) => {
  const targetData = useTargetData(mainBoxInfo, mainBoxData, type);

  return (
    <div className="main-statitics">
      {targetData.map((item, index) => {
        return (
          <Box
            key={index}
            Icon={item.Icon}
            info={item.info}
            label={item.label}
            pathIconVisible
            summaryPercantageValue={item.summaryPercantageValue}
            summaryType={progressLabel}
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
