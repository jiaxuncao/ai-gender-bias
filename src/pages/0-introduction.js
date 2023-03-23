import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
  <div>
    <div className='Instruction'>
      <div className='InstructionGroup'>
        <h1>Introduction</h1>
        <p>* Our research project aims at teaching high school and college students on how gender bias is introduced and can be mitigated from AI systems. 
	Participants will interactively implement fair AI models in terms of gender.
	<br></br><br></br>* Once you agree to our consent form on the right, you will be guided through the following steps:
          <a href="https://docs.google.com/document/d/1Sf1d1OVKm2ow211PSUMY5inUPPfIlf0_3tsVPGvDXbw/edit?usp=sharing" title="consent">consent form</a>
        </p>
        <h2>
          STEP1: Learn about gender bias in the hiring process<br></br>
	STEP2: Acquire data for training<br></br>
	STEP3: Learn about Random Forest<br></br>
	STEP4: Clean acquired data<br></br>
	STEP5: Neglect gender attribute in training<br></br>
	STEP6: Reflection & evaluation<br></br>
        </h2>
        <p>* Do you agree to our consent form? 
        </p>
        <Link to="/">I do not agree!</Link>
        <Link to="/1-bias/">I agree!</Link>
        <Link to="/">Go back to the homepage</Link>
      </div>
    </div>
  </div>
)

export default SecondPage
