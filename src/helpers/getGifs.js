export const getGifs = async (category) => {
  const apiKey = "oXHumpAVJAnGyLIJUTUOIBBAKpDHCdGe";
  const limit = 10;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=${limit}`;
  const requestOptions = { method: "GET", redirect: "follow" };

  const resp = await fetch(url, requestOptions);

  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};
