import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
  <div>
    <div className='Instruction'>
      <div className='InstructionGroup'>
        <h1>Step 3: Learn about Random Forest</h1>
        <p>* Long explanation alert! Random forest is a commonly-used machine learning algorithm, which combines the output of multiple decision trees to reach a single result. Now you may ask: what is a decision tree? A decision tree is a non-parametric supervised learning algorithm, which is utilized for both classification and regression tasks. It has a hierarchical, tree structure, which consists of a root node, branches, internal nodes and leaf nodes. The ease of use and flexibility of random forest have fueled its adoption, as it handles both classification and regression problems. Please watch the video below to learn more about random forest.
        </p>
        <h2>
           <a href="https://www.youtube.com/watch?v=D_2LkhMJcfY" title="RF">Random Forest</a>
        </h2>
        <p>* Worrying about writing code? We've done it for you! Now you can run Google Colab below to see the results on a new batch of candidates. After you go to Google Colab, select "Runtime->Run all".
        </p>
        <h2>
          <a href="https://colab.research.google.com/drive/18j5CqIV3sB8HZwKJVcv-cVtIXn7ZTyfP#scrollTo=FYMDmQhX2xMm" title="Colab">Colab</a>
        </h2>
        <p>* If you selected Dataset1 before, the results are shown under the section Training With Dataset1. If you selected Dataset2 before, the results are shown under the section Training With Dataset2. Any biases identified in the corresponding results? Did you make the right dataset choice? 
        </p>
        <p>We're not done yet!
        </p>
        <Link to="/2-acquire/">Back</Link>	
        <Link to="/4-clean/">Next step</Link>	
        <Link to="/">Go back to the homepage</Link>
      </div>
    </div>
  </div>
)

export default SecondPage
