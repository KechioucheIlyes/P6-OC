import styled from "styled-components"
import '../../style/Cards/Cards.css'

export function Cards() { 
    
    const StyledCard = styled.div`
        border: 1px solid black;
        width : 340px;
        height:340px;
        border-radius: 10px;
        background: linear-gradient(to bottom ,#FF6060 , rgba(0, 0 , 0 , 0.7) );
        margin: 56px 50px 50px 50px ;
    `
    return (
        
        <StyledCard> 
            <div className="location-title" >
                <p>Titre de la location</p>
            </div>
        </StyledCard>
            
        
    )
 }