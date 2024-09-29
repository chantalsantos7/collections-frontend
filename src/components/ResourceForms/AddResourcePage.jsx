import { Container, Form, InputGroup, Row } from "react-bootstrap"
import { useForm } from "react-hook-form"
import ResourceForm from "./ResourceForm";

const AddResourcePage = () => {

    return (
        <>
            <Container>
                <Row className="">
                     <h1 className="resource-title">Add new resource</h1>
                </Row >
                <Row className="d-flex justify-content-center">
                   
                    <ResourceForm />
                </Row>
            </Container>
        </>
    )
}

export default AddResourcePage