export class PhotographerMedia {
  constructor(media) {
    this.media = media
  }

  createMediaList() {
    const wrapper = document.createElement("article")
    wrapper.classList = "mediaCard"
    wrapper.innerHTML += `<img src="assets/${this.media.photographerId}/${this.media.image}" alt="${this.media.title}" class="thumb-img"><div class="media-addon"><figcaption>${this.media.title}</figcaption><span class="likes">${this.media.likes} <svg alt="likes" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg></span></div>`
    return wrapper
  }
}
