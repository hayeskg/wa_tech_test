import React from 'react';
import { TypoGraphy, Typography } from '@material-ui/core'

const Results = ({ results }) => {
  const { wordCount, wordPositions } = results;
  let renderFlag = false;
  if (wordCount > 0) {
    renderFlag = true;
  } else {
    renderFlag = false;
  }
  return (
    <div>
      <p>Results:</p>
      {renderFlag &&
        <>
          < Typography >
            Word count: {wordCount}
          </Typography>
          <Typography>
            Word Positions: {wordPositions.map(position => { return ` ${position} ` })}
          </Typography>
        </>
      }
    </div >
  );
};

export default Results;