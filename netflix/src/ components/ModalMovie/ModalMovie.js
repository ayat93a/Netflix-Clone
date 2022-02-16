import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useRef } from 'react';


function ModalMovie(props) {
    const commentRef = useRef();
  function handleCaption(e) {
    e.preventDefault();
    
    props.updateCaption(newData, props.now.id);
  }
  return (
    <>
      <Modal
        show={props.show}
        onHide={() => {
          props.handleClose();
        }}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.now.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.now.overview}</Modal.Body>
        <Modal.Footer>
          <Form.Group>
            <Form.Label>Review:</Form.Label>
            <Form.Control ref={commentRef} type='textarea' placeholder={props.now.caption ? props.now.caption : 'Add Your Review Here'} />
          </Form.Group>
          <Button className='addBtn' variant='primary' type='submit' onClick={handleCaption}>
            Add a Review
          </Button>
          <Button variant='secondary' onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      ;
    </>
  );
}
export default ModalMovie;