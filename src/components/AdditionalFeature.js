import React from 'react';
import { connect } from 'react-redux';
import { addFeature } from './../actions/index';

const AdditionalFeature = props => {
  console.log(props.feature);

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => props.addFeature(props.feature)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return({

  });
};

export default connect(mapStateToProps, { addFeature })(AdditionalFeature);
