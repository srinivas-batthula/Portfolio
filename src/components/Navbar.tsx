'use client';

import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { NAV_ITEMS, RESUME_LINK } from '@/data';

const NavbarResponsive: React.FC = () => {
    const [showOffcanvas, setShowOffcanvas] = useState<boolean>(false);
    // const router = useRouter();

    // const toggleOffcanvas = (cur: boolean) => {
    //     const menuIcon = document.getElementById('menuIcon');
    //     const navLinks = document.getElementById('navLinks');
    //     navLinks?.classList.toggle('active');
    //     menuIcon?.classList.toggle('active');

    //     setShowOffcanvas(cur);
    // };

    // const handleNavigation = (path: string) => {
    //     toggleOffcanvas(false);
    //     router.push(path);
    // };

    return (
        <div className="main">
            <nav className="navbar">
                <Link                                       // <div>
                    style={{ marginLeft: '1rem' }}
                    // onClick={() => router.push('/')}
                    href="/"
                    className="logo"
                >
                    Srinivas.
                </Link>

                <a
                    href={RESUME_LINK} // 'RESUME_LINK' from `data/home/navbar.ts`...
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="custom-btn resume-download"
                >
                    Resume{' '}
                    <i
                        className="fa-solid fa-download"
                        style={{
                            textAlign: 'center',
                            fontSize: '0.8rem',
                            paddingTop: '0.6rem',
                            marginLeft: '0.1rem',
                        }}
                    ></i>
                </a>

                <div
                    onClick={() => setShowOffcanvas(!showOffcanvas)}
                    className={`menu-icon ${showOffcanvas ? "active" : ""}`}
                    id="menuIcon"
                >
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>

                <ul className={`nav-links ${showOffcanvas ? "active" : ""}`} id="navLinks">
                    {NAV_ITEMS.map((item, idx) => (
                        <li key={idx}>
                            <Link href={item.path} onClick={() => setShowOffcanvas(false)} className="spans">    {/* <span>  &&  onClick={() => handleNavigation(item.path)} */}
                                {item.icon} {/* SVG icons imported from data/home/navbar.ts */}
                                <span>{item.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default NavbarResponsive;
