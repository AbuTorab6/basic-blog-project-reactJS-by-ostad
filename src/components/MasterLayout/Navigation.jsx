import React, { Fragment, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { getPostCategories } from "../../APIServices/APIService";

const Navigation = (props) => {
  var [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      var res = await getPostCategories();
      setCategories(res);
    })();
  }, []);

  return (
    <Fragment>
      <div>
        <div className="navbar fixed top-0 z-50 shadow bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              {/* mobile menu */}
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                {categories.map((item, index) => {
                  return (
                    <li key={item.id.toString()}>
                      <NavLink to={"/byCategory/" + item.id}>
                        {item.name}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            {/* desktop view */}
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              {categories.map((item, index) => {
                return (
                  <li key={item.id.toString()}>
                    <NavLink
                      key={item.id.toString()}
                      to={"/byCategory/" + item.id}
                    >
                      {item.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="content my-content">{props.children}</div>
    </Fragment>
  );
};

export default Navigation;
