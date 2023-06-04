import styled from "styled-components"
import "../../style/InfosCards/InfosCards.css"

const StyledImgHost = styled.img`
        border-radius : 50%;
        height : 64px;
    `
const StyledTitle = styled.h1`
    color: #fe605f;
    font-size : 36px;
`
const StyledLocation = styled.p`
    color: #fe605f;
    font-size : 18px;
`
const StyledNameHost = styled.p`
    color: #fe605f;
    font-size : 18px;
    width : 93px;
`
export function InfosCards({title , location , hostName , hostPicture }){
    
    return (
        <div className="infos-cards-container" >
            <div >
                <StyledTitle >{title}</StyledTitle>
                <StyledLocation>{location}</StyledLocation>
            </div>
            <div className="host-container">
                <StyledImgHost src={hostPicture} alt={`picture of ${hostName}`}></StyledImgHost>
                <StyledNameHost>{hostName}</StyledNameHost>
            </div>
            
            
            
        </div>
    )
}