import { GoSearch } from "react-icons/go";

function SearchComp() {
  return (
    <>
      <form className="flex items-center my-2">
        <input
          type="text"
          placeholder="Search..."
          className="hidden md:block rounded-md border-2 border-indigo-500 p-2 mx-2 w-full focus:outline-none focus:border-2 focus:border-indigo-700"
        />
        <span className="text-2xl relative right-10 text-white md:text-black">
          <GoSearch />
        </span>
      </form>
    </>
  );
}

export default SearchComp;
