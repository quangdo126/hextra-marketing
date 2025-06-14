"use client"
import React, { useEffect, useReducer, useRef } from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const initialState = {
    activeMenu: "",
    activeSubMenu: "",
    isSidebarOpen: false,
    isLeftSidebarOpen: false,
    isRightSidebar: false,
    isLang: false,
};

function reducer(state, action) {
    switch (action.type) {
        case "TOGGLE_MENU":
            return {
                ...state,
                activeMenu: state.activeMenu === action.menu ? "" : action.menu,
                activeSubMenu:
                    state.activeMenu === action.menu ? state.activeSubMenu : "",
            };
        case "TOGGLE_SUB_MENU":
            return {
                ...state,
                activeSubMenu:
                    state.activeSubMenu === action.subMenu ? "" : action.subMenu,
            };
        case "TOGGLE_SIDEBAR":
            return {
                ...state,
                isSidebarOpen: !state.isSidebarOpen,
            };
        case "setScrollY":
            return { ...state, scrollY: action.payload };
        case "TOGGLE_LEFT_SIDEBAR":
            return {
                ...state,
                isLeftSidebarOpen: !state.isLeftSidebarOpen,
            };
        case "TOGGLE_LANG":
            return {
                ...state,
                isLang: !state.isLang,
            };
        case "TOGGLE_RIGHTSIDEBAR":
            return {
                ...state,
                isRightSidebar: !state.isRightSidebar,
            };
        default:
            return state;
    }
}

const Header4 = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const headerRef = useRef(null);
    const pathname = usePathname();

    const handleScroll = () => {
        const { scrollY } = window;
        dispatch({ type: "setScrollY", payload: scrollY });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMenu = (menu) => {
        dispatch({ type: "TOGGLE_MENU", menu });
    };

    const toggleRightSidebar = () => {
        dispatch({ type: "TOGGLE_RIGHTSIDEBAR" });
    };

    const toggleSubMenu = (subMenu) => {
        dispatch({ type: "TOGGLE_SUB_MENU", subMenu });
    };

    const toggleSidebar = () => {
        console.log("click");
        dispatch({ type: "TOGGLE_MENU", menu: "" });
        dispatch({ type: "TOGGLE_SUB_MENU", subMenu: "" });
        dispatch({ type: "TOGGLE_SIDEBAR" });
    };

    const companyPaths = [
        '/about',
        '/team',
        '/social-responsibility',
    ];

    const isCompanyActive = companyPaths.some((path) => pathname.startsWith(path));

    return (
        <>
            <header className={`header-area style-4 ${pathname === "/digital-agency" || pathname === "/digital-agency-dark" ? "position-absolute" : ""} ${state.scrollY > 20 ? "sticky" : ""}`}>
                <div className="container-fluid d-flex flex-nowrap align-items-center justify-content-between">
                    <div className="company-logo">
                        <Link href="/" className="logo-dark"><img alt="image" className="img-fluid" src="/assets/img/header-logo.svg" /></Link>
                        <Link href="/" className="logo-light"><img alt="image" className="img-fluid" src="/assets/img/header-logo-white.svg" /></Link>
                    </div>
                    <div className="menu-wrap">
                        <div className={`main-menu ${state.isSidebarOpen ? "show-menu" : ""}`}>
                            <div className="mobile-logo-area d-lg-none d-flex align-items-center justify-content-between">
                                <Link href="/" className="mobile-logo-wrap">
                                    <img alt="image" className="img-fluid light" src="/assets/img/header-logo.svg" />
                                    <img alt="image" className="img-fluid dark" src="/assets/img/header-logo-white.svg" />
                                </Link>
                                <div className="menu-close-btn" onClick={toggleSidebar}>
                                    <i className="bi bi-x" />
                                </div>
                            </div>
                            <ul className="menu-list">
                                <li className={pathname === "/" ? "active" : ""}>
                                    <Link href="/">Home</Link>
                                </li>
                                <li className={`menu-item-has-children ${isCompanyActive ? "active" : ""}`}>
                                    <Link href="/" className="drop-down">Company</Link>
                                    <i onClick={() => toggleMenu("company")} className={`bi bi-${state.activeMenu === "company" ? "dash" : "plus"} dropdown-icon`} />
                                    <ul className={`sub-menu ${state.activeMenu === "company" ? "d-block" : "none"}`} >
                                        <li className={pathname === "/about" ? "active" : ""}><Link href="/about">About Us</Link></li>
                                        <li className={pathname === "/team" ? "active" : ""}><Link href="/team">Our Team</Link></li>
                                        <li className={pathname === "/social-responsibility" ? "active" : ""}><Link href="/social-responsibility">Social Responsibility</Link></li>
                                    </ul>
                                </li>
                                <li className={`menu-item-has-children position-inherit ${pathname === "/industry/details" ? "active" : ""}`}>
                                    <Link href="/service" className="drop-down">Solution
                                    </Link>
                                    <i onClick={() => toggleMenu("solution")} className={`bi bi-${state.activeMenu === "solution" ? "dash" : "plus"} dropdown-icon`} />
                                    <div className={`mega-menu2 ${state.activeMenu === "solution" ? "d-block" : "none"}`} >
                                        <div className="container">
                                            <div className="row align-items-lg-end justify-content-between">
                                                <div className="col-xl-7 col-lg-8">
                                                    <div className="title-area">
                                                        <h2>Challenge We Tackle</h2>
                                                        <div className="icon">
                                                            <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <ul className="menu-row">
                                                        <li className="menu-single-item">
                                                            <div className="menu-title">
                                                                <h6>
                                                                    <svg width={17} height={12} viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
                                                                        <circle cx={6} cy={6} r="5.5" />
                                                                        <circle cx={11} cy={6} r="5.5" />
                                                                    </svg>
                                                                    Smart Solutions
                                                                </h6>
                                                            </div>
                                                            <ul>
                                                                <li>
                                                                    <Link href="/service/details">
                                                                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15v3c0 .5523.44772 1 1 1h8v-8m-9 4v-4m0 4h9m-9-4V6c0-.55228.44772-1 1-1h16c.5523 0 1 .44772 1 1v4M3 11h11m6.25 5c0 1.2426-1.0073 2.25-2.25 2.25M20.25 16c0-1.2426-1.0073-2.25-2.25-2.25M20.25 16H21m-3 2.25c-1.2426 0-2.25-1.0074-2.25-2.25M18 18.25V19m-2.25-3c0-1.2426 1.0074-2.25 2.25-2.25M15.75 16H15m3-2.25V13m-1.591 1.409-.5303-.5303m4.2426 4.2426-.5303-.5303m-3.182 0-.5303.5303m4.2426-4.2426-.5303.5303"/>
                                                                        </svg>
                                                                        Hexcore All-In-One App
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/service/details">
                                                                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                                            <path fill-rule="evenodd" d="M12 8a1 1 0 0 0-1 1v10H9a1 1 0 1 0 0 2h11a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-8Zm4 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" clip-rule="evenodd"/>
                                                                            <path fill-rule="evenodd" d="M5 3a2 2 0 0 0-2 2v6h6V9a3 3 0 0 1 3-3h8c.35 0 .687.06 1 .17V5a2 2 0 0 0-2-2H5Zm4 10H3v2a2 2 0 0 0 2 2h4v-4Z" clip-rule="evenodd"/>
                                                                        </svg>
                                                                        Website Design
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/service/details">
                                                                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4.5V19a1 1 0 0 0 1 1h15M7 14l4-4 4 4 5-5m0 0h-3.207M20 9v3.207"/>
                                                                        </svg>
                                                                        Digital Marketing
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/service/details">
                                                                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                                            <path fill-rule="evenodd" d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z" clip-rule="evenodd"/>
                                                                        </svg>
                                                                        Branding & Identity
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/service/details">
                                                                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                                            <path fill-rule="evenodd" d="M8 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1h2a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2Zm6 1h-4v2H9a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2h-1V4Zm-6 8a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z" clip-rule="evenodd"/>
                                                                        </svg>
                                                                        Content Creation & Strategy
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/service/details">
                                                                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                                            <path fill-rule="evenodd" d="M3 4a1 1 0 0 0-.822 1.57L6.632 12l-4.454 6.43A1 1 0 0 0 3 20h13.153a1 1 0 0 0 .822-.43l4.847-7a1 1 0 0 0 0-1.14l-4.847-7a1 1 0 0 0-.822-.43H3Z" clip-rule="evenodd"/>
                                                                        </svg>
                                                                        Marketing Automation
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/service/details">
                                                                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
                                                                        </svg>
                                                                        Reputation Boosting
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu-single-item">
                                                            <div className="menu-title">
                                                                <h6>
                                                                    <svg width={17} height={12} viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
                                                                        <circle cx={6} cy={6} r="5.5" />
                                                                        <circle cx={11} cy={6} r="5.5" />
                                                                    </svg>
                                                                    Industries Cover
                                                                </h6>
                                                            </div>
                                                            <ul>
                                                                <li><Link href="/industry/details">Nail Salon</Link></li>
                                                                <li><Link href="/industry/details">Hair Salon</Link></li>
                                                                <li><Link href="/industry/details">Beauty Salon</Link></li>
                                                                <li><Link href="/industry/details">Restaurant</Link></li>
                                                                <li><Link href="/industry/details">Real Estate Agent</Link></li>
                                                                <li><Link href="/industry/details">Insurance Agent</Link></li>
                                                                <li>
                                                                    <Link href="/industry" className="all-btn">
                                                                        View All Industries
                                                                        <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                                        </svg>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="solution-menu-banner">
                                                        <div className="banner-content">
                                                            <h3>We have Dynamic Team Members that Easily Solve Problem.</h3>
                                                            <Link href="/contact" className="primary-btn1">
                                                                <span>Let’s Talk
                                                                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                                    </svg>
                                                                </span>
                                                                <span>Let’s Talk
                                                                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                                    </svg>
                                                                </span>
                                                            </Link>
                                                        </div>
                                                        <div className="banner-img">
                                                            <img src="/assets/img/home1/solution-menu-banner-img.png" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className={pathname === "/pricing" ? "active" : ""}>
                                    <Link href="/pricing">Pricing Plan</Link>
                                </li>
                                <li className="menu-item-has-children position-inherit">
                                    <a href="/" className="drop-down">Resources</a>
                                    <i onClick={() => toggleMenu("resources")} className={`bi bi-${state.activeMenu === "resources" ? "dash" : "plus"} dropdown-icon`} />
                                    <div className={`mega-menu2 two ${state.activeMenu === "resources" ? "d-block" : "none"}`}>
                                        <div className="container">
                                            <div className="row align-items-lg-end justify-content-between">
                                                <div className="col-xl-6 col-lg-7 d-lg-block d-none">
                                                    <div className="title-area">
                                                        <h2>Innovative Thinking</h2>
                                                        <div className="icon">
                                                            <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div className="menu-blog-card">
                                                                <Link href="/news-blog/details" className="blog-img">
                                                                    <img src="/assets/img/home1/menu-blog-img1.jpg" alt="" />
                                                                </Link>
                                                                <div className="blog-content">
                                                                    <ul className="blog-meta">
                                                                        <li>
                                                                            <Link href="/news-blog">
                                                                                <svg width={8} height={8} viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
                                                                                    <g>
                                                                                        <path d="M0.800781 8V0L7.20078 4L0.800781 8Z" />
                                                                                    </g>
                                                                                </svg>
                                                                                IT Strategy
                                                                            </Link>
                                                                        </li>
                                                                        <li className="blog-date">
                                                                            <Link href="/news-blog">
                                                                                03 Nov, 2024
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                    <h5><Link href="/news-blog/details">Revamping Brand Identity Success Story.</Link></h5>
                                                                    <Link href="/news-blog/details" className="read-more-btn">
                                                                        Read More
                                                                        <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                                        </svg>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="menu-blog-card">
                                                                <Link href="/news-blog/details" className="blog-img">
                                                                    <img src="/assets/img/home1/menu-blog-img2.jpg" alt="" />
                                                                </Link>
                                                                <div className="blog-content">
                                                                    <ul className="blog-meta">
                                                                        <li>
                                                                            <Link href="/news-blog">
                                                                                <svg width={8} height={8} viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
                                                                                    <g>
                                                                                        <path d="M0.800781 8V0L7.20078 4L0.800781 8Z" />
                                                                                    </g>
                                                                                </svg>
                                                                                Design Trends
                                                                            </Link>
                                                                        </li>
                                                                        <li className="blog-date">
                                                                            <Link href="/news-blog">
                                                                                15 Nov, 2024
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                    <h5><Link href="/news-blog/details">Cloud Infrastructure for Rapid Growth.</Link></h5>
                                                                    <Link href="/news-blog/details" className="read-more-btn">
                                                                        Read More
                                                                        <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                                        </svg>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <ul className="menu-row">
                                                        <li className="menu-single-item">
                                                            <div className="menu-title">
                                                                <h6>
                                                                    <svg width={17} height={12} viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
                                                                        <circle cx={6} cy={6} r="5.5" />
                                                                        <circle cx={11} cy={6} r="5.5" />
                                                                    </svg>
                                                                    Innovative Case
                                                                </h6>
                                                            </div>
                                                            <ul>
                                                                <li>
                                                                    <Link href="/news-blog">
                                                                        <span>
                                                                            <svg width={19} height={14} viewBox="0 0 19 14" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M1.5 1C1.5 0.723858 1.27614 0.5 1 0.5C0.723858 0.5 0.5 0.723858 0.5 1H1.5ZM19 11L14 8.11325V13.8868L19 11ZM0.5 1V6H1.5V1H0.5ZM6 11.5H14.5V10.5H6V11.5ZM0.5 6C0.5 9.03757 2.96243 11.5 6 11.5V10.5C3.51472 10.5 1.5 8.48528 1.5 6H0.5Z" />
                                                                            </svg>
                                                                            News & Blog
                                                                        </span>
                                                                        <div className="arrow">
                                                                            <svg width={7} height={9} viewBox="0 0 7 9" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M0 7.29015V1.70985C0 0.945021 0.823658 0.463308 1.49026 0.838272L6.45053 3.62842C7.13018 4.01073 7.13018 4.98927 6.45053 5.37158L1.49026 8.16173C0.823657 8.53669 0 8.05498 0 7.29015Z" />
                                                                            </svg>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/case-study">
                                                                        <span>
                                                                            <svg width={19} height={14} viewBox="0 0 19 14" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M1.5 1C1.5 0.723858 1.27614 0.5 1 0.5C0.723858 0.5 0.5 0.723858 0.5 1H1.5ZM19 11L14 8.11325V13.8868L19 11ZM0.5 1V6H1.5V1H0.5ZM6 11.5H14.5V10.5H6V11.5ZM0.5 6C0.5 9.03757 2.96243 11.5 6 11.5V10.5C3.51472 10.5 1.5 8.48528 1.5 6H0.5Z" />
                                                                            </svg>
                                                                            Case Study
                                                                        </span>
                                                                        <div className="arrow">
                                                                            <svg width={7} height={9} viewBox="0 0 7 9" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M0 7.29015V1.70985C0 0.945021 0.823658 0.463308 1.49026 0.838272L6.45053 3.62842C7.13018 4.01073 7.13018 4.98927 6.45053 5.37158L1.49026 8.16173C0.823657 8.53669 0 8.05498 0 7.29015Z" />
                                                                            </svg>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <span>
                                                                            <svg width={19} height={14} viewBox="0 0 19 14" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M1.5 1C1.5 0.723858 1.27614 0.5 1 0.5C0.723858 0.5 0.5 0.723858 0.5 1H1.5ZM19 11L14 8.11325V13.8868L19 11ZM0.5 1V6H1.5V1H0.5ZM6 11.5H14.5V10.5H6V11.5ZM0.5 6C0.5 9.03757 2.96243 11.5 6 11.5V10.5C3.51472 10.5 1.5 8.48528 1.5 6H0.5Z" />
                                                                            </svg>
                                                                            Documentation
                                                                        </span>
                                                                        <div className="arrow">
                                                                            <svg width={7} height={9} viewBox="0 0 7 9" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M0 7.29015V1.70985C0 0.945021 0.823658 0.463308 1.49026 0.838272L6.45053 3.62842C7.13018 4.01073 7.13018 4.98927 6.45053 5.37158L1.49026 8.16173C0.823657 8.53669 0 8.05498 0 7.29015Z" />
                                                                            </svg>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <span>
                                                                            <svg width={19} height={14} viewBox="0 0 19 14" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M1.5 1C1.5 0.723858 1.27614 0.5 1 0.5C0.723858 0.5 0.5 0.723858 0.5 1H1.5ZM19 11L14 8.11325V13.8868L19 11ZM0.5 1V6H1.5V1H0.5ZM6 11.5H14.5V10.5H6V11.5ZM0.5 6C0.5 9.03757 2.96243 11.5 6 11.5V10.5C3.51472 10.5 1.5 8.48528 1.5 6H0.5Z" />
                                                                            </svg>
                                                                            Privacy Policy
                                                                        </span>
                                                                        <div className="arrow">
                                                                            <svg width={7} height={9} viewBox="0 0 7 9" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M0 7.29015V1.70985C0 0.945021 0.823658 0.463308 1.49026 0.838272L6.45053 3.62842C7.13018 4.01073 7.13018 4.98927 6.45053 5.37158L1.49026 8.16173C0.823657 8.53669 0 8.05498 0 7.29015Z" />
                                                                            </svg>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <span>
                                                                            <svg width={19} height={14} viewBox="0 0 19 14" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M1.5 1C1.5 0.723858 1.27614 0.5 1 0.5C0.723858 0.5 0.5 0.723858 0.5 1H1.5ZM19 11L14 8.11325V13.8868L19 11ZM0.5 1V6H1.5V1H0.5ZM6 11.5H14.5V10.5H6V11.5ZM0.5 6C0.5 9.03757 2.96243 11.5 6 11.5V10.5C3.51472 10.5 1.5 8.48528 1.5 6H0.5Z" />
                                                                            </svg>
                                                                            Terms & Condition
                                                                        </span>
                                                                        <div className="arrow">
                                                                            <svg width={7} height={9} viewBox="0 0 7 9" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M0 7.29015V1.70985C0 0.945021 0.823658 0.463308 1.49026 0.838272L6.45053 3.62842C7.13018 4.01073 7.13018 4.98927 6.45053 5.37158L1.49026 8.16173C0.823657 8.53669 0 8.05498 0 7.29015Z" />
                                                                            </svg>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <a href="#" className="conference-btn">
                                                        Conference Summit - 2024
                                                        <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className={pathname === "/contact" ? "active" : ""}>
                                    <Link href="/contact">Contact Us</Link>
                                </li>
                            </ul>
                            <div className="btn-and-contact-area d-lg-none d-block">
                                <Link href="/contact" className="primary-btn4">
                                    <span className="icon">
                                        <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    </span>
                                    <span className="content">Let’s Talk</span>
                                    <span className="icon two">
                                        <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="nav-right">
                            <div className="contact-area d-lg-flex d-none">
                                <div className="icon">
                                    <img src="/assets/img/home4/icon/support-icon.svg" alt="" />
                                </div>
                                <div className="content">
                                    <span>Our Support</span>
                                    <h6><a href="tel:(346) 214-6888">(346) 214-6888 </a></h6>
                                </div>
                            </div>
                            <Link href="/contact" className="primary-btn4 d-lg-flex d-none">
                                <span className="icon">
                                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </span>
                                <span className="content">Let’s Talk</span>
                                <span className="icon two">
                                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </span>
                            </Link>
                            <div className="sidebar-button mobile-menu-btn" onClick={toggleSidebar}>
                                <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.29445 2.8421H10.5237C11.2389 2.8421 11.8182 2.2062 11.8182 1.42105C11.8182 0.635903 11.2389 0 10.5237 0H1.29445C0.579249 0 0 0.635903 0 1.42105C0 2.2062 0.579249 2.8421 1.29445 2.8421Z" />
                                    <path d="M1.23002 10.421H18.77C19.4496 10.421 20 9.78506 20 8.99991C20 8.21476 19.4496 7.57886 18.77 7.57886H1.23002C0.550421 7.57886 0 8.21476 0 8.99991C0 9.78506 0.550421 10.421 1.23002 10.421Z" />
                                    <path d="M18.8052 15.1579H10.2858C9.62563 15.1579 9.09094 15.7938 9.09094 16.5789C9.09094 17.3641 9.62563 18 10.2858 18H18.8052C19.4653 18 20 17.3641 20 16.5789C20 15.7938 19.4653 15.1579 18.8052 15.1579Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header4