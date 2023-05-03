import { useNavigate } from "react-router-dom"

function ReturnButton() {

    const navige = useNavigate();

    const returnPage = () => {
        navige(`/`);
    }

  return (
    <div className="p-2 text-white">
       <button className="border hover:border-blue-500 p-1 rounded w-24 hover:bg-blue-700 bg-blue-500" onClick={returnPage}>Return</button>
    </div>
  )
}

export default ReturnButton