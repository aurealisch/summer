import type { Opts } from "../types";

const regExp = new RegExp(
  /(?<owner>[A-Za-z0-9]*)\/(?<repo>[A-Za-z0-9]*)@?(?<ref>[A-Za-z0-9]*)/
);

export default function parseDestination(destination: string): Opts {
  const result = destination.match(regExp);

  if (result === null) {
    throw Error("");
  }

  const groups = result.groups;

  if (groups === undefined) {
    throw Error("");
  }

  return JSON.parse(JSON.stringify(groups));
}
