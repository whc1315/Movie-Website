// console.log("hello world");

let message = document.querySelector("#message");

//Add Movie

function addMovie(event) {
  event.preventDefault();
  let inputField = document.querySelector("input");
  if (!inputField.value) {
    return alert("There was no input!");
  }
  let movie = document.createElement("li");
  let movieTitle = document.createElement("span");
  movieTitle.textContent = inputField.value;

  movieTitle.addEventListener("click", crossOffMovie);

  movie.appendChild(movieTitle);

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", deleteMovie);
  movie.appendChild(deleteBtn);

  let ul = document.querySelector("ul");
  ul.appendChild(movie);
  inputField.value = "";
}

let form = document.querySelector("form");

form.addEventListener("submit", addMovie);

//Delete Movie

function deleteMovie(event) {
  event.target.parentNode.remove();
  message.textContent = "Movie Deleted!";
}

//Cross Off

function crossOffMovie(event) {
  event.target.classList.toggle("checked");
  if (event.target.classList.contains("checked")) {
    message.textContent = "Movie Watched!";
  } else {
    message.textContent = "Movie returned to watchlist!";
  }
}
