const popup = document.querySelector(".popup");
const copy = popup.querySelector(".copybtn");
const input = popup.querySelector("input");
const field = popup.querySelector(".field");

copy.onclick = () => {
  input.select();
  if (document.execCommand("copy")) {
    field.classList.add("active");
    copy.innerText = "Copied";
    setTimeout(() => {
      field.classList.remove("active");
      copy.innerText = "Copy";
      window.getSelection().removeAllRanges();
    }, 3000);
  }
};
