import "./event-metrics.css";
import { DataTable } from "../../components";
import {
  eventMetricsData,
  eventMetricsHeader,
} from "../../constants/event-metrics";

const EventMetrics = () => {
  return (
    <div className="event-metrics">
      <DataTable
        header={eventMetricsHeader}
        data={eventMetricsData}
        title="Event Metrics"
      />
    </div>
  );
};

export default EventMetrics;
