import { InfoIcon } from "../icons";

import "./info-view.css";

const InfoView = ({ desc }) => {
  return (
    <div className="info-view">
      <InfoIcon />
      <div className="info-view-desc">{desc}</div>
    </div>
  );
};

export default InfoView;
