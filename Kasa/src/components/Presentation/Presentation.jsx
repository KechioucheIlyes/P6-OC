import "../../style/Presentation/Presentation.css"
import styled from "styled-components"

const StyledImg = styled.div`
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(0, 0, 0, 0.5)
    ), url(${props => props.BgImage}) no-repeat center center; 
    background-size : cover;
    background-color: rgba(0, 0, 0, 0.7);
    @media screen and (max-width: 768px){
        h1{
            font-size : 16px;
        }
    }
    `
export function Presentation({picture , text}){
    
    

    return(
        <StyledImg  BgImage={picture} className="presentation-picture">
            
            <h1>{text}</h1>
            
        </StyledImg>
    )
}