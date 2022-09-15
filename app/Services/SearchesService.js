import { appState } from "../AppState.js";
import { Search } from "../Models/Search.js";
import { GifServer } from "./AxiosService.js";

class SearchesService {
  async searchGif(formData) {
    // console.log(formData, formData.search);
    const res = await GifServer.get("", {
      params: {
        q: `${formData.search}`,
      },
    });

    console.log(res);
    appState.searches = res.data.data.map((c) => new Search(c));
    console.log(appState.searches);
  }
}

export const searchesService = new SearchesService();
