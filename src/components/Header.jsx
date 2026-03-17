import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
// Material-UI icons & components
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from '@mui/material';

import './header.css';

export default function Header() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(
    typeof window !== 'undefined' ? window.scrollY : 0
  );

  // State for mobile menu
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    let ticking = false;

    function onScroll() {
      const currentY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const delta = currentY - lastScrollY.current;

          // If near top always show
          if (currentY <= 50) {
            setVisible(true);
          } else {
            // If scrolled down more than threshold -> hide
            if (delta > 5) {
              setVisible(false);
            }
            // If scrolled up more than threshold -> show
            else if (delta < -5) {
              setVisible(true);
            }
          }

          lastScrollY.current = currentY;
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Navigation links content (reused in desktop and mobile)
  const navLinks = (
    <>
      <NavLink
        to="/Home-Vista"
        end
        className={({ isActive }) =>
          isActive ? 'nav-link active' : 'nav-link'
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/listings"
        className={({ isActive }) =>
          isActive ? 'nav-link active' : 'nav-link'
        }
      >
        Listings
      </NavLink>
      <NavLink to="/about" className="nav-link">
        About
      </NavLink>
      <NavLink to="/contact" className="nav-link">
        Contact
      </NavLink>
    </>
  );

  return (
    <header className={`site-header ${visible ? 'visible' : 'hidden'}`}>
      <div className="header-inner container">
        <div className="brand">
          <Link to="/Home-Vista" className="logo">
            {/* Added Material-UI HomeIcon next to the text */}
            <HomeIcon fontSize="large" sx={{ mr: 0.5 }} />
            HomeVista
          </Link>
          <span className="logo-sub">Real Estate Demo</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav desktop-nav">{navLinks}</nav>

        {/* Mobile Hamburger Button */}
        <div className="mobile-menu-button">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ color: 'black' }} // <-- add this line
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </div>

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }} // Better mobile performance
        >
          <div className="mobile-drawer-content">
            <List>
              <ListItem disablePadding>
                <ListItemButton
                  component={NavLink}
                  to="/Home-Vista"
                  end
                  onClick={handleDrawerToggle}
                >
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  component={NavLink}
                  to="/listings"
                  onClick={handleDrawerToggle}
                >
                  <ListItemText primary="Listings" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  component={NavLink}
                  to="/about"
                  onClick={handleDrawerToggle}
                >
                  <ListItemText primary="About" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  component={NavLink}
                  to="/contact"
                  onClick={handleDrawerToggle}
                >
                  <ListItemText primary="Contact" />
                </ListItemButton>
              </ListItem>
            </List>
          </div>
        </Drawer>
      </div>
    </header>
  );
}
