import "./event-metrics.css";

import { DownloadIcon, InfoIcon, SearchIcon } from "../../components/icons";
import { Button } from "../../components";

const EventMetrics = () => {
  return (
    <div className="event-metrics">
      <div className="event-metrics-header">
        <div className="event-metrics-title">
          <p>Event Metrics</p>
          <InfoIcon />
        </div>
        <div className="event-metrics-action">
          <div className="event-metrics-search">
            <SearchIcon />
            <input type="text" placeholder="Search" />
          </div>
          <Button variant="ghost">
            <DownloadIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventMetrics;
