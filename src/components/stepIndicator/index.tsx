const StepIndicator = ({ noOfSteps = 5, currentStep = 1 }) => {
  const steps = []
  for (let i = 0; i < noOfSteps; i++) {
    steps.push('1')
  }
  return (
    <div className="flex justify-center">
      {steps.map((_item, i) => (
        <div
          key={i}
          className="mr-1"
          style={{
            height: '10px',
            width: currentStep === i + 1 ? '30px' : '10px',
            background: '#B8E5EE',
            borderRadius: currentStep === i + 1 ? '20%' : '50%',
          }}
        ></div>
      ))}
    </div>
  )
}

export default StepIndicator
