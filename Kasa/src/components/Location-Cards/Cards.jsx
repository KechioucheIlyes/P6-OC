import styled from "styled-components"
import '../../style/Cards/Cards.css'
import { Link, useParams } from "react-router-dom"
import test from "../../assets/Montagne/IMG.png"
import { useState } from "react"

const StyledCard = styled.div`
        width : 340px;
        height:340px;
        border-radius: 10px;
        background: linear-gradient(to bottom ,#FF6060 , rgba(0, 0 , 0 , 0.7) );
        margin: 56px 50px 50px 50px ;
    `
    const StyledImg = styled.img`
        height: 340px;
        width : 340px;
        border-radius: 10px;
        background: url(${props => props.BG}) no-repeat;
        background-size: cover;
        background-position: center;

    `
export function Cards({pictures , title , id  }) { 
    
    const [ids , setIds] = useState()

    let {locationId} = useParams()
    locationId = id
    
    return (
        <>
            
            <StyledCard className="formobs"> 
            <Link to={`/fiche-logement/${locationId}`}><StyledImg onClick={()=>{setIds(id)}} BG={pictures}></StyledImg></Link>
                {title}
                {ids ? ids : null}
            </StyledCard>
            
        </>
        
            
        
    )
}