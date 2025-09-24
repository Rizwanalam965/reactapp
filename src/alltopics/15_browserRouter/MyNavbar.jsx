import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <nav className="bg-blue-500 flex justify-between px-5 py-4 items-center text-white">
      <div className="font-semibold  text-2xl">Browser-Router</div>

      <section className="flex list-none gap-5">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
        
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </section>
    </nav>
  );
};

export default MyNavbar;
