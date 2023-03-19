import React from 'react'
import Button from '../../../Components/shared/Button/Button'

const StepPhoneEmail = ({ onNext }) => {
  return (
    <>
      <div>Phone or Email component.</div>
      <button onClick={onNext}>Next</button>
    </>
  )
}

export default StepPhoneEmail
