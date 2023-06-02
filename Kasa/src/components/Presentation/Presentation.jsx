import "../../style/Presentation/Presentation.css"
import styled from "styled-components"
export function Presentation({picture}){
    
    const StyledImg = styled.div`
    background: url(${props => props.BgImage}) no-repeat center center; 
    background-size : cover;
    background-color: rgba(0, 0, 0, 0.7);
    `
    return(
        <StyledImg  BgImage={picture} className="presentation-picture">
            
            <h1>Chez vous Partout et ailleurs</h1>
            
        </StyledImg>
    )
}