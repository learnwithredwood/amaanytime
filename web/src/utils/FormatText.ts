// import { secondsToMilliseconds } from 'date-fns'

export const FormatKeywords = (text: string): string => {
  // reference: https://stackoverflow.com/questions/38148361/javascript-find-hashtags-in-text-and-return-with-link

  // look for hashtags
  let formattedText = text.replace(/#(\w+)/g, '<a href="/tag/$1">#$1</a>')

  // look for users
  formattedText = formattedText.replace(
    /@(\w+)/g,
    '<a href="/profile/$1">@$1</a>'
  )
  return formattedText
}

interface IFormattedLink {
  short: string
  long: string
}

export const FormatLinks = (link: string): IFormattedLink => {
  const httpPattern = /(https?:\/\/)/g
  const wwwPattern = /(www.)/g

  const splitLink = link
    .replaceAll(' ', '') // remove spaces
    .split(httpPattern) // look for http or https
    .join('$')
    .split(wwwPattern) // look for www
    .join('$')
    .split('$')

  // remove empty array items
  const cleanLink = splitLink.filter((n) => n)

  // if the array is less than 2 slots, needs http added
  if (!cleanLink.some((e) => httpPattern.test(e))) {
    return {
      short: cleanLink.slice(-1)[0],
      long: `https://${cleanLink.join('')}`,
    }
  }

  return {
    short: cleanLink.slice(-1)[0], // return the domain part of the url
    long: cleanLink.join(''), // return the full string
  }
}

export const FormatThousands = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
