import { SearchBar } from "../components/search/SearchBar";
import { ResultsContainer } from "../components/search/ResultsContainer";
import { FiltersBar } from "../components/search/FiltersBar";

const SearchPage = () => {
  return(
    <div>
      <h1 className="text-lg p-4 text-center font-graphikLight">Search</h1>
      <SearchBar/>
      <div className="grid grid-cols-4 h-screen">
        <div className="grid col-span1">
          <FiltersBar/>
        </div>
        <div className="col-span-4">
          <ResultsContainer/>
        </div>

      </div>
    </div>
  )
}

export default SearchPage