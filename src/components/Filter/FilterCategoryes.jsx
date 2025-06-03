import { useState } from "react";

export function FilterCategoryes() {
  const [status, changeStatus] = useState("Popular");
  const filterCategoryes = ["Popular", "Novelty", "Featured", "Short films"];
  return (
    <div id="categoryes" className="filter__categoryes anchor">
      <div className="filter__categoryes-flex">
        {filterCategoryes.map((value, index) => (
          <div
            className={`filter__categoryes-item  ${
              status === value ? "active-category" : ""
            }`}
            onClick={() => {
              changeStatus(value);
            }}
            key={index}
          >
            <p>{value}</p>
            <span></span>
          </div>
        ))}
      </div>
      <span></span>
    </div>
  );
}
