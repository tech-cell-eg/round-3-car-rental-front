import Icon from "./Icon";
import { InputText } from "primereact/inputtext";

function SearchWrapper() {
  return (
    <div className="flex justify-between items-center gap-4 w-full md:w-[45%] py-2.5 px-5 md:border md:rounded-3xl">
      <div className="flex items-center gap-2 md:gap-5 w-full p-3 md:p-none border md:border-none rounded-[10px] md:rounded-none">
        <Icon name="search" />
        <InputText
          type="text"
          placeholder="Search something here..."
          className="w-full text-sm md:text-base outline-none"
        />
      </div>

      <button
        type="button"
        className="p-3 md:p-none border md:border-none rounded-[10px] md:rounded-none"
      >
        <Icon name="filter" />
      </button>
    </div>
  );
}

export default SearchWrapper;
