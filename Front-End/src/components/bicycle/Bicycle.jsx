
const ReadProducts = () => {
  const [products, setproducts] = useState([]); // Inicializa el estado con un array vacío

  useEffect(() => { // Utiliza el hook useEffect para realizar una solicitud GET al montar el componente
    const fetchData = async () => { // Define una función asincrónica llamada fetchData
      const response = await fetch('http://localhost:8080/api/v1/products'); // Realiza la solicitud GET al archivo db.json
      const data = await response.json(); // Convierte la respuesta en formato JSON
      setproducts(data.products); // Actualiza el estado con los datos obtenidos
    };

    fetchData(); // Llama a la función fetchData cuando el componente se monta
  }, []);

  return ( // Renderiza el componente
    <div> 
      <h2>Listado de productos</h2>
      <ul>
        {products.map(product => ( // Mapea el array de bicicletas y renderiza un elemento <li> por cada una /* Utiliza el ID de la bicicleta como clave 
          <li key={product.id}>  
            {product.model} -Speeds: {product.speeds} - Frame: {product.frame} - Electric: {product.electric.toString()}  
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReadProducts; // Exporta el componente Readproducts para poder utilizarlo en otros archivos

// import React, { useState } from 'react';

// //MÉTODO DELETE CON REACT 
// // Definimos nuestro componente funcional product que acepta un ID como prop
// const product = ({ id }) => {
//   // Creamos un estado local llamado 'deleted' para controlar si la bicicleta ha sido eliminada
//   const [deleted, setDeleted] = useState(false);

//   // Definimos la función handleDelete que se ejecutará cuando se haga clic en el botón 'Eliminar'
//   const handleDelete = () => {
//     // Realizamos una solicitud DELETE a la API para eliminar la bicicleta con el ID proporcionado
//     fetch('http:localhost:3000/bicycles/${id}' ,
//      {
//       method: 'DELETE' // Especificamos que esta es una solicitud de tipo DELETE
//     })
//     // Cuando recibimos una respuesta de la API, verificamos si fue exitosa o no
//     .then(response => {
//       // Si la respuesta es exitosa (código de estado 200-299), actualizamos el estado 'deleted' para mostrar un mensaje de éxito
//       if (response.ok) {
//         setDeleted(true); // Actualizamos el estado 'deleted' a true
//         console.log('Bicicleta eliminada con éxito'); // Mostramos un mensaje de éxito en la consola
//       } else {
//         // Si la respuesta no es exitosa, mostramos un mensaje de error en la consola
//         console.error('Error al eliminar la bicicleta');
//       }
//     });
//   };

//   // Renderizamos el componente
//   return (
//     <div>
//       {/* Utilizamos un operador ternario para mostrar un mensaje de éxito o el botón 'Eliminar' */}
//       {deleted ? (
//         <p>Elemento eliminado con éxito</p> // Mostramos un mensaje de éxito si la bicicleta ha sido eliminada
//       ) : (
//         <button onClick={handleDelete}> {/* Renderizamos un botón con el evento 'onClick' que ejecuta la función 'handleDelete' */}
//           Eliminar {/* Texto que se muestra en el botón */}
//         </button>
//       )}
//     </div>
//   );
// };

// // Exportamos el componente Bicycle para poder utilizarlo en otros archivos
// export default Bicycle;
