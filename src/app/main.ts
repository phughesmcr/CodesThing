import { VERSION } from "../constants.ts";

function printIntro() {
  console.clear();
  const title = `CodesThing v${VERSION}.`;
  console.log(title);
  console.log(`${String("-").repeat(title.length)}`);
  console.log("");
}

export async function main(): Promise<void> {
  await printIntro();
  Deno.exit(0);
}
