/**
 * Replace Special Character and Return Text as Ucword case
 * @param {string} text
 * @return {string} text
 */
const Ucword = text =>
  String(text)
    .toLowerCase()
    .replace(/[^a-zA-Z0-9-]/g, '  ')
    .replace(/\b[a-z]/g, text => text.toUpperCase())

const textOnly = (text, limit = 0, except = ' ...') => {
  if (text.length > 100) {
    return (
      text
        .split(/<\s*p[^>]*>([^<]*)<\s*\/\s*p\s*>/)
        .filter(v => v.length > 100)[0]
        .replace(/<[^>]+>/g, '')
        .replace(/i&#x27;m/g, '')
        .substring(0, limit) + except
    )
  }
  return text.replace(/<[^>]+>/g, '').substring(0, limit) + except
}

const dateFormat = 'DD/MM/YYYY HH:mm:ss A'

export { Ucword as ucword, dateFormat, textOnly }
