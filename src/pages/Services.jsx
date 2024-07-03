import React, { useEffect } from 'react';
import './Services.css';
import serviceImage1 from '../assets/serviceImage1.png';
import serviceImage2 from '../assets/serviceImage2.png';
import serviceImage3 from '../assets/serviceImage3.png';
import carrusel1 from '../assets/carrouselServices/carrusel-1.png';
import carrusel2 from '../assets/carrouselServices/carrusel-2.jpg';
import carrusel3 from '../assets/carrouselServices/carrusel-3.jpg';
import carrusel4 from '../assets/carrouselServices/carrusel-4.png';
import serviceFondo from '../assets/serviceFondo.png'
import unreal1 from '../assets/unreal1.png'
import editor1 from '../assets/editor1.png'


const Services = () => {
  useEffect(() => {
    const duplicateSlides = (slideTrackClass, slideClass) => {
      const slideTrack = document.querySelector(slideTrackClass);
      const slides = Array.from(document.querySelectorAll(slideClass));

      slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        slideTrack.appendChild(clone);
      });
    };

    duplicateSlides('.carousel-track5', '.carousel-slide5');
  }, []);

  return (
    <div className="services-page">
      <div className="service-container-full">
        <h2 className="service-title-one">Lorem Ipsum</h2>
      </div>

      {/* Service 1 */}
      <div className="service-container2">
        <div className="service-text-column2">
          <h2 className="service-title2">3D Scanning + Photogrammetry + 3D Modeling</h2>
          <p className="service-description2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel urna nisi. Cras interdum sagittis dui, vel tempus metus volutpat ut. Nulla facilisi. Nam at ex nec arcu varius dapibus. Duis consequat nulla ac elit dictum.
          </p>
        </div>
        <div className="service-image-column2">
          <img src={serviceImage1} alt="Service" className="service-image2" />
        </div>
      </div>

      {/* Service 2 */}
      <div className="service-container3">
        <div className="service-image-column3">
          <img src={serviceImage2} alt="Service" className="service-image3" />
        </div>
        <div className="service-text-column3">
          <h2 className="service-title3">High Volume 3D Content Creation</h2>
          <p className="service-description3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel urna nisi. Cras interdum sagittis dui, vel tempus metus volutpat ut. Nulla facilisi. Nam at ex nec arcu varius dapibus. Duis consequat nulla ac elit dictum.
          </p>
        </div>
      </div>

      {/* Service 3 */}
      <div className="service-container4">
        <div className="service-text-column4">
          <h2 className="service-title4">Full Project Development in Unity/UE5</h2>
          <p className="service-description4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel urna nisi. Cras interdum sagittis dui, vel tempus metus volutpat ut. Nulla facilisi. Nam at ex nec arcu varius dapibus. Duis consequat nulla ac elit dictum.
          </p>
        </div>
        <div className="service-image-column4">
          <img src={serviceImage3} alt="Service" className="service-image4" />
        </div>
      </div>

      {/* Service 4 */}
      <div className="service-container5">
        <div className="service-text-column5">
          <h2 className="service-title5">UEFN - Fortnite Content Creation + Programming</h2>
          <p className="service-description5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel urna nisi. Cras interdum sagittis dui, vel tempus metus volutpat ut. Nulla facilisi. Nam at ex nec arcu varius dapibus. Duis consequat nulla ac elit dictum.
          </p>
        </div>
        <div className="carousel-container5">
          <div className="carousel-track5">
            <div className="carousel-slide5"><img src={carrusel1} alt="Image 1" /></div>
            <div className="carousel-slide5"><img src={carrusel2} alt="Image 2" /></div>
            <div className="carousel-slide5"><img src={carrusel3} alt="Image 3" /></div>
            <div className="carousel-slide5"><img src={carrusel4} alt="Image 4" /></div>
          </div>
        </div>
      </div>
      {/* Service 5 */}
      <div className="service-container6">
        <div className="service-image6-container">
          <img src={serviceFondo} alt="New Service" className="service-image6" />
        </div>
      </div>
      {/* Service 6 */}
      <div className="service-container7"></div>
      {/* Service 7 */}
      <div className="service-container8">
        <div className="service-image-column8">
          <img src={unreal1} alt="Service" className="service-image8" />
        </div>
        <div className="service-text-column8">
          <h2 className="service-title8">Unreal Editor para Fortnite</h2>
          <p className="service-description8">
            Unreal Editor para Fortnite (UEFN) es una aplicación de PC que sirve para diseñar, desarrollar y publicar juegos y experiencias directamente en Fortnite. Tendrás a tu disposición muchas de las potentes herramientas y procesos de trabajo de Unreal Engine 5, además del lenguaje de programación Verse, con todo un mundo nuevo de opciones para producir y publicar juegos y experiencias para Fortnite que podrán disfrutar millones de jugadores.
          </p>
        </div>
      </div>
      {/* Service 7 */}
      <div className="service-container9">
    <div className="service-image-column9">
        <img src={editor1} alt="Service" className="service-image9" />
    </div>
</div>


    </div>
  );
};

export default Services;
