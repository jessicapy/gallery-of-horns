import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import SelectedBeast from './SelectedBeast';

function HornedBeast(props) {
    const [favorite, setfavorite] = useState(0);
    function addFavorite() {
        setfavorite(favorite + 1);
        props.displayAsModal(props.title);
    };

    return (
        <>
            <Card style={{ width: '18rem' }} onClick={addFavorite}>
                <Card.Img variant="top" src={props.imageUrl} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <Button variant="primary"> Favorito: {favorite}</Button>
                </Card.Body>
            </Card>
        </>

    )
}
export default HornedBeast;