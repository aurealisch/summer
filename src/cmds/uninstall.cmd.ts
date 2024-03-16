import { program } from "commander";
import BinExeUninstaller from "../services/BinExeUninstaller";
import parseDestination from "../services/parseDestination";

program
  .command("uninstall <destination>")
  .action(async (destination: string) => {
    await new BinExeUninstaller({
      ...parseDestination(destination),
    }).uninstallBinExe();
  });
