import React from "react";
//import BootstrapSwitchButton from "bootstrap-switch-button-react"; //https://gitbrent.github.io/bootstrap-switch-button-react/
import { Modal, Button, Accordion, Table, Row, Form } from "react-bootstrap";

function CookiePopup(props) {
  const cookieTerms = [
    "Store and/or access information on a device",
    "Select basic ads",
    "Create a personalised ads profile",
    "Select personalised ads",
    "Create a personalised content profile",
    "Select personalised content",
    "Measure ad performance",
    "Measure content performance",
    "Apply market research to generate audience insights ",
    "Develop and improve products ",
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
          Ads help us run this site. When you use this site, selected companies
          may access and use information about your device to serve relevant
          ads. Learn more and manage your choices. You can update your choices
          at any time by clicking on the Privacy icon at the bottom of the
          screen.
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
              <Table className='justify-content-start'>
                {cookieTerms.map((term) => {
                  return (
                    <tr key={term}>
                      <td>{term}</td>
                      <td>
                        <Form.Check
                          variant='outline-secondary'
                          type='switch'
                          id={term}
                        />
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  <td>
                    <Accordion.Toggle
                      as={Button}
                      variant='outline-secondary'
                      eventKey='1'
                      size='sm'
                    >
                      Cancel
                    </Accordion.Toggle>
                  </td>
                  <td>
                    <Accordion.Toggle
                      as={Button}
                      eventKey='1'
                      onClick={props.onHide}
                      size='sm'
                      variant='info'
                    >
                      Save and Exit
                    </Accordion.Toggle>
                  </td>
                </tr>
              </Table>
            </Accordion.Collapse>
          </Accordion>
        </Row>
        <Row>
          <Button variant='primary' onClick={props.onHide}>
            Accept All
          </Button>
        </Row>
      </Modal.Footer>
    </Modal>
  );
}
export default CookiePopup;
