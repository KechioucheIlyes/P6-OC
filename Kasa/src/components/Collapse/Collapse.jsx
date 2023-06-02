import "../../style/Collapse/Collapse.css"
import vector from "../../assets/Vector-up.svg"
import { useState } from "react"
import vectDown from "../../assets/Vector-down.svg"
export function Collapse({name, content}){
    const [vectorUp , setVectorUp] = useState(true)
    
    
    
    
    
    return(
        <div>
            <div className="collapse-container">
                {name}
                {vectorUp ? <img onClick={() => {setVectorUp(!vectorUp)}} src={vector} alt="vecteur"></img> : <img onClick={() => {setVectorUp(!vectorUp)}} src={vectDown} alt="vecteur down"></img>}
            </div>
            {vectorUp ? null : <div className="collapse-infos">
                {content}
            </div> } 
            
            
        </div>
    
    )
}