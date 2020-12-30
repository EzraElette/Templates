document.addEventListener("DOMContentLoaded", async () => {
  let templates = await Templates.init();
  document.body.innerHTML = templates.main();
});