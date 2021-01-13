export default class StrapiClient {
  constructor() {}

  async fetchData(path) {
    const requestUrl = `${process.env.STRAPI_API_URL}${path}`;
    const response = await fetch(requestUrl);
    const data = await response.json();
    return data;
  }
}
