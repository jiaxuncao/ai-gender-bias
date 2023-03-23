import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
  <div>
    <div className='Instruction'>
      <div className='InstructionGroup'>
        <h1>Step 4: Clean acquired data</h1>
        <p>* We've missed an important step in AI training: data cleaning. By cleaning the training data, we're likely to reduce biases contained. 
        </p>
        <p>* Please modify the data points or add entries in the dataset which contains more gender bias. Your main goal is to make the dataset more fair in terms of gender. 
        </p>
        <h2>
           <a href="https://docs.google.com/spreadsheets/d/1e8vgvBZ4OpnOXi4BeuYXPi8wBw5qBGXSEMIO1iNUgDQ/edit?usp=sharing" title="Dataset1">Dataset1</a>
        <br></br><a href="https://docs.google.com/spreadsheets/d/1RMZQzXNUdPZi6oOFiMGp-qonQjleNd7GVvuQzIcPcYQ/edit?usp=sharing" title="Dataset2">Dataset2</a>
        </h2>
        <p>* Now let's run the code again and see what changes! Again, please run Google Colab below to see the results on a new batch of candidates. After you go to Google Colab, select "Runtime->Run all".
        </p>
        <h2>
          <a href="https://colab.research.google.com/drive/18j5CqIV3sB8HZwKJVcv-cVtIXn7ZTyfP#scrollTo=FYMDmQhX2xMm" title="Colab">Colab</a>
        </h2>
        <p>* If you worked on Dataset1, the results are shown under the section Training With Dataset1. If you selected Dataset2, the results are shown under the section Training With Dataset2. Any biased noticed? 
        </p>
        <p>We're not done yet!
        </p>
        <Link to="/3-rf/">Back</Link>
        <Link to="/5-unawareness/">Next step</Link>		
        <Link to="/">Go back to the homepage</Link>
      </div>
    </div>
  </div>
)

export default SecondPage
