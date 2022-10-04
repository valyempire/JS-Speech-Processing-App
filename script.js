const button = document.getElementById("button");
const bubble = document.getElementById("speech");

let renderJoke = (joke) => {
  bubble.textContent = joke;
}

 let getJokes = async () => {
  const url =
    "https://v2.jokeapi.dev/joke/Programming,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
    

  let joke = "";

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.setup) {
      joke = `${data.setup} ... ${data.delivery}`;
    } else {
      joke = data.joke;
    }
  } catch (e) {
    console.log(e);
  }

  renderJoke(joke);

  tellMeAJoke(joke)
}


let tellMeAJoke = (joke) => {
  VoiceRSS.speech({
    key: '97c7fcb097794a3dbe562b84f4044a6c',
    src: joke,
    hl: 'en-us',
    v: 'Linda',
    r: 0, 
    c: 'mp3',
    f: '44khz_16bit_stereo',
    ssml: false
});
}

button.addEventListener("click", getJokes);
