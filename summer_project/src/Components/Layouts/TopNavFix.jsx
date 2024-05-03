import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";
import { useState } from "react";
export default function TopNavFix() {
    const [condition,setCondition] = useState(false)
    function updateButton(condition){
        if(condition){
            return "hidden"
        }else{
            return ""
        }
    }
    function handleClick(){
        if(condition){
            setCondition(false)
            return
        }else{
            setCondition(true)
            return
        }
    }
  return (
    <>
      <nav className="fixed m-0 p-5 bg-gray-800 flex justify-between flex-row w-screen">
        <div className="flex flex-col">
            <h1>TEMPLATE</h1>
            <a href="#"><h1 className="text-xl font-bold">Broadcast</h1></a>
        </div>
        <div className="flex flex-row">
            <button onClick={()=>handleClick()} className={`${updateButton(condition)}`}><FaSearch /></button>
            <input className={`${condition===true ? "":"hidden"}`} type="text" />
            <FaBell />
            <FaUserCircle />
        </div>
      </nav>
    </>
  );
}
