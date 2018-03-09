import * as PlayerActionTypes from '../actiontypes/player';

const initialState = {
	players: [{
		name: 'William Shakespeare',
	  score: 31,
		created: '01/8/2018',
		updated: '01/9/2018'
	},
	{
		name: 'René Descartes',
		score: 30,
		created: '01/9/2018',
		updated: '01/10/2018'
	},
	{
		name: 'Francis Bacon',
		score: 31,
		created: '01/8/2018',
		updated: '01/9/2018'
	}],
	selectedPlayerIndex: -1,
}

export default function Player(state=initialState, action) {
  switch(action.type) {
    case PlayerActionTypes.ADD_PLAYER:
			const addedPlayer = [ ...state.players, {
					name: action.name,
					score: 0,
					created: new Date().toLocaleDateString(),
					updated: new Date().toLocaleDateString()
				}];

			return {
				...state,
				players: addedPlayer
			};

    case PlayerActionTypes.REMOVE_PLAYER:
			const removedPlayer = [
				...state.players.slice(0, action.index),
				...state.players.slice(action.index + 1)
			]

			return {
				...state,
				players: removedPlayer,
			};

    case PlayerActionTypes.UPDATE_PLAYER_SCORE:
			const updatePlayers = state.players.map((player, index) => {
				if(index === action.index) {
					return {
						...player,
						score: player.score + action.score,
						updated: new Date().toLocaleDateString(),
					};
				}
				return player;
			});

      return {
				...state,
				players: updatePlayers,
			}

		case PlayerActionTypes.SELECT_PLAYER:
			return {
				...state,
				selectedPlayerIndex: action.index,
			};

    default:
      return state;
  }
}
