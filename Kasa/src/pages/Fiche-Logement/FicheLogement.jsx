import { Caroussel } from "../../components/Carroussel/Carousel"
import { useParams } from "react-router"
import { dataLogement } from "../../utils/DataLogement/DataLogement";
import { InfosCards } from "../../components/InfosCards/InfosCards";
import styled from "styled-components";
import { Collapse } from "../../components/Collapse/Collapse";
import { Stars } from "../../components/Stars/Stars";
import '../../style/FicheLogement.scss'

const StyledTags = styled.div`
    color: white;
    background-color :#fe605f; 
    border: 1px solid #fe605f;
    border-radius : 10px; 
    width: fit-content;
    padding: 3px 41px 2px 40px;
    margin-right: 10px;

    
    
`
const StyledTagsContainer = styled.div`

    display: flex;
    

`
const StyledCollapse = styled.div`
    display: flex;
    justify-content : space-between;
    border: 1px solid black;
    
`



export function FicheLogement (){
    const {locationId} =useParams()
    
    const filtredElement = dataLogement.filter(el => el.id === locationId)

    console.log(filtredElement)
    
    

    return (<div>
        {filtredElement.map((el)=>{
            return (
                <div>
                    
                <div>
                
                    
                <Caroussel picture= {el.cover}  tableOfPictures={el.pictures}/>
                
                <InfosCards 
                
                title={(el.title)} 
                location={(el.location)} 
                hostPicture={(el.host.picture)} 
                hostName={(el.host.name)}
                
                />

                <div className="tags-stars-container">
                    
                <StyledTagsContainer className="tags-container">
                    
                    {el.tags.map(tag => <StyledTags className="tags">{tag}</StyledTags>)}


                </StyledTagsContainer>
                <Stars rating={el.rating}/>

                </div>
                

                <StyledCollapse  className="forSee">
                    
                        
                        <Collapse  name={"Description"} content={el.description} width={"500px"}  >
                            
                        </Collapse>
                        
                    
                        <Collapse name={"Équipements"}  width={"500px"} >
                            <ul>
                                {el.equipments.map((equipement)=>{
                                    return <li>{equipement}</li>
                                })}
                            </ul>
                        </Collapse>
                        
                
                </StyledCollapse>

                
            </div>

                </div>
                
            
            
            )
            
        })}
        
        
            
        

        
    </div>
    )
}