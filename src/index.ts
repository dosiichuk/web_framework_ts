import { User } from './models/User';

const user = new User({ name: 'myname', age: 20 });
user.set({ name: 'newname', age: 999 });
user.get('name');
user.on('change', () => {});
