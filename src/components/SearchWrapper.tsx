import Icon from "./Icon";
import { InputText } from "primereact/inputtext";

function SearchWrapper() {
  return (
    <div className="flex justify-between items-center gap-4 w-full md:w-8/12 py-2 md:py-0 md:px-5 md:border md:border-content-dimmed md:rounded-pill">
      <div className="flex items-center gap-2 md:gap-5 w-full py-2 ps-5 md:py-0 md:ps-0 border border-content-dimmed md:border-none rounded-[10px] md:rounded-none">
        <Icon name="search" />
        <InputText
          type="text"
          placeholder="Search something here..."

          className="w-full text-sm md:text-base outline-none shadow-none border-none focus:border-none focus:ring-0"
        />
      </div>

      <button
        type="button"
        className="p-3 md:p-0 border border-content-dimmed md:border-none rounded-[10px] md:rounded-none"
      >
        <Icon name="filter" />
      </button>
    </div>
  );
}

export default SearchWrapper;
