import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchComponent = () => {
  const [eventos, setEventos] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedCard, setSelectedCard] = useState(null);

  const getEventos = () => {
    axios.get('http://localhost:3002/evento')
      .then((response) => {
        setEventos(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const searcher = (e) => {
    setSearch(e.target.value);
    setSelectedCard(null);
  };

  const handleVerEventoClick = (index) => {
    setSelectedCard(index);
  };

  const resetSelectedCard = () => {
    setSelectedCard(null);
  };

  const results = !search
    ? eventos
    : eventos.filter((val) => val.Lugar.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    getEventos();
  }, []);

  return (
    <div style={{ backgroundColor: '#e6f7ff', minHeight: '100vh' }}>
      <nav className="navbar navbar-expand-lg navbar-light bg-info mb-4">
        <div className="container">
          <a className="navbar-brand" href="#">
            <span style={{ fontFamily: 'cursive', fontSize: '1.5rem', fontWeight: 'bold', color: '#fff' }}>
              FunSearch!
            </span>
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <input
                  value={search}
                  onChange={searcher}
                  type="text"
                  placeholder="Buscar eventos"
                  className="form-control"
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <div className="text-center mb-4">
          <h2 style={{ fontFamily: 'cursive', fontWeight: 'bold', color: '#333' }}>
            ¡Bienvenido a FunSearch!
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#555', fontFamily: 'Arial, sans-serif' }}>
            Aquí podrás encontrar todo tipo de eventos locales o regionales, información y venta de entradas.
          </p>
        </div>
        {selectedCard !== null ? (
          <div className="row">
            <div className="col-md-12">
              <div className="card shadow">
                {results[selectedCard].Imagen && (
                  <img
                    src={results[selectedCard].Imagen}
                    className="card-img-top img-fluid"
                    alt={results[selectedCard].Nombre}
                    style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                  />
                )}
                <div className="card-body" style={{ backgroundColor: '#f8f9fa' }}>
                  <h5 className="card-title" style={{ fontFamily: 'sans-serif', fontWeight: 'bold', color: '#333' }}>
                    {results[selectedCard].Nombre}
                  </h5>
                  <p className="card-text"><strong>Lugar:</strong> {results[selectedCard].Lugar}</p>
                  <p className="card-text"><strong>Fecha:</strong> {results[selectedCard].Fecha}</p>
                  <p className="card-text"><strong>Descripción:</strong> {results[selectedCard].Descripcion}</p>
                  <p className="card-text"><strong>Organizador:</strong> {results[selectedCard].Organizador}</p>
                  <p className="card-text"><strong>Entradas:</strong> {results[selectedCard].Entradas}</p>
                  <button className="btn btn-outline-primary mt-3" onClick={resetSelectedCard}>
                    Volver a la lista
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {results.map((val, index) => (
              <div key={val._id} className="col mb-4">
                <div className="card shadow">
                  {val.Imagen && (
                    <img
                      src={val.Imagen}
                      className="card-img-top img-fluid"
                      alt={val.Nombre}
                      style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                    />
                  )}
                  <div className="card-body" style={{ backgroundColor: '#f8f9fa' }}>
                    <h5 className="card-title" style={{ fontFamily: 'sans-serif', fontWeight: 'bold', color: '#333' }}>
                      {val.Nombre}
                    </h5>
                    <p className="card-text"><strong>Lugar:</strong> {val.Lugar}</p>
                    <p className="card-text"><strong>Fecha:</strong> {val.Fecha}</p>
                    <p className="card-text"><strong>Descripción:</strong> {val.Descripcion}</p>
                    <p className="card-text"><strong>Organizador:</strong> {val.Organizador}</p>
                    <p className="card-text"><strong>Entradas:</strong> {val.Entradas}</p>
                    <button className="btn btn-primary mt-3" onClick={() => handleVerEventoClick(index)}>
                      Ver Evento
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchComponent;




