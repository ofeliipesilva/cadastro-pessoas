import React from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';

// Define a interface para a estrutura de um usuário
interface Usuario {
  id: string;
  nome: string;
  email: string;
}

// Define a interface para as props que o componente ListaUsuarios receberá
interface ListaUsuariosProps {
  usuarios: Usuario[]; // Um array de objetos Usuario
}

// Componente funcional ListaUsuarios
const ListaUsuarios: React.FC<ListaUsuariosProps> = ({ usuarios }) => {
  return (
    <Box sx={{ padding: 3, maxWidth: '800px', margin: 'auto', marginTop: 4 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Usuários Cadastrados
      </Typography>
      {usuarios.length === 0 ? (
        <Typography>Nenhum usuário cadastrado ainda.</Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="tabela de usuários cadastrados">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Nome</TableCell>
                <TableCell>Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {usuarios.map((usuario) => (
                <TableRow
                  key={usuario.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {usuario.id}
                  </TableCell>
                  <TableCell>{usuario.nome}</TableCell>
                  <TableCell>{usuario.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default ListaUsuarios;