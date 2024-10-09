import React from 'react';
import styles from './Step2.module.css';
import { Stack } from '@mui/material';
import TextField from '@mui/material/TextField';

const Step2 = ({ formData, setFormData, errors }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
    <Stack spacing={2}>
      <h2 className={styles.heading}>Address Information</h2>
      <div>
         <TextField
            label="Address Line 1"
            variant="outlined"
            name="address1"
            value={formData.address1}
            onChange={handleChange}
            error={!!errors.address1} 
            helperText={errors.address1} 
            fullWidth 
         />
      </div>
      <div>
        <TextField
            label="Address Line 2"
            variant="outlined"
            name="address2"
            value={formData.address2}
            onChange={handleChange}
            fullWidth 
        />
      </div>
      <div>
      <TextField
            label="City"
            variant="outlined"
            name="city"
            value={formData.city}
            onChange={handleChange}
            error={!!errors.city} 
            helperText={errors.city} 
            fullWidth 
        />
      </div>
      <div>
      <TextField
            label="State"
            variant="outlined"
            name="state"
            value={formData.state}
            onChange={handleChange}
            error={!!errors.state}
            helperText={errors.state} 
            fullWidth 
        />
      </div>
      <div>
      <TextField
        label="Zip Code"
        variant="outlined"
        name="zip"
        value={formData.zip}
        onChange={handleChange}
        error={!!errors.zip} 
        helperText={errors.zip} 
        fullWidth 
     />
      </div>
      </Stack>
    </div>
  );
};

export default Step2;
