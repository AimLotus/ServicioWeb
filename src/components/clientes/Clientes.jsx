import React, { useState } from 'react';
import './clientes.css';

function App() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [resultado, setResultado] = useState('');
  const [clientes, setClientes] = useState([]);

  const publicarCliente = () => {
    // Verificar si se proporcionaron datos
    if (!nombre || !correo || !telefono) {
      setResultado('Por favor, completa todos los campos.');
      return;
    }

    // Datos del cliente a ser publicados (en formato JSON)
    const nuevoCliente = {
      nombre: nombre,
      correo: correo,
      telefono: telefono,
      id: clientes.length + 1 // Asignar un ID único
    };

    // Actualizar el estado de clientes con el nuevo cliente
    setClientes([...clientes, nuevoCliente]);

    // Limpiar los campos del formulario después de la publicación
    setNombre('');
    setCorreo('');
    setTelefono('');

    // Actualizar el estado para mostrar el mensaje de éxito
    setResultado('Cliente publicado exitosamente.');
  };

  return (
    <div>
      <h1>Aplicación de Publicación de Clientes</h1>

      {/* Formulario de entrada de datos */}
      <label htmlFor="nombre">Nombre:</label>
      <input type="text" id="nombre" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />

      <label htmlFor="correo">Correo:</label>
      <input type="text" id="correo" placeholder="Correo" value={correo} onChange={(e) => setCorreo(e.target.value)} />

      <label htmlFor="telefono">Teléfono:</label>
      <input type="text" id="telefono" placeholder="Teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />

      {/* Botón para publicar cliente */}
      <button onClick={publicarCliente}>Publicar Cliente</button>

      {/* Elemento para mostrar resultados */}
      <div id="resultado">{resultado}</div>

      {/* Mostrar la lista de clientes en filas */}
      <h2>Lista de Clientes</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map(cliente => (
            <tr key={cliente.id}>
              <td>{cliente.id}</td>
              <td>{cliente.nombre}</td>
              <td>{cliente.correo}</td>
              <td>{cliente.telefono}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
