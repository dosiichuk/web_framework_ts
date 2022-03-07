import { User } from './models/User';
import axios from 'axios';

const user = new User({ name: 'myname', age: 20 });
user.set({ id: 1, name: 'XXX', age: 1000 });
user.get('name');
user.on('change', () => {});

// axios.post('http://localhost:3000/users', {
//   name: 'myname',
//   age: 21,
// });

user.save();
