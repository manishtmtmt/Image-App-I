import {navbar} from "../components/navbar";
import "../styles/style.css";
import { getImage, append } from "./fetch.js";

document.getElementById("navbar").innerHTML = navbar();

let container = document.getElementById("container");

let searchImage = () => {
  let query = document.getElementById("query").value;
  getImage(query).then((data) => {
    append(data.results, container);
    console.log(data);
  });
};

let id;

let debounce = (func, delay) => {
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(() => {
    func();
  }, delay);
};

let categories = document.getElementById("categories").children;
console.log('categories:', categories)

function search() {
    console.log(this.id);
  getImage(this.id).then(function(data){
    append(data.results, container);
    console.log(data);
  });
};

for (let el of categories){
    el.addEventListener("click", search)
}

document.getElementById("query").addEventListener("input", function () {
  debounce(searchImage, 1000);
});


