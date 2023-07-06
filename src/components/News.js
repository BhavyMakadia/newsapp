// Import necessary dependencies and components
import React, {useEffect,useState} from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

// Function to capitalize the first letter of a string

const News =(props)=>{
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
    
const [articles, setArticles] = useState([])

const [loading, setLoading] = useState(true)
const [page, setPage] = useState(1)
const [totalResults, setTotalResults] = useState(0)
document.title = `${capitalizeFirstLetter(props.category)}-News Grow`;
  
/*  this is for class base componenet  constructor(props) {
    super(props);
    console.log("Hello cons");
    this.state = {
      articles: [],
      page: 1,
      totalResults: 0
    }
    document.title = `${capitalizeFirstLetter(props.category)}-News Grow`;
  }
*/
  // Function to update news articles
   const  updateNews=async()=> {
    props.setProgress(10);
    console.log("cdm");
//in api==${props.apikey}
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3b160a1ed4ed48b7b987d8c5c559ed4e&page=${page}&pageSize=${props.pageSize}`;

   // this.setState({ loading: true });
    setLoading(true)
    props.setProgress(30);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    props.setProgress(60);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
   /* this use in classbase component
   this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });*/
    props.setProgress(100);
    
  }

  // Function to fetch more data for infinite scrolling
   const fetchMoreData = async () => {
    //this.setState({ page: this.state.page + 1 });
     console.log("cdm");

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3b160a1ed4ed48b7b987d8c5c559ed4e&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
  
    //this.setState({ loading: true });
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
   /* this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false
    });*/
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };
  //when this change then it affects
useEffect(() => {
  updateNews();
   // eslint-disable-next-line
}, [])
 /* // Function to handle previous button click
 const handlePreviousClick = async () => {
    /* ----------if we call update function, we don't need to code again in this component
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3b160a1ed4ed48b7b987d8c5c559ed4e&page=${this.state.page - 1}&pageSize=${props.pageSize}`;

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
  //  this.setState({ page: this.state.page - 1 });
  //this for functionbase   setPage(page-1)
    //updateNews();
 /* }

  // Function to handle next button click
 const handleNextClick = async () => {
    /* console.log("Next")
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3b160a1ed4ed48b7b987d8c5c559ed4e&page=${this.state.page + 1}&pageSize=${props.pageSize}`;

    if (this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)) {

    } else {
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({ articles: parsedData.articles });
 setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      });
    }*/
    //for classbase componenet this.setState({ page: this.state.page + 1 });
  // this for functionbase  setPage(page+1)
    //this.updateNews();
//  }


    return (
      <div className='container my-3 ' >
        <h1 className='text-center' style={{margin:'35px 0px', marginTop: '90px'}}>News Grow {capitalizeFirstLetter(props.category)}Headlines</h1>

        {/* Display a spinner while loading */}
        {/* {this.state.loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={articles.length}  // Length of articles
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<div className="d-flex justify-content-center"> {/* Center the spinner */}
          {loading && <Spinner />}
        </div>}
        >
          <div className="container">
            <div className='row'>
              {articles.map((element) => {
                return (
                  <div className="col-md-4 my-3" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 40) : ""}
                      description={element.description ? element.description.slice(0, 88) : ""}
                      imageurl={element.urlToImage ? element.urlToImage : "https://www.livemint.com/lm-img/img/2023/06/25/600x338/09e0689a-8d89-11eb-afe3-8cef4ccbbd72_1622419217618_1687696282734.jpg"}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </InfiniteScroll>

        {/* Previous and Next buttons */}
        {/* <div className="container">
          <div className="d-flex justify-content-between">
            <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
          </div>
        </div> */}
      </div>
    )
  
}
// Default props for the component
// for class base componet static defaultProps = {
 News.defaultProps = {
    country: 'in',
  pageSize: '6',
  category: 'general'
}

// Prop types for the component
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}
export default News;
