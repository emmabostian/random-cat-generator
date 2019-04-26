export async function getCatPhoto() {
  const API_KEY = process.env.REACT_APP_API_KEY;

  try {
    let response = await fetch(
      "https://api.thecatapi.com/v1/images/search?size=short",
      {
        headers: {
          x_api_key: API_KEY
        }
      }
    );
    return await response.json();
  } catch (e) {
    console.log("Error!", e);
  }
}
