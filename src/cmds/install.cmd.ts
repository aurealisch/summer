import { program } from "commander";
import BinInstaller from "../svcs/BinInstaller";
import parseDest from "../svcs/parseDest";

program.command("install <dest>").action(async (dest: string) => {
  await new BinInstaller({
    ...parseDest(dest),
  }).installBin();
});
