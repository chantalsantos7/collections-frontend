import React from 'react'
import { Dropdown } from 'react-bootstrap';
import { BsThreeDotsVertical } from 'react-icons/bs';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => {
    <a
        href=''
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    >
        {children}
        <BsThreeDotsVertical />
    </a>
});
console.log("I got here")

const CollectionDropdown = () => {
    return (
        <Dropdown>
            <Dropdown.Toggle as={CustomToggle} id='dropdown-custom-toggle'>
            <BsThreeDotsVertical />     
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item>Edit collection</Dropdown.Item>
                <Dropdown.Item>Delete collection</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default CollectionDropdown