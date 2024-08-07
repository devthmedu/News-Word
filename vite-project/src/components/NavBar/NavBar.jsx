import React, { useState, useRef, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  InputBase,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  AccountCircle,
  Close as CloseIcon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const ProfileDropDown = ({ className }) => {
  const [open, setOpen] = useState(false);
  const profileRef = useRef(null);

  const navigation = [
    { title: 'Dashboard', path: '/dashboard' },
    { title: 'Settings', path: '/settings' },
    { title: 'Log out', path: '/logout' },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className={`relative ${className}`}>
      <div className="flex items-center space-x-4">
        <IconButton
          ref={profileRef}
          onClick={() => setOpen(!open)}
          className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2"
        >
          <img
            src="https://randomuser.me/api/portraits/men/46.jpg"
            alt="Profile"
            className="w-full h-full rounded-full"
          />
        </IconButton>
        <div className="hidden lg:block">
          <span className="block">Micheal John</span>
          <span className="block text-sm text-gray-500">john@gmail.com</span>
        </div>
      </div>
      <Menu
        anchorEl={profileRef.current}
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          style: {
            top: '60px',
            right: 0,
            width: '200px',
          },
        }}
      >
        {navigation.map((item, idx) => (
          <MenuItem key={idx} component={Link} to={item.path}>
            {item.title}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const navigation = [
    { title: 'Customers', path: '/customers' },
    { title: 'Careers', path: '/careers' },
    { title: 'Guides', path: '/guides' },
    { title: 'Partners', path: '/partners' },
  ];

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <img
              src="https://www.floatui.com/logo.svg"
              alt="Logo"
              style={{ width: 120, height: 'auto' }}
            />
          </Link>
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={() => setMobileMenuOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={mobileMenuOpen}
              onClose={() => setMobileMenuOpen(false)}
            >
              <Box
                sx={{
                  width: 250,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <IconButton
                  edge="end"
                  color="inherit"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <CloseIcon />
                </IconButton>
                <List>
                  {navigation.map((item, idx) => (
                    <ListItem button key={idx} component={Link} to={item.path}>
                      <ListItemText primary={item.title} />
                    </ListItem>
                  ))}
                </List>
                <ProfileDropDown className="mt-auto" />
              </Box>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Box sx={{ display: 'flex', flexGrow: 1, gap: 2 }}>
              {navigation.map((item, idx) => (
                <Button
                  key={idx}
                  component={Link}
                  to={item.path}
                  color="inherit"
                >
                  {item.title}
                </Button>
              ))}
            </Box>
            <ProfileDropDown className="ml-4" />
          </Box>
        )}

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            ml: 'auto',
          }}
        >
          <form
            noValidate
            autoComplete="off"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <IconButton aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              placeholder="Search"
              inputProps={{ 'aria-label': 'search' }}
              sx={{ ml: 1, flex: 1 }}
            />
          </form>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
