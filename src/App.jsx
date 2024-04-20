import { useMemo, useState } from "react";

import "./App.css";

import {
  EventMetrics,
  Header,
  MainStatistics,
  MonitorEvents,
  TopEvents,
} from "./sections";
import { headerFilterData } from "./constants";

function App() {
  const [headerFilterValue, setHeaderFilterValue] = useState("last-30-days");
  const headerFilterLabel = useMemo(() => {
    return headerFilterData.find((item) => item.value === headerFilterValue)
      .label;
  }, [headerFilterValue]);

  return (
    <div>
      <Header onFilterChange={setHeaderFilterValue} />
      <MainStatistics
        progressLabel={headerFilterLabel}
        type={headerFilterValue}
      />
      <TopEvents progressLabel={headerFilterLabel} type={headerFilterValue} />
      <EventMetrics />
      <MonitorEvents />
    </div>
  );
}

export default App;
