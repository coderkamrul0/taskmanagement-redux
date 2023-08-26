import { useForm } from "react-hook-form";
import MOdal from "../ui/Modal";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit,reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    onCancel();
  };

  const onCancel = () => {
    reset();
    setIsOpen(!isOpen)
  }

  return (
    <MOdal isOpen={isOpen} setIsOpen={setIsOpen} title={"Task Information"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mb-5">
          <label className="mb-2" htmlFor="title">
            Title
          </label>
          <input type="text" id="title" {...register("title")} />
        </div>
        <div className="flex flex-col mb-5">
          <label className="mb-2" htmlFor="description">
            Description
          </label>
          <input type="text" id="description" {...register("description")} />
        </div>
        <div className="flex flex-col mb-5">
          <label className="mb-2" htmlFor="date">
            Deadline
          </label>
          <input type="date" id="date" {...register("date")} />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="assignedTo">Assign to</label>
          <select
            className="w-full rounded-md"
            id="assignedTo"
            {...register("assignedTo")}
          >
            <option value="john_doe">John Doe</option>
            <option value="jane_smith">Jane Smith</option>
            <option value="alex_wang">Alex Wang</option>
            <option value="emily_jones">Emily Jones</option>
            <option value="michael_johnson">Michael Johnson</option>
            <option value="sara_rodriguez">Sara Rodriguez</option>
            <option value="david_li">David Li</option>
            <option value="olivia_kim">Olivia Kim</option>
            <option value="william_wilson">William Wilson</option>
            <option value="ava_miller">Ava Miller</option>
          </select>
        </div>
        <div className="flex flex-col mb-5">
          <label className="mb-2" htmlFor="priority">
            Priority
          </label>
          <select
            className="w-full rounded-md"
            id="priority"
            {...register("priority")}
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <div className="flex gap-3 justify-end">
          <button type="button" className="btn btn-danger" onClick={()=>onCancel()}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </MOdal>
  );
};

export default AddTaskModal;
