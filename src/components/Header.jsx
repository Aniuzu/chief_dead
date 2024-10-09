import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-slate-200 drop-shadow-sm shadow-md '>
        <div className='flex justify-between  items-center max-w-6xl mx-auto p-3'>
            <Link to='/'>
        <h1 className='font-bold text-sm sm:text-xl flex flexwrap'>
            <span className='text-slate-500'>Deadman</span>
            <span className='text-slate-700'>Dev</span>
        </h1>
        </Link>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center w-24 sm:w-64'>
            <input  type='text' className='bg-transparent focus:outline-none' placeholder='Please search...'/>
            <FaSearch className='text-slate-600 ' />
        </form>
        <ul className='flex gap-4'>
            <li className='hidden sm:inline hover:underline text-slate-700'> <Link to='/'>Home</Link></li>
            <li className='hidden sm:inline hover:underline text-slate-700'> <Link to='/about'>About</Link></li>
            <li className='hover:underline text-slate-700'> <Link to='/sign-in'>Sign in</Link></li>
        </ul>
        </div>
    </header>
  )
}
