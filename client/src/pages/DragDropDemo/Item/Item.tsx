import React from "react";
import { Draggable } from "react-beautiful-dnd";

import { Wrapper } from "./styles";
import { IItem } from "../Column/Column";

interface ItemProps {
  item: IItem;
  index: number;
}

const Item: React.FC<ItemProps> = ({ item, index }) => {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided, snapshot) => {
        return (
          <Wrapper
            ref={provided.innerRef}
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            style={{
              backgroundColor: snapshot.isDragging ? "#263B4A" : "#456C86",
              ...provided.draggableProps.style,
            }}
          ></Wrapper>
        );
      }}
    </Draggable>
  );
};

export default Item;
