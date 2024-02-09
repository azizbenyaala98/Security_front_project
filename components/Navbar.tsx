import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between  p-4 ">
      <Link href="/"
         className="font-bold text-lg">
      </Link>
      <div className="flex items-center gap-4">
        <Link href="/signup"
           className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-700">Sign Up
        </Link>
        <Link href="/signin"
          className="px-4 py-2 rounded-md border border-blue-500 hover:border-blue-700">Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
