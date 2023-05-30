import React from "react";
import Image from "next/image";
import Link from "next/link";

const SobreNosotros = () => {
  return (
    <div className="flex flex-col justify-between">
      <h2 className="text-3xl md:text-6xl text-gray-700 font-bold mb-6">
        Sobre Nosotros
      </h2>
      <div className="bg-white rounded-lg shadow-md p-2vh">
        <p className="text-gray-600 text-center p-2vw">
          Le damos una cordial bienvenida a nuestra plataforma en línea, la cual
          le ofrece la posibilidad de encontrar trabajadores técnicos altamente
          especializados en todo el mundo hispanohablante, así como de compartir
          su valiosa experiencia como profesional con perfil técnico. Nuestro
          objetivo principal radica en facilitar la conexión entre aquellos que
          buscan talento técnico y aquellos que poseen un conocimiento
          especializado en diversas áreas.
        </p>
        <div className="w-full h-auto">
          <Image
            src="/images/imagenGenerica.png"
            alt="Imagen 1"
            width={50}
            height={50}
          />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-2vh">
        <p className="text-gray-600 text-center p-2vw">
          Contamos con una comunidad en constante crecimiento, compuesta por
          expertos calificados dispuestos a ofrecer sus habilidades y
          conocimientos a través de nuestra plataforma intuitiva y eficiente.
          Tanto si usted representa a una empresa en búsqueda de profesionales
          técnicos como si es un trabajador especializado deseoso de ampliar sus
          horizontes laborales, le invitamos a unirse a nuestra comunidad y
          aprovechar las ventajas de nuestro amplio mercado laboral en el mundo
          hispanohablante.
        </p>
        <div className="w-full h-auto">
          <Image
            src="/images/imagenGenerica.png"
            alt="Imagen 2"
            width={50}
            height={50}
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-2vh">
        <p className="text-gray-600 text-center p-2vw">
          Descubra hoy mismo cómo podemos ayudarle a alcanzar el éxito en el
          ámbito técnico especializado.
        </p>
        <div className="w-full h-auto">
          <Image
            src="/images/imagenGenerica.png"
            alt="Imagen 3"
            width={50}
            height={50}
          />
        </div>
      </div>
      <div>
        <h2>Quiere saber más?</h2>
        <p>Póngase en contacto con nosotros, a través del siguiente link</p>
        <button>
          <Link href="/contacto" passHref>
            <span className="bg-white text-gray-800 rounded-full py-2 px-4 border-b-2 border-gray-500 hover:bg-gray-500 hover:bg-opacity-25 hover:text-gray-900">
              Contáctenos
            </span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default SobreNosotros;
