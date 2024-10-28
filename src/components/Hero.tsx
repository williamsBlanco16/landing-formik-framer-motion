import { FC } from "react";

export const Hero:FC = () => {
  return (
    <section className="hero bg-gray-800 text-center py-20 sm:px-4 lg:relative lg:px-0 mt-16"> {/* Ajustar mt-16 para el tamaño del header */}
      <div className="hero-content max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-white">
          Domus TechFit
        </h2>
        <h3 className="mt-4 text-lg text-white mb-6 md:text-xl">
          Es una herramienta avanzada de evaluación de tecnología diseñada para ayudarte a encontrar el ajuste perfecto entre las soluciones tecnológicas y los objetivos específicos de tu proyecto.
        </h3>
        <p className="text-gray-200 text-base md:text-lg">
          Con Domus TechFit, puedes explorar los pros y contras de cada tecnología en función de las necesidades únicas de tu iniciativa, facilitando decisiones informadas y optimizando los recursos para obtener el máximo rendimiento.
        </p>
      </div>
    </section>
  );
};
