import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
function SelectedBeast(props) {
  return (
    <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.selectedBeast.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={props.selectedBeast.image_url} />
          <Card.Body>
            <Card.Title>{props.selectedBeast.title}</Card.Title>
            <Card.Text>
            {props.selectedBeast.description}
            </Card.Text>
            {/*<Button variant="primary">Go somewhere</Button>*/}
          </Card.Body>
        </Card>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={props.handleClose}>
          Save Changes
        </Button>
        
      </Modal.Footer>
    </Modal>
  )
}
export default SelectedBeast;