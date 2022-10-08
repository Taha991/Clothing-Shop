import { SearchBar } from "../components/search/SearchBar";
import { ResultsContainer } from "../components/search/ResultsContainer";
import { FiltersBar } from "../components/search/FiltersBar";
import { ResultsSummary } from "../components/search/ResultSummary";
// adding state to pass results summary
import { useState } from "react";


const SearchPage = () => {
  const [currPage , setCurrPage] = useState(1);
  const resultsPerPage = 12;

  const onPageUpdate = (newIndex) => {
    setCurrPage(newIndex)
  }
  return(
    <div>
      <h1 className="text-lg p-4 text-center font-graphikLight">Search</h1>
      <SearchBar/>
      <div className="grid grid-cols-4 h-screen">
        <div className="hidden sm:block grid col-span1">
          <FiltersBar/>
        </div>
        <div className="col-span-4 sm:col-span-3">
          {/* {adding value to my results page} */}
          <ResultsSummary count={120} currPage={currPage} resultsPerPage={resultsPerPage} onPageUpdate={onPageUpdate} />
          <ResultsContainer/>
        </div>

      </div>
    </div>
  )
}

export default SearchPage