import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
  <div>
    <div className='Instruction'>
      <div className='InstructionGroup'>
        <h1>Step 1: Learn about gender bias in the hiring process</h1>
        <p>* In this step, you will learn about gender bias in the hiring process: people who identify as women are less likely to be hired even if they perform equally well in interviews, especially regarding such male-dominant jobs as software developers. 
	<br></br><br></br>* We want an algorithm to help make hiring decisions. However, drawing on past data would simply reinforce the biases contained. 
	<br></br><br></br>* Here's what a hiring dataset looks like. It contains the following features: gender (M: male, F: female), score (Y: good performance in interview, N: poor performance in interview), hired (1: hired, 0: not hired). 
	<br></br><br></br>* Now, imagine that we want to build a classifier that will make hiring decisions. We would like our algorithm to correct for gender bias. We can do it in two ways: (1) removing bias in training data; (2) not considering the gender attribute in the training process.
        </p>
        <p>So good so far? 
        </p>
        <Link to="/0-introduction/">Back</Link>
        <Link to="/2-acquire/">Next step</Link>	
        <Link to="/">Go back to the homepage</Link>
      </div>
    </div>
  </div>
)

export default SecondPage
