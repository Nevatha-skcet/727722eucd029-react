import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const ValidationForm = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
        validate({ [name]: value });
    };

    const validate = (fieldValues = values) => {
        let temp = { ...errors };

        if ('email' in fieldValues)
            temp.email = fieldValues.email ? "" : "This field is required.";

        if ('email' in fieldValues)
            temp.email = (/^$|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid.";

        if ('password' in fieldValues)
            temp.password = fieldValues.password ? "" : "This field is required.";

        setErrors({
            ...temp
        });

        if (fieldValues === values)
            return Object.values(temp).every(x => x === "");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // Handle form submission here
            console.log('Form is valid');
        }
    };

    return (
        <Box component="form" noValidate onSubmit={handleSubmit}>
            <TextField
                variant="outlined"
                label="Email"
                name="email"
                value={values.email}
                onChange={handleInputChange}
                error={Boolean(errors.email)}
                helperText={errors.email}
                fullWidth
                margin="normal"
            />
            <TextField
                variant="outlined"
                label="Password"
                name="password"
                type="password"
                value={values.password}
                onChange={handleInputChange}
                error={Boolean(errors.password)}
                helperText={errors.password}
                fullWidth
                margin="normal"
            />
            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </Box>
    );
};

export default ValidationForm;
