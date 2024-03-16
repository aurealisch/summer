export default function strToUint8Arr(str: string) {
  const arr = new Array<number>();

  for (let idx = 0; idx < str.length; idx++) {
    const codePoint = str.codePointAt(idx);

    if (codePoint === undefined) continue;

    if (codePoint < 0x80) {
      arr.push(codePoint);
    } else if (codePoint < 0x800) {
      arr.push(0xc0 | (codePoint >> 6), 0x80 | (codePoint & 0x3f));
    } else if (codePoint < 0x10000) {
      arr.push(
        0xe0 | (codePoint >> 12),
        0x80 | ((codePoint >> 6) & 0x3f),
        0x80 | (codePoint & 0x3f)
      );
    } else {
      idx++;

      arr.push(
        0xf0 | (codePoint >> 18),
        0x80 | ((codePoint >> 12) & 0x3f),
        0x80 | ((codePoint >> 6) & 0x3f),
        0x80 | (codePoint & 0x3f)
      );
    }
  }

  return new Uint8Array(arr);
}
