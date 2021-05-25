import React, {useState} from 'react';
import ReactCardFlip from 'react-card-flip';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal'
import {Button} from 'react-bootstrap';
import LinesEllipsis from 'react-lines-ellipsis'


const FlipCard = (props) => {
	const [isFlipped, setIsFlipped] = useState(false);
  const [modalShow, setModalShow] = useState(false);
    return (
	<ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className='front' onMouseOver={()=>setIsFlipped(true)}>
          <img className="card-image" src={props.value.img} />
        </div>

        <div className='back' onMouseOut={()=>setIsFlipped(false)}>
        <h4 className="card-title">{props.value.title}</h4>
          <LinesEllipsis
            text={props.value.des}
            maxLine='8'
            ellipsis='...'
            trimRight
            basedOn='letters'
            className="card-des"
          />
           <Button variant="primary" onClick={() => setModalShow(true)} onMouseOver={()=>setIsFlipped(true)}>
              Comments
            </Button>

            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              comments = {props.value.comments}
            />
        </div>
      </ReactCardFlip>
		
    );
};

export default FlipCard;