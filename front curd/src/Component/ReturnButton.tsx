import { useNavigate } from "react-router-dom"

function ReturnButton() {

    const navige = useNavigate();

    const returnPage = () => {
        navige(`/`);
    }

  return (
    <div className="p-2">
       <button className=" rounded-lg bg-cyan-400 p-1 text-center text-white font-bold" onClick={returnPage}>Return</button>
    </div>
  )
}

export default ReturnButton