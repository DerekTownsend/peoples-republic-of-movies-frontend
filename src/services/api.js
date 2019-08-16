const API_LINK = "http://localhost:3000/"
// const API_LINK = "https://prmovies-backend.herokuapp.com/"
export default {

  fetchMovies: (pageNumber) => {
    return fetch(`${API_LINK}movies?page=${pageNumber}`)
    .then(resp => resp.json())
  },
  fetchMovie: (id) => {
    return fetch(`${API_LINK}movies/${id}`)
    .then(resp => resp.json())
  },
  searchMovies: (term) =>{
    // 'Authorization': `Bearer ${localStorage.getItem("user")}`,
    let reqObj = {
        method: 'POST',
        headers: {
          'Content-Type':'application/json',
          'Accept':'application/json'
        },
        body: JSON.stringify(term)
      }
      // ?page=${pageNumber}
    return fetch(`${API_LINK}search`,reqObj)
    .then(resp => resp.json())
  },
  fetchActor: (id) => {
    return fetch(`${API_LINK}actors/${id}`)
    .then(resp => resp.json())
  },
  fetchGenre: (id, pageNumber) => {
    return fetch(`${API_LINK}genres/${id}?page=${pageNumber}`)
    .then(resp => resp.json())
  },
  fetchUser: (bodyObj) =>{
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(bodyObj)
    }

    return fetch(`${API_LINK}api/v1/login`, reqObj)
      .then(resp => resp.json())
  },
  createUser: (bodyObj) =>{
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(bodyObj)
    }
    return fetch(`${API_LINK}api/v1/users`, reqObj)
      .then(resp => resp.json())
  },
  getUser: () =>{
    // console.log(localStorage.getItem("user"));
    const reqObj = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("user")}`
      }
    }

    return fetch(`${API_LINK}api/v1/profile`, reqObj)
      .then(resp => resp.json())
  },
  createComment: (bodyObj) =>{
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(bodyObj)
    }
    return fetch(`${API_LINK}comments`, reqObj)
      .then(resp => resp.json())
  },
  likeComment: (bodyObj) =>{
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(bodyObj)
    }
    return fetch(`${API_LINK}likes`, reqObj)
      .then(resp => resp.json())
  },
  unlikeComment: (id) =>{
    const reqObj = {
      method: 'DELETE'
    }
    return fetch(`${API_LINK}likes/${id}`, reqObj)
      .then(resp => resp.json())
  },
  favoriteMovie: (bodyObj) =>{
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(bodyObj)
    }
    return fetch(`${API_LINK}favorites`, reqObj)
      .then(resp => resp.json())
  },
  unfavoriteMovie: (id) =>{
    const reqObj = {
      method: 'DELETE'
    }
    return fetch(`${API_LINK}favorites/${id}`, reqObj)
      .then(resp => resp.json())
  },
  editComment: (bodyObj, id) =>{
    const reqObj = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(bodyObj)
    }
    return fetch(`${API_LINK}comments/${id}`, reqObj)
      .then(resp => resp.json())
  },
  deleteComment: (id) =>{
    const reqObj = {
      method: 'DELETE'
    }
    return fetch(`${API_LINK}comments/${id}`, reqObj)
      .then(resp => resp.json())
  },
  rateMovie: (bodyObj) =>{
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(bodyObj)
    }
    return fetch(`${API_LINK}ratings`, reqObj)
      .then(resp => resp.json())
  },
  editMovieRating: (bodyObj, id) =>{
    const reqObj = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(bodyObj)
    }
    return fetch(`${API_LINK}ratings/${id}`, reqObj)
      .then(resp => resp.json())
  },
  deleteRating: (id) =>{
    const reqObj = {
      method: 'DELETE'
    }
    return fetch(`${API_LINK}ratings/${id}`, reqObj)
      .then(resp => resp.json())
  },
  fetchUserMovies: (pageNumber) => {
    const reqObj = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("user")}`
      }
    }
    return fetch(`${API_LINK}api/v1/favorites?page=${pageNumber}`, reqObj)
      .then(resp => resp.json())
  },
  fetchUserComments: (pageNumber) => {
    const reqObj = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("user")}`
      }
    }
    return fetch(`${API_LINK}api/v1/comments?page=${pageNumber}`, reqObj)
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
