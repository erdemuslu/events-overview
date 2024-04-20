import "./data-table.css";

import Button from "../button/button";
import { DownloadIcon, InfoIcon, SearchIcon, SortingIcon } from "../icons";

const DataTable = ({ header, data, title }) => {
  return (
    <div className="data-table">
      <div className="data-table-top">
        <div className="data-table-title">
          <p>{title}</p>
          <InfoIcon />
        </div>
        <div className="data-table-action">
          <div className="data-table-search">
            <SearchIcon />
            <input type="text" placeholder="Search" />
          </div>
          <Button variant="ghost">
            <DownloadIcon />
          </Button>
        </div>
      </div>
      {header && header.length > 0 && (
        <div
          className="data-table-header"
          style={{
            gridTemplateColumns: `repeat(${header.length}, 1fr)`,
          }}
        >
          {header.map((header, index) => (
            <button key={index}>
              <p>{header}</p>
              <SortingIcon />
            </button>
          ))}
        </div>
      )}
      {data &&
        data?.data &&
        data?.data?.length > 0 &&
        data.data.map((row, index) => (
          <div
            key={index}
            className="data-table-row"
            style={{
              gridTemplateColumns: `repeat(${header.length}, 1fr)`,
            }}
          >
            {Object.values(row).map((cell, index) => {
              return (
                <p className="data-table-cell" key={index}>
                  {cell || "-"}
                </p>
              );
            })}
          </div>
        ))}
    </div>
  );
};

export default DataTable;
