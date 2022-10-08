import FiltersIcon from '../../assets/icons/filters.svg';
import { Accordion } from '../elements/Accordion';
import {CATEGORIES , COLORS ,GENDERS , PRICE_RANGE} from "../../data/filters"


export const FiltersBar = () => {
  return(
    <div className="m-4 border-r px-3 border-slate-300">
      <div className="flex pb-2 justify-between border-b border-slate-300">
        <div className='flex items-center'>
          <FiltersIcon/>
          <span className='px-2'>Filters</span>
        </div>
        <button className='mx-2'>Clear All</button>
      </div>

      {/* {adding accordion} */}
      <div className='flex pb-2 flex-col justify-between border-b border-slate-300'>
       <Accordion label="Categories">
        <>catagories Listed here</>
       </Accordion>
      </div>
    </div>
  )
}