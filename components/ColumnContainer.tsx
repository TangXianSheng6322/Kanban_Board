import { DeleteIcon } from "../icons/DeleteIcon";
import { Column, Id } from "../types";

interface Props {
  column: Column;
  deleteColumn: (id: Id) => void;
}
export const ColumnContainer = (props: Props) => {
  const { column, deleteColumn } = props;
  return (
    <div className="bg-columBackgroundColor w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col">
      {/* Column title */}
      <div className="bg-mainBackgroundColor text-md h-[60px] cursor-grab rounded-md rounded-b-none p-3 font-bold border-columBackgroundColor border-4 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="flex justify-center items-center bg-columBackgroundColor px-2 py-1 text-sm rounded-full">
            0
          </div>
          {column.title}
        </div>{" "}
        <button
          onClick={() => {
            deleteColumn(column.id);
          }}
          className="stroke-gray-500 hover:stroke-white hover:bg-columBackgroundColor rounded px-1 py-2"
        >
          <DeleteIcon />
        </button>
      </div>

      {/* Column task container */}
      <div className="flex flex-grow">Content</div>
      {/* Column footer */}
      <div>Footer</div>
    </div>
  );
};
