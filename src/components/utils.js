export const initialCards = [
  {
    name: "Cochabamba",
    link: "https://media.istockphoto.com/id/1151575875/photo/views-of-the-city-of-cochabamba-from-the-cerro-de-san-pedro-in-bolivia.webp?b=1&s=170667a&w=0&k=20&c=wAZ3Ks9GmzCzXi3Lz7G-qEmGKaiI1ksRYLlc3HX5Zqk=",
  },
  {
    name: "Stockholm",
    link: "https://media.istockphoto.com/id/1451426830/photo/central-stockholm-at-dusk.webp?b=1&s=170667a&w=0&k=20&c=do_SA8nhBc1bQW_KEXnMaKKBlQ3hK7DWXyxNJslsLbM=",
  },
  {
    name: "Trento",
    link: "https://media.istockphoto.com/id/1492085891/photo/trento-aerial-panoramic-view.webp?b=1&s=170667a&w=0&k=20&c=sB2YwjJjAdbnco-uBfo_a1acKgeUEAFVGfYw5RKuZrg=",
  },
  {
    name: "Venezia",
    link: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVuZXppYXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Irish",
    link: "https://images.unsplash.com/photo-1564959130747-897fb406b9af?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXJpc2h8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Praga",
    link: "https://media.istockphoto.com/id/1279996091/photo/prague-astronomical-clock-in-old-town-square-at-dawn-czech-republic.webp?b=1&s=170667a&w=0&k=20&c=vUJmB2vYw_0gHF-3lpmA4A5aXZC-yCxXNf8WuJKsmV0=",
  },
];
export const elementsArea = document.querySelector(".elements");

//cierre documento con teclado esc
/*document.addEventListener("keydown", keyScape);
function keyScape(evt) {
  const keyUser = evt.key;
  if (keyUser === "Escape" && "popup_opened") {
    closePopUp();
    closePopUpCard();
    closePopUpImage();
    evt.target.removeEventListener("keydown", keyScape);
  }
}*/
//eventos de cerrar popup con un click en el popup
//cierre ventana con clic en la superposicion
/*const popUpOverlayList = Array.from(
  document.querySelectorAll(".popup__overlay")
);
popUpOverlayList.forEach((popUpOverlayElement) => {
  popUpOverlayElement.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("popup__overlay")) {
      closePopUp();
      closePopUpCard();
      closePopUpImage();
    }
  });
});*/
