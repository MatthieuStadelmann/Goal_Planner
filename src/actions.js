
//Push, remove, move cards

export function pushCard(card) {
  return {type: "PUSH_CARD", card: card}
};

export function removeCard(index) {
  return {type: "REMOVE_CARD", index: index}
};

export function moveCard(dragIndex, hoverIndex) {
  return {
    type: "MOVE_CARD",
    dragIndex: dragIndex,
    hoverIndex: hoverIndex
    }
};
