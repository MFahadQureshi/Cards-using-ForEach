var list = document.getElementById("list");
var fruits = [
  {
    name: "Mango",
    title: "Phalon ka badshah",
    types: ["Chounsa", "Sindhri", "Langra", "Anwaratol", "Almaas"],
    image:
      "https://www.gulab.pk/lahore/wp-content/uploads/sites/29/2022/02/fajri-mango.jpg",
  },
  {
    name: "Watermelon",
    title: "Garmi ka dushman",
    types: ["Red Melon", "Green Melon"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh5hUDAw4pVY0TaupvqLvx6BfpSxGyxZz3og&s",
  },
  {
    name: "Peach",
    title: "Juicy Peach",
    types: ["Swat Wala", "Quetta Wala"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn9ganOjKSr55wJEuV1kSygTSxw0UtJA4Egw&s",
  },
  {
    name: "Cherry",
    title: "Khoon banane wali",
    types: ["Black Cherry", "Red Cherry"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWczfji7SrBcKRPC6foxzXipwGTKikHaoIdg&s",
  },
  {
    title: "Orange",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo8G3tLIWUDKqA_KPah80Zz0N_lIZQ5Mb3ww&s",
    description: "Citrus fruit, sweet and tangy.",
    types: ["Kinnow", "Blood Orange", "Valencia"],
    symbol: "Winter favorite"
  },
  {
    title: "Pomegranate",
    image: "https://www.uclahealth.org/sites/default/files/styles/landscape_3x2_016000_640x427/public/images/03/pomegranate-1-istock-612833996-1.jpg?f=68fffd9a&itok=1WAI5CPA",
    description: "Tart and juicy seeds.",
    types: ["Kandhari", "Bhagwa", "Ganesh"],
    symbol: "Autumn favorite"
  },
];

fruits.forEach(function (data, ind) {
  var ele = `<div class="lg:w-1/3  sm:w-1/2 p-4">
  <div class="flex relative h-[250px]">
    <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="${
      data.image
    }">
    <div id = ${ind} class="px-8 py-10  relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
      <h2 class="tracking-widest text-xl title-font font-medium text-indigo-500 mb-1">${
        data.name
      }</h2>
      <h1 class="title-font text-2xl font-medium text-gray-900 mb-3">${
        data.title
      }</h1>
      <p class="leading-relaxed">${data.types.join(" , ")}</p>
      <p class="leading-relaxed">${data.desc} </p>
      <button class="update" onclick="updateDesc(this)">Update</button>
      <button class="delete" onclick="deleteElement(this)">Delete</button>
    </div>
  </div>
</div>`;
  list.innerHTML += ele;
});

function updateDesc(ele) {
  // console.log("ele=>", ele.previousElementSibling);
  // console.log("ele parentr=>", ele.parentElement);

  var index = ele.parentElement.id;
  fruits[index].desc = prompt("Desc");
  list.innerHTML = "";
  fruits.forEach(function (data, ind) {
    var ele = `<div class="lg:w-1/3  sm:w-1/2 p-4">
    <div class="flex relative h-[250px]">
      <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="${
        data.image
      }">
      <div id = ${ind} class="px-8 py-10  relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
        <h2 class="tracking-widest text-xl title-font font-medium text-indigo-500 mb-1">${
          data.name
        }</h2>
        <h1 class="title-font text-2xl font-medium text-gray-900 mb-3">${
          data.title
        }</h1>
        <p class="leading-relaxed">${data.types.join(" , ")}</p>
        <p class="leading-relaxed">${data.desc} </p>
        <button class="update" onclick="updateDesc(this)">update</button>
        <button class="delete"class="rounded-full" onclick="deleteElement(this)">Delete</button>
      </div>
    </div>
  </div>`;
    list.innerHTML += ele;
  });
}

function deleteElement(ele) {
  var indexD = ele.parentElement.id;
  fruits.splice(indexD, 1, );
  list.innerHTML = "";
  fruits.forEach(function (data, ind) {
    var ele = `<div class="lg:w-1/3  sm:w-1/2 p-4">
    <div class="flex relative h-[250px]">
      <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="${
        data.image
      }">
      <div id = ${ind} class="px-8 py-10  relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
        <h2 class="tracking-widest text-xl title-font font-medium text-indigo-500 mb-1">${
          data.name
        }</h2>
        <h1 class="title-font text-2xl font-medium text-gray-900 mb-3">${
          data.title
        }</h1>
        <p class="leading-relaxed">${data.types.join(" , ")}</p>
        <p class="leading-relaxed">${data.desc} </p>
        <button class="update"onclick="updateDesc(this)">update</button>
        <button class="delete" onclick="deleteElement(this)">Delete</button>
      </div>
    </div>
  </div>`;
    list.innerHTML += ele;
  });
}
