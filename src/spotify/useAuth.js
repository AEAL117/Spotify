import { useState, useEffect } from "react"
import axios from "axios"

export default function useAuth(code) {
  const [accessToken, setAccessToken] = useState()
  const [refreshToken, setRefreshToken] = useState()
  const [expiresIn, setExpiresIn] = useState()
  const headers = {
    'Origin': 'https://lit-peak-03459.herokuapp.com'
  }

  useEffect(() => {
    console.log("Token de URL "+code);
    axios
      .post("https://powerful-springs-68741.herokuapp.com/https://lit-peak-03459.herokuapp.com/login", {
        code,headers: headers
      })
      .then(res => {
        setAccessToken(res.data.accessToken)
        setRefreshToken(res.data.refreshToken)
        setExpiresIn(res.data.expiresIn)
        window.history.pushState({}, null, "/")
      })
      .catch(() => {
        
      })
  }, [code])

  useEffect(() => {
    if (!refreshToken || !expiresIn) return
    const interval = setInterval(() => {
      axios
        .post("https://powerful-springs-68741.herokuapp.com/https://lit-peak-03459.herokuapp.com/refresh", {
          refreshToken, headers: headers
        })
        .then(res => {
          setAccessToken(res.data.accessToken)
          setExpiresIn(res.data.expiresIn)
        })
        .catch(() => {
          window.location = "/"
        })
    }, (expiresIn - 60) * 1000)

    return () => clearInterval(interval)
  }, [refreshToken, expiresIn])

  return accessToken
}
