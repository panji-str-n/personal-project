import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";

const FamilyPopUp = ({isShow, setIsShow, data}) => {
  const handleClose = () => setIsShow(false);

  return (
    <>
      <Modal show={isShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Family Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Date of Birth</th>
                    <th>Relationship Status</th>
                    </tr>
                </thead>
                <tbody>
                    { data.map(item => (
                        <tr key={item.id}>
                            <td>{item.familyName}</td>
                            <td>{item.dateBirthFamily}</td>
                            <td>{item.relationshipStatus.label}</td>
                        </tr>
                     ))
                    }
                </tbody>
            </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FamilyPopUp;