import { Navigate, useNavigate, useNavigation } from 'react-router-dom';

function Card(props :any) {
 const {people} = props;

 const navige = useNavigate();

const detailPeople = () => {
    navige(`/details/${people.id}`);
}

  return (
<div className='p-6 text-white text-center bg-blue-700 border border-white rounded-lg shadow hover:bg-blue-500 hover:scale-105 m-4' onClick={detailPeople}>
    <p>{people.firstname} {people.lastname}</p>
    <p>{people.phone}</p>
    <p>{people.email}</p>
</div>
  )
}

export default Card