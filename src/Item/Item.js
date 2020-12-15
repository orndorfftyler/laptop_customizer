import React from 'react';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

function Item(props) {
        return (
          <div key={props.itemHash} className="feature__item">
            <input
              type="radio"
              id={props.itemHash}
              className="feature__option"
              name={slugify(props.singleFeature)}
              checked={props.item.name === props.selected[props.singleFeature].name}
              onChange={e => props.updateFeature(props.singleFeature, props.item)}
            />
            <label htmlFor={props.itemHash} className="feature__label">
              {props.item.name} ({props.USCurrencyFormat.format(props.item.cost)})
            </label>
          </div>
        );
      }

export default Item;