import React, { useEffect, useState } from 'react';
import logo from '../../assets/Logo/logo.webp';
import navbarLinks from '../../data/navbarLinks';
import { Link, matchPath, useNavigate } from 'react-router-dom';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import { useLocation } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineLogin, AiOutlineHome, AiOutlineContacts } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { GiHamburgerMenu } from 'react-icons/gi';
import HamburgerMenu from './HamburgerMenu';
import { VscDashboard, VscSignOut, VscSignIn } from 'react-icons/vsc';
import { logout } from '../../services/operations/authServices';
import { BiCategory, BiDetail } from 'react-icons/bi';
import { getAllCategories } from '../../services/operations/otherServices';
import { getCurrentUser } from '../../services/operations/profileServices';
import { setLoading } from '../../redux/slices/authSlice';
import { FiPhoneCall } from 'react-icons/fi';

const Navbar = () => {
  const { token, loading } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { cartItemsCount } = useSelector((state) => state.cart);
  const [loading2, setLoading2] = useState(true);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [catalogs, setCatalogs] = useState([]);
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  useEffect(() => {
    const fetchCatalog = async () => {
      const toastId = toast.loading('Loading Backend ...');
      const result = await getAllCategories();
      if (result) {
        setCatalogs(result);
      } else {
        toast.error('Failed to load backend');
      }
      toast.dismiss(toastId);
      setLoading2(false);
    };
    fetchCatalog();
  }, []);

  useEffect(() => {
    const getCurrentUserDetails = async () => {
      dispatch(setLoading(true));
      if (token) {
        await getCurrentUser(token, dispatch, navigate);
      }
      dispatch(setLoading(false));
    };
    getCurrentUserDetails();
  }, [token, dispatch, navigate]);

  const matchRoute = (linkPath) => {
    if (linkPath === '/') return matchPath({ path: linkPath }, location.pathname);
    return location.pathname.startsWith(linkPath);
  };

  const handleLogOutClick = async (e) => {
    setIsMenuModalOpen(false);
    await logout(token, dispatch, navigate);
  };

  return (
    <div className='bg-richblack-900 border-b border-b-richblack-700 h-14'>
      <div className='w-11/12 h-14 mx-auto max-w-maxContent flex flex-row items-center justify-between'>
        {/* Logo */}
        <div>
          <Link to={'/'}>
            <img src={logo} width={60} height={10} loading='lazy' alt='logo' />
          </Link>
        </div>

        {/* Nav Links */}
        <div>
          <nav className='hidden md:block'>
            <ul className='flex gap-x-10 text-richblack-25'>
              {navbarLinks.map((link, ind) => (
                <li key={ind}>
                  {link.title === 'Services' ? <li>
      <a href="#pricing">Services</a> {/* Will scroll to the Pricing section */}
    </li> : (
                    <Link to={link?.path}>
                      <p className={`${matchRoute(link?.path) ? 'text-yellow-25' : 'text-richblack-25'}`}>
                        {link.title}
                      </p>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Login / SignUp / DashBoard / Cart */}
        <div className='flex items-center gap-2 text-white font-semibold'>
          <FiPhoneCall className='text-yellow-400 text-lg' />
          <span>+1 940 808 1569</span>
        </div>

        {/* HamberBurger Menu - only for small screen */}
        <div className='mr-4 md:hidden'>
          <GiHamburgerMenu
            onClick={() => setIsMenuModalOpen((prev) => !prev)}
            className={`fill-richblack-100`}
            fontSize={24}
          />

          <HamburgerMenu isMenuModalOpen={isMenuModalOpen} setIsMenuModalOpen={setIsMenuModalOpen}>
            <div className='flex flex-col gap-y-2 py-5 px-5'>
              {(loading || loading2) && <div className='text-white font-bold'>Loading ...</div>}

              {token === null && (
                <Link to={'/login'} onClick={() => setIsMenuModalOpen(false)}>
                  <div className='flex gap-x-2 items-center w-full py-2 px-3 text-richblack-100 hover:text-richblack-25 hover:bg-richblack-700'>
                    <VscSignIn className='text-lg' />
                    Log In
                  </div>
                </Link>
              )}

              {token === null && (
                <Link to={'/signup'} onClick={() => setIsMenuModalOpen(false)}>
                  <div className='flex gap-x-2 items-center w-full py-2 px-3 text-richblack-100 hover:text-richblack-25 hover:bg-richblack-700'>
                    <AiOutlineLogin className='text-lg' />
                    Sign Up
                  </div>
                </Link>
              )}

              {token !== null && (
                <Link to={'/dashboard/my-profile'} onClick={() => setIsMenuModalOpen(false)}>
                  <div className='flex gap-x-2 items-center w-full py-2 px-3 text-richblack-100 hover:text-richblack-25 hover:bg-richblack-700'>
                    <VscDashboard className='text-lg' />
                    Dashboard
                  </div>
                </Link>
              )}

              {token !== null && user && user?.role === 'Student' && (
                <Link to={'/dashboard/cart'} onClick={() => setIsMenuModalOpen(false)}>
                  <div className='flex gap-x-2 items-center w-full py-2 px-3 text-richblack-100 hover:text-richblack-25 hover:bg-richblack-700'>
                    <AiOutlineShoppingCart className='text-lg' />
                    Cart
                  </div>
                </Link>
              )}

              {token !== null && (
                <div
                  className='flex gap-x-2 items-center w-full py-2 px-3 text-richblack-100 hover:text-richblack-25 hover:bg-richblack-700 cursor-pointer'
                  onClick={handleLogOutClick}
                >
                  <VscSignOut className='text-lg' />
                  LogOut
                </div>
              )}

              {/* General Buttons */}
              <div className='h-[1px] my-2 bg-richblack-100 w-3/4 mx-auto'></div>

              <Link to={'/'} onClick={() => setIsMenuModalOpen(false)}>
                <div className='flex gap-x-2 items-center w-full py-2 px-3 text-richblack-100 hover:text-richblack-25 hover:bg-richblack-700'>
                  <AiOutlineHome className='text-lg' />
                  Home
                </div>
              </Link>

              <Link to={'/about'} onClick={() => setIsMenuModalOpen(false)}>
                <div className='flex gap-x-2 items-center w-full py-2 px-3 text-richblack-100 hover:text-richblack-25 hover:bg-richblack-700'>
                  <BiDetail className='text-lg' />
                  About Us
                </div>
              </Link>

              <Link to={'/contact'} onClick={() => setIsMenuModalOpen(false)}>
                <div className='flex gap-x-2 items-center w-full py-2 px-3 text-richblack-100 hover:text-richblack-25 hover:bg-richblack-700'>
                  <AiOutlineContacts className='text-lg' />
                  Contact Us
                </div>
              </Link>

              {/* Category */}
              <div className='' onClick={() => setCategoryOpen((prev) => !prev)}>
                <details>
                  <summary className='flex gap-x-2 items-center w-full py-2 px-3 text-richblack-100'>
                    <BiCategory className='text-lg' />
                    Category
                    {categoryOpen ? <SlArrowUp className='translate-y-[1px] ml-auto mr-1' /> : <SlArrowDown className='translate-y-[1px] ml-auto mr-1' />}
                  </summary>

                  <div className='px-4 text-richblack-100'>
                    {catalogs.length ? (
                      <div className='flex flex-col capitalize'>
                        {catalogs.map((catalog, index) => (
                          <Link to={`/categorycourses/${catalog.name.split(' ').join('-')}`} key={index} onClick={() => setIsMenuModalOpen(false)}>
                            <p className='rounded-lg py-2 pl-4'>{catalog.name}</p>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <div className='rounded-lg py-2 pl-4 select-none cursor-not-allowed'>No Catalog Available</div>
                    )}
                  </div>
                </details>
              </div>
            </div>
          </HamburgerMenu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
