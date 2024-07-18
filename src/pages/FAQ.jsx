import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: "¿Cómo puedo registrarme?",
      answer: "Para registrarte, haz clic en el botón de 'Registrarse' en la parte superior derecha y completa el formulario."
    },
    {
      question: "¿Cuál es el costo del servicio?",
      answer: "El costo del servicio varía según el plan que elijas. Consulta nuestra página de precios para más detalles."
    },
    {
      question: "¿Cómo puedo contactar con soporte?",
      answer: "Puedes contactar con soporte a través del formulario de contacto en nuestra página o enviando un correo a soporte@ejemplo.com."
    },
    {
      question: "¿Puedo cambiar mi plan después de registrarme?",
      answer: "Sí, puedes cambiar tu plan en cualquier momento desde tu cuenta. Solo ve a la sección de 'Planes y Facturación' y selecciona el nuevo plan que deseas."
    },
    {
      question: "¿Ofrecen algún periodo de prueba gratuito?",
      answer: "Sí, ofrecemos un periodo de prueba gratuito de 14 días para que puedas probar nuestro servicio antes de comprometerte con un plan de pago."
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos varias formas de pago, incluyendo tarjetas de crédito, PayPal y transferencias bancarias."
    },
    {
      question: "¿Cómo puedo cancelar mi suscripción?",
      answer: "Puedes cancelar tu suscripción en cualquier momento desde la configuración de tu cuenta. Una vez cancelada, no se te cobrará en el próximo ciclo de facturación."
    },
    {
      question: "¿Mis datos están seguros?",
      answer: "Sí, nos tomamos muy en serio la seguridad de tus datos. Utilizamos protocolos de seguridad avanzados para garantizar que tu información esté protegida."
    }
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <h1>Preguntas Frecuentes</h1>
      <div className="faq-container">
        {questions.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              {item.question}
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
