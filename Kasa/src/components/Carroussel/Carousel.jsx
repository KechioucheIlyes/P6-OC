
import styled from "styled-components"
import "../../style/Caroussel/Caroussel.css"
export function Caroussel({pictures , numberPics , title , location }){

    const StyledImg = styled.div`
    background: url(${props => props.BgImages}) no-repeat center center; 
    background-size : cover;
    background-color: rgba(0, 0, 0, 0.7);
    `

    return (
        <div>
            <StyledImg BgImages={pictures} className="caroussel-pictures"></StyledImg>
        </div>
    )
}