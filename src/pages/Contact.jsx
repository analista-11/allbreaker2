import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    projectDescription: '',
    startDate: '',
    endDate: '',
    budget: '',
    contactPreference: '',
    references: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="contact-page">
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1>Contáctanos</h1>
          <p>Por favor, llena el siguiente formulario con la información requerida y nos pondremos en contacto contigo lo antes posible.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input type="text" name="name" placeholder="Nombre completo" onChange={handleChange} required />
              <input type="email" name="email" placeholder="Correo electrónico" onChange={handleChange} required />
            </div>
            <div className="form-row">
              <input type="tel" name="phone" placeholder="Número de teléfono" onChange={handleChange} />
              <input type="text" name="company" placeholder="Empresa/Organización" onChange={handleChange} />
            </div>
            <div className="form-row">
              <input type="text" name="projectType" placeholder="Tipo de proyecto" onChange={handleChange} />
              <input className="date-input" type="date" name="startDate" placeholder="Día de inicio" onChange={handleChange} required />
              <input className="date-input" type="date" name="endDate" placeholder="Día de finalización" onChange={handleChange} required />
            </div>
            
            <div className="form-row">
              <input type="number" name="budget" placeholder="Presupuesto estimado" onChange={handleChange} />
              <select name="contactPreference" onChange={handleChange}>
                <option value="">Preferencia de contacto</option>
                <option value="email">Correo</option>
                <option value="phone">Teléfono</option>
              </select>
            </div>
            <textarea name="projectDescription" placeholder="Descripción del proyecto" onChange={handleChange} required />
            <textarea name="references" placeholder="Referencias o ejemplos" onChange={handleChange} />
            <button type="submit">Enviar</button>
          </form>
        </div>
        <div className="contact-right">
        </div>
      </div>
    </div>
  );
};

export default Contact;
