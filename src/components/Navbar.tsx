'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { NAV_ITEMS } from '@/data';

const NavbarResponsive: React.FC = () => {
    const [showOffcanvas, setShowOffcanvas] = useState<boolean>(false);
    const router = useRouter();

    const toggleOffcanvas = (cur: boolean) => {
        const menuIcon = document.getElementById('menuIcon');
        const navLinks = document.getElementById('navLinks');
        navLinks?.classList.toggle('active');
        menuIcon?.classList.toggle('active');

        setShowOffcanvas(cur);
    };

    const handleNavigation = (path: string) => {
        toggleOffcanvas(false);
        router.push(path);
    };

    return (
        <div className="main">
            <nav className="navbar">
                <div
                    style={{ marginLeft: '1rem' }}
                    onClick={() => router.push('/')}
                    className="logo"
                >
                    Srinivas.
                </div>

                <a
                    href="https://drive.google.com/uc?export=download&id=1QZhlkZRVyVi1B10Q1RtEsUxgCMZQmST-"
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
                    onClick={() => toggleOffcanvas(!showOffcanvas)}
                    className="menu-icon"
                    id="menuIcon"
                >
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>

                <ul className="nav-links" id="navLinks">
                    {NAV_ITEMS.map((item, idx) => (
                        <li key={idx}>
                            <span onClick={() => handleNavigation(item.path)} className="spans">
                                {item.icon} {/* SVG icons imported from data/home/navbar.ts */}
                                <span>{item.label}</span>
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default NavbarResponsive;
