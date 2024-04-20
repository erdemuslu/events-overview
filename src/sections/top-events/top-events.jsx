import "./top-events.css";

import { useTargetData } from "../../hooks";
import { topEventsInfo, topEventsData } from "../../constants";
import { Box } from "../../components";

const TopEvents = ({ type }) => {
  const targetData = useTargetData(topEventsInfo, topEventsData, type);

  return (
    <div className="top-events">
      <div className="top-events-title">
        Top events by count in the last 30 days
      </div>
      <div className="top-events-wrapper">
        {targetData.map((item) => {
          return (
            <Box
              key={item.value}
              label={item.label}
              progressValue={item.progressValue}
              summaryPercantageValue={item.summaryPercantageValue}
              summaryType={item.summaryType}
              value={item.value}
            />
          );
        })}
      </div>
    </div>
  );
};

TopEvents.defaultProps = {
  type: "last-30-days",
};

export default TopEvents;
