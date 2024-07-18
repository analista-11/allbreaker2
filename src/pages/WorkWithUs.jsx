import React, { useState } from 'react';
import './WorkWithUs.css';

const WorkWithUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    resume: '',
    coverLetter: '',
    skills: '',
    comments: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="work-page">
      <div className="container-wrapper">
        <div className="left-container">
          <h1>Trabaja con Nosotros</h1>
          <p className="subtitle">Únete a nuestro equipo y comparte tus habilidades con nosotros.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input type="text" name="name" placeholder="Nombre completo" onChange={handleChange} required />
              <input type="email" name="email" placeholder="Correo electrónico" onChange={handleChange} required />
            </div>
            <div className="form-row">
              <input type="tel" name="phone" placeholder="Número de teléfono" onChange={handleChange} />
              <input type="text" name="position" placeholder="Posición deseada" onChange={handleChange} required />
            </div>
            <div className="form-row">
              <textarea name="skills" placeholder="Habilidades" onChange={handleChange} required />
              <textarea name="comments" placeholder="Comentarios adicionales" onChange={handleChange} />
            </div>
            <div className="form-row">
              <input type="file" name="resume" accept=".pdf,.doc,.docx" onChange={handleChange} required />
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
        <div className="right-container">
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs;
