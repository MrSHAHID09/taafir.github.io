let logoLink = document.querySelector(".home-link");
let ExploreBtn = document.querySelector(".exp-btn");
let description = document.querySelector(".description");

let descriptionText= `The ability of a computer or a robot controlled by a computer to do tasks that are usually done by humans because they require human intelligence and discernment.`;

description.innerHTML=descriptionText;

logoLink.addEventListener("click", () => {
  description.innerHTML = "Coming Soon...";
  setTimeout(() => {
    description.innerHTML = descriptionText;
  }, 3000);
});
ExploreBtn.addEventListener("click", () => {
    description.innerHTML = "Coming Soon...";
    setTimeout(() => {
      description.innerHTML = descriptionText;
    }, 3000);
  });
