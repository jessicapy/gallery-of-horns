import HornedBeast from "./HornerBeast";
{/*import data from "./data.json";*/}
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';


function Gallery(props){
    
    return (
        <Container>
            <Row xs={2} sm={3} md={4} lg={5}>
         {
            props.data.map(beast=>(
            <HornedBeast
            key={beast._id}
            title={beast.title}
            imageUrl={beast.image_url}
            description={beast.description}
            displayAsModal={props.displayAsModal}
            />
        ))
            
        }
        </Row>
        </Container>
    )
}
export default Gallery