import React from 'react';

const MainHeader = () => {
  return (
      < >
        <video
          className="w-full h-auto object-cover"
          src="/video/perfiles.mp4"
          autoPlay
          loop
          muted
        ></video>
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-6">
            Tecnobolsa
          </h1>
          <p className="text-xl text-white text-center">
            Conectamos empresas con personal técnico especializado en los 21 países de habla hispana. Únase a nosotros para encontrar talento o empleo desde hoy mismo.
          </p>
        </div>
      </>
  );
};

export default MainHeader;