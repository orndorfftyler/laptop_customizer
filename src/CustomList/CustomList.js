import React from 'react';
import HardwareType from '../HardwareType/HardwareType';


const FEATURES = {
    Processor: [
      {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      {
        name: 'Professor X AMD Fire Breather with sidewinder technology',
        cost: 1200
      }
    ],
    "Operating System": [
      {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      {
        name: 'Bodhi Linux',
        cost: 300
      }
    ],
    "Video Card": [
      {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      {
        name: 'Mind mild breeze 2000',
        cost: 1345
      }
    ],
    Display: [
      {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      },
      {
        name: '15.3" HGTV (3840 x 2160) Home makeover edition',
        cost: 1400
      },
    ]
  };


function CustomList(props) {

    const features = Object.keys(FEATURES).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    
    return (
        <HardwareType 
        features={FEATURES}
        singleFeature={feature}
        featureHash={featureHash}
        key={featureHash}
        selected={props.selected}
        updateFeature={props.updateFeature}
        USCurrencyFormat={props.USCurrencyFormat}
        />
    );

    })

    return (
          <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
          </form>
    );
}

export default CustomList;
