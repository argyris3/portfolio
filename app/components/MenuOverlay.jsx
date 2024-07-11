import NavLink from './NavLink';

const MenuOverlay = ({ links }) => {
  return (
    <ul className="md:hidden py-4 items-center flex flex-col">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};
export default MenuOverlay;
