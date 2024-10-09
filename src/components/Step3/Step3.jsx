import React from 'react';
import { Stack,Typography } from '@mui/material';
import styles from './Step3.module.css';

const Step3 = ({ formData }) => {
  return (
    <div>
      <h2 className={styles.heading}>Confirmation</h2>
      <div>
      <Stack spacing={2}>
            <Typography variant="body1">
                <strong>Name:</strong> {formData.name}
            </Typography>
            <Typography variant="body1">
                <strong>Email:</strong> {formData.email}
            </Typography>
            <Typography variant="body1">
                <strong>Phone:</strong> {formData.phone}
            </Typography>
            <Typography variant="body1">
                <strong>Address Line 1:</strong> {formData.address1}
            </Typography>
            <Typography variant="body1">
                <strong>Address Line 2:</strong> {formData.address2}
            </Typography>
            <Typography variant="body1">
                <strong>City:</strong> {formData.city}
            </Typography>
            <Typography variant="body1">
                <strong>State:</strong> {formData.state}
            </Typography>
            <Typography variant="body1">
                <strong>Zip Code:</strong> {formData.zip}
            </Typography>
            </Stack>
        </div>
    </div>
  );
};

export default Step3;
