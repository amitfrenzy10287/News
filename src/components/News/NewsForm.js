import React from 'react';

const newsForm = (props)=>{
    return(
        <div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Author</label>
                    <input type="text" onChange={(e)=>props.handleChange(e,'author') }
                           value ={props.data.author}
                           className="form-control" id="inputEmail4" placeholder=""/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4">Title</label>
                    <input type="text"
                           value ={props.data.title}
                           onChange={(e)=>props.handleChange(e,'title')}
                           className="form-control" id="inputPassword4" placeholder=""/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Description</label>
                    <input type="text" onChange={(e)=>props.handleChange(e,'description') }
                           value ={props.data.description}
                           className="form-control" id="inputEmail4" placeholder=""/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4">UrlToImage</label>
                    <input type="text"
                           value ={props.data.urlToImage}
                           onChange={(e)=>props.handleChange(e,'urlToImage')}
                           className="form-control" id="inputPassword4" placeholder=""/>
                </div>
                <button type="button"
                        onClick={()=>props.handleSubmit()}
                        className="btn btn-primary">Submit</button>
            </div>
        </div>



    )
}

export default newsForm;