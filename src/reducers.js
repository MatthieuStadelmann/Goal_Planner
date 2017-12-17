import update from 'react/lib/update';

export default function(state={}, action) {

  if (action.type = "PUSH_CARD") {
    state = Object.assign({
      cards: state.cards.update({
        $push: [card]
      })
    })
  }

  if (action.type = "REMOVE_CARD") {
    state = Object.assign({
      cards: state.cards.splice([
        [index, 1]
      ])
    })
  }

if (action.type = "MOVE_CARD") {
  state = Object.assign({
    cards: state.cards.update({
      $splice: [
        [dragIndex, 1],
        [hoverIndex, 0, cards[dragIndex]]
      ]
    })
  })
}
  return state
}
