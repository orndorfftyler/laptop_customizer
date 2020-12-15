import React from 'react';
import Item from '../Item/Item';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';


function HardwareType(props) {

    const options = props.features[props.singleFeature].map(item => {
    const itemHash = slugify(JSON.stringify(item));
    return (
            <Item 
                singleFeature={props.singleFeature}
                key={itemHash}
                itemHash={itemHash}
                item={item}
                selected={props.selected}
                updateFeature={props.updateFeature}
                USCurrencyFormat={props.USCurrencyFormat}

            />
      );
  });
    
    return (
        <fieldset className="feature" key={props.featureHash}>
          <legend className="feature__name">
            <h3>{props.singleFeature}</h3>
          </legend>
          {options}
        </fieldset>
      );

}

export default HardwareType;