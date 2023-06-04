import { Caroussel } from "../../components/Carroussel/Carousel"
import { useParams } from "react-router"
import { dataLogement } from "../../utils/DataLogement/DataLogement";
import { InfosCards } from "../../components/InfosCards/InfosCards";

export function FicheLogement (){
    const {locationId} =useParams()
    
    const filtredElement = dataLogement.filter(el => el.id === locationId)

    console.log(filtredElement)


    return (<div>
        <Caroussel picture={filtredElement.map((el => el.cover))} />
        <InfosCards title={filtredElement.map((el)=>el.title)} location={filtredElement.map(el => el.location)}/>
    </div>
    )
}