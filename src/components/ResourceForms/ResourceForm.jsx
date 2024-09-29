import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Dropdown, DropdownItem, DropdownMenu, Form, FormControl, InputGroup, Row } from 'react-bootstrap'
import { useForm, Controller } from 'react-hook-form';
import '../css/resourceform.css'
import { useResource } from '../../hooks/useResourceHooks';
import collectionsServices from '../../services/collectionsServices';
import { useLocation, useNavigate } from 'react-router';

const ResourceForm = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const { handleSubmit, register, control } = useForm();
    // optional prop - resourceData
    const [editableCategory, setEditableCategory] = useState(false);
    const [notesLength, setNotesLength] = useState(0); //use to track how many characters in notes, for running count
    // const [customSelected, setCustomSelected] = useState(false);
    const [selected, setSelected] = useState('');
    const [category, setCategory] = useState('')

    const onSubmit = async (data, event) => {
        event.preventDefault();
        console.log(data);
        const response = await collectionsServices.addToCollectionService(location.state.collectionId, data);
        console.log(response);
        navigate('/collections/view', { state: { collection: response.data.collection}})
        //generate date added and date modified
        // const dateAdded = new Date(Date.now());

    }

    const selectDropdown = (e) => {
        console.log(e)
        setCategory(e)
    }

    return (
        <Form className='resource-form' onSubmit={handleSubmit(onSubmit)}>
            <Container>
                <Row>
                    <label htmlFor="">Name</label>
                    <InputGroup className='form-input'>
                        <Form.Control placeholder='Resource name' {...register("name")} />
                    </InputGroup>
                </Row>
                <Row>
                    <label htmlFor="">Select Category</label>
                    <InputGroup className='form-input'>
                        {/* Category Dropdown */}
                        {/* Make textbox editable if Custom/New Category is chosen */}
                        {/* <Controller
                        control={control}
                        name="category"
                        defaultValue=""
                        render={({ field }) => {
                            

                        }}
                       /> */}

                        <Controller
                            control={control}
                            name="category"
                            render={({
                                field: { onChange, onBlur, value, name, ref },
                                fieldState: { invalid, isTouched, isDirty, },
                                formState,
                            }) => (
                                <>
                                    <Dropdown title='Category Dropdown' onSelect={selectDropdown}>
                                        <Dropdown.Toggle className='resource-form-btn'></Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item value='Book' eventKey={'Book'}>
                                                Book
                                            </Dropdown.Item>
                                            <DropdownItem value='Podcast' eventKey={'Podcast'}>Podcast</DropdownItem>
                                            <DropdownItem value='Blog' eventKey={'Blog'}>Blog</DropdownItem>
                                            <DropdownItem value='Article' eventKey={'Article'}>Article</DropdownItem>
                                            <DropdownItem value='Course' eventKey={'Course'}>Course</DropdownItem>
                                            <DropdownItem eventKey={'custom'}>Add custom category...</DropdownItem>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Form.Control placeholder='Resource category'
                                        onBlur={onBlur}
                                        readOnly
                                        value={category} //Is finally getting the category data from the dropdown into the submission object, but only on the first change
                                        // disabled={category !== 'custom'}
                                        onChange={onChange} 
                                    // {...register("category")}
                                    />
                                </>
                            )}
                        />
                        {

                        }
                    </InputGroup>
                </Row>
                {/* Dates are automatically calculated - add a date modified section */}
                <Row>
                    <label htmlFor="">Resource link</label>
                    <InputGroup className='form-input'>
                        <FormControl placeholder='Add link to resource here' {...register("link")} />
                    </InputGroup>
                </Row>
                <Row>
                    <label htmlFor="">Notes</label>
                    <InputGroup className='form-input'>
                        <Form.Control as="textarea" maxLength={250} {...register("notes")} />
                    </InputGroup>
                </Row>
                <Row>
                    <Col>
                        <InputGroup>
                            <Button type='submit' className='resource-form-btn'>Submit </Button>
                        </InputGroup>
                    </Col>
                    <Col>
                        <InputGroup className='d-flex justify-content-end'>
                            <Button className='resource-form-btn'>Cancel</Button>
                        </InputGroup>
                    </Col>
                </Row>

            </Container>
        </Form>
    )
}

export default ResourceForm