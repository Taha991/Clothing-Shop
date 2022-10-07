import Search from "../../assets/icons/search.svg"
import { useState } from "react"


export const SearchBar = () =>{
    const [search , setSearch] = useState("")     
    return(
      <div className="flex justify-center">
        <input type="text" placeholder="Search" className="bg-slate-300 p-2 rounded-md" value={search} onChange={(e)=> setSearch(e.target.value)}/>
        <button className="transparent border border-2 border-black w-10 mx-4 flex items-center justify-center"><Search/></button>

      </div>
    )
}