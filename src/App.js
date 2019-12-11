import React from 'react';
import { connect } from 'react-redux';

import { buyItemAction, removeFeatureAction } from './store/actions/carActions'

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (props) => {
  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeFeatureAction(item)
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.buyItemAction(item)
    //console.log(item)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} buyItem={buyItem} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = ({ car, additionalPrice, additionalFeatures }) => {
  return {
    car,
    additionalPrice,
    additionalFeatures
  }
}

export default connect(
  mapStateToProps,
  { buyItemAction, removeFeatureAction}
)(App);
