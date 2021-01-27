import React from "react";
//import BootstrapSwitchButton from "bootstrap-switch-button-react"; //https://gitbrent.github.io/bootstrap-switch-button-react/
import {
  Modal,
  Button,
  Accordion,
  Table,
  Row,
  Col,
  Form,
} from "react-bootstrap";

function CookiePopup(props) {
  const cookieTerms = [
    "Select personalised content",
    "Select personalised ads",
    "Select personalised adssssss",
    "Select personalised asadsad",
    "Select personalised gdsg",
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
        <p>Manage Your Privacy</p>
      </Modal.Header>
      <Modal.Body>
        <p>
          Ads help us run this site. When you use this site, selected companies
          may access and use information about your device to serve relevant
          ads. Learn more and manage your choices. You can update your choices
          at any time. You can update your choices at any time by clicking on
          the Privacy icon in the bottom of the screen.
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
              <div>
                {cookieTerms.map((term) => {
                  return (
                    <Form.Check
                      label={term}
                      variant='outline-primary'
                      type='switch'
                      id={term}
                    />
                  );
                })}
              </div>
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
