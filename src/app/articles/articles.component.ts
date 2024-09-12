import { Component } from '@angular/core';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})


export class ArticlesComponent {
  articles : Article[] = []

  getData = async () => {
    console.log("API called")
    await fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=5&tags=under_30_minutes', {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'tasty.p.rapidapi.com',
        'x-rapidapi-key': '2abe3342b4msh5b5375d9506f7c1p1e5b55jsn0afaad8fc9aa'
      }
    })
    .then(response => response.json())
    .then(data => {
      for (let i = 0; i < data.results.length; i++) {
        this.articles.push(new Article(data.results[i].name, data.results[i].created_at, data.results[i].thumbnail_url, data.results[i].video_url, data.results[i].description, data.results[i].id))
      }
    })
    .catch(error => console.error(error));
  }
}

class Article {
  title: string
  date: string
  thumbnail: string
  video: string
  description: string
  id: number

  /**
   * Creates a new Article object
   * @param title The title of the article
   * @param date The date of the article
   * @param thumbnail The thumbnail image of the article
   * @param video The video url of the article
   * @param description The description of the article
   * @param id The id of the article
   */
  constructor(title: string, date: number, thumbnail: string, video: string, description: string, id: number) {
    this.title = title
    this.date = new Date(date * 1000).toLocaleString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})
    this.thumbnail = thumbnail
    this.video = video
    this.description = description
    this.id = id
  }
}