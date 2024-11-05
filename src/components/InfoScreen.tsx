import { FC } from 'react';
import { motion } from 'framer-motion';
import placeHolder600 from '../assets/placeholder600.png';

interface InfoScreenProps {
  toggleNav: () => void;
}

const InfoScreen: FC<InfoScreenProps> = ({ toggleNav }) => {
  const listItems = [
    {
      step: "Paso 1",
      title: "Ingresa la Información del Proyecto",
      description: "Completa un breve formulario sobre las características únicas de tu proyecto: objetivos, presupuesto, necesidades y retos específicos. Esta información permite que Domus TechFit adapte el análisis exclusivamente para ti."
    },
    {
      step: "Paso 2",
      title: "Recibe el Análisis Personalizado",
      description: "Cada proyecto es diferente, y el análisis que recibirás también lo es. Con base en los datos ingresados, Domus TechFit presenta los pros y contras de cada tecnología, evaluando cómo cada opción se ajusta a tu proyecto y sus objetivos."
    },
    {
      step: "Paso 3",
      title: "Descarga tu Informe Específico",
      description: "Tu informe en PDF no es genérico; es una herramienta estratégica para tomar decisiones basadas en el contexto único de tu proyecto."
    },
  ];

  return (
    <div className="bg-white min-h-screen px-4 mx-auto py-8 mt-12 flex flex-col max-w-7xl">
      {/* Section 1: Qué Hace Único a Domus TechFit */}
      <motion.div 
        className="grid grid-cols-12 gap-8"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <div className="col-span-12 md:col-span-6 flex flex-col justify-center items-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#541858]">
            Un Análisis de Tecnología Diseñado para Tu Proyecto
          </h1>
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#002856] mt-2">
            No todas las tecnologías se adaptan a cada proyecto.
          </h2>
          <p className="text-lg lg:text-xl text-[#002856] mt-4 lg:pr-24">
            Domus TechFit identifica los pros y contras de cada opción tecnológica en función de tus necesidades y objetivos específicos.
          </p>
          <p className="text-lg text-[#1b3552] my-6">
            Con Domus TechFit, no solo obtienes una lista de tecnologías populares. Esta herramienta analiza el contexto único de tu proyecto: su alcance, sus desafíos y sus objetivos. Nuestro análisis considera cómo cada tecnología se comportará específicamente en tu entorno, identificando fortalezas, limitaciones y las áreas donde mejor se ajusta a tu visión. Este enfoque te permite tomar decisiones informadas, ahorrando tiempo y recursos.
          </p>
        </div>
        <div className="col-span-12 md:col-span-6 flex justify-center">
          <img
            src={placeHolder600}
            alt="Servicio Innovador"
            className="w-full max-w-[600px] h-auto rounded-lg shadow-md"
          />
        </div>
      </motion.div>

      {/* Section 2: Proceso de Uso en Tres Pasos */}
      <motion.div 
        className="mt-16 grid grid-cols-12 gap-8"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="col-span-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#541858] mb-4">
            Proceso de Uso en Tres Pasos
          </h2>
          <ul className=" list-inside text-[#002856] mb-4 flex flex-col sm:flex-row justify-between gap-6">
            {listItems.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.3, delay: index * 0.1 }} // Animación individual por elemento
                className="mb-4"
              >
                <span className="font-bold text-[#7C2483]">{item.step}:</span> 
                <p className='text-md text-[#932a9a] '>{item.title}</p>
                <p className="text-sm">{item.description}</p>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="col-span-12">
          <div className="w-full h-auto rounded-lg shadow-md bg-[#f2eeee] py-32 flex">
            <button 
              type="button" 
              onClick={toggleNav}
              className="bg-[#7C2483] text-white font-bold py-2 lg:text-xl px-4 mx-auto rounded hover:bg-[#4EA1D3] transition duration-300">
              Prueba Domus TechFit Gratis
            </button>
          </div>
        </div>
      </motion.div>

      {/* Section 3: Características Clave */}
      <motion.div 
        className="mt-16"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-3xl font-bold text-[#541858]  mb-4">Características Clave</h2>
        <p className="text-lg text-[#002856] mb-4 font-bold">
          Domus TechFit proporciona un análisis de pros y contras, considerando el contexto de tu proyecto para que comprendas el impacto de cada tecnología.
        </p>
        <p className='text-sm'>
          A diferencia de otros análisis generales, Domus TechFit toma en cuenta el contexto de tu proyecto para evaluar cada tecnología. ¿Una opción es buena en términos de costo pero desafiante en escalabilidad? ¿Otra es segura, pero requiere capacitación adicional? Este nivel de personalización garantiza que entiendas cómo cada tecnología puede impactar específicamente en tus objetivos.
        </p>
      </motion.div>

      {/* Section 4: Ejemplo de Resultados Personalizados */}
      <motion.div 
        className="mt-16"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-[#541858] mb-4">Ejemplo de Resultados Personalizados</h2>
        <p className="text-lg text-[#002856] mb-4">
          Incluimos ejemplos visuales de cómo Domus TechFit genera un análisis adaptado a diferentes tipos de proyectos, destacando las variaciones en pros y contras.
        </p>
        {/* Aquí podrías agregar capturas de pantalla o ejemplos visuales */}
      </motion.div>

      {/* Section 5: Llamado a la Acción */}
      <motion.div 
        className="mt-16"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-[#541858] mb-4">¡Prueba Domus TechFit Gratis!</h2>
        <p className="text-lg text-[#002856] mb-4">
          Descubre las mejores tecnologías para tu proyecto con un análisis detallado que asegura que se alinee con tus metas específicas.
        </p>
        <button
          type="button" 
          className="bg-[#7C2483] text-white font-bold py-2 lg:text-xl px-4 mx-auto rounded hover:bg-[#4EA1D3] transition duration-300"
          onClick={toggleNav}
        >
          Contáctanos para más información
        </button>
      </motion.div>
    </div>
  );
};

export default InfoScreen;
