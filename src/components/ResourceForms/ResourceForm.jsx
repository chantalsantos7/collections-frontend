import React, { useState } from 'react'
import { Button, Container, Dropdown, DropdownItem, DropdownMenu, Form, FormControl, InputGroup, Row } from 'react-bootstrap'
import '../css/resourceform.css'

const ResourceForm = () => {
    // optional prop - resourceData
    const [editableCategory, setEditableCategory] = useState(false);
    const [notesLength, setNotesLength] = useState(0); //use to track how many characters in notes, for running count

    return (
        <Form className='resource-form'>
            <Container>
                <Row>
                    <label htmlFor="">Name</label>
                    <InputGroup className='form-input'>
                        <Form.Control placeholder='Resource name' />
                    </InputGroup>
                </Row>
                <Row>
                    <label htmlFor="">Select Category</label>
                    <InputGroup className='form-input'>
                        {/* Category Dropdown */}
                        {/* Make textbox editable if Custom/New Category is chosen */}
                        <Dropdown>
                            <Dropdown.Toggle>
                                
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    Book
                                </Dropdown.Item>
                                <DropdownItem>
                                    Podcast
                                </DropdownItem> 
                                <DropdownItem>Article</DropdownItem>
                                <DropdownItem>Add custom category...</DropdownItem>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Form.Control placeholder='Resource category' disabled />
                    </InputGroup>
                </Row>
                {/* Dates are automatically calculated - add a date modified section */}
                <Row>
                    <label htmlFor="">Resource link</label>
                    <InputGroup className='form-input'>
                        <FormControl placeholder='Add link to resource here' />
                    </InputGroup>
                </Row>
                <Row>
                    <label htmlFor="">Notes</label>
                    <InputGroup className='form-input'>
                        <Form.Control as="textarea" maxLength={250} />
                    </InputGroup>
                </Row>
                <Row>
                    <InputGroup>
                    <Button type='submit' className='resource-submit'>Submit{/*Will go back to view collection page when clicked*/} </Button>
                    </InputGroup>
                </Row>
    
            </Container>
        </Form>
    )
}

export default ResourceForm