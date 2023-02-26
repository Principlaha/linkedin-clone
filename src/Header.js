import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from "./HeaderOption";
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './features/UserSlice';
import { auth } from './firebase';
import { selectUser } from './features/UserSlice';

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut();
  }

    return (
        <div className="header">
            <div className="header__left">
            <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt=""/>


              <div className="header__search">
                <SearchIcon />
                <input placeholder="search" type="text" />
              </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationImportantIcon} title="Notifications"/>
                <HeaderOption Avatar={AccountBoxIcon} title="you" onClick={logoutOfApp} />
            </div>
        </div>
    )
}

export default Header
