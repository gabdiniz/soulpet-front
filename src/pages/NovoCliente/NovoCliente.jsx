import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap"; import axios from "axios";
import { Link } from "react-router-dom";

export function NovoCliente() {

  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    axios.post("http://localhost:3001/clientes", data)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error)
      });
  }

  return (
    <div className="novo-cliente container mt-5">
      <div className="d-flex justify-content-between align-items-center">
        <h1>Adicionar cliente</h1>
        <Button as={Link} to="/clientes">Clientes</Button>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>

        <Form.Group className="mb-3">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" {...register("nome", { require: true })} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" {...register("email", { require: true })} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Telefone</Form.Label>
          <Form.Control type="tel" {...register("telefone", { require: true })} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Cidade</Form.Label>
          <Form.Control type="text" {...register("endereco.cidade", { require: true })} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>UF</Form.Label>
          <Form.Control type="text" {...register("endereco.uf", { require: true })} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>CEP</Form.Label>
          <Form.Control type="text" {...register("endereco.cep", { require: true })} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Rua</Form.Label>
          <Form.Control type="text" {...register("endereco.rua", { require: true })} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Numero</Form.Label>
          <Form.Control type="text" {...register("endereco.numero", { require: true })} />
        </Form.Group>

        <Button variant="primary" type="submit">Cadastrar</Button>
      </Form>
    </div>
  );
};