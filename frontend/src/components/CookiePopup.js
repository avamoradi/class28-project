import React from "react";
// import { Link } from "react-router-dom";

import { Modal, Button, Accordion, Table, Row, Form } from "react-bootstrap";

function CookiePopup(props) {
  const cookieTerms = [
    { id: 1, term: "Store and/or access information on a device" },
    { id: 2, term: "Create a personalised content profile" },
    { id: 3, term: "Select personalised content" },
    { id: 4, term: "Develop and improve products" },
    { id: 5, term: "Measure content performance" },
  ];
  return (
    <Modal
      dialogClassName='modal-0w'
      {...props}
      size='bg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      backdrop='static'
    >
      <Modal.Header>
        <h3>Manage Your Privacy</h3>
      </Modal.Header>
      <Modal.Body>
        <p>
          When you use this site, you give us permission to access and use
          information about your device for the following purposes. By clicking
          'Accept All' you agree to these purposes.You can learn more and manage
          your choices. You can update your choices at any time by clicking on
          the 'Cookie Policy' link at the bottom of your screen.
        </p>
      </Modal.Body>
      <Modal.Footer className='cookie-footer'>
        <Row>
          <Accordion defaultActiveKey='0'>
            <Accordion.Toggle
              as={Button}
              variant='outline-secondary'
              eventKey='1'
            >
              Manage Settings
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='1'>
              <>
                <Form className='cookie-form'>
                  {cookieTerms.map((term) => {
                    return (
                      <div className='cookie-terms d-flex justify-content-between'>
                        <Form.Label style={{ marginRight: 22 }}>
                          {term.term}
                        </Form.Label>
                        <Form.Check
                          type='switch'
                          id={term.id}
                          variant='outline-secondary'
                        />
                      </div>
                    );
                  })}
                  <Button
                    eventKey='1'
                    onClick={() => props.onHide(false)}
                    size='sm'
                    variant='outline-info'
                    className='cookie-save-btn '
                  >
                    Save and Exit
                  </Button>
                </Form>
                {/* <Table className='cookie-table justify-content-start'>
                  <tbody>
                    {cookieTerms.map((term) => (
                      <tr className='terms-tr' key={term.id}>
                        <td>{term.term}</td>
                        <td>
                          <Form.Check
                            type='switch'
                            id={term.id}
                            variant='outline-secondary'
                          />
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td></td>
                      <td>
                        {" "}
                        <Accordion.Toggle
                          as={Button}
                          eventKey='1'
                          onClick={() => props.onHide(false)}
                          size='sm'
                          variant='outline-info'
                        >
                          Save and Exit
                        </Accordion.Toggle>
                      </td>
                    </tr>
                  </tbody>
                </Table> */}
                {/* <Accordion.Toggle
                  as={Button}
                  variant='outline-secondary'
                  eventKey='1'
                  onClick={() => props.onHide(false)}
                  size='sm'
                >
                  Cancel
                </Accordion.Toggle> */}
              </>
            </Accordion.Collapse>
          </Accordion>
        </Row>
        <Row>
          <Button variant='primary' onClick={() => props.onHide(false)}>
            Accept All
          </Button>
        </Row>
      </Modal.Footer>
    </Modal>
  );
}
export default CookiePopup;
