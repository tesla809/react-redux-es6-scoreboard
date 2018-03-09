import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PlayerActionCreators from '../actions/player';
import Header from '../components/Header';
import Player from '../components/Player';
import AddPlayerForm from '../components/AddPlayerForm';
import PlayerDetail from '../components/PlayerDetail';

class Scoreboard extends Component {
  static propTypes = {};

  render() {
    const { dispatch, players, selectedPlayerIndex } = this.props;
    const addPlayerAction = this.props.addPlayerAction;
    const removePlayerAction = this.props.removePlayerAction;
    const updatePlayerScoreAction = this.props.updatePlayerScoreAction;
    const selectPlayerAction = this.props.selectPlayerAction;

    const playerComponents = players.map((player, index) => (
      <Player
        index={index}
        name={player.name}
        score={player.score}
        key={player.name}
        updatePlayerScore={updatePlayerScoreAction}
        removePlayer={removePlayerAction}
        selectPlayer={selectPlayerAction}
      />
    ));

    let selectedPlayer;
    if (selectedPlayerIndex !== -1){
      selectedPlayer = players[selectedPlayerIndex];
    }


    return (
      <div className="scoreboard">
        <Header players={players} />
        <div className="players">
          { playerComponents }
        </div>
        <AddPlayerForm addPlayer={addPlayerAction} />

        <div className="player-detail">
          <PlayerDetail selectedPlayer={selectedPlayer} />
        </div>
      </div>
    );
  }
}

// state to props
const mapStateToProps = state => ({
    players: state.players,
    selectedPlayerIndex: state.selectedPlayerIndex
});

// actions to props-declare here to prevent loading every render
const mapDispatchToProps = dispatch => ({
  addPlayerAction: bindActionCreators(PlayerActionCreators.addPlayer, dispatch),
  removePlayerAction: bindActionCreators(PlayerActionCreators.removePlayer, dispatch),
  updatePlayerScoreAction: bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch),
  selectPlayerAction: bindActionCreators(PlayerActionCreators.selectPlayer, dispatch)
});

// exports and passes in state and actions as props to Scoreboard
export default connect(mapStateToProps, mapDispatchToProps)(Scoreboard);
