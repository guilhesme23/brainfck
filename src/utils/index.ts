import fs from 'fs'

export function changeValue(value: number, limit: number): number {
  let result = value % limit;
  if (result < 0) {
    return result + limit;
  } else {
    return result;
  }
}

export function getChar() {
  let buffer = Buffer.alloc(1)
  fs.readSync(0, buffer)
  return buffer.toString('ascii')
}