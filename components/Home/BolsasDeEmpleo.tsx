import React from 'react';
import Image from 'next/image';

const BolsasDeEmpleo = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Bolsas de empleo técnico especializado</h1>
      <h2 className="text-2xl font-semibold mb-8">
        Haga click en uno de los sectores que aparecen a continuación, para acceder a la bolsa de empleo especializada que desee
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded shadow p-4">
          <h3 className="text-xl font-semibold mb-2">Sector del vidrio plano</h3>
          <p className="mb-4">
            Contenido del sector del vidrio plano. Aquí puedes escribir una descripción o información adicional.
          </p>
          <Image  src="/images/imagenGenerica.png" alt="Imagen 1" width={50}  height={50}/>
        </div>
        <div className="bg-white rounded shadow p-4">
          <h3 className="text-xl font-semibold mb-2">Sector de la carpintería metálica</h3>
          <p className="mb-4">
            Contenido del sector de la carpintería metálica. Aquí puedes escribir una descripción o información adicional.
          </p>
          <Image  src="/images/imagenGenerica.png" alt="Imagen 2" width={50}  height={50}/>
        </div>
        <div className="bg-white rounded shadow p-4">
          <h3 className="text-xl font-semibold mb-2">Otros sectores técnicos especializados</h3>
          <p className="mb-4">
            Contenido de otros sectores técnicos especializados. Aquí puedes escribir una descripción o información adicional.
          </p>
          <Image  src="/images/imagenGenerica.png" alt="Imagen 3" width={50}  height={50}/>
        </div>
      </div>
    </div>
  );
};

export default BolsasDeEmpleo;