import axios from "axios"
import { useState, useEffect } from 'react';
import { Button, Modal, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Clientes() {

  const [clientes, setClientes] = useState([])
  const [endereco, setEndereco] = useState()

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios.get("http://localhost:3001/clientes").then((clientes) => {
      console.log(clientes)
      setClientes(clientes.data);
    })
  }, []);


  return (
    <div className="clientes container mt-5">
      <div className="d-flex justify-content-between align-items-center">
        <h1>Clientes</h1>
        <Button as={Link} to="/clientes/novo">Adicionar cliente</Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Endereço</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => {
            return (
              <tr key={cliente.id}>
                <td>{cliente.id}</td>
                <td>{cliente.nome}</td>
                <td>{cliente.email}</td>
                <td>{cliente.telefone}</td>
                <td><Button size="sm" onClick={() => {
                  setEndereco(cliente.endereco);
                  handleShow()
                }}>Ver</Button></td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      {endereco &&
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Endereço do cliente</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table striped bordered hover>
              <p>Id: {endereco.id}</p>
              <p>Cep: {endereco.cep}</p>
              <p>Uf: {endereco.uf}</p>
              <p>Cidade: {endereco.cidade}</p>
              <p>Rua: {endereco.rua}</p>
              <p>Numero: {endereco.numero}</p>
            </Table>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Fechar</Button>
          </Modal.Footer>
        </Modal>
      }

    </div>
  );
};