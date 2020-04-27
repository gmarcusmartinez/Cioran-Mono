import { v4 } from "uuid";

const mockItems = [
  { id: v4(), content: "First Task" },
  { id: v4(), content: "Second Task" },
  { id: v4(), content: "Third Task" },
  { id: v4(), content: "Fourth Task" },
  { id: v4(), content: "Fifth Task" },
  { id: v4(), content: "Sixth Task" },
];

export const cols = {
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
