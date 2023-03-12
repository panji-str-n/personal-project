import React, { useState } from "react";
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

import Modal from "../../components/Modal/Modal.component";

const ShowUser = ({ data }) => {
    const [isShow, setIsShow] = useState(false)
    const [familyData, setFamilyData] = useState(null)
    const navigate = useNavigate()

    const phoneNumbers = (item) => item.map(({number}) => number).join(', ')

    const handleClick = (userId) => {
        const {family} = data.find(item => item.id === userId)
        setIsShow(true)
        setFamilyData(family)
    }

    return (
    <>
        {
            isShow && (<Modal isShow={isShow} setIsShow={setIsShow} data={familyData} />)
        }
        <Button onClick={() => navigate('/register')}>Add User</Button>
        <Table striped bordered hover size="sm">
        <thead>
            <tr>
            <th>Name</th>
            <th>eKTP</th>
            <th>Address</th>
            <th>Job</th>
            <th>Date of Birth</th>
            <th>Phone Number</th>
            <th>Family</th>
            </tr>
        </thead>
        <tbody>
            { data.map(item => (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.eKTP}</td>
                    <td>{item.address}</td>
                    <td>{item.job}</td>
                    <td>{item.dateBirth}</td>
                    <td>{phoneNumbers(item.phoneNumber)}</td>
                    <td>
                        <Button onClick={()=>handleClick(item.id)}>Show ({item.family.length})</Button>
                    </td>
                </tr>
            ))
            }
        </tbody>
        </Table>
    </>
  );
};


export default ShowUser