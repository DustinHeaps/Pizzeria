import Link from "next/link";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <div className='border-b-2 border-b-orange-500 py-6'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link
          href='/'
          className='text-3xl font-bold tracking-tight text-orange-500'
        >
          Pizza.com
        </Link>
        <div className='md:hidden'>
          <MobileNav />
        </div>
        <div className='hidden md:block'>
          <MainNav />
        </div>
      </div>
    </div>
  );
};

export default Header;