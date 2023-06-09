
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
    left : 600px;
    cursor: pointer;
`
const StyledPrevious = styled.img`
    position : relative;
    right : 600px;
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
    right: 45px;
    

`
export function Caroussel({picture , tableOfPictures }){
    
    
    const title ="HELLO"
    const [index , setIndex] = useState(0)

    const handleIndexNext = ()=>{
        setIndex( index < (tableOfPictures.length)-1 ? index +1 : 0  )
    }

    const handleIndexPrevious = () =>{
        setIndex( index-1 <0 ? (tableOfPictures.length)-1 : index-1)
    }
    setTimeout(()=>{
        setIndex( index < (tableOfPictures.length)-1 ? index +1 : 0  ) 
    },3000)
    let PictureOfIndex = tableOfPictures[index]

    return (
        <div>
            <StyledImg BgImages={PictureOfIndex} className="caroussel-pictures"> 
            <StyledPrevious onClick={()=>{handleIndexPrevious()}}  src={previousVector} alt="previous"></StyledPrevious>
            <StyledNext onClick={()=>{handleIndexNext()}} src={nextVector} alt="next"></StyledNext>
            {title}
            <StyledCrawlerPictures>{`${index}/${(tableOfPictures.length)-1}`}</StyledCrawlerPictures>
            </StyledImg>
            
            
            
        </div>
    )
}