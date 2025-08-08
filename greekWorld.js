if (!document.getElementById("medusa-eye")) {
  const eye = document.createElement("div");
  eye.id = "medusa-eye";
  eye.style.cssText = `
    position: fixed;
    top: 40%;
    left: 45%;
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, red, darkred);
    border-radius: 50%;
    z-index: 99999;
    transition: box-shadow 0.3s ease;
    cursor: pointer;
  `;

  eye.addEventListener("mouseenter", () => {
    eye.style.boxShadow = "0 0 30px 15px gold";

    setTimeout(() => {
      const event = new Event("ENTER_GREEK_WORLD");
      window.dispatchEvent(event);
    }, 3000);
  });

  eye.addEventListener("mouseleave", () => {
    eye.style.boxShadow = "none";
  });

  document.body.appendChild(eye);
}
