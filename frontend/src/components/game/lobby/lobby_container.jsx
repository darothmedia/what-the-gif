import { connect } from "react-redux";
import Lobby from "./lobby";
import { fetchUser } from "../../../actions/user_actions";
import { findByCode } from "../../component_utils/methods";

const mSTP = (state, ownProps) => {
  const games = Object.values(state.entities.games)
  const code = ownProps.match.params.gameCode
  return ({
    game: findByCode(games,code),
    gameCode: code,
    players: Object.values(state.entities.users),
    currentUser: state.session.user
  })
}

const mDTP = dispatch => ({
  fetchUser: (user) => dispatch(fetchUser(user))
})

export default connect(mSTP, mDTP)(Lobby)