import React from 'react';
import HardwareType from '../HardwareType/HardwareType';
import FEATURES from '../features.js'

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
