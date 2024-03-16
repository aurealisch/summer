import type { Opts } from "../types";

const regExp = new RegExp(
  /(?<owner>[A-Za-z0-9]*)\/(?<repo>[A-Za-z0-9]*)@?(?<ref>[A-Za-z0-9]*)/
);

export default function parseDest(dest: string): Opts {
  const res = dest.match(regExp);

  if (res === null) {
    throw Error("");
  }

  const groups = res.groups;

  if (groups === undefined) {
    throw Error("");
  }

  return JSON.parse(JSON.stringify(groups));
}
