import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
  <div>
    <div className='Instruction'>
      <div className='InstructionGroup'>
        <h1>Step 6: Recap and evaluation</h1>
        <p>Hoorey! Now you're an expert AI engineer with bias awareness!
        </p>
        <p>* How many approaches have you learned so far to mitigate gender bias from AI? Can you think of other ways to mitigate gender bias?
        </p>
        <p>* Now let's apply what you leaned here to debias another AI model!
        </p>
        <Link to="/5-unawareness/">Back</Link>	
        <Link to="/">Go back to the homepage</Link>
      </div>
    </div>
  </div>
)

export default SecondPage
