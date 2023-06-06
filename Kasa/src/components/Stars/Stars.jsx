import coloredStar from "../../assets/Stars/Colored-Star/star.svg"
import uncoloredStar from "../../assets/Stars/Uncolored-Star/star.svg"
export function Stars({rating}){
    
    const range = [1, 2 , 3 ,4 ,5]
    const numberOfUncoloredStars = 5-rating
    return( 
        <div>
            {range.map((element)=>
                rating >= element ? <img src={coloredStar} alt="star"></img> : null
                
            )}{
                    range.map((element => 
                        numberOfUncoloredStars >= element ? <img src={uncoloredStar} alt="star"></img> : null
                        )) 
                    }
        </div>
    )
}