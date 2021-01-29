import puppeteer from 'puppeteer'
import scrapeProduct from './artItem.js'

//get the info from one art item:
const categories = [
  'https://www.saatchiart.com/paintings',
  'https://www.saatchiart.com/photography',
  'https://www.saatchiart.com/drawings',
  'https://www.saatchiart.com/sculpture',
]

async function scrapeItemsURL(array) {
  for (let index = 0; index < array.length; index++) {
    const artItem = array[index]
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(artItem)

    const [elURL1] = await page.$x(
      '//*[@id="__next"]/div/div/div[5]/div[2]/div[1]/div/div[2]/div[1]/div/p[1]/a'
    )
    const srcURL1 = await elURL1.getProperty('href')
    const URL1 = await srcURL1.jsonValue()
    const Obj1 = await scrapeProduct(URL1)

    const [elURL2] = await page.$x(
      '//*[@id="__next"]/div/div/div[5]/div[2]/div[2]/div/div[2]/div[1]/div/p[1]/a'
    )
    const srcURL2 = await elURL2.getProperty('href')
    const URL2 = await srcURL2.jsonValue()
    const Obj2 = await scrapeProduct(URL2)

    const [elURL3] = await page.$x(
      '//*[@id="__next"]/div/div/div[5]/div[2]/div[3]/div/div[2]/div[1]/div/p[1]/a'
    )
    const srcURL3 = await elURL3.getProperty('href')
    const URL3 = await srcURL3.jsonValue()
    const Obj3 = await scrapeProduct(URL3)

    const [elURL4] = await page.$x(
      '//*[@id="__next"]/div/div/div[5]/div[2]/div[3]/div/div[2]/div[1]/div/p[1]/a'
    )
    const srcURL4 = await elURL4.getProperty('href')
    const URL4 = await srcURL4.jsonValue()
    const Obj4 = await scrapeProduct(URL4)

    const arrayObj = {
      Obj1,
      Obj2,
      Obj3,
      Obj4,
    }

    console.log(arrayObj)
  }

  browser.close()
}

scrapeItemsURL(categories)

/*const scrapPerCategory = categories.map((category) => {
  console.log(category)
})*/

//scrapeItemsURL('https://www.saatchiart.com/paintings')
//scrapeItemsURL('https://www.saatchiart.com/photography')
//scrapeItemsURL('https://www.saatchiart.com/drawings')
//scrapeItemsURL('https://www.saatchiart.com/sculpture')
