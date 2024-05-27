import { useState } from "react";
import { Button, Form, InputGroup } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const PasswordField = ({ name, label, placeholder, register}) => {

    const [showPassword, setShowPassword] = useState(false);

  return (
    <>
    <label htmlFor="" className="auth-input">{label}</label>
     <InputGroup className="mb-3">
        <Form.Control type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        {...register(name)}
        />
        <Button 
        onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
        </Button>
     </InputGroup>   
    </>
  )
}

export default PasswordField;