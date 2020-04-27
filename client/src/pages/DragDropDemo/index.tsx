import React from "react";
import { v4 } from "uuid";
import { Container } from "./styles";
import Column from "./Column/Column";
import { DragDropContext } from "react-beautiful-dnd";

const mockItems = [
  { id: v4(), content: "First Task" },
  { id: v4(), content: "Second Task" },
  { id: v4(), content: "Third Task" },
  { id: v4(), content: "Fourth Task" },
  { id: v4(), content: "Fifth Task" },
  { id: v4(), content: "Sixth Task" },
];

interface ICol {}

const cols = {
  [v4()]: {
    name: "Todo",
    items: mockItems,
  },
  [v4()]: {
    name: "In Progress",
    items: [],
  },
  [v4()]: {
    name: "Done",
    items: [],
  },
};

const onDragEnd = (result: any) => {
  console.log(result);
};

const Demo = () => {
  const [columns, setColumns] = React.useState(cols);

  return (
    <Container>
      <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
        {Object.entries(columns).map(([id, column]) => {
          return (
            <>
              <Column items={column.items} id={id} key={id}></Column>
            </>
          );
        })}
      </DragDropContext>
    </Container>
  );
};

export default Demo;
