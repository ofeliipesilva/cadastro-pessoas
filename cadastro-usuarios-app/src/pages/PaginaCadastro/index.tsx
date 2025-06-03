import React from 'react';
import CadastroForm from '../../components/CadastroForm';
import { Box } from '@mui/material';

// Define a interface para as props da página de cadastro
interface PaginaCadastroProps {
  onAddUser: (nome: string, email: string) => void;
}

// Componente funcional para a página de cadastro
const PaginaCadastro: React.FC<PaginaCadastroProps> = ({ onAddUser }) => {
  return (
    <Box>
      <CadastroForm onAddUser={onAddUser} />
    </Box>
  );
};

export default PaginaCadastro;