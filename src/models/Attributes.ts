//T is interface like USerProps, K is one of keys in that interface, T[K] is type assigned to each key

// interface UserProps {
//   name: string;
//   age: number;
//   id: number;
// }

export class Attributes<T> {
  constructor(private data: T) {}
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };
  set(update: T): void {
    Object.assign(this.data, update);
  }
}
// const attrs = new Attributes<UserProps>({name: 'efserg', age: 12, id: 1})
// attrs.get('name')
