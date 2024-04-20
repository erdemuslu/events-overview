import "./monitor-events.css";

import { InfoIcon } from "../../components/icons";
import { Button } from "../../components";

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
    </div>
  );
};

export default MonitorEvents;
