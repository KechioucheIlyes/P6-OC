import { Presentation } from "../../components/Presentation/Presentation";
import foret from "../../assets/Foret/kalen-emsley.png"
import { Collapse } from "../../components/Collapse/Collapse";
import { dataOfCollapse } from "../../utils/CollsapseData/CollaspeData";
export function Propos(){
    
    return(
        <div  >
            <Presentation picture={foret} />
            <div className="colapse-container">
                {dataOfCollapse.map((element, index)=>{
                    return  <Collapse key={`${element.name} - ${index}`} name={element.name} content={element.content}/> 
                })}
            </div>
        </div>
        


    )
}