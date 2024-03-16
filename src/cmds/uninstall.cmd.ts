import { program } from "commander";
import parseDestination from "../modules/parseDestination";
import uninstallBinExe from "../modules/uninstallBinExe";

program
  .command("uninstall <destination>")
  .action(async (destination: string) => {
    await uninstallBinExe({
      ...parseDestination(destination),
    });
  });
