const axios = require("axios");

class Heuristic {
  #apiKey;
  #baseUrl;

  constructor() {
    this.#baseUrl = "http://34.132.62.82:5000";
  }

  config({ apiKey }) {
    this.#apiKey = apiKey;
  }
  async fetchResults({ query, num_results }) {
    if (!this.#apiKey) {
      throw new Error(
        `Please provide an API key. Generate yours at https://heuristic-2.vercel.app if you don't have one`
      );
    }
    try {
      const response = await axios.get(`${this.#baseUrl}/search1`, {
        params: {
          query: query,
          num_results: num_results,
        },
        headers: {
          Authorization: `Bearer ${this.#apiKey}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching results: ${error.message}`);
    }
  }
}

module.exports = new Heuristic();
