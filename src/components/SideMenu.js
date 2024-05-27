// import styles from style modules
import styles from '../styles/sidemenu.module.css';

// import outlet to change dom without reloading tab
import { Link, Outlet } from "react-router-dom";

// import hook for state
import { useState } from 'react';

export default function SideMenu({ files }){

  // defined necessory state for the sideMenu
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [color, setColor] = useState(false);
  const [active, setActive] = useState("/");

  // function to toggle tree
  const toggleTree = () => {
    setIsCollapsed(!isCollapsed);
  }

  // function to change logo color on hover since its not svg
  const changeLogo = (state) => {
    setColor(state);
  }

  // function to highlight active menu tab
  const handleActive = (link) => {
    setActive(link);
  }

  // default function to render tree nodes
  const renderTreeNodes = (nodes) => {
    return nodes.map((node, i) => {
      // return folders to render
      return (
          node.children?
          <div key={`${node.name}-${i}`}>
            <div 
              onMouseEnter={() => changeLogo(true)} 
              onMouseLeave={() => changeLogo(false)} 
              onClick={() => toggleTree()} 
              className={styles.folder}
            >
              <p className='me-4 my-auto'>{node.name}</p>
              <span className={isCollapsed ? "" : styles.open}>
                <img 
                  className={color ? styles.hover : styles.img} 
                  src='https://cdn-icons-png.flaticon.com/128/271/271228.png'
                  alt='icon'
                />
              </span>
            </div>
            <div>{renderTreeNodes(node.children)}</div>
          </div>
        :
          <Link to={node.link} key={`${node.link}-${i}`} className={styles.navlink}>
            <div 
              onClick={() => handleActive(node.link)}  
              className={isCollapsed ? styles.treeNode : (active === node.link ? styles.ActiveTreeNodeVisible : styles.treeNodeVisible)}
            >
              {node.name}
            </div>
          </Link>
        );
      })}

  return (
    // return render part
    <>
      <div className="d-flex h-100">
        <div className={`col-md-3 d-none rounded  d-lg-block ${styles.sideMenuContainer}`}>
          {renderTreeNodes([files])}
        </div>
        <Outlet />
      </div>
    </>
  );
}
