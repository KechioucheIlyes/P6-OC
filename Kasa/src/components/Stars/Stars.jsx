import coloredStar from "../../assets/Stars/Colored-Star/star.svg"
import uncoloredStar from "../../assets/Stars/Uncolored-Star/star.svg"
import styled from "styled-components"

const StyledStar = styled.img`
    margin-right : 10px;
    
    @media screen and (max-width : 768px){
        height : 10px !important;
    }
`
export function Stars({rating}){
    
    const range = [1, 2 , 3 ,4 ,5]
    const numberOfUncoloredStars = 5-rating
    return( 
        <div>
            {range.map((element)=>
                rating >= element ? <StyledStar src={coloredStar} alt="star"></StyledStar> : null
                
            )}{
                    range.map((element => 
                        numberOfUncoloredStars >= element ? <StyledStar src={uncoloredStar}  alt="star"></StyledStar> : null
                        )) 
                    }
        </div>
    )
}