import { useState } from "react";
import { Button, Form, InputGroup } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import PropTypes from 'prop-types';

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

PasswordField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.func
}

export default PasswordField;