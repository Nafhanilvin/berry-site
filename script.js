const btnI = document.getElementById("btn-i");
const btnSee = document.getElementById("btn-see");
const btnYou = document.getElementById("btn-you");
const revealBtn = document.getElementById("reveal-btn");
const introCard = document.getElementById("intro-card");
const revealCard = document.getElementById("reveal-card");
const backButton = document.getElementById("back-btn");
const noteButton = document.getElementById("note-btn");
const noteModal = document.getElementById("note-modal");
const closeModalButton = document.getElementById("close-modal-btn");
const imageModal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-image");
const closeImageModalButton = document.getElementById("close-image-modal-btn");
const textModal = document.getElementById("text-modal");
const closeTextModalButton = document.getElementById("close-text-modal-btn");

const openImageModal = (imageSrc, altText) => {
  modalImage.src = imageSrc;
  modalImage.alt = altText;
  imageModal?.classList.remove("hidden");
  imageModal?.setAttribute("aria-hidden", "false");
};

const closeImageModal = () => {
  imageModal?.classList.add("hidden");
  imageModal?.setAttribute("aria-hidden", "true");
};

const openTextModal = () => {
  textModal?.classList.remove("hidden");
  textModal?.setAttribute("aria-hidden", "false");
};

const closeTextModal = () => {
  textModal?.classList.add("hidden");
  textModal?.setAttribute("aria-hidden", "true");
};

btnI?.addEventListener("click", () => openImageModal("images/eye3.jpg", "Eye 3"));
btnSee?.addEventListener("click", openTextModal);
btnYou?.addEventListener("click", () => openImageModal("images/eye2.JPG", "Eye 2"));

revealBtn?.addEventListener("click", () => {
  introCard?.classList.add("hidden");
  revealCard?.classList.remove("hidden");
});

backButton?.addEventListener("click", () => {
  revealCard?.classList.add("hidden");
  introCard?.classList.remove("hidden");
  noteModal?.classList.add("hidden");
  noteModal?.setAttribute("aria-hidden", "true");
});

noteButton?.addEventListener("click", () => {
  noteModal?.classList.remove("hidden");
  noteModal?.setAttribute("aria-hidden", "false");
});

closeModalButton?.addEventListener("click", () => {
  noteModal?.classList.add("hidden");
  noteModal?.setAttribute("aria-hidden", "true");
});

closeImageModalButton?.addEventListener("click", closeImageModal);
closeTextModalButton?.addEventListener("click", closeTextModal);

noteModal?.addEventListener("click", (event) => {
  if (event.target === noteModal) {
    noteModal.classList.add("hidden");
    noteModal.setAttribute("aria-hidden", "true");
  }
});

imageModal?.addEventListener("click", (event) => {
  if (event.target === imageModal) {
    closeImageModal();
  }
});

textModal?.addEventListener("click", (event) => {
  if (event.target === textModal) {
    closeTextModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    noteModal?.classList.add("hidden");
    noteModal?.setAttribute("aria-hidden", "true");
    closeImageModal();
    closeTextModal();
  }
});
