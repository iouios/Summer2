import { Link } from "react-router-dom";
import { RiBroadcastLine } from "react-icons/ri";
const SidebarFix=()=> {
  return (
    <>
      <div className="w-[20vw] min-h-screen flex flex-col text-cyan-700 fixed">
        <ul>
          <li className="flex flex-row w-full">
            <Link to="/" className="px-3">
              <RiBroadcastLine className="" />
              BroadCast
            </Link>
          </li>
          <hr />
          <li className="flex flex-row w-full">
            <Link to="/" className="px-3">
              <RiBroadcastLine className="" />
              Template
            </Link>
          </li>
          <hr />
          <li className="flex flex-row w-full">
            <Link to="/" className="px-3">
              <RiBroadcastLine className="" />
              Transection
            </Link>
          </li>
          <hr />
          <li className="flex flex-row w-full">
            <Link to="/" className="px-3">
              <RiBroadcastLine className="" />
              Customers
            </Link>
          </li>
          <hr />
          <li className="flex flex-row w-full">
            <Link to="/" className="px-3">
              <RiBroadcastLine className="" />
              Admins
            </Link>
          </li>
          <hr />
        </ul>
      </div>
    </>
  );
}
export default SidebarFix;
