import { useNavigate } from "react-router-dom";
import PeopleService from "../Service/PeopleService";
import People from "./../Model/Poeple";

type Props = {
  people: People;
};

function DeleteButton({ people }: Props) {
  const navigate = useNavigate();

  const onDelete = (people: People) => {
    PeopleService.deletePeople(people).then(() => navigate(`/`));
  };

  return (
    <div className="p-2">
      <button
        className="border hover:border-blue-500 p-1 rounded w-24 hover:bg-blue-700 bg-blue-500"
        onClick={() => onDelete(people)}
      >
        Delete
      </button>
    </div>
  );
}
export default DeleteButton;
