export const generarId = () => {
  // Genera un id desde un numero random mientras se convierte en un string
  // de codigo binario en "n" posiciones y se extrae desde
  // la posición 2 de la cadena. Se adhiere el valor de la fecha
  // actual también pasada a string de código binario.
  const random = Math.random().toString(36).substr(2);
  const fecha = Date.now().toString(36);
  return random + fecha;
};

export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=Zf1TlGn8e0tQh4pNOoSnFBnMMz85bzw2&limit=10&&q=${category}`;
  const response = await fetch(url);
  const { data } = await response.json();
  const gifs = data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url,
  }));
  return gifs;
};
