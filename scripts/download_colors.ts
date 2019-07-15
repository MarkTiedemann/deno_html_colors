async function downloadColors() {
  let file = await Deno.open("colors.html", "w");
  let res = await fetch("https://www.w3schools.com/colors/colors_names.asp");
  console.assert(res.ok);
  await Deno.copy(file, res.body);
}

downloadColors();
