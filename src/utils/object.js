/**
 * Compare 2 JSON Object
 * @params {object} x
 * @params {object} y
 * @return {bool}
 *
 * This function for simple json object compare
 * you can't compare specific JSON like NODE Or
 * Dom Object in JSON-Data.
 */
export const Equals = (x, y) => {
  return JSON.stringify(x) === JSON.stringify(y)
}

/**
 * @params {array} arrs
 * @params {string} prop as properties
 * @return {array} unique array data by prop
 */
export const uniqueArrayObject = (arrs, prop) => {
  return arrs.filter((obj, pos, arr) => {
    return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos
  })
}
