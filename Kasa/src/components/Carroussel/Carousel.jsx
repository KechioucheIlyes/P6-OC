
import styled from "styled-components"
import "../../style/Caroussel/Caroussel.css"
import nextVector from "../../assets/Vector-right.svg"
import previousVector from "../../assets/Vector-left.svg"
import { useState } from "react"

const StyledImg = styled.div`
    background: url(${props => props.BgImages}) no-repeat center center; 
    background-size : cover;
    
    `

const StyledNext = styled.img`
    position : relative;
    left : 45%;
    cursor: pointer;
`
const StyledPrevious = styled.img`
    position : relative;
    right : 40%;
    cursor: pointer;
`
const StyledCrawlerPictures = styled.div`
    color: white;
    font-weight:500;
    font-size:18px;
    position: relative;
    top : 180px;
    display : flex;
    justify-content: center;
    
    

`
export function Caroussel({picture , tableOfPictures }){
    
    
    
    const [index , setIndex] = useState(0)

    const handleIndexNext = () => {
        setIndex(index < tableOfPictures.length - 1 ? index + 1 : 0);
      }
      

      const handleIndexPrevious = () => {
        setIndex(index > 0 ? index - 1 : tableOfPictures.length - 1);
      }
      
    
    let PictureOfIndex = tableOfPictures[index]

    return (
        <div>
            <StyledImg BgImages={PictureOfIndex} className="caroussel-pictures"> 
            <StyledPrevious className="vector-previous" onClick={()=>{handleIndexPrevious()}}  src={previousVector} alt="previous"></StyledPrevious>
            <StyledNext className="vector-next" onClick={()=>{handleIndexNext()}} src={nextVector} alt="next"></StyledNext>
            <StyledCrawlerPictures className="crawler-pics">{`${index + 1}/${tableOfPictures.length}`}</StyledCrawlerPictures>

            </StyledImg>
            
            
            
        </div>
    )
}