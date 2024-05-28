import React from 'react';

import { LineGraph } from 'playbook-ui';

import WebpackerReact from 'webpacker-react';

const data = [
  {
    name: 'Installation',
    data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
  },
];

const App = () => {
  return (
    <>
      <div>
        {/* TODO: Abstract to a dedicated component */}
        <LineGraph
          chartData={data}
          title="Key Performance Indicators"
          xAxisCategories={[
            '5/1',
            '5/15',
            '6/1',
            '6/15',
            '7/1',
            '7/15',
            '8/1',
            '8/15',
            '9/1',
            '9/15',
            '10/1',
            '10/15',
            '11/1',
            '11/15',
            '12/1',
            '12/15',
          ]}
          yAxisMin={0}
        />
      </div>
    </>
  );
};

WebpackerReact.setup({ App });

export default App;
