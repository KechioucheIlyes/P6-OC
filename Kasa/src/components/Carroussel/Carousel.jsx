
import styled from "styled-components"
import "../../style/Caroussel/Caroussel.css"
import nextVector from "../../assets/Vector-right.svg"
import previousVector from "../../assets/Vector-left.svg"
import { useState } from "react"

const StyledImg = styled.div`
    background: url(${props => props.BgImages}) no-repeat center center; 
    background-size : cover;
    background-color: rgba(0, 0, 0, 0.7);

    `

const StyledNext = styled.img`
    position : relative;
    left : 600px;
    cursor: pointer;
`
const StyledPrevious = styled.img`
    position : relative;
    right : 600px;
    cursor: pointer;
`
export function Caroussel({picture }){

    
    const [next , setNext] = useState()

    return (
        <div>
            <StyledImg BgImages={picture} className="caroussel-pictures"> 
            <StyledPrevious src={previousVector} alt="previous"></StyledPrevious>
            <StyledNext src={nextVector} alt="next"></StyledNext>
                
            </StyledImg>
            
        </div>
    )
}