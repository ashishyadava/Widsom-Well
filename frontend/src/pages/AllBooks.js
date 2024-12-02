const AllBooks = (books) => {
    return ( 
        books.map(book => {
            <Book />
        })
     );
}
 
export default AllBooks;