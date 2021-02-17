import React from 'react';
import { connect } from 'react-redux';
import { addFeature } from './../actions/index';

const AdditionalFeature = props => {
  // console.log(props.feature);

  return (
    <li>
      <button onClick={() => props.addFeature(props.feature)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return({});
};

export default connect(mapStateToProps, { addFeature })(AdditionalFeature);
