import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;

export async function getDataOrders() {
    try {
      const response = await axios.get(apiUrl);
      return(response.data);
      // Aquí puedes manejar los datos de la respuesta como desees
    } catch (error) {
      console.error(error);
      // Aquí puedes manejar el error de la solicitud
    }
  }