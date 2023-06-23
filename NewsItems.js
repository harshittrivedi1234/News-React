// import React, { Component } from 'react'
// import PropTypes from 'prop-types'

// export class NewsItems extends Component {
    
 

//   render() {
//     let {title,description,imageUrl,newsUrl,author,date,source}=this.props;
//     return (
//       <div className="my-3">
//         <div className="card">
//           <div style={{
//             display: 'flex',
//             justifyContent: 'flex-end',
//             position: 'absolute',
//             right: '0'
                     
//         }}>
//           <span className="badge rounded-pill bg-danger"> {source}</span>

//           </div>
        
//   <img src={!imageUrl?"https://duet-cdn.vox-cdn.com/thumbor/0x0:3000x2000/640x427/filters:focal(1500x1000:1501x1001):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/23926010/acastro_STK050_01.jpg":imageUrl} className="card-img-top" alt="..."/>
//   <div className="card-body">
//     <h5 className="card-title">{title} </h5>
//     <p className="card-text">{description}</p>
//     <p className="card-text"><small className="text-muted">By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
//     <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
//   </div>
// </div>
//       </div>
//     )
//   }
// }

// export default NewsItems

import React from 'react'


const NewsItems = (props) => {
    
    let {title,description,imageUrl,newsUrl,author,date,source}=props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0'
                     
        }}>
          <span className="badge rounded-pill bg-danger"> {source}</span>

          </div>
        
  <img src={!imageUrl?"https://duet-cdn.vox-cdn.com/thumbor/0x0:3000x2000/640x427/filters:focal(1500x1000:1501x1001):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/23926010/acastro_STK050_01.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title} </h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
  </div>
</div>
      </div>
    )
  
}

export default NewsItems

