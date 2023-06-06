import { Caroussel } from "../../components/Carroussel/Carousel"
import { useParams } from "react-router"
import { dataLogement } from "../../utils/DataLogement/DataLogement";
import { InfosCards } from "../../components/InfosCards/InfosCards";
import styled from "styled-components";
import { Collapse } from "../../components/Collapse/Collapse";
import { Stars } from "../../components/Stars/Stars";


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
    
`



export function FicheLogement (){
    const {locationId} =useParams()
    
    const filtredElement = dataLogement.filter(el => el.id === locationId)

    console.log(filtredElement)
    
    

    return (<div>
        {filtredElement.map((el)=>{
            return (
            <div>
                
                    
                <Caroussel picture= {el.cover} />
                
                <InfosCards 
                title={(el.title)} 
                location={(el.location)} 
                hostPicture={(el.host.picture)} 
                hostName={(el.host.name)} 
                />

                <Stars rating={el.rating}/>
                <StyledTagsContainer className="tags-container">
                    
                    {el.tags.map(tag => <StyledTags>{tag}</StyledTags>)}

                
                
                </StyledTagsContainer>

                <StyledCollapse >
                    
                        
                        <Collapse name={"Description"} content={el.description} width={"500px"} />
                        
                    
                        <Collapse name={"Équipements"} content={el.equipments} width={"500px"} />
                    
                
                </StyledCollapse>

                
            </div>
            
            )
            
        })}
        
        
            
        

        
    </div>
    )
}