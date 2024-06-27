import { Container, Form, InputGroup, Row } from "react-bootstrap"
import { useForm } from "react-hook-form"
import ResourceForm from "./ResourceForm";

const AddResourcePage = () => {
    const { handleSubmit } = useForm();

    return (
        <>
            <Container>
                <h1>Add new resource</h1>
                <Row className="d-flex justify-content-center">
                    <ResourceForm />
                </Row>
            </Container>
        </>
    )
}

export default AddResourcePage