import React from "react";
import { IBook } from "../../../actions/Books/types";

interface IBookViewProps {
	book: IBook
}

const BookView: React.FC<IBookViewProps> = ({ book }) => {
	const colors = ["bg-green-500", "bg-red-500", "bg-blue-500"];
	const colorIndex = book.id % 3;
	return (
		<a href={`/home/virtual_docs/${book.id}`} className={`h-32 w-56 text-white ${colors[colorIndex]}`}>
			<div className="p-2">
				<h3>{book.title}</h3>
				<p>{book.detail}</p>
			</div>
		</a>
	)
}

export default BookView;