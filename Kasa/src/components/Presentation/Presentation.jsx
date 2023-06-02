import "../../style/Presentation/Presentation.css"
import styled from "styled-components"

const StyledImg = styled.div`
    background: url(${props => props.BgImage}) no-repeat center center; 
    background-size : cover;
    background-color: rgba(0, 0, 0, 0.7);
    `
export function Presentation({picture , text}){
    
    

    return(
        <StyledImg  BgImage={picture} className="presentation-picture">
            
            <h1>{text}</h1>
            
        </StyledImg>
    )
}