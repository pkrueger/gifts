export class Gift {
  /**
   *
   * @param {{id:string, tag:string, url:string, opened:boolean}} data
   */
  constructor(data) {
    this.id = data.id;
    this.tag = data.tag || "";
    this.url = data.url;
    this.opened = data.opened;
  }

  //prettier-ignore
  get GiftTemplate() {
    return /*html*/ `
    <div class="col-4">
      <div class="card p-5 my-2">
        <img
          src="${this.opened ? this.url : '/assets/img/gift.png'}"
          alt="present"
          class="img-fluid rounded-1 gift-image"
          id="giftImage"
          onclick="app.giftsController.openGift('${this.opened ? '' : this.id}')"
        />
        <div class="card-body text-center">
          <h5 class="mb-0 mt-3">${this.tag}</h5>
        </div>
      </div>
    </div>
    `;
  }
}
