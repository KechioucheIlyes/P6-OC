import styled from "styled-components"

const StyledImgHost = styled.img`
        border-radius : 50%;
    `
export function InfosCards({title , location , hostName , hostPicture }){
    
    return (
        <div>
            <h1>{title}</h1>
            <h2>{location}</h2>
            <StyledImgHost src={hostPicture} alt="text"></StyledImgHost>
            <h3>{hostName}</h3>
        </div>
    )
}