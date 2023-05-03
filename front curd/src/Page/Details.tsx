import { useEffect, useState } from "react";
import People from "../Model/Poeple";
import PeopleService from "../Service/PeopleService";
import ReturnButton from "../Component/ReturnButton";
import DeleteButton from "../Component/DeleteButton";
import { useParams } from "react-router-dom";
import EditButton from "../Component/EditButton";
import Line from "../Component/Line";

function Details() {
  const params = useParams();

  const [people, setPeople] = useState<People | null>(null);

  useEffect(() => {
    PeopleService.PeopleById(Number(params.id)).then((people) =>
      setPeople(people)
    );
  }, [params]);

  return (
    <>
      <div>
        <ReturnButton />
      </div>
      <div
        className="flex justify-center items-center"
        style={{ width: "100wh", height: "100vh" }}
      >
        <div className="text-white text-center bg-blue-700 border border-white rounded-lg shadow hover:bg-blue-500 p-6 max-w-3xl self-center h-53 content-center">
          {people ? (
            <>
              <h1>ID :{people.id}</h1>
              <Line/>
              <h1>
                {people.firstname} {people.lastname}
              </h1>
              <h1>{people.email}</h1>
              <h1>{people.country}</h1>
              <h1>{people?.phone}</h1>
              <Line/>
              <div className="grid lg:grid-cols-2 sm:grid-cols-2 justify-around">
                <DeleteButton people={people} />
                <EditButton people={people} />
              </div>
            </>
          ) : (
            <h1>PEOPLE NOT FOUND</h1>
          )}
        </div>
      </div>
    </>
  );
}

export default Details;
