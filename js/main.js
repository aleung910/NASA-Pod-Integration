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

document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://api.nasa.gov/planetary/apod?api_key=LDg88wecrHOgDFaRPqi7r62mBDQH5vtqbGtfVgh7&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if (data.media_type ==='image'){

        // document.getElementById('.img').style.backgroundImage = `url('${data.hdurl}')`

        document.querySelector('img').src = data.hdurl
        }
        else if (data.media_type ==='video'){
          document.querySelector('iframe').src = data.url
        }
        document.querySelector('h2').innerHTML=data.title
        document.querySelector('p').innerText=data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
