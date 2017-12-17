import React from 'react';
import update from 'react/lib/update';
import { connect } from 'react-redux';
import { Card } from './Card';
import { pushCard, removeCard, moveCard } from './actions';


class Container extends React.Component {

  render() {

    const { cards, canDrop, isOver, connectDropTarget } = this.props;
    const { isActive } = canDrop && isOver;
    const backgroundColor = isActive ? 'lightgreen' : '#FFF';

    return connectDropTarget (
      <div style={backgroundColor}>

      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
};

const mapDispatchToProps = (dispatch) => {
return {
  pushCard: () => dispatch(pushCard(card)),
  removeCard: () => dispatch(removeCard(index)),
  moveCard: () => dispatch(moveCard(dragIndex, hoverIndex))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
