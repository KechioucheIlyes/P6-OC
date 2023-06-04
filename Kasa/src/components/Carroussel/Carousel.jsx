
import styled from "styled-components"
import "../../style/Caroussel/Caroussel.css"
import { useParams } from "react-router"
import { dataLogement } from "../../utils/DataLogement/DataLogement";


export function Caroussel(){

    const StyledImg = styled.div`
    background: url(${props => props.BgImages}) no-repeat center center; 
    background-size : cover;
    background-color: rgba(0, 0, 0, 0.7);
    `
    
    const {locationId} =useParams()
    
    const filtredElement = dataLogement.filter(el => el.id === locationId)

    console.log(filtredElement)

    return (
        <div>
            <StyledImg BgImages={filtredElement.map((el)=>{return el.cover})} className="caroussel-pictures"></StyledImg>
            
        </div>
    )
}