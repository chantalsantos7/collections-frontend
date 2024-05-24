import { useState } from "react";
import { Button, Form, InputGroup } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const PasswordField = () => {

    const [showPassword, setShowPassword] = useState(false);

  return (
    <>
     <InputGroup>
        <Form.Control type={showPassword ? "text" : "password"} />
        <Button 
        onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
        </Button>
     </InputGroup>   
    </>
  )
}

export default PasswordField;