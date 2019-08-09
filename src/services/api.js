const API_LINK = "http://localhost:3000/"
// const API_LINK = "https://sweet-n-salty-backend.herokuapp.com/"
export default {

  fetchMovies: (pageNumber) => {
    return fetch(`${API_LINK}movies?page=${pageNumber}`)
    .then(resp => resp.json())
  },
  fetchMovie: (id) => {
    return fetch(`${API_LINK}movies/${id}`)
    .then(resp => resp.json())
  },
  // newSnack: (bodyObj) =>{
  //   let reqObj = {
  //     method: 'POST',
  //     headers: {
  //       'Authorization': `Bearer ${localStorage.getItem("user")}`,
  //       'Content-Type':'application/json',
  //       'Accept':'application/json'
  //     },
  //     body: JSON.stringify(bodyObj)
  //   }
  //   return fetch(`${API_LINK}snacks`, reqObj).then(response => response.json())
  // },
}
