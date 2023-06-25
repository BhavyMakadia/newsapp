//rce
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
export class News extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: '6',
    category: 'general'

  }
  static propsTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  articles = [];
  constructor() {
    super();
    console.log("HEllo cons");
    this.state = {
      articles: [],

      page: 1

    }
  }

  async componentDidMount() {
    console.log("cdm");

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3b160a1ed4ed48b7b987d8c5c559ed4e&page=1&pageSize=${this.props.pageSize}`;

    this.setState({ loading: true })

    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
  }


  handlePreviousClick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3b160a1ed4ed48b7b987d8c5c559ed4e&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;

    this.setState({ loading: true })

    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({ articles: parsedData.articles })

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    })
  }



  handleNextClick = async () => {
    console.log("Next")
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3b160a1ed4ed48b7b987d8c5c559ed4e&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;

    if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

    }

    else {
      this.setState({ loading: true })
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({ articles: parsedData.articles })

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles, loading: false
      })
    }
  }




  render() {

    return (
      <div className='container my-3 '>

        <h1>News Grow</h1>
        {this.state.loading && <Spinner />}
        <div className='row'>
          {
            this.state.articles.map((element) => {
              return <div className="col-md-4 my-3" key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 88) : ""}
                  imageurl={element.urlToImage ? element.urlToImage : "https://image.cnbcfm.com/api/v1/image/107257944-1686871334383-gettyimages-1258302640-JAPAN_BOJ.jpeg?v=1686873160&w=1920&h=1080"} newsUrl={element.url}  author={element.author} 
                  date={element.publishedAt}/>
              </div>
            })}
        </div>
        <div className="container">
          <div className="d-flex justify-content-between">
            <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button></div>
        </div>
      </div>
    )
  }
};

export default News