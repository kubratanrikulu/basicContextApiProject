export const MovieContext = createContext();
export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "10$",
      id: 1,
    },
    {
      name: "Game of Thrones",
      price: "15$",
      id: 2,
    },
    {
      name: "Inception",
      price: "20$",
      id: 3,
    },
  ]);

  return (
    <MovieContext.Provider value={{ movies, setMovies }}>
      {children}
    </MovieContext.Provider>
  );
};
