const getDataFromForm = () => {
    const requestObj
}

const requestJoke = async (first, last) => {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();

    const joke = data.value.replace(/Chuck Norris/gi, `${first} ${last}`);
    console.log(joke);
}

requestJoke("Clint", "Eastwood");
