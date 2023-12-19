
import { NavLink, Outlet } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import BackSidebar from './BackSidebar.css'
import AddMenu from "../BackPages/AddMenu";
import SidebarMenu from "./SidebarMenu";
import CreatOrder from "../BackPages/CreatOrder";
import AddCaregory from "../BackPages/AddCaregory";
import EditCategory from "../BackPages/EditCategory";
import Dashboard from '../BackPages/Dashboard';


const routes = [
  {
    path: "",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/order",
    name: "Order",
    icon: <BsCartCheck />,
    subRoutes: [
      {
        path: "CreatOrder",
        name: "Creat Order ",
        icon: <FaUser />,
      },
      {
        path: "All-Order",
        name: " All Order",
        icon: <BsCartCheck />,
      },
      {
        path: "CustomerOrder",
        name: " Customer Order",
        icon: <BsCartCheck />,
      },
     
    ],
  },
  {
    path: "/menu",
    name: "Menu",
    icon: <FaUser />,
    subRoutes: [
      {
        path: "add-menu",
        name: "Add Menu ",
        icon: <FaUser />,
      },
      {
        path: "AllMenu",
        name: "All Menu",
        icon: <BsCartCheck />,
      },
    ],
  },
  {
    path: "/category",
    name: "Category",
    icon: <MdMessage />,
    subRoutes: [
      {
        path: "AddCaregory",
        name: "Add Category ",
        icon: <FaUser />,
      },
      {
        path: "AllCategory",
        name: " All Category",
        icon: <BsCartCheck />,
      },
      {
        path: "EditCategory",
        name: "Edit Category",
        icon: <BsCartCheck />,
      },
     
    ],
  },
  {
    path: "/analytics",
    name: "Analytics",
    icon: <BiAnalyse />,
  },
  {
    path: "/file-manager",
    name: "File Manager",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Profile ",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
      {
        path: "/settings/billing",
        name: "Billing",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/settings",
    name: "Settings",
    icon: <BiCog />,
    exact: true,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Profile ",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
      {
        path: "/settings/billing",
        name: "Billing",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/saved",
    name: "Saved",
    icon: <AiFillHeart />,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "160px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "250px" : "55px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  Md. Alamin
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main><Outlet/></main>
      </div>
    </>
  );
};

export default SideBar;