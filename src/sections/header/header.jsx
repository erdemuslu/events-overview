import "./header.css";

import { LastUpdateIcon } from "../../components/icons";
import { Select } from "../../components";

import { headerFilterData } from "../../constants";

const header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="header-title">Events Overview</h1>
        <div className="header-desc">
          <LastUpdateIcon />
          <p>Updated 15 hours ago</p>
        </div>
      </div>
      <div className="header-right">
        <Select
          name="main-data"
          options={headerFilterData}
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
      </div>
    </header>
  );
};

export default header;
