export function deepCopy(obj: object): object {
  return JSON.parse(JSON.stringify(obj));
}
export interface GetKeyPathInterface {
  json: any;
  path?: string;
}
// export function getKeyPath(arg: GetKeyPathInterface): string[] {
//   let keyList: string[] = [];
//   for (let k in arg.json) {
//     let p = arg.path ? arg.path + '-' + k : k;
//     keyList.push(p);
//     if (typeof arg.json[k] === 'object') {
//       keyList = keyList.concat(getKeyPath({
//         json: arg.json[k],
//         path: p
//       }));
//     }
//   }
//   return keyList
// }
export function getKeyPath(json: any = {}, path?: string): string[] {
  let keyList: string[] = [];
  for (let k in json) {
    let p = path ? path + '-' + k : k;
    keyList.push(p);
    if (typeof json[k] === 'object') {
      keyList = keyList.concat(getKeyPath({
        json: json[k],
        path: p
      }));
    }
  }
  return keyList
}
export default {
  deepCopy,
  getKeyPath
}
