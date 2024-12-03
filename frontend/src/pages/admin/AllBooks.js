import { Link } from "react-router-dom";

const AllBooks = () => {
    return ( 
        <div>
            <h1>All Books go here</h1>
            <Link to="returned">Returned Books</Link>
            <Link to="borrowed">Borrowed Books</Link>
        </div>
     );
}
 
export default AllBooks;