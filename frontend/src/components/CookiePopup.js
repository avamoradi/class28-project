import React from "react";
import BootstrapSwitchButton from "bootstrap-switch-button-react"; //https://gitbrent.github.io/bootstrap-switch-button-react/
import { Modal, Button, Accordion, Table, Row, Col } from "react-bootstrap";

function CookiePopup(props) {
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
              <Table hover>
                <thead>
                  <tr>
                    <th colSpan='2'>Purposes</th>
                    <th>Give cosent to all</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                  </tr>
                </tbody>
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
