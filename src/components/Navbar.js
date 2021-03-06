import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow py-4 px-8 flex flex-row justify-between items-center">
      <div>
        <img src={logo} className="h-8" alt="" />
      </div>
      <div className="hidden lg:block">
        <ul className="font-bold flex flex-row gap-8">
          <li className="cursor-pointer">Find A Match</li>
          <li className="cursor-pointer">Dog's Personalities</li>
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Contact Us</li>
          <li className="flex flex-col justify-center items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="svg-inline--fa fa-search w-4"
              data-icon="search"
              data-prefix="fas"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
              ></path>
            </svg>
          </li>
        </ul>
      </div>
      <div className="lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="svg-inline--fa fa-bars w-8"
          data-icon="bars"
          data-prefix="fas"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
