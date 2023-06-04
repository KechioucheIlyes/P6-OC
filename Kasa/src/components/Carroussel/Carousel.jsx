
import styled from "styled-components"
import "../../style/Caroussel/Caroussel.css"



export function Caroussel({picture }){

    const StyledImg = styled.div`
    background: url(${props => props.BgImages}) no-repeat center center; 
    background-size : cover;
    background-color: rgba(0, 0, 0, 0.7);
    `
    
    

    return (
        <div>
            <StyledImg BgImages={picture} className="caroussel-pictures"></StyledImg>
            
        </div>
    )
}