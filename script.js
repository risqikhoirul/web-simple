const modal = document.getElementById("myModal");
const projek1 = document.getElementById("project1");
const projek2 = document.getElementById("project2");
const projek3 = document.getElementById("project3");
const closeIcon = document.getElementById("closeModalIcon");

// Ketika tombol openButton ditekan
projek1.addEventListener("click", () => {
  modal.style.display = "block";

  const h2 = document.getElementById("judulproject");
  const p = document.getElementById("deskrip");
  const link = document.getElementById("link");

  h2.innerHTML = "Backend REST API Express.js dan MongooDb";
  p.innerHTML = "Aplikasi Back-End REST API Menggunakan Express.js dan Menggunakan Database MongooDB ";
  link.innerHTML = '<a  class="link" href="https://github.com/risqikhoirul/Blog-ExpressApi-MongooDB">Github</a>';
});

// Ketika tombol openButton ditekan
projek2.addEventListener("click", () => {
  modal.style.display = "block";

  const h2 = document.getElementById("judulproject");
  const p = document.getElementById("deskrip");
  const link = document.getElementById("link");

  h2.innerHTML = "Checker Rekening";
  p.innerHTML = "Aplikasi Check Rekening dan E-Money Menggunakan Node.js";
  link.innerHTML = '<a class="link" href="https://github.com/risqikhoirul/checker-bank">Github</a>';
});
// Ketika tombol openButton ditekan
projek3.addEventListener("click", () => {
  modal.style.display = "block";

  const h2 = document.getElementById("judulproject");
  const p = document.getElementById("deskrip");
  const link = document.getElementById("link");

  h2.innerHTML = "CRUD Express.js & Mysql";
  p.innerHTML = "Aplikasi Web CRUD FullStack Menggunakan Express.js, Mysql, dan EJS sebagai Template Enjine";
  link.innerHTML = '<a class="link" href="https://github.com/risqikhoirul/expressjs-crud">Github</a>';
});

// Ketika tombol closeButton ditekan
closeIcon.addEventListener("click", () => {
  modal.style.display = "none";
});
