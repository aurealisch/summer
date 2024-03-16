import { program } from "commander";
import BinUninstaller from "../svcs/BinUninstaller";
import parseDest from "../svcs/parseDest";

program.command("uninstall <dest>").action(async (dest: string) => {
  await new BinUninstaller({
    ...parseDest(dest),
  }).uninstallBin();
});
