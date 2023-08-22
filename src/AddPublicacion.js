import React, { useState } from 'react';
import supabase from './supabase';

function AddPublicacion({ closeModal }) {
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [missingData, setMissingData] = useState(false); // Agrega esta línea

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar que al menos un campo esté lleno
    if (!imageUrl && !description) {
      console.log('Debes llenar al menos un campo');
      setMissingData(true);
      return;
    }

    // Resto del código de inserción
    const { data, error } = await supabase
      .from('publicaciones')
      .insert([
        { image_url: imageUrl, description, created_at: new Date() }
      ]);

    if (error) {
      console.error(error);
    } else {
      console.log('Publicación agregada:', data);
      setImageUrl('');
      setDescription('');
      closeModal(); // Cierra el modal después de agregar
      setMissingData(false);
    }
  };

  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-center justify-center w-max justify-center" style={{ width: '100%', }}>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left" style={{ width: '100%' }}>
                  <h3 className="text-3xl font-semibold leading-6 text-gray-900 text-center mb-10" id="modal-title">Agregar más Inspiración</h3>
                  <form onSubmit={handleSubmit} className="mt-2">
                    <div>
                      <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">URL de la imagen</label>
                      <input required placeholder='https://i.pinimg.com/236x/2d/4e/05/2d4e05efda34533520fdb8c13b3a4bd0.jpg'
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        className="mt-1 p-2 w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm"
                      />
                    </div>
                    <div className="mt-2">
                      <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descripción</label>
                      <input
                        placeholder='Top estilo techwear'
                        id="description"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="mt-1 p-2 w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm"
                      />
                    </div>
                    <p className={`advertencia-AddPublicacion ${missingData ? 'opacity-100' : 'opacity-0'}`} style={{
                      textAlign: 'center',
                      width: '-webkit-fill-available',
                      border: '2px solid #db6c6c',
                      borderRadius: '21px',
                      padding: '5px 20px',
                      transition: 'opacity 0.3s ease-in-out'
                    }}>Debes poner al menos una imagen</p>

                  </form>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 justify-between">
              <button type="submit" onClick={handleSubmit} className="mt-3 inline-flex w-full justify-center rounded-md bg-green-300 px-3 py-2 text-sm font-semibold text-black shadow-sm ring-1 ring-inset ring-green-200 hover:bg-green-200 sm:mt-0 sm:w-auto">Subir</button>
              <button type="button" onClick={closeModal} className="mx-2 inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Cancelar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPublicacion;
