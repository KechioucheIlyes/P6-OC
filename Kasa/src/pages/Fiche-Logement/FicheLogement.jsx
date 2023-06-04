import { Caroussel } from "../../components/Carroussel/Carousel"
import { useParams } from "react-router"
import { dataLogement } from "../../utils/DataLogement/DataLogement";

export function FicheLogement (){
    const {locationId} =useParams()
    
    const filtredElement = dataLogement.filter(el => el.id === locationId)

    console.log(filtredElement)


    return (<div>
        <Caroussel picture={filtredElement.map((el => el.cover))} />
    </div>
    )
}