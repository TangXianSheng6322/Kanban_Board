import "../App.css";
import PlusIcon from "../icons/PlusIcon";
import "../index.css";
import { useState } from "react";
import { Column, Id } from "../types";
import { ColumnContainer } from "./ColumnContainer";

const KanbanBoard = () => {
  const [columns, setColumns] = useState<Column[]>([]);

  const generateId = () => {
    // Generates a random number between 0 and 1000
    return Math.floor(Math.random() * 1001);
  };

  const createNewColumn = () => {
    const columnToAdd: Column = {
      id: generateId(),
      title: `Column ${columns.length + 1}`,
    };

    setColumns([...columns, columnToAdd]);
  };

  const deleteColumn = (id: Id) => {
    const filteredColums = columns.filter((col) => col.id !== id);
    setColumns(filteredColums);
  };

  return (
    <div className="m-auto flex min-h-screen w-full items-center overflow-x-auto overflow-y-hidden px-[40px]">
      <div className="m-auto flex gap-4">
        <div className="flex gap-4">
          {columns.map((column) => (
            <ColumnContainer column={column} deleteColumn={deleteColumn} />
          ))}
        </div>
        <button
          onClick={() => {
            createNewColumn();
          }}
          className="h-[60px] w-[350px] min-w-[350px] cursor-pointer rounded-lg bg-mainBackgroundColor border-2 border-columBackgroundColor p-4 ring-rose-500 hover:ring-2 flex gap-2"
        >
          <PlusIcon />
          Add Column
        </button>
      </div>
    </div>
  );
};

export default KanbanBoard;
