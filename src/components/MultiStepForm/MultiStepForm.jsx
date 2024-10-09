import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import styles from './MultiStepForm.module.css';
import Step1 from '../Step1/Step1';
import Step2 from '../Step2/Step2';
import Step3 from '../Step3/Step3';

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  const validateStep = () => {
    let currentErrors = {};
    if (currentStep === 0) {
      if (!formData.name) currentErrors.name = "Name is required";
      if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) currentErrors.email = "Valid email is required";
      if (!formData.phone || !/^\d{10}$/.test(formData.phone)) currentErrors.phone = "Valid 10-digit phone number is required";
    }
    if (currentStep === 1) {
      if (!formData.address1) currentErrors.address1 = "Address Line 1 is required";
      if (!formData.city) currentErrors.city = "City is required";
      if (!formData.state) currentErrors.state = "State is required";
      if (!formData.zip || !/^\d{6}$/.test(formData.zip)) currentErrors.zip = "Valid 5-digit ZIP code is required";
    }
    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      localStorage.setItem('formData', JSON.stringify(formData));
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    if (validateStep()) {
      localStorage.setItem('formData', JSON.stringify(formData));
      alert("Form submitted successfully!");

      setFormData({
        name: '',
        email: '',
        phone: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: ''
      });
      setCurrentStep(0);
      
      localStorage.removeItem('formData');
    }
  };

  return (
    <div className={styles.formContainer}>
      {currentStep === 0 && <Step1 formData={formData} setFormData={setFormData} errors={errors} />}
      {currentStep === 1 && <Step2 formData={formData} setFormData={setFormData} errors={errors} />}
      {currentStep === 2 && <Step3 formData={formData} />}

      <div className={styles.buttonGroup}>
        <Button
            onClick={handleBack}
            disabled={currentStep === 0}
            variant="contained"
            color="primary"
        >
            Back
        </Button>

        {currentStep < 2 ? (
        <Button
            onClick={handleNext}
            variant="contained"
            color="primary"  
        >
            Next
        </Button>
        ) : (
        <Button
            onClick={handleSubmit}
            variant="contained"
            color="success"
        >
            Submit
        </Button>
        )}

      </div>
    </div>
  );
};

export default MultiStepForm;
