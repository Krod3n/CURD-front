import { useState } from "react";
import People from "../Model/Poeple";
import PeopleService from "../Service/PeopleService";
import { Link } from "react-router-dom";

export default function Search() {
  const [term, setTerm] = useState<string>("");
  const [peoples, setPeoples] = useState<People[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const term = e.target.value;
    setTerm(term);

    if (term.length <= 0) {
      setPeoples([]);
      return;
    }

    PeopleService.searchPeople(term).then((peoples) => setPeoples(peoples));
  };

  return (
    <div className="p-6 flex justify-center items-center">
      <div>
        <input
          className="p-3 w-96 rounded-lg border"
          type="search"
          placeholder="Rechercher une personne"
          value={term}
          onChange={(e) => handleInputChange(e)}
        />
        <div>
          {peoples.map((people) => (
            <Link key={people.id} to={`/details/${people.id}`}>
              <p className="hover:text-lg ml-3">
                {people.lastname} {people.firstname} - {people.country}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
