//Example fetch using pokemonapi.co
// document.querySelector('button').addEventListener('click', getFetch)

// function getFetch(){
//   const choice = document.querySelector('input').value.toLowerCase()
//   const url = `https://pokeapi.co/api/v2/pokemon/${choice}`

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }

// LDg88wecrHOgDFaRPqi7r62mBDQH5vtqbGtfVgh7

document.querySelector('.hit').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://api.nasa.gov/planetary/apod?api_key=LDg88wecrHOgDFaRPqi7r62mBDQH5vtqbGtfVgh7&date=${choice}`

  document.querySelector('img').src = '';
  document.querySelector('iframe').src = '';

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if (data.media_type === 'image'){
          document.querySelector('img').style.display = 'block'; // Show img element
          document.querySelector('iframe').style.display = 'none'; // Hide iframe element
          document.querySelector('img').src = data.hdurl
        }
        else if (data.media_type === 'video'){
          document.querySelector('img').style.display = 'none'; // Hide img element
          document.querySelector('iframe').style.display = 'block'; // Show iframe element
          document.querySelector('iframe').src = data.url
        }

        document.querySelector('.img').style.display = 'block';

        document.querySelector('h3').innerHTML = data.title
        document.querySelector('p').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}