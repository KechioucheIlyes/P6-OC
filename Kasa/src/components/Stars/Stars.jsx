import coloredStar from "../../assets/Stars/Colored-Star/star.svg"
import uncoloredStar from "../../assets/Stars/Uncolored-Star/star.svg"
import styled from "styled-components"

const StyledStar = styled.img`
    margin-right : 10px;
    &:hover{
        transform: rotate(360deg) scale(2.05);
        transition : transform 0.3s ease-in-out;
        
        
    }
    &:not(:hover){
        transform: rotate(0deg) scale(1);
        transition: transform 0.3s ease;
    }
    
    @media screen and (max-width : 768px){
        height : 10px !important;
    }
`
export function Stars({rating}){
    
    const range = [1, 2 , 3 ,4 ,5]
    const numberOfUncoloredStars = 5-rating
    return( 
        <div>
            {range.map((element, index)=>
                rating >= element ? <StyledStar key={index} src={coloredStar} alt="star"></StyledStar> : null
                
            )}{
                    range.map(((element, index) => 
                        numberOfUncoloredStars >= element ? <StyledStar key={index} src={uncoloredStar}  alt="star"></StyledStar> : null
                        )) 
                    }
        </div>
    )
}