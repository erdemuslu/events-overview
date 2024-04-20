import "./monitor-events.css";

import { InfoIcon } from "../../components/icons";
import { Button, Box } from "../../components";

import { monitorEventsData } from "../../constants/monitor-events";

const MonitorEvents = () => {
  return (
    <div className="monitor-events">
      <div className="monitor-events-header">
        <div className="monitor-events-title">
          <p>Monitor Events</p>
          <InfoIcon />
        </div>
        <div className="monitor-events-actions">
          <Button>Configure events</Button>
        </div>
      </div>
      <div className="monitor-events-wrapper">
        {monitorEventsData.map((item, index) => {
          return (
            <Box
              key={index}
              label={item.label}
              summaryPercantageValue={item.summaryPercantageValue}
              summaryPercantageType={item.summaryPercantageType}
              value={item.value}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MonitorEvents;
