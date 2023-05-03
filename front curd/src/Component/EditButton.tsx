import { useNavigate} from 'react-router-dom';
import People from '../Model/Poeple';
import PeopleService from '../Service/PeopleService';

type Props = {
    people: People;
  };
 
function EditButton({ people }: Props) {
  
      
        const navigate = useNavigate();
            
        const onEdit =(people: People) => {
          PeopleService.updatePeople(people).then(() => navigate(`/add/edit/${people.id}`));
        };
      
        return (
          <div className="p-2">
            <button
                  className="border hover:border-blue-500 p-1 rounded w-24 hover:bg-blue-700 bg-blue-500"
                  onClick={() => onEdit(people)}>
                  Modifier
                </button>
          </div>
        );
      }
export default EditButton