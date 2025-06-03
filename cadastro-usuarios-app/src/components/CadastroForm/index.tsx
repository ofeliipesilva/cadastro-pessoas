import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

// Define a interface para as props que o componente receberá
interface CadastroFormProps {
  // Função a ser chamada quando um novo usuário for adicionado
  onAddUser: (nome: string, email: string) => void;
}

// Componente funcional CadastroForm
const CadastroForm: React.FC<CadastroFormProps> = ({ onAddUser }) => {
  // Estados locais para armazenar os valores dos campos de nome e email
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  // Estado para feedback ao usuário
  const [mensagem, setMensagem] = useState('');

  // Função chamada ao submeter o formulário
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Previne o comportamento padrão de recarregar a página

    // Validação simples
    if (!nome || !email) {
      setMensagem('Por favor, preencha todos os campos.');
      return;
    }
    if (!email.includes('@')) {
        setMensagem('Por favor, insira um email válido.');
        return;
    }

    // Chama a função recebida por props para adicionar o usuário
    onAddUser(nome, email);

    // Limpa os campos do formulário após o envio
    setNome('');
    setEmail('');
    setMensagem('Usuário cadastrado com sucesso!');

    // Limpa a mensagem após alguns segundos
    setTimeout(() => setMensagem(''), 3000);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: '400px',
        margin: 'auto',
        padding: 3,
        border: '1px solid #ccc',
        borderRadius: '8px',
        marginTop: 4,
      }}
    >
      <Typography variant="h5" component="h2" gutterBottom>
        Cadastro de Usuário
      </Typography>
      <TextField
        label="Nome"
        variant="outlined"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        fullWidth
        required
      />
      <TextField
        label="Email"
        variant="outlined"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
      {mensagem && (
        <Typography color={mensagem.includes('sucesso') ? 'green' : 'error'}>
          {mensagem}
        </Typography>
      )}
    </Box>
  );
};

export default CadastroForm;