import { useMemo, useState } from "react";

import "./data-table.css";

import Button from "../button/button";
import Select from "../select/select";
import {
  DownloadIcon,
  FirstIcon,
  InfoIcon,
  LastIcon,
  NextIcon,
  PrevIcon,
  SearchIcon,
  SortingIcon,
} from "../icons";

const DataTable = ({ header, data, title }) => {
  const [searchValue, setSearchValue] = useState("");

  const totalPage = Math.ceil(data.total / data.limit);

  const onSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const targetData = useMemo(() => {
    if (searchValue) {
      return data?.data.filter((row) =>
        Object.values(row).some((cell) =>
          cell.toString().toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    }

    return data?.data;
  }, [data?.data, searchValue]);

  const onDownload = () => {
    const rows = [
      targetData
        .map((row) =>
          Object.values(row)
            .map((cell) => cell || "-")
            .join(",")
        )
        .join("\n"),
    ];

    const csvContent = `data:text/csv;charset=utf-8,${header
      .map((hItem) => hItem || "-")
      .join(",")}\n${rows}`;

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `events-metris-${data?.page}.csv`);
    document.body.appendChild(link);

    link.click();
  };

  return (
    <div className="data-table">
      <div className="data-table-top">
        <div className="data-table-title">
          <p>{title}</p>
          <InfoIcon />
        </div>
        <div className="data-table-action">
          <div className="data-table-search">
            <div className="data-table-search__icon">
              <SearchIcon />
            </div>
            <input type="text" placeholder="Search" onChange={onSearchChange} />
          </div>
          <Button variant="ghost" onClick={onDownload}>
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
      {targetData &&
        targetData?.length > 0 &&
        targetData.map((row, index) => (
          <div
            key={index}
            className="data-table-row"
            style={{
              gridTemplateColumns: `repeat(${header.length}, 1fr)`,
            }}
          >
            {Object.values(row).map((cell, index) => {
              return (
                <p
                  data-label={header[index]}
                  className="data-table-cell"
                  key={index}
                >
                  {cell || "-"}
                </p>
              );
            })}
          </div>
        ))}
      <div className="data-table-footer">
        <div className="data-table-footer-left">
          <p>Items per page</p>
          <Select
            options={[
              {
                label: "10",
                value: "10",
              },
              {
                label: "20",
                value: "20",
              },
              {
                label: "30",
                value: "30",
              },
            ]}
          />
          <p>
            {`/ Total `}
            <b>{data?.total}</b>
          </p>
        </div>
        <div className="data-table-footer-right">
          <Select
            options={new Array(totalPage).fill(0).map((_, index) => ({
              label: index + 1,
              value: index + 1,
            }))}
          />
          <p>
            {`of `}
            <b>{totalPage}</b>
            {` pages`}
          </p>
          <div className="data-table-navigation">
            <Button disabled={data?.page === 1} variant="ghost">
              <FirstIcon />
            </Button>
            <Button disabled={data?.page - 1 === 0} variant="ghost">
              <PrevIcon />
            </Button>
            <Button disabled={data?.page + 1 > totalPage} variant="ghost">
              <NextIcon />
            </Button>
            <Button disabled={data?.page === totalPage} variant="ghost">
              <LastIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
