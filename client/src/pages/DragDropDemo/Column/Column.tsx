import React from "react";
import Item from "../Item/Item";
import { Wrapper } from "./styles";
import { Droppable } from "react-beautiful-dnd";

export interface IItem {
  id: string;
  content: string;
}

interface ColumnProps {
  items: IItem[];
  id: string;
}

const Column: React.FC<ColumnProps> = ({ items, id }) => {
  return (
    <Droppable droppableId={id} key={id}>
      {(provided, snapshot) => {
        return (
          <Wrapper
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{
              background: snapshot.isDraggingOver ? "lightblue" : "lightgrey",
            }}
          >
            {items.map((item, index) => {
              return <Item item={item} index={index}></Item>;
            })}
            {provided.placeholder}
          </Wrapper>
        );
      }}
    </Droppable>
  );
};

export default Column;
