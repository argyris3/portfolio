import Link from 'next/link';

const NavLink = ({ href, title }) => {
  return (
    <Link href={href} className="block py-2 pl-3 pr-4 text-slate-500 hover:text-orange-700 md:p-0 sm:text-xl rounded">
      {title}
    </Link>
  );
};

export default NavLink;
