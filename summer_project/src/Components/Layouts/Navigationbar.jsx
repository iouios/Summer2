import { RiBroadcastLine } from "react-icons/ri";
import { GoRepoTemplate } from "react-icons/go";
import { HiOutlineArrowsRightLeft } from "react-icons/hi2";
import { IoPeople } from "react-icons/io5";
import { IoPeopleCircleSharp } from "react-icons/io5";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavigationBar = () => {
    return (
        <div>
            <aside className="w-64 text-cyan-700 fixed h-full px-4 py-2 mt-16 border-r-2">
                <ul className='mt-3 text-cyan-700 font-bold'>
                    <li className='my-2 rounded hover:shadow hover:bg-gray-300 py-2'>
                        <Link to='' className='px-3'>
                            <RiBroadcastLine className='inline-block w-6 h-6 mr-2 -mt-2 '/>
                            BroadCast
                        </Link>
                    </li>
                    <hr />
                    <li className='my-2 rounded hover:shadow hover:bg-gray-300 py-2'>
                        <Link to='' className='px-3'>
                            <GoRepoTemplate className='inline-block w-6 h-6 mr-2 -mt-2 ' />
                            <span><Link to='/Template'>Template</Link></span>
                        </Link>
                    </li>
                    <hr />
                    <li className='my-2 rounded hover:shadow hover:bg-gray-300 py-2'>
                        <Link to='' className='px-3'>
                            <HiOutlineArrowsRightLeft className='inline-block w-6 h-6 mr-2 -mt-2 '/>
                            Transection
                        </Link>
                    </li>
                    <hr />
                    <li className='my-2 rounded hover:shadow hover:bg-gray-300 py-2'>
                        <Link to='' className='px-3'>
                            <IoPeople className='inline-block w-6 h-6 mr-2 -mt-2 '/>
                            Customers
                        </Link>
                    </li>
                    <hr />
                    <li className='my-2 rounded hover:shadow hover:bg-gray-300 py-2'>
                        <Link to='' className='px-3'>
                            <IoPeopleCircleSharp className='inline-block w-6 h-6 mr-2 -mt-2 '/>
                            Admins
                        </Link>
                    </li>
                    <hr />
                </ul>
            </aside>
            <nav className="fixed top-0 right-0 left-0 bg-gray-800 px-4 py-3 flex justify-between">
                <div className='my-3 mb-4 ml-3 text-white font-bold'>
                    <h1 className="text">BroadCast</h1>
                </div>
                <hr /> 
                <div className='flex items-center gap-x-5'>
                    <div className='relative md:w-65'>
                        <span className='relative md:absolute insert-y-0 left-0 flex items-center pl-2'>
                            <button className='p-1 focus:outline-none text-white md:text-black'><FaSearch/></button>
                        </span>
                        <input type="text" className='w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:block'/>
                    </div>
                    <div className='text-white'><FaBell className='w-6 h-6'/></div>
                    <div className='relative'>
                        <button className='text-white group'>
                            <FaUserCircle className='w-6 h-6 mt-1'/>
                            <div className='z-10 hidden absolute bg-white rouded-lg shadow w-32 group-focus:block top-full right-0'>
                                <ul className='py-2 text-sm text-gray-950'>
                                    <li><Link to=''>Profile</Link></li>
                                    <li><Link to=''>Setting</Link></li>
                                    <li><Link to=''>Log out</Link></li>
                                </ul>
                            </div>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavigationBar;
