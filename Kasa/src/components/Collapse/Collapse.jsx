import "../../style/Collapse/Collapse.css"
import vector from "../../assets/Vector-up.svg"
import { useState } from "react"
import vectDown from "../../assets/Vector-down.svg"
import styled from "styled-components"


const StyledCollapse = styled.div`
  padding: 10px 20px 10px 15px;
  background-color: rgba(255, 96, 96, 1);
  border-radius: 5px;
  color: aliceblue;
  margin-left: auto;
  margin-right: auto;
  margin-top: 38px;
  display: flex;
  justify-content: space-between;
  width: ${props => props.width ? props.width : 'auto'};
`;
const StyledCollapseInfos = styled.div`
    padding: 10px 20px 10px 15px;
    background-color: #f5f6f6;
    border-radius: 5px;
    color: aliceblue;
    margin-left: auto;
    margin-right: auto;
    color: rgba(255, 96, 96, 1);
    width : ${props => props.widthinfos ? props.widthinfos : 'auto' };
`
export function Collapse({name, content , width , children}){
    const [vectorUp , setVectorUp] = useState(true)
    
    
    
    
    
    return(
        <div >
            <StyledCollapse className="tes" width={width} >
                {name}
                {vectorUp ? <img onClick={() => {setVectorUp(!vectorUp)}} src={vector} alt="vecteur-up"></img> : <img onClick={() => {setVectorUp(!vectorUp)}} src={vectDown} alt="vecteur down"></img>}
            </StyledCollapse> 
            {vectorUp ? null : <StyledCollapseInfos className="tes" widthinfos={width} >
                <div >{content} {children}</div>
            </StyledCollapseInfos> } 
            
            
        </div>
    
    )
}