import React from 'react';
import { AppBar, Tabs, Tab, Box, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

// Componente funcional para o cabeçalho/navegação
const Header: React.FC = () => {
  // useLocation hook para saber a rota atual e destacar a aba correta
  const location = useLocation();

  // Determina o valor da aba ativa com base na rota atual
  const currentTab = location.pathname === '/dados' ? 1 : 0;

  return (
    <AppBar position="static">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingX: 2 }}>
        <Typography variant="h6" component="div">
          Cadastro App
        </Typography>
        <Tabs
          value={currentTab}
          textColor="inherit"
          indicatorColor="secondary"
          aria-label="abas de navegação"
        >
          <Tab
            label="Cadastro"
            component={Link}
            to="/cadastro"
            value={0}
          />
          <Tab
            label="Dados Cadastrados"
            component={Link}
            to="/dados"
            value={1}
          />
        </Tabs>
      </Box>
    </AppBar>
  );
};

export default Header;