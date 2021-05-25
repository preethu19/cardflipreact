import React, {useState} from 'react';
import FlipCard from './FlipCard';

const Content = ()=>{
	let cards = [
	{id:1, title: "Title 1", des: "Description 1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", img:"https://picsum.photos/id/10/200/300", comments: [{id:1, comment: "Comment 1 of card 1", created_by: "user1"}, {id:2, comment: "Comment 2 of card 1", created_by: "user2"}, {id:3, comment: "Comment 3 of card 1", created_by: "user3"},{id:4, comment: "Comment 4 of card 1", created_by: "user4"}]
	},
	{id:2, title: "Title 2", des: "Description 2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", img:"https://picsum.photos/id/20/200/300",  comments: [{id:1, comment: "Comment 1 of card 2", created_by: "user1"}, {id:2, comment: "Comment 2 of card 2", created_by: "user2"}, {id:3, comment: "Comment 3 of card 2", created_by: "user3"},{id:4, comment: "Comment 4 of card 2", created_by: "user4"}]
	},
	{id:3, title: "Title 3", des: "Description 3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", img:"https://picsum.photos/id/30/200/300",  comments: [{id:1, comment: "Comment 1 of card 3", created_by: "user1"}, {id:2, comment: "Comment 2 of card 3", created_by: "user2"}, {id:3, comment: "Comment 3 of card 3", created_by: "user3"},{id:4, comment: "Comment 4 of card 3", created_by: "user4"}]
	},
	{id:4, title: "Title 4", des: "Description 4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",img:"https://picsum.photos/id/40/200/300",  comments: [{id:1, comment: "Comment 1 of card 4", created_by: "user1"}, {id:2, comment: "Comment 2 of card 4", created_by: "user2"}, {id:3, comment: "Comment 3 of card 4", created_by: "user3"},{id:4, comment: "Comment 4 of card 4", created_by: "user4"}]
	}
	]
	return(
		<>
			<div className="row">
			{ cards.map((val, index)=>{
			return(
				<div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 column">
				<FlipCard value={val} key={val.id} />
				</div>
				)
			})

			}
			{ cards.map((val, index)=>{
			return(
				<div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 column">
				<FlipCard value={val} key={val.id} />
				</div>
				)
			})

			}
			{ cards.map((val, index)=>{
			return(
				<div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 column">
				<FlipCard value={val} key={val.id} />
				</div>
				)
			})

			}
			</div>
		</>
	)
}

export default Content;