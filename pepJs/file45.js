function getStudentInfo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userObj = {
        name: "John",
        email: "john@gmail.com",
        age: 21,
      };
      resolve(userObj);
    }, 2000);
  });
}
function displayinfo({name}){  //destrecturing
    console.log(name);
}
async function main() {
  const result = await getStudentInfo();
  displayinfo(result);
  console.log("Program Completed Successfully");
}

main()

//getStudent should return object name, email and age
