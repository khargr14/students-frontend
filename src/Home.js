import React from 'react';
import {Link} from 'react-router-dom';
//import {connect} from 'react-redux'
//import {fetchBusinesses} from './actions/fetchBusinesses'
// import BusinessContainer from './containers/BusinessesContainer'

/**
 * stateless / presentational /
 */
const Home = () => {
    return (
      <div>
        <h1>Click on Students to see a list of Students or <br/>
            Click on New Student to add a Student </h1>
      </div>
    );
}

export default Home;