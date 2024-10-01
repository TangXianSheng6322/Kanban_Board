import { useEffect, useRef, useState } from "react";
import { DeleteIcon } from "../icons/DeleteIcon";
import { Id, Task } from "../types";

interface Props {
  task: Task;
  deleteTask: (id: Id) => void;
  updateTask: (id: Id, content: string) => void;
}

const TaskCard = ({ task, deleteTask, updateTask }: Props) => {
  const [mouseIsOver, setMouseIsOver] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
    setMouseIsOver(false);
  };

  //It worked finally, I only had to put ref attribute in text area
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // inputRef.current?.focus();
    textAreaRef.current?.select();
  }, [editMode]);
  // oooooooooo

  if (editMode) {
    return (
      <div className="bg-mainBackgroundColor p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-rose-500 cursor-grab relative">
        <textarea
          className="h-[90%] w-full resize-none border-none rounded bg-transparent text-white focus:outline-none"
          value={task.content}
          ref={textAreaRef}
          autoFocus
          onBlur={toggleEditMode}
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.shiftKey) {
              toggleEditMode();
            }
          }}
          onChange={(e) => updateTask(task.id, e.target.value)}
        ></textarea>
      </div>
    );
  }

  return (
    <div
      className="bg-mainBackgroundColor p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-rose-500 cursor-grab relative"
      onClick={toggleEditMode}
      onMouseEnter={() => {
        setMouseIsOver(true);
      }}
      onMouseLeave={() => {
        setMouseIsOver(false);
      }}
    >
      <p className="my-auto h-[90%] w-full overflow-x-auto overflow-y-auto whitespace-pre-wrap">
        {task.content}
      </p>
      {mouseIsOver && (
        <button
          className="stroke-white absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-columBackgroundColor rounded opacity-60 hover:opacity-100"
          onClick={() => {
            deleteTask(task.id);
          }}
        >
          <DeleteIcon />
        </button>
      )}
    </div>
  );
};

export default TaskCard;
