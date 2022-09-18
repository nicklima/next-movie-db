import qs from "qs"

/**
 * Helper to get movie votes
 * @param {number} votes string votes to be converted
 * @returns {string} Formated votes
 */
export const getVotes = (votes: number): string => votes.toFixed(1)

/**
 * Helper to convert date
 * @param {string} date string date to be converted
 * @returns {string} Formated date
 */
export const getRelaseDate = (date: string): string => {
  const formatedDate = date.replaceAll("-", "/")
  // new Date(date).toLocaleString("default", {
  //   month: "long",
  //   day: "2-digit",
  //   year: "numeric",
  // })

  return formatedDate
}

/**
 * Get full image URL
 * @param {string} path Path of poster image
 * @returns {string} Full Image URL
 */

export const getApiImageUrl = (path: string, size?: number): string => {
  const imageDomain = `https://image.tmdb.org/t/p/${
    size ? `w${size}` : "original"
  }`
  return `${imageDomain}${path}`
}

/**
 * Get full API URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full API URL
 */

export const getApiUrl = (path: string): string => {
  const apiDomain = "https://api.themoviedb.org/3"
  return `${apiDomain}${path}`
}

/**
 * Helper to make GET requests to API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @returns Parsed API call response
 */

export const fetchAPI = async (path: string, urlParamsObject?: object) => {
  // Build request URL
  const queryString = qs.stringify(urlParamsObject)
  const requestUrl = `${getApiUrl(
    `/${path}?api_key=${process.env.api_key}${queryString && `&${queryString}`}`
  )}`

  // Trigger API call
  const response = await fetch(requestUrl)

  // Handle response
  if (!response.ok) {
    console.error(response.statusText)
    throw new Error(`An error occured please try again`)
  }
  const data = await response.json()
  return data
}
