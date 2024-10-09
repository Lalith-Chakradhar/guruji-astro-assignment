import React from 'react';
import styles from './Step1.module.css';
import { Stack } from '@mui/material';
import TextField from '@mui/material/TextField';

const Step1 = ({ formData, setFormData, errors }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
    <Stack spacing={4}>
      <h2 className={styles.heading}>Personal Information</h2>
      <div>
        <TextField
            label="Name"
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name} 
            helperText={errors.name} 
            fullWidth 
        />
      </div>
      <div>
      <TextField
            label="Email"
            type="email"
            variant="outlined"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email} 
            helperText={errors.email}
            fullWidth  
        />
      </div>
      <div>
      <TextField
            label="Phone"
            type="text" 
            variant="outlined"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={!!errors.phone} 
            helperText={errors.phone} 
            fullWidth 
        />
      </div>
      </Stack>
    </div>
  );
};

export default Step1;
