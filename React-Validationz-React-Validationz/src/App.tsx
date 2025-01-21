import './App.css';
import React, { useState } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import ProgressBar from './components/ProgressBar';
import { useFormik } from 'formik';
import { validationSchemaStep1, validationSchemaStep2, validationSchemaStep3 } from './components/formValidation';
import Navbar from './components/Navbar';





function App() {

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = () => setStep((prevStep) => Math.min(prevStep + 1, 4));
  const prevStep = () => setStep((prevStep) => Math.max(prevStep - 1, 1));

  const handleSubmit = (data:any) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    if (step === 4) {
      // Final submission logic
      console.log('Form Submitted', formData);
    } else {
      nextStep();
    }
  };

  return (
    <>
    <Navbar/>
    <div className="container mx-auto p-4">
      <ProgressBar step={step} />
      {step === 1 && <Step1 onNext={handleSubmit} onPrev={prevStep} />}
      {step === 2 && <Step2 onNext={handleSubmit} onPrev={prevStep} />}
      {step === 3 && <Step3 onNext={handleSubmit} onPrev={prevStep} />}
      {step === 4 && <Step4 formData={formData} onPrev={prevStep} />}
    </div>
    </>
      );
}

export default App;
