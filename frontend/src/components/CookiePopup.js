import React from "react";
//import BootstrapSwitchButton from "bootstrap-switch-button-react"; //https://gitbrent.github.io/bootstrap-switch-button-react/
import { Modal, Button, Accordion, Table, Row, Form } from "react-bootstrap";

function CookiePopup(props) {
  const cookieTerms = [
    { id: 1, article: "Store and/or access information on a device" },
    { id: 2, article: "Select basic ads" },
    { id: 3, article: "Create a personalised ads profile" },
    { id: 4, article: "Select personalised ads" },
    { id: 5, article: "Create a personalised content profile" },
    { id: 6, article: "Select personalised content" },
    { id: 7, article: "Measure ad performance" },
    { id: 8, article: "Measure content performance" },
    { id: 9, article: "Apply market research to generate audience insights " },
    { id: 10, article: "Develop and improve products " },
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
                <tbody>
                  {cookieTerms.map((term) => (
                    <tr key={term.id}>
                      <td>{term.article}</td>
                      <td>
                        {/* <Form.Check type='switch' id={term} /> */}
                        <Form.Check
                          type='switch'
                          id={term.id}
                          variant='outline-secondary'
                        />
                      </td>
                    </tr>
                  ))}
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
                        onClick={() => props.onHide(false)}
                        size='sm'
                        variant='info'
                      >
                        Save and Exit
                      </Accordion.Toggle>
                    </td>
                  </tr>
                </tbody>
              </Table>
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
