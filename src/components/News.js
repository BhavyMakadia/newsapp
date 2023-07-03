// Import necessary dependencies and components
import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

// Function to capitalize the first letter of a string
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export class News extends Component {
  // Default props for the component
  static defaultProps = {
    country: 'in',
    pageSize: '6',
    category: 'general'
  }

  // Prop types for the component
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  // Initialize articles array
  articles = [];

  constructor(props) {
    super(props);
    console.log("Hello cons");
    this.state = {
      articles: [],
      page: 1,
      totalResults: 0
    }
    document.title = `${capitalizeFirstLetter(this.props.category)}-News Grow`;
  }

  // Function to update news articles
  async updateNews() {
    console.log("cdm");

    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3b160a1ed4ed48b7b987d8c5c559ed4e&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    this.setState({ loading: true });

    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
  }

  // Function to fetch more data for infinite scrolling
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    console.log("cdm");

    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3b160a1ed4ed48b7b987d8c5c559ed4e&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    this.setState({ loading: true });

    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false
    });
  };

  async componentDidMount() {
    /* console.log("cdm");
 
     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3b160a1ed4ed48b7b987d8c5c559ed4e&page=1&pageSize=${this.props.pageSize}`;
 
     this.setState({ loading: true })
 
     let data = await fetch(url);
     let parsedData = await data.json()
     console.log(parsedData);
     this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })*/
    this.updateNews();
  }

  // Function to handle previous button click
  handlePreviousClick = async () => {
    /* ----------if we call update function, we don't need to code again in this component
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3b160a1ed4ed48b7b987d8c5c559ed4e&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;

    this.setState({ loading: true });

    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    });*/
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  }

  // Function to handle next button click
  handleNextClick = async () => {
    /* console.log("Next")
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3b160a1ed4ed48b7b987d8c5c559ed4e&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;

    if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

    } else {
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({ articles: parsedData.articles });

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      });
    }*/
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  }

  render() {
    return (
      <div className='container my-3 ' >
        <h1 className='text-center' style={{margin:'35px 0px'}}>News Grow {capitalizeFirstLetter(this.props.category)}</h1>

        {/* Display a spinner while loading */}
        {/* {this.state.loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}  // Length of articles
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<div className="d-flex justify-content-center"> {/* Center the spinner */}
          {this.state.loading && <Spinner />}
        </div>}
        >
          <div className="container">
            <div className='row'>
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4 my-3" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 40) : ""}
                      description={element.description ? element.description.slice(0, 88) : ""}
                      imageurl={element.urlToImage ? element.urlToImage : "https://www.livemint.com/lm-img/img/2023/06/25/600x338/09e0689a-8d89-11eb-afe3-8cef4ccbbd72_1622419217618_1687696282734.jpg"}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>

        {/* Previous and Next buttons */}
        {/* <div className="container">
          <div className="d-flex justify-content-between">
            <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
          </div>
        </div> */}
      </div>
    );
  }
}

export default News;
