import { Link } from "react-router-dom";

const Create = () => {
  return (
    <div className="text-center text-white p-2">
      <Link to={"/add"} className="border hover:border-blue-500 p-1 rounded w-24 hover:bg-blue-700 bg-blue-500 p-2">
        Create people
      </Link>
    </div>
  );
};

export default Create;
