import React, { Component } from 'react'
import NewsItem from './NewsItem'
import monkey from "../monkey.jpg"
import Loader from './Loader';

export default class News extends Component {

    mainurl = `https://newsdata.io/api/1/latest?apikey=pub_1c9b0630410448bdaeb28b589cd1601b&country=in&&language=en&size=8`

    constructor() {
        super();
        this.state = {
            results: [],
            page: 1,
            pageSize: 10,
            url: `${this.mainurl}`,
            nextpage: null,
            query: "",
            loading: false
        };
    }

    async componentDidMount() {

        this.setState({loading: true})
        let data = await fetch(this.state.url);
        let parseData = await data.json();
        this.setState({
            results: parseData.results,
            nextpage: parseData.nextPage,
            loading: false
        });
    }

    async componentDidUpdate(prevProps) {
        if (prevProps.query !== this.props.query) {
            this.setState({loading: true})
            const url = `${this.mainurl}&q=${this.props.query}`

            
            let data = await fetch(url);
            let parseData = await data.json();
            
            this.setState({
                url: url,
                results: parseData.results || [],
                nextpage: parseData.nextPage,
                loading: false
            });

        }
    }

    // handlePrevious = async () => {
    //     let url = `${this.mainurl}&page=${this.state.page - 1}&pagesize=${this.state.pageSize}`;
    //     let data = await fetch(url);
    //     let parseData = await data.json();
    //     this.setState({
    //         results: parseData.results,
    //         page: this.state.page - 1
    //     });
    //     console.log(url);
        
    // }

    handleNext = async () => {
        this.setState({loading: true})
        let tempurl = `${this.state.url}&page=${this.state.nextpage}`;
        let data = await fetch(tempurl);
        let parseData = await data.json();
        this.setState({
            results: parseData.results,
            nextpage: parseData.nextPage,
            loading: false
        });
    } 

    render() {
        return (
            <div className="container my-3">
                <h2 className='container m-3'>Monkey News - Top HeadLines</h2>
                
                {this.state.loading && <Loader/>}

                <div className="row justify-content-center">
                    {!this.state.loading && this.state.results.map((element)=>{
                        return <div key={element.link} className="col-md-3 d-flex justify-content-center">
                                    <NewsItem imageurl={(element.image_url ? element.image_url : monkey)} title={element.title} description={element.description} url={element.link}/>
                                </div>
                    })}
                </div>
                <div className='container d-flex justify-content-end'>
                {/* <button disabled={this.state.nextpage === null} type="button" className="btn btn-primary" onClick={this.handlePrevious}>Previous</button> */}
                <button disabled={false} type="button" className="btn btn-primary" onClick={this.handleNext}>Next</button>
                </div>
            </div>
        )
    }
}
