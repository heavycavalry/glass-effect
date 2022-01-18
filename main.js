const data = [
  {
    name: "Alicja Jakubowicz",
    job: "JavaScript Developer",
    photo:
      "https://this-person-does-not-exist.com/img/avatar-17343cc81876a3987ec174caa8b71d1f.jpg",
  },
  {
    name: "Roman Romanowicz",
    job: "UX/UI Designer",
    photo:
      "https://this-person-does-not-exist.com/img/avatar-1108f4051e54e08a0f4c7c41f1e82608.jpg",
  },
  {
    name: "Anna Fic",
    job: "Product Owner",
    photo:
      "https://this-person-does-not-exist.com/img/avatar-f1d1fbbbca08ecc7b451aa483e91cbb3.jpg",
  },
  {
    name: "Hubert Borowiak",
    job: "Tester automatyzujący",
    photo:
      "https://this-person-does-not-exist.com/img/avatar-2d3cc1de0f2f2aa60cf69ed71a9db65d.jpg",
  },
  {
    name: "Joanna Wik",
    job: "Back-End Developer",
    photo:
      "https://this-person-does-not-exist.com/img/avatar-49f8ab6778b27625dacb94dc5106b876.jpg",
  },
  {
    name: "Wanda Zryw",
    job: "Junior React Developer",
    photo:
      "https://this-person-does-not-exist.com/img/avatar-3151679d8824f697ba7c3c64cf930060.jpg",
  },
];

function createCardItem(data) {
  let glassCard = document.querySelector(".glass-card");
  data.map((item) => {
    let div = document.createElement("div");
    div.className = "card-item";
    let image = document.createElement("img");
    image.className = "card-item-img";
    image.src = item.photo;
    let text = document.createElement("div");
    let name = document.createElement("p");
    name.className = "card-item-title";
    name.innerHTML = item.name;
    let job = document.createElement("p");
    job.innerHTML = item.job;
    job.className = "card-item-body";
    text.append(name, job);
    div.append(image, text);
    glassCard.appendChild(div);
  });
}

createCardItem(data);
