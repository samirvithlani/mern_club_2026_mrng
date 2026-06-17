import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "nav-link text-warning font-weight-bold"
                    : "nav-link text-light"
                }
                to="/movies"
              >
                Movies
              </NavLink>
            </li>
            <li class="nav-item active">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "nav-link text-warning font-weight-bold"
                    : "nav-link text-light"
                }
                to="/shows"
              >
                Shows
              </NavLink>
            </li>
            <li class="nav-item active">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "nav-link text-warning font-weight-bold"
                    : "nav-link text-light"
                }
                to="/teams"
              >
                Teams
              </NavLink>
            </li>
            <li class="nav-item active">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "nav-link text-warning font-weight-bold"
                    : "nav-link text-light"
                }
                to="/questions"
              >
                questions
              </NavLink>
            </li>
             <li class="nav-item active">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "nav-link text-warning font-weight-bold"
                    : "nav-link text-light"
                }
                to="/funcall"
              >
                fun call
              </NavLink>
            </li>
            <li class="nav-item active">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "nav-link text-warning font-weight-bold"
                    : "nav-link text-light"
                }
                to="/usestatedemo1"
              >
                usestatedemo1
              </NavLink>
            </li>
            <li class="nav-item active">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "nav-link text-warning font-weight-bold"
                    : "nav-link text-light"
                }
                to="/usestatedemo2"
              >
                usestatedemo2
              </NavLink>
            </li>
            <li class="nav-item active">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "nav-link text-warning font-weight-bold"
                    : "nav-link text-light"
                }
                to="/employees"
              >
                employees
              </NavLink>
            </li>
            <li class="nav-item active">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "nav-link text-warning font-weight-bold"
                    : "nav-link text-light"
                }
                to="/tabledemo"
              >
                table demo
              </NavLink>
            </li>
            <li class="nav-item active">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "nav-link text-warning font-weight-bold"
                    : "nav-link text-light"
                }
                to="/tabledemo2"
              >
                table demo 2
              </NavLink>
            </li>
            
            
          </ul>
        </div>
      </nav>
    </div>
  );
};
