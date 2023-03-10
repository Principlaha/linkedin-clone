import React from 'react';
import './HeaderOption.css';
import { Avatar } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './features/UserSlice';

function HeaderOption({ Avatar, Icon, title, onClick }) {
    const user = useSelector(selectUser);
    return (
        <div onClick={onClick} className="headerOption">
            {Icon && <Icon className="headerOption__icon" />}
            {Avatar && (<Avatar className="headerOption__icon">{user?.email[0]}</Avatar>)}
            <h3 className="headerOption__title">{title}</h3>
        </div>
    )
}

export default HeaderOption

