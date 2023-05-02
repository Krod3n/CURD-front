import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import People from "../Model/Poeple";
import PeopleService from "../Service/PeopleService";
import ReturnButton from "../Component/ReturnButton";
import DeleteButton from "../Component/DeleteButton";

function Details(){


    const params = useParams();
  
    const [people, setPeople] = useState<People|null>(null);

    useEffect(()=> {
        PeopleService.PeopleById(Number(params.id)).then(people => setPeople(people));
    }, [params]);
    
    return(
        <><div><ReturnButton /></div><div className="flex justify-center items-center" style={{ width: "100wh", height: "100vh" }}>
            <div className="text-white text-center bg-blue-700 border border-white rounded-lg shadow hover:bg-blue-500 p-6 max-w-3xl self-center h-52 content-center">
                {people ? (
                    <>
                        <h1>ID :{people.id}</h1>
                        <h1>{people.firstname} {people.lastname}</h1>
                        <h1>{people.email} {people?.phone}</h1>
                        <DeleteButton people={people}/>
                    </>
                ) : (
                    <h1>PEOPLE NOT FOUND</h1>
                )}
            </div>
        </div></>
        
    );
}

export default Details;