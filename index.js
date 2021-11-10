// In submitData, write a valid POST request to http://localhost:3000/users using fetch().
// The destination URL
// Headers for 'Content-Type' and 'Accept', both set to 'application/json'
// A body with the name and email passed in as arguments to submitData. These should be assigned to name and email keys within an object. This object should then be stringified.

const body = document.getElementsByTagName("body")[0];

function submitData(userName, userEmail) {
  const configObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: userName,
      email: userEmail,
    }),
  };

  return fetch("http://localhost:3000/users", configObject)
    .then((response) => response.json())
    .then((body) => addNewContact(body.id))

    .catch(function (error) {
      // get error.message
      let message = error.message;
      // append message to DOM
      body.innerHTML = message;
    });
}

function addNewContact(newID) {
  body.innerHTML = newID;
}

submitData("Name", "name@name.com");
