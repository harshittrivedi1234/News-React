import React, { useEffect , useState} from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props)=> {

    const [articles, setArticles] = useState([])
    const [Spinners, setSpinners] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, settotalResults] = useState(0)
   


    
    const capitalletter =(string) =>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
       
   

    const newsupdate = async () =>{
        props.setProgress(10);
        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0d622ca3aa444a8ea9ca8519aefa4df9&page=${page}&pageSize=${props.pageSize}`;
        setSpinners(true)
        let data=await fetch(url);
        props.setProgress(30);
    let ParsedData=await data.json()
    props.setProgress(70);
    setArticles(ParsedData.articles)
    settotalResults(ParsedData.totalResults)
    setSpinners(false)
        
        props.setProgress(100);

    }

    
    useEffect(() =>{
        document.title=`${capitalletter(props.category)} - NewsMonkey`;  
        newsupdate(); 
        // eslint-disable-next-line
    }, [])



    const fetchMoreData =async () => {
        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0d622ca3aa444a8ea9ca8519aefa4df9&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1)
        let data=await fetch(url);
    let ParsedData=await data.json()
    setArticles(articles.concat(ParsedData.articles))
    settotalResults(ParsedData.totalResults)
        
        
      };
    
    return (
        <>
      
        <h1 className="text-center" style={{margin: '35px 0px' , marginTop:'90px'}}>Monkey-Top {capitalletter(props.category)} Headlines</h1>
        {Spinners && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next = {fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
            <div className="container">
        <div className="row">
             {articles.map((ele)=>{
                return <div className="col-md-4" key={ele.url}>
                <NewsItems title={ele.title ? ele.title:""} description={ele.description ? ele.description:""} imageUrl={ele.urlToImage} newsUrl={ele.url} author={ele.author} date={ele.publishedAt} source={ele.source.name}/>
                </div>


  })}
        </div>    
        </div>
        </InfiniteScroll>
        
    </>
    )
  
}

News.defaultProps = {
    country : 'in',
    pageSize : 8,
    category : 'general'

}

News.propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string

}

export default News


