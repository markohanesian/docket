// Your API key is: 701157776827481988e23accca272ebc

// Change YOUR_API_KEY_HERE to your apiKey
const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=701157776827481988e23accca272ebc";

export default async function getNews() {
  let result = await fetch(url)
  let data = await response.json();
    console.log(data)
  return data.articles;
}