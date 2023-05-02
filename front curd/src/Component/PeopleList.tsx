import React, { useEffect, useState } from 'react'
import People from '../Model/Poeple';
import Card from './Card';
import PeopleService from '../Service/PeopleService';

function PeopleList() {
    const[peoples, setPeoples] = useState<People[]>([]);

    useEffect(() => {
      PeopleService.GetPeople().then((peoples) => setPeoples(peoples));
    }, []);

    return(
      <div>
        <div className='grid lg:grid-cols-4 sm:grid-cols-2 '>
          {peoples.map((people)=> (
            <Card people={people}/>
          ))}
        </div>
      </div>

    );
          }
export default PeopleList