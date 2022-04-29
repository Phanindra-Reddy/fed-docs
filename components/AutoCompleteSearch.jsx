import { GoSearch } from "react-icons/go";

function AutoCompleteSearch() {
  return (
    <>
      <form className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="rounded-md border-none p-2 w-96 focus:outline-none"
        />
        <span className="text-2xl relative right-8 text-white md:text-black cursor-pointer">
          <GoSearch />
        </span>
      </form>
    </>
  );
}

export default AutoCompleteSearch;
