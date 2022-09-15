import { appState } from "../AppState.js";
import { Gift } from "../Models/Gift.js";
import { SandboxServer } from "./AxiosService.js";

class GiftsService {
  async openGift(id) {
    const res = await SandboxServer.put(`/${id}`, { opened: true });
    const openedGift = new Gift(res.data);
    const index = appState.gifts.findIndex((g) => g.id == id);
    appState.gifts.splice(index, 1, openedGift);
    appState.emit("gifts");
  }
  async addGift(formData) {
    const res = await SandboxServer.post("", formData);
    appState.gifts = [new Gift(res.data), ...appState.gifts];
  }

  async getGifts() {
    const res = await SandboxServer.get();
    appState.gifts = res.data.map((g) => new Gift(g));
  }
}

export const giftsService = new GiftsService();
