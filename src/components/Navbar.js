// import required styles modules to style elments
import styles from '../styles/navbar.module.css';
import style from '../styles/sidemenu.module.css';

// import routing element to render with reloading tab
import { Link, Outlet } from "react-router-dom";

// import necessory hooks
import { useDispatch } from 'react-redux';

// import files to render side menu on collapsing
import { files } from '../assets/js/files';

// import thunkApi to run when page reload
import { DataAsyncThunk } from '../redux/reducers/NavbarReducer';

// import necessory react hooks 
import { useEffect, useRef, useState } from "react";;

// export Navbar Component
export default function Navbar() {

    // defined necessory state for Navbar
    const [show, setShow] = useState(false);
    const [color, setColor] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(true);

    // create ref using ref hook
    const btnRef = useRef();

    // create dispatch
    const dispatch = useDispatch();

    // dispatch asyncThunk on everydispatch
    useEffect(() => {
        dispatch(DataAsyncThunk());
    }, [dispatch]);

    // function to toggle SideMenu Visibility
    function toggleMenu() {
        setShow(!show);
    }

    // function to toggle tree
    const toggleTree = () => {
        setIsCollapsed(!isCollapsed);
    };

    // function to toggle menu off on clickking any other page
    const toggleMenuOff = () => {
        const button = btnRef.current;
        button.click();
    };

      // function to change logo color on hover since its not svg
    const changeLogo = (state) => {
        setColor(state);
    };

      // default function to render tree nodes
    const renderTreeNodes = (nodes) => {
        return nodes.map((node, i) => {
            return (
                node.children ? (
        // return folders to render
                    <div key={`${node.name}-${i}`}>
                        <div
                            onMouseEnter={() => changeLogo(true)}
                            onMouseLeave={() => changeLogo(false)}
                            onClick={() => toggleTree()}
                            className={`btn-selector ${style.folder}`}
                        >
                            {node.name}
                            <span className={isCollapsed ? "" : style.open}>
                                <img
                                    className={color ? style.hover : style.img}
                                    src='https://cdn-icons-png.flaticon.com/128/271/271228.png'
                                    alt="icon"
                                />
                            </span>
                        </div>
                        <div>{renderTreeNodes(node.children)}</div>
                    </div>
                ) : (
                            // return file to render
                    <Link to={node.link} className={style.navlink} key={`${node.name}-${i}`} onClick={() => toggleMenuOff()}>
                        <div className={isCollapsed ? style.treeNode : style.treeNodeVisible}>{node.name}</div>
                    </Link>
                )
            );
        });
    };

    // return Nav
    return (
        <div className={styles.body}>
            <nav className={`navbar navbar-expand-lg d-flex align-items-center rounded ${styles.navContainer}`}>
                <div className="container-fluid d-flex flex-nowrap justify-content-start w-50 me-auto m-0">
                    <button
                        className={`navbar-toggler btn-selector border ${styles.customToggler}`}
                        ref={btnRef}
                        type="button"
                        onClick={toggleMenu}
                        aria-controls="navbarSupportedContent"
                        aria-expanded={show}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`navbar-nav w-0 z-3 rounded ${style.navMenuCollapsed} ${show ? "show" : ""}`} id="navbarSupportedContent">
                        <div className={`nav-options ps-2 rounded ${style.navMenuContainer} ${show ? "d-block" : "d-none d-lg-block d-lg-none"}`}>
                            {renderTreeNodes([files])}
                        </div>
                    </div>
                    <div className={`d-flex align-items-center fs-3 ${styles.brand}`}>
                        <div className={`navbar-brand me-auto ${styles.brandLogo}`} />
                        <span className={styles.brandName}>BRAND</span>
                    </div>
                </div>
                <div className={`d-flex justify-content-around me-4 ${styles.navMenu} ${show ? "show" : ""}`} id="navbarSupportedContent">
                    <div className="mb-2 mb-lg-0">
                        <div className="nav-options mx-auto">
                            <img className={styles.menu} src="https://cdn-icons-png.flaticon.com/128/2948/2948037.png" alt="menu-icon" />
                            <img className={styles.notificationIcon} src="https://cdn-icons-png.flaticon.com/128/1827/1827347.png" alt="notification-icon" />
                            <img className={styles.profilePic} src="https://cdn-icons-png.flaticon.com/128/1177/1177568.png" alt="profile-pic" />
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    );
}
