import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./monitor-events.css";

import { Button, Box, InfoView } from "../../components";
import { monitorEventsData } from "../../constants/monitor-events";

const MonitorEvents = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className="monitor-events">
      <div className="monitor-events-header">
        <div className="monitor-events-title">
          <p>Monitor Events</p>
          <InfoView desc="lorem ipsum dolor sit amet" />
        </div>
        <div className="monitor-events-actions">
          <div className="monitor-events-date">
            <ReactDatePicker
              selected={startDate}
              onChange={onChange}
              startDate={startDate}
              endDate={endDate}
              selectsRange
            />
          </div>
          <Button>Configure events</Button>
        </div>
      </div>
      <div className="monitor-events-wrapper">
        {monitorEventsData.map((item, index) => {
          return (
            <Box
              key={index}
              label={item.label}
              info={item.info}
              summaryPercantageValue={item.summaryPercantageValue}
              summaryPercantageType={item.summaryPercantageType}
              value={item.value}
              xAxisData={item.xAxisData}
              yAxisData={item.yAxisData}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MonitorEvents;
