import React, { Component } from 'react'
import NewItems from '../component/NewItems'
import Spinner from './Spinner';
import PropsTypes from 'prop-types'
export class News extends Component {

  static defaultProps = {
    country: 'in',
    category: 'general'
  }

  static propTypes = {
    country: PropsTypes.string,
    category: PropsTypes.string
  }
  captilizeTitle=(title)=>{
    return title.charAt(0).toUpperCase()+title.slice(1)
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false, page: 1
    }
    document.title=this.captilizeTitle(this.props.category)+"-Category News"
  }
  async componentDidMount() {
    this.props.setProgress(0)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=800e004df1e4435d96de6b9455705e6a&page=1&pageSize=12`
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json()
    this.setState({ articles: parseData.articles, totalResults: parseData.totalResults, loading: false })
    this.props.setProgress(100)
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=800e004df1e4435d96de6b9455705e6a&page=${this.state.page - 1}&pagesize=12`
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData.articles)
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
      loading: false
    })
  }

  handleNextClick = async () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / 12))) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=800e004df1e4435d96de6b9455705e6a&page=${this.state.page + 1}&pagesize=11`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parseData = await data.json();
      console.log(parseData.articles)
      this.setState({
        page: this.state.page + 1,
        articles: parseData.articles,
        loading: false
      })
    }
  }

  render() {
    return (
      <div className='container my-2'>
        <h1 className="text-center text-danger" style={{margin:"35px 0"}}>TOP {this.captilizeTitle(this.props.category.toUpperCase()) } HEADLINES</h1>
        {this.state.loading && <Spinner />}
        <div className="row ">
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-4 " key={element.url}><NewItems title={element.title.slice(0, 50)} description={element.description} imgurl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} /></div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr;Previous Page</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 12)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next Page &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
