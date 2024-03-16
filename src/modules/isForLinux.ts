enum CharCode {
  E = 69,
  L = 76,
  F = 70,
}

export default function isForLinux(uint8arr: Uint8Array) {
  if (
    uint8arr[0] === 0x7f &&
    uint8arr[1] === CharCode.E &&
    uint8arr[2] === CharCode.L &&
    uint8arr[3] === CharCode.F
  ) {
    return true;
  }

  return false;
}
