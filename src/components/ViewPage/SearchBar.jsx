import { InputGroup, Form, Button } from "react-bootstrap"

const SearchBar = () => {
    return (
        <>
            <InputGroup>
                <Form.Control
                    placeholder='Search collection'
                >
                </Form.Control>
                <Button>
                    Search
                </Button>
            </InputGroup>
        </>
    )
}

export default SearchBar