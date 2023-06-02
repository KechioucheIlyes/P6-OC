import { Link } from "react-router-dom"
import styled from "styled-components"
import "../../style/Error/Error.css"
export function Error (){
    const numberError = 404;
    const messageError = "Oups! La page que vous demandez n'existe pas."
    const StyledHeading1 = styled.h1`
        color: #fe605f;
        ${(props) => props.$errorNum ? `
            font-size:140px;
        ` : null}
    ` 
    const StyledHeading2 = styled.p`
        color: #fe605f;
        ${(props) => props.$errorMessage ? `
            font-size:30px;
        ` : null}
    ` 
    const StyledLink = styled(Link)`
        color: #fe605f;
        ${(props) => props.$redirectedLink ? `
            font-size:20px; 
        ` : null}
    `
    
    return (
        <div className="Error-container">
        
            <StyledHeading1 $errorNum >{numberError}</StyledHeading1>
        
        
        
            <StyledHeading2 $errorMessage >{messageError}</StyledHeading2>
        
        

            <StyledLink to={"/"} $redirectedLink>Retourner sur la page d'acceuil</StyledLink>

        </div>
    )
}