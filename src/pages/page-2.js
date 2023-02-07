import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
  <div>
    <div className='Instruction'>
      <div className='InstructionGroup'>
        <h1>Instructions</h1>
        <p>Our research project aims at teaching high school and college students on how gender bias is introduced and can be mitigated from AI systems. Participants will be invited to experience an interactive prototype to implement an AI model easily.<br></br><br></br>Once you agree to our terms, you will be guided through the following steps:
        </p>
        <h2>
          STEP1: Explore gender bias in search engine algorithms<br></br>STEP2: Data acquisitions<br></br>STEP3: Data cleanings<br></br>STEP4: Model explanations<br></br>STEP5: Hyperparameter optimizations<br></br>STEP6: Accuracy and losss<br></br>STEP7: Model validations<br></br>STEP8: Model deployment<br></br>
        </h2>
        <Link to="/">Go back to the homepage</Link>
      </div>
    </div>
  </div>
)

export default SecondPage
