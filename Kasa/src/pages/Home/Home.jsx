import { Presentation } from "../../components/Presentation/Presentation";
import pictureMontagne from "../../assets/Montagne/IMG.png"
import "../../style/Home/Home.css"
import { Cards } from "../../components/Location-Cards/Cards";

export function Home(){
    const title = "Chez vous, Partout et ailleurs"
    return(
        <div>
            <Presentation picture={pictureMontagne} text={title}/>
            <div className="card-container">
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
            </div>
        </div>
    )
}