import { Fragment } from "react"
//custom component
import CustomButton from './CustomButton'
const OneThing =({thing,handleCompletedThing})=>{
    return (
        <Fragment>

        <h1 className="text-3xl sm:text-6xl font-bold text-center mb-6">{thing}</h1>
        
        <CustomButton text="Mark Done"
        handleCompletedThing={handleCompletedThing}/>

        </Fragment>
    )
}

export default OneThing