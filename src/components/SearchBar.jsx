import { InputGroup, Form, Button } from "react-bootstrap"

const SearchBar = ({ searchBarText, setSearchBarText }) => {

    return (
        <>
            <InputGroup>
                <Form.Control
                    type="search"
                    name="search"
                    id="search"
                    placeholder='Search collection'
                    value={searchBarText}
                    onChange={(e) => setSearchBarText(e.target.value)}
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