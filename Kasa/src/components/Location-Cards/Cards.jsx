import styled from "styled-components"
import '../../style/Cards/Cards.css'
import { Link, useParams } from "react-router-dom"
import test from "../../assets/Montagne/IMG.png"
import { useState } from "react"

const StyledCard = styled.div`
        width : 340px;
        height:340px;
        border-radius: 10px;
        margin: 56px 50px 50px 50px ;
        
    `
    const StyledImg = styled.img`
        height: 340px;
        width : 340px;
        border-radius: 10px;
        background: url(${props => props.BG}) no-repeat center center;
        background-size: cover;
        position:absolute;

    `
    const StyledText = styled.div`
        
        position:relative;
        top:268px;
        left:20px;
        color: rgba(255, 255, 255, 1);
        font-size: 18px;
        width:300px;
        
`
export function Cards({pictures , title , id  }) { 
    
    const [ids , setIds] = useState()

    let {locationId} = useParams()
    locationId = id
    
    return (
        <>
            
            <StyledCard className="formobs card-dark"> 
            <Link to={`/fiche-logement/${locationId}`}><StyledImg className="img-card"  BG={pictures}></StyledImg></Link>
                <StyledText>{title ? title : null}</StyledText>
                
            </StyledCard>
            
        </>
        
            
        
    )
}