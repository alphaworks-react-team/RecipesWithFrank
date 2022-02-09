import React from 'react';
//styles 
import { PowerOfPremiumContainer, PremiumHeaders, PremiumH3 } from './PremiumStyles';
const PowerOfPrem = () => {
  return (
    <>
    <PowerOfPremiumContainer>
      {/* Logo here */}
      <PremiumH3>The Power of Premiuem babbyyyy</PremiumH3>
      <PremiumHeaders>Premium <br /> Members Report <br /> 3x The Results</PremiumHeaders>
      <p>Get even more support for your low-carb lifestyle.</p>
      <button>{/*Trophy icon here*/} Get Premium Now</button>
    </PowerOfPremiumContainer>
    {/* Next Container */}
    <div>
      <h1>With Premium you Can...</h1>
      <h4>Generate</h4>
      <h4>Unlock</h4>
      <h4>Implement</h4>
      <h4>Learn</h4>
      <h4>Integrate</h4>
      <h4>Access</h4>
      <h4>Use</h4>
      <h4>Predict</h4>
    </div>
    </>
  );
};

export default PowerOfPrem;