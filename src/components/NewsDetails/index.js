import React from 'react';

const NewsDetails =(props)=> {

        return(
               [
                   <tr>
                        <th scope="row"></th>
                        <td>{props.author}</td>
                        <td>{props.title}</td>
                        <td>{props.description}</td>
                        <td>{props.urlToImage}</td>
                        <td>{props.published_at}</td>
                        <td>{props.created_at}</td>
                        <td>{props.publishedDate}</td>
                    </tr>
               ]
        )
}

export default NewsDetails;