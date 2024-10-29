import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ContactFormValues, Topic, TopicsData } from './contactForm.types';
import { ToggleButtons } from '../ToggleButtons';
import axios from 'axios';
import * as Yup from 'yup';
import Loader from '../Loader';
import Toast from '../Toast';
import data  from '../../../topic.json'
const topicsData = data as unknown as TopicsData; 

export const ContactForm = () => {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [showLoading, setShowLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | undefined>();
  const [toastType, setToastType] = useState<'success' | 'error' | ''>('');

  const handleSubmit = async (values: ContactFormValues, { resetForm }: { resetForm: () => void }) => {
    const apiUrl = import.meta.env.VITE_API_URL;
    
    const topics: Topic[] = selectedTopics.map(topic => ({
      name: topic,
      data: topicsData[topic] || []
    }));

    const contactData = {
      ...values,
      topics,
    };

    setShowLoading(true);

    try {
      const response = await axios.post(`${apiUrl}/api/contacts`, contactData);
      setToastMessage('Solicitud enviada con éxito.');
      setToastType('success');
      resetForm();
      setSelectedTopics([]);

      console.log('Contacto creado:', response.data);
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      setToastMessage('Error al enviar los datos.');
      setToastType('error');

    } finally {
      setShowLoading(false);
      setTimeout(() => {
        setToastMessage(undefined);
        setToastType('');
      }, 3000);
    }
  }

  return (
    <section id="contact-form" className="form-container w-full p-6 bg-white rounded-lg shadow-md">
      {showLoading && <Loader />}
      {toastMessage && (
        <Toast message={toastMessage} type={toastType} />
      )}
      <Formik
        initialValues={{ name: '', email: '', idea: '', extra: '', surname: '', company: '', consent: false }}
        validationSchema={Yup.object({
          name: Yup.string().required('Requerido'),
          surname: Yup.string().required('Requerido'),
          email: Yup.string().email('Email inválido').required('Requerido'),
          idea: Yup.string().required('Por favor, cuéntanos tu idea.'),
          extra: Yup.string().required('Campo requerido.'),
          company: Yup.string().required('Requerido'),
          consent: Yup.boolean().oneOf([true], 'Debes aceptar recibir información.'),
        })}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit }) => (
          <Form className="flex flex-col items-center" onSubmit={handleSubmit}>
            <h2 className="text-2xl mb-4 text-center text-[#7C2483]">Cuéntanos tu idea</h2>
            <div className="form-field mb-4 w-full md:w-4/5">
              <Field
                as="textarea"
                name="idea"
                placeholder="Cuéntanos tu idea"
                className="border p-2 w-full rounded"
                rows={4}
              />
              <ErrorMessage name="idea" component="div" className="text-red-500" />
            </div>

            <div className="mb-4 w-full md:w-4/5">
              <div className="mb-4 p-4 bg-[#f3e8f3] border-l-4 border-[#7C2483] text-[#7C2483]">
                <p>Selecciona los temas que consideras prioritarios para tus necesidades:</p>
              </div>
              <ToggleButtons selectedTopics={selectedTopics} setSelectedTopics={setSelectedTopics} />
            </div>

            <h2 className="text-2xl mb-4 text-center text-[#7C2483]">¿Algo extra que quieras agregar?</h2>
            <div className="form-field mb-4 w-full md:w-4/5">
              <Field
                as="textarea"
                name="extra"
                placeholder="Cuéntanos si ya utilizas alguna plataforma o proveedor de nube y/o IA"
                className="border p-2 w-full rounded"
                rows={4}
              />
              <ErrorMessage name="extra" component="div" className="text-red-500" />
            </div>

            <h2 className="text-2xl mb-4 text-center text-[#7C2483]">Completa tus datos para ver el resultado</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 w-full md:w-4/5">
              <div className="form-field">
                <Field
                  name="name"
                  placeholder="Nombre"
                  className="border p-2 w-full rounded"
                />
                <ErrorMessage name="name" component="div" className="text-red-500" />
              </div>
              <div className="form-field">
                <Field
                  name="surname"
                  placeholder="Apellido"
                  className="border p-2 w-full rounded"
                />
                <ErrorMessage name="surname" component="div" className="text-red-500" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 w-full md:w-4/5">
              <div className="form-field">
                <Field
                  name="email"
                  placeholder="Correo electrónico"
                  className="border p-2 w-full rounded"
                />
                <ErrorMessage name="email" component="div" className="text-red-500" />
              </div>
              <div className="form-field">
                <Field
                  name="company"
                  placeholder="Empresa"
                  className="border p-2 w-full rounded"
                />
                <ErrorMessage name="company" component="div" className="text-red-500" />
              </div>
            </div>

            <div className="mb-4 w-4/5 flex items-center">
              <Field type="checkbox" name="consent" className="mr-2" />
              <label htmlFor="consent">Deseo recibir la información en el correo indicado.</label>
              <ErrorMessage name="consent" component="div" className="text-red-500" />
            </div>

            <button
              type="submit"
              className={`bg-[#7C2483] text-white py-2 px-4 rounded transition duration-300 ease-in-out 
              ${showLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#7C2483]'} 
              w-full md:w-auto`}
              disabled={showLoading}
            >
              Ver Resultado
            </button>

          </Form>
        )}
      </Formik>
    </section>
  );
};
