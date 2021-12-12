import { 
  RECEIVE_SUBMITTED_CARD, 
  REMOVE_SUBMITTED_CARD 
} from "../../actions/cards/played_card_actions"

const submittedCardsReducer = (state = {}, action) => {
  Object.freeze(state)
  const nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_SUBMITTED_CARD:
      debugger
      const { user, card } = action.payload
      nextState[user._id] = card
      return nextState;
    case REMOVE_SUBMITTED_CARD:
      let nState = {}
      // delete nextState[action.card.id]
      return nState
    default:
      return state;
  }
}


export default submittedCardsReducer



