import React from 'react';
import PropTypes from 'prop-types';

// add state to toggle on and off.
const PlayerDetail = ({ selectedPlayer }) => {
  // if selectedPlayer prop is passed, show. else don't.
  if (selectedPlayer){
    return (
      <div>
        <h3>{ selectedPlayer.name }</h3>
        <ul>
          <li>
            <span>Score: </span>
            { selectedPlayer.score }
          </li>
          <li>
            <span>Created: </span>
            { selectedPlayer.created }
          </li>
          <li>
            <span>Updated: </span>
            { selectedPlayer.updated }
          </li>
        </ul>
      </div>
    );
  }
  else {
    return (<p>Click on a player to see more details</p>);
  }
};

PlayerDetail.propTypes = {
  selectedPlayer: PropTypes.object,
};

export default PlayerDetail;
