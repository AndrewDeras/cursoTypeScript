type VerifyUserFn = (user: User, sentValue: User) => boolean;

type User = { name: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return user.name === sentValue.name && user.password === sentValue.password;
};

const bdUser = { name: 'Andrew', password: '123' };
const sentUser = { name: 'Andrew', password: '123' };
const loggedIn = verifyUser(bdUser, sentUser);

console.log(loggedIn);
