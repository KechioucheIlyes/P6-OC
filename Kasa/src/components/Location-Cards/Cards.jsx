import styled from "styled-components";
import "../../style/Cards/Cards.css";
import { Link, useParams } from "react-router-dom";
import test from "../../assets/Montagne/IMG.png";
import { useState } from "react";

const StyledCardContainer = styled.div`
  
  @media screen and (max-width: 768px) {
    
    width: 100%;
  }
`;

const StyledCard = styled.div`
  position: relative;
  width: 340px;
  height: 340px;
  border-radius: 10px;
  margin: 56px 50px 50px 50px;
  background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(0, 0, 0, 0.5)
    ),
    url(${(props) => props.BG}) no-repeat center center;
  background-size: cover;

  @media screen and (max-width: 768px) {
    margin: 0;
    margin-top: 20px;
    width: 100%;
    height: 255px;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: rgba(255, 255, 255, 1);
  height: 100%;
`;

const StyledText = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: rgba(255, 255, 255, 1);
  font-size: 18px;
  width: 200px;
`;

export function Cards({ pictures, title, id }) {
  const [ids, setIds] = useState();

  let { locationId } = useParams();
  locationId = id;

  return (
    <>
      <StyledCardContainer>
        <StyledCard BG={pictures}>
          <StyledLink to={`/fiche-logement/${locationId}`}>
            <StyledText>{title ? title : null}</StyledText>
          </StyledLink>
        </StyledCard>
      </StyledCardContainer>
    </>
  );
}
