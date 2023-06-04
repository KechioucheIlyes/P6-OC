import { Presentation } from "../../components/Presentation/Presentation";
import pictureMontagne from "../../assets/Montagne/IMG.png"
import "../../style/Home/Home.css"
import { Cards } from "../../components/Location-Cards/Cards";
import { dataLogement } from "../../utils/DataLogement/DataLogement";

export function Home(){
    const title = "Chez vous, Partout et ailleurs"
    
    return(
        <div>
            <Presentation picture={pictureMontagne} text={title}/>
            <div className="card-container">
                {dataLogement.map((el) =>{
                    return <Cards key={el.id} pictures={el.cover} id={el.id} title={el.title} />
                })}
            </div>
        </div>
    )
}