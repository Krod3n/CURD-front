import React from 'react'
import { useNavigate } from 'react-router-dom';
import PeopleService from '../Service/PeopleService';
import People from './../Model/Poeple';

type Props ={
  people: People;
 }

function DeleteButton({people}: Props) {
  


    const navige = useNavigate();

    const onDelete = (people:People) => {
        PeopleService.deletePeople(people).then(()=> navige(`/`))
    }

  return (
    <div className="p-2">
       <button className=" rounded-lg bg-red-400 p-1 text-center text-white font-bold" onClick={()=> onDelete(people)}>Delete</button>
    </div>
  )
}
export default DeleteButton