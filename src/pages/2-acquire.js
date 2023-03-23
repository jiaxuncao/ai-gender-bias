import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
  <div>
    <div className='Instruction'>
      <div className='InstructionGroup'>
        <h1>Step 2: Acquire data for training</h1>
        <p>* In this step, you will need to choose one from the below datasets for training an AI-based hiring model. Notice any differences between the two datasets?
        </p>
        <h2>
          <a href="https://docs.google.com/spreadsheets/d/1e8vgvBZ4OpnOXi4BeuYXPi8wBw5qBGXSEMIO1iNUgDQ/edit?usp=sharing" title="Dataset1">Dataset1</a>
        <br></br><a href="https://docs.google.com/spreadsheets/d/1RMZQzXNUdPZi6oOFiMGp-qonQjleNd7GVvuQzIcPcYQ/edit?usp=sharing" title="Dataset2">Dataset2</a>
        </h2>
        <p>* Which dataset will you use? Remember your choice till the next step. 
        </p>
        <p>* Now let's learn basics of the model we'll be using: random forest.
        </p>
        <Link to="/1-bias/">Back</Link>	
        <Link to="/3-rf/">Next step</Link>	
        <Link to="/">Go back to the homepage</Link>
      </div>
    </div>
  </div>
)

export default SecondPage
