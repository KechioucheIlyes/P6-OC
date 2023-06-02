import { Presentation } from "../../components/Presentation/Presentation";
import pictureMontagne from "../../assets/Montagne/IMG.png"
import "../../style/Home/Home.css"
import { Cards } from "../../components/Location-Cards/Cards";

export function Home(){

    return(
        <div>
            <Presentation picture={pictureMontagne} />
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