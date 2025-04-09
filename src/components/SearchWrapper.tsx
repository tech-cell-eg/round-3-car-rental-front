import Icon from "./Icon";
import { InputText } from "primereact/inputtext";

function SearchWrapper() {
  return (
    <div className="flex justify-between items-center gap-4 w-full md:w-8/12 py-2 md:px-5 md:border md:border-[#C3D4E966] md:rounded-3xl">
      <div className="flex items-center gap-2 md:gap-5 w-full py-2 ps-5 md:py-0 md:ps-0 border md:border-none rounded-[10px] md:rounded-none">
        <Icon name="search" />
        <InputText
          type="text"
          placeholder="Search something here..."
          className="w-full text-sm md:text-base outline-none"
        />
      </div>

      <button
        type="button"
        className="p-3 md:p-0 border md:border-none rounded-[10px] md:rounded-none"
      >
        <Icon name="filter" />
      </button>
    </div>
  );
}

export default SearchWrapper;
