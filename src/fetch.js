let getImage = async (query) => {
  try {
    let res = await fetch(
      `https://api.unsplash.com/search/photos?client_id=iJIXKC9A-6LFMfzcGPbTNsZie1-tMawZzGNbCnX4A38&query=${query}&per_page=20`
    );

    let data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

let sortImages = async (query, sort) => {
  try {
    let res = await fetch(
      `https://api.unsplash.com/search/photos?client_id=iJIXKC9A-6LFMfzcGPbTNsZie1-tMawZzGNbCnX4A38&query=${query}&per_page=20&order_by=${sort}`
    );

    let data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

let filterImages = async (query, filter) => {
  try {
    let res = await fetch(
      `https://api.unsplash.com/search/photos?client_id=iJIXKC9A-6LFMfzcGPbTNsZie1-tMawZzGNbCnX4A38&query=${query}&per_page=20&color=${filter}`
    );

    let data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

let append = (data, container) => {
  container.innerText = null;
  data.forEach(({ alt_description, urls: { small } }) => {
    let cards = document.createElement("div");
    cards.setAttribute("class", "cards");
    let image = document.createElement("img");
    let h3 = document.createElement("h3");

    image.src = small;
    h3.innerText = alt_description;

    cards.append(image, h3);
    container.append(cards);
  });
};

export { getImage, append, sortImages, filterImages };
