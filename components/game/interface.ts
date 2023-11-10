interface Data {
  "categories": ICategory[],
  "coming_soon":boolean,
  "release_date": string, // or number (timestamp)?
  "score": number,
  "developers": string[],
  "publishers": string[],
  "about_the_game": string,
  "packages": IPackage[],
  "news": INews[],
}

interface ICategory {
  "id": number, 
  "description": string 
}

interface IPackage {
  "packageid": number,
  "title": string,
  "price": number,
  "sale_price": number,
  "discont_percentage":number,
  "description": string
}

interface INews {
  "news_id": number,
  "url": string,
  "title": string,
  "image": string,
  "timestamp": number,
  "author": string,
  "content": string
}