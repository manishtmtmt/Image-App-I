let navbar = () => {
    return `<h3>
    <a href="index.html">Unsplash</a>
  </h3>
  <div id="searchbar">
    <input type="text" name="query" id="query" placeholder="Search images here" />
  </div>
  <div id="categories">
    <h3 id="city">City</h3>
    <h3 id="wallpapers">Wallpapers</h3>
    <h3 id="nature">Nature</h3>
    <h3 id="animals">Animals</h3>
    <h3 id="film">Film</h3>
  </div>`
};

export {navbar};