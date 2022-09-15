import { appState } from "../AppState.js";
import { searchesService } from "../Services/SearchesService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawGifs() {
  let template = "";
  appState.searches.forEach((g) => (template += g.GifTemplate));
  setHTML("gifScreen", template);
}
export class SearchesController {
  constructor() {
    appState.on("searches", _drawGifs);
  }

  async searchGif() {
    try {
      // @ts-ignore
      window.event.preventDefault();
      // @ts-ignore
      const form = window.event.target;
      let formData = getFormData(form);

      // await giftsService.addGift(formData);
      await searchesService.searchGif(formData);
      // @ts-ignore
      form.reset();
    } catch (error) {
      console.error("[searchGif]", error);
      Pop.error(error);
    }
  }

  insertUrl(url) {
    const x = document.querySelector("#minion");
    // @ts-ignore
    x.value = url;
  }
}
