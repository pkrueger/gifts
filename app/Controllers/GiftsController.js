import { appState } from "../AppState.js";
import { giftsService } from "../Services/GiftsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawGifts() {
  let template = "";
  appState.gifts.forEach((p) => (template += p.GiftTemplate));
  setHTML("giftsGoHere", template);
}

export class GiftsController {
  constructor() {
    appState.on("gifts", _drawGifts);
    this.getGifts();
  }

  async getGifts() {
    try {
      await giftsService.getGifts();
    } catch (error) {
      console.error("[getGifts]", error);
      Pop.error(error);
    }
  }

  async addGift() {
    try {
      // @ts-ignore
      window.event.preventDefault();
      // @ts-ignore
      const form = window.event.target;
      let formData = getFormData(form);

      if (
        await Pop.confirm(
          "Do you want to submit this gift?",
          "Everyone will be able to see it if you do!"
        )
      ) {
        await giftsService.addGift(formData);

        // @ts-ignore
        form.reset();
      }
    } catch (error) {
      console.error("[addGift]", error);
      Pop.error(error);
    }
  }

  async openGift(id) {
    if (id) {
      try {
        await giftsService.openGift(id);
      } catch (error) {
        console.error("[openGift]", error);
        Pop.error(error);
      }
    }
    return;
  }
}
