// const user = {
//     name: 'Martin',
//     age: 200,
//     readUser: function () {
//         console.log(this)
//     }
// }
/*
{
  age: 200,
  name: "Martin",
  readUser: function() {
    console.log(this)
  }
}
*/
// user.readUser();
const user = {
    name: 'Martin',
    age: 200,
    readUser: () => {
        console.log(this)
    }
}
user.readUser(); // this was pointing to the window object