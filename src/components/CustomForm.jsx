import { Fragment } from "react"
// library import icon
import {
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";
const Form =({thing,handleInput,handleSubmit}) =>{
    return(
        <Fragment><h1 className="text-3xl sm:text-6xl font-bold text-center mb-8">
          
          What is  Your "One Thing"? 
        </h1>
        <form
          className="flex ring-4 rounded-md ring-slate-200 dark:ring-slate-800 focus-within:ring-teal-600 focus-within:ring-offset-4 bg-slate-200 ring-offset-slate-200 dark:ring-offset-slate-800"
          onSubmit={handleSubmit}
        >
          <input type="text" 
          className="bg-inherit rounded-md font-sans
          text-slate-800 py-2 pr-6 focus:outline-none 
          text-xl sm:text-2xl placeholder:text-slate-400
          caret-teal-600 appearance-none w-full "
          placeholder="Enter One Thing"
          autoFocus
          maxLength="60"
          value={thing}
          onInput={handleInput}
          />
          <button 
          className="bg-inherit rounded-md font-sans
          text-slate-800 py-2 pr-6 focus:outline-none
          focus:text-teal-600 hover:text-teal-600 "
          >
            <ArrowRightCircleIcon className="h-6 w-6"/>
          </button>
        </form>
        </Fragment>
    )
}

export default Form