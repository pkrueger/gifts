import { GiftsController } from "./Controllers/GiftsController.js";
import { SearchesController } from "./Controllers/SearchesController.js";

class App {
  giftsController = new GiftsController();

  searchesController = new SearchesController();
}

window["app"] = new App();
