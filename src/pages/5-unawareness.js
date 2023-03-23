import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
  <div>
    <div className='Instruction'>
      <div className='InstructionGroup'>
        <h1>Step 5: Neglect gender attribute in training </h1>
        <p>* Another way to mitigate algorithmic bias is to remove the attributes which might lead to unfairness (e.g., gender in the current case) from training data. This is called unawareness. 
	<br></br><br></br>* Without using gender as a factor to decide hiring outcomes, the only factor is now interview performance, which is irrelevant of gender. See the resulting training set below. It's adapted from a biased dataset.
        </p>
       <h2>
          <a href="https://docs.google.com/spreadsheets/d/1pQxhFeYGWLB5VqbYJTLjDl5d6k125Rwom_bM-qrc3N8/edit?usp=sharing" title="Colab">Dataset3</a>
        </h2>
        <p>* Now run Google Colab below again to see the results on a new batch of candidates after removing the gender attribute in the training process. After you go to Google Colab, select "Runtime->Run all".
        </p>
        <h2>
          <a href="https://colab.research.google.com/drive/18j5CqIV3sB8HZwKJVcv-cVtIXn7ZTyfP#scrollTo=FYMDmQhX2xMm" title="Colab">Colab</a>
        </h2>
        <p>* The results are shown under the section Training With Dataset3. Any bias identified?
        </p>
        <Link to="/4-clean/">Back</Link>
        <Link to="/6-recap-evaluation/">Next step</Link>		
        <Link to="/">Go back to the homepage</Link>
      </div>
    </div>
  </div>
)

export default SecondPage
