import {
  readFileStr,
  writeFileStr
} from "https://deno.land/std@v0.11.0/fs/mod.ts";

async function parseColors() {
  let text = await readFileStr("colors.html");
  let regex = /<td><a target="_blank" href="\/colors\/color_tryit\.asp\?color=(\w+)\s*">\w+\s*<\/a>&nbsp;<\/td>/g;
  let colors = [];
  while (true) {
    let result = regex.exec(text);
    if (result == null) break;
    colors.push(result[1]);
  }
  console.assert(colors.length > 0);
  let mod = `export default [ "${colors.join('", "')}" ] as const;`;
  await writeFileStr("mod.ts", mod);
}

parseColors();
