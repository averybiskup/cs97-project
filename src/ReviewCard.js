import './App.css'

let ReviewCard = (props) => {
    return (
        <div className='review'>
                <div className='title'>Title: {props.review.title}</div>
                <div className='author'>Author: {props.review.author}</div>
                <div className='rating'>Rating: {props.review.rating}</div>
                <div className='body'>Body: 
                  <textarea id="body" name="w3review" rows="4" cols="80">
                    {props.review.body}
 				 </textarea>
				</div>
        </div>
    );
}

export default ReviewCard;
