import Search from "../../assets/icons/search.svg"
import { useState , useEffect } from "react"
import { useRouter } from 'next/router';




export const SearchBar = () =>{
    const [search , setSearch] = useState("")   
    const router = useRouter() ;


  

    
    const updateQueryParams = (e,newSearch)=> {
      e.preventDefault();

      router.push({
        pathname: '/search',
        query: {
          searchText: JSON.stringify(search)
        },
        shallow: true
      },
      
      )
    }
    return(
      <div className="flex justify-center">
        <form className="flex flex-row" onSubmit={(e) => updateQueryParams(e ,search)}>
        <input type="text" placeholder="Search" className="bg-slate-300 p-2 rounded-md" value={search} onChange={(e)=> setSearch(e.target.value)}/>
        <button  type="submit"  className="transparent border border-2 border-black w-10 mx-4 flex items-center justify-center"><Search/></button>
        </form>

      </div>
    )
}