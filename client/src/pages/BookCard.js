
const [books] = useState
// function BookCard(props) {
//   return (
//     <div className="book-card">
//       <img src={props.image} alt="Book Cover" />
//       <h2>{props.title}</h2>
//       <p>Author: {props.author}</p>
//       <p>Description: {props.description}</p>
//       <p>Price: ${props.price}</p>
//       <button>Add to Cart</button>
//     </div>
//   );
// }

function BookCard() {
  const [books] = useState([])

  useEffect(() => {
    fetchBooks();
  }, 
  )};

  const fetchBooks = async () => {
    const response = await fetch("http://openlibrary.org/search.json?q="+document.getElementById("input").value);
    const data = await response.json();
    // setBookCard(data);
  };

export default BookCard;
