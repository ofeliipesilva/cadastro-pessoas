import React from 'react';
import ListaUsuarios from '../../components/ListaUsuarios';
import { Box } from '@mui/material';

// Define a interface para a estrutura de um usuário
interface Usuario {
  id: string;
  nome: string;
  email: string;
}

// Define a interface para as props da página de dados
interface PaginaDadosProps {
  usuarios: Usuario[];
}

// Componente funcional para a página de visualização de dados
const PaginaDados: React.FC<PaginaDadosProps> = ({ usuarios }) => {
  return (
    <Box>
      <ListaUsuarios usuarios={usuarios} />
    </Box>
  );
};

export default PaginaDados;