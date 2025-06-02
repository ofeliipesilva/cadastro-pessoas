import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CssBaseline, Container } from '@mui/material';

import Header from './components/Header';
import PaginaCadastro from './pages/PaginaCadastro';
import PaginaDados from './pages/PaginaDados';

// Define a interface para a estrutura de um usuário
interface Usuario {
  id: string;
  nome: string;
  email: string;
}

// Chave usada para armazenar/recuperar dados no Local Storage
const LOCAL_STORAGE_KEY = 'usuariosCadastrados';

function App() {
  // Estado para armazenar a lista de usuários.
  // A inicialização agora tenta carregar do Local Storage.
  const [usuarios, setUsuarios] = useState<Usuario[]>(() => {
    // Função de inicialização para ler do Local Storage apenas uma vez
    try {
      const dadosSalvos = localStorage.getItem(LOCAL_STORAGE_KEY);
      // Se existirem dados salvos, parseia o JSON, senão retorna array vazio
      return dadosSalvos ? JSON.parse(dadosSalvos) : [];
    } catch (error) {
      console.error("Erro ao carregar usuários do Local Storage:", error);
      // Em caso de erro (ex: JSON inválido), retorna array vazio
      return [];
    }
  });

  // useEffect para SALVAR os usuários no Local Storage SEMPRE que o estado 'usuarios' mudar
  useEffect(() => {
    try {
      // Converte o array de usuários para uma string JSON e salva
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(usuarios));
      console.log("Usuários salvos no Local Storage:", usuarios);
    } catch (error) {
      console.error("Erro ao salvar usuários no Local Storage:", error);
    }
    // A dependência [usuarios] garante que este efeito rode sempre que 'usuarios' for atualizado
  }, [usuarios]);

  // Função para adicionar um novo usuário à lista
  const handleAddUser = (nome: string, email: string) => {
    const novoUsuario: Usuario = {
      id: Date.now().toString(), // ID simples
      nome: nome,
      email: email,
    };

    // Atualiza o estado 'usuarios'. O useEffect acima cuidará de salvar no Local Storage.
    setUsuarios(prevUsuarios => [...prevUsuarios, novoUsuario]);
  };

  return (
    <BrowserRouter>
      <CssBaseline />
      <Header />
      <Container sx={{ marginTop: 4 }}>
        <Routes>
          <Route path="/" element={<Navigate to="/cadastro" replace />} />
          <Route
            path="/cadastro"
            element={<PaginaCadastro onAddUser={handleAddUser} />}
          />
          <Route
            path="/dados"
            element={<PaginaDados usuarios={usuarios} />}
          />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;