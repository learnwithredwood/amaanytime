import { FormatKeywords, FormatLinks, FormatThousands } from './FormatText'

describe('Format Keywords', () => {
  it('Formats hashtags', () => {
    const data = '#saas'
    expect(FormatKeywords(data)).toBe('<a href="/tag/saas">#saas</a>')
  })

  it('Formats a Username', () => {
    const data = '@selfteachme'
    expect(FormatKeywords(data)).toBe(
      '<a href="/profile/selfteachme">@selfteachme</a>'
    )
  })
})

describe('Format Links', () => {
  it("Fixes itself when there's a space", () => {
    const url = 'http://self teach.me'
    expect(FormatLinks(url).short).toBe('selfteach.me')
    expect(FormatLinks(url).long).toBe('http://selfteach.me')
  })

  it('Formats url with http://', () => {
    const url = 'http://selfteach.me'
    expect(FormatLinks(url).short).toBe('selfteach.me')
    expect(FormatLinks(url).long).toBe('http://selfteach.me')
  })

  it('Formats url with https://', () => {
    const url = 'https://selfteach.me'
    expect(FormatLinks(url).short).toBe('selfteach.me')
    expect(FormatLinks(url).long).toBe('https://selfteach.me')
  })

  it('Formats url with www', () => {
    const url = 'www.selfteach.me'
    expect(FormatLinks(url).short).toBe('selfteach.me')
    expect(FormatLinks(url).long).toBe('https://www.selfteach.me')
  })

  it('Formats url with www and http', () => {
    const url = 'http://www.selfteach.me'
    expect(FormatLinks(url).short).toBe('selfteach.me')
    expect(FormatLinks(url).long).toBe('http://www.selfteach.me')
  })

  it('Formats url with nothing', () => {
    const url = 'selfteach.me'
    expect(FormatLinks(url).short).toBe('selfteach.me')
    expect(FormatLinks(url).long).toBe('https://selfteach.me')
  })
})

describe('Format Thousands', () => {
  it('Formats 3 digits', () => {
    expect(FormatThousands(456)).toBe('456')
  })

  it('Formats 4 digits', () => {
    expect(FormatThousands(4567)).toBe('4,567')
  })
})
