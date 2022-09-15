export class Search {
  constructor(data) {
    // debugger;
    this.id = data.id;
    // this.url;
  }

  //prettier-ignore
  get GifTemplate() {
    return /*HTML*/ `
    <img
    
      src="http://media.giphy.com/media/${this.id}/giphy.gif"
      alt="present"
      class="img-fluid rounded-1 gift-image p-3"
      onclick="app.searchesController.insertUrl('http://media.giphy.com/media/${this.id}/giphy.gif')"
    />
    `;
  }
}
