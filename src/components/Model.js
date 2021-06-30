import React from 'react';
import { Button, Modal } from 'react-bootstrap'

class Model extends React.Component {
   
    render() {
        console.log(this.props.img);
        return (
            <>
                <Modal show={this.props.show} onHide={this.props.onHide}>
                    <Modal.Header>
                        <Modal.Title>{this.props.title} </Modal.Title>
                    </Modal.Header>
                    <img  src={this.props.img} />
                    <Modal.Body> {this.props.description}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}
export default Model;