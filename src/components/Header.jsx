
import React from 'react';
import { FaCog, FaInfo, FaSearch, FaUser, FaDollarSign, FaRegFileAlt } from 'react-icons/fa';
import { MdOutlineWindow, MdOutlineKeyboardArrowDown } from 'react-icons/md';
import '../styles/Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="left">
                <a href="/"><img src="https://cdn.create.vista.com/api/media/small/461921902/stock-vector-cemetery-grave-gravestone-icon-flat-style" alt="Logo" /></a>
                <span className="label">Grave Sites Managements</span>
            </div>
            <div className="middle">
                <span>
                    <button className='btn-maintain align-content'>
                        <MdOutlineWindow /> Maintain <MdOutlineKeyboardArrowDown />
                    </button>
                </span>
                <span className='align-content'><FaDollarSign /> Payments</span>
                <span className='align-content'><FaRegFileAlt /> Reports</span>
            </div>
            <div className="right">
                <span><FaSearch className="icon" /></span>
                <span><FaCog className="icon" /></span>
                <span><FaInfo className="icon" /></span>
                <span><FaUser className="icon" /><span> John Snow <MdOutlineKeyboardArrowDown /></span></span>
            </div>
        </header>
    );
};

export default Header;
