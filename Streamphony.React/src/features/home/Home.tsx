import { useState } from 'react';
import Box from '@mui/material/Box';
import HomeAppBar from './components/HomeAppBar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import { Main } from './styles/MainStyle';
import { DrawerHeader } from './styles/DrawerHeaderStyle';
import { Helmet } from 'react-helmet-async';
import { appTitle } from '../../shared/constants';

const drawerWidth = 240;

const Home = () => {
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>{appTitle}</title>
        <meta
          name="description"
          content="Home page of the music streaming app"
        />
      </Helmet>

      <Box
        sx={{
          display: 'flex',
          bgcolor: 'background.default',
        }}
      >
        <HomeAppBar
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          drawerWidth={drawerWidth}
        />

        <Sidebar
          open={open}
          handleDrawerClose={handleDrawerClose}
          drawerWidth={drawerWidth}
        />

        <Main open={open} drawerWidth={drawerWidth}>
          <DrawerHeader />
          <Feed />
        </Main>
      </Box>
    </>
  );
};

export default Home;