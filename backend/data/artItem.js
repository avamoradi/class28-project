//error: puppeteer doesn't run on a client side app
const puppeteer = require('puppeteer')

//get the info from one art item:
async function scrapeProduct(url) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(url)

  const [elImg] = await page.$x(
    '//*[@id="__next"]/div/div/div[1]/div[1]/div/div[1]/div[1]/img'
  )
  const srcImg = await elImg.getProperty('src')
  const imgURL = await srcImg.jsonValue()

  const [elTitle] = await page.$x(
    '//*[@id="__next"]/div/div/div[1]/div[2]/div/div[1]'
  )
  const txtTitle = await elTitle.getProperty('textContent')
  const title = await txtTitle.jsonValue()

  const [elArtist] = await page.$x(
    '//*[@id="__next"]/div/div/div[1]/div[2]/div/p[1]/a'
  )
  const txtArtist = await elArtist.getProperty('textContent')
  const artist = await txtArtist.jsonValue()

  const [elCountry] = await page.$x(
    '//*[@id="__next"]/div/div/div[1]/div[2]/div/p[2]'
  )
  const txtCountry = await elCountry.getProperty('textContent')
  const country = await txtCountry.jsonValue()

  const [elType] = await page.$x(
    '//*[@id="__next"]/div/div/div[1]/div[2]/div/p[3]'
  )
  const txtType = await elType.getProperty('textContent')
  const type = await txtType.jsonValue()

  const [elPrice] = await page.$x(
    '//*[@id="__next"]/div/div/div[1]/div[2]/div/div[3]/div[1]/div'
  )
  const txtPrice = await elPrice.getProperty('textContent')
  const price = await txtPrice.jsonValue()

  const [elDescription] = await page.$x('//*[@id="__next"]/div/div/div[3]/p[2]')
  const txtDescription = await elDescription.getProperty('textContent')
  const description = await txtDescription.jsonValue()

  const [elKeywords] = await page.$x(
    '//*[@id="__next"]/div/div/div[3]/div[1]/div'
  )
  const txtKeywords = await elKeywords.getProperty('textContent')
  const keywords = await txtKeywords.jsonValue()

  const [elStyles] = await page.$x(
    '//*[@id="__next"]/div/div/div[3]/div[3]/div'
  )
  const txtStyles = await elStyles.getProperty('textContent')
  const styles = await txtStyles.jsonValue()

  console.log({
    imgURL,
    title,
    artist,
    country,
    type,
    price,
    description,
    keywords,
    styles,
  })

  browser.close()
}

scrapeProduct(
  'https://www.saatchiart.com/art/Painting-English-Rose/1162/7730580/view'
)
