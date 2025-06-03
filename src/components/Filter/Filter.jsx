import { FilterButtons } from "./FilterButtons";
import { FilterCategoryes } from "./FilterCategoryes";
import { FilterSearch } from "./FilterSearch";

export function Filter() {
  return (
    <div className="filter">
      <FilterCategoryes />
      <FilterButtons />
      <FilterSearch />
    </div>
  );
}
