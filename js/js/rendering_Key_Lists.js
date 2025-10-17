/* // Task 1
const { useState } = React;

function MovieList() {

  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState('');

  const addMovie = () => {

    if (newMovie.trim()) {

      setMovies([...movies, newMovie]);
      setNewMovie('');

    }

  };

  const deleteMovie = (index) => {

    setMovies(movies.filter((_, i) => i !== index));

  };

  return (
    <div className="p-4 border rounded-lg mb-6">
      <h2 className="text-xl font-bold mb-4">Улюблені фільми</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newMovie}
          onChange={(e) => setNewMovie(e.target.value)}
          className="flex-1 p-2 border rounded"
          placeholder="Назва фільму"
          onKeyPress={(e) => e.key === 'Enter' && addMovie()}
        />
        <button
          onClick={addMovie}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Додати
        </button>
      </div>
      <ul>
        {movies.map((movie, index) => (
          <li key={index} className="flex justify-between items-center border-b py-2">
            <span>{movie}</span>
            <button
              onClick={() => deleteMovie(index)}
              className="text-red-500 hover:text-red-700 px-2 py-1"
            >
              Видалити
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

}

const container = document.getElementById('Inga');
const root = ReactDOM.createRoot(container);
root.render(<MovieList />);
*/



/* // Task 2
const { useState, useEffect } = React;

function UserGrid() {

  const [users, setUsers] = useState([]);
  const [expandedUserId, setExpandedUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {

        setUsers(data);
        setLoading(false);

      })

      .catch(error => {

        console.error('Error fetching users:', error);
        setLoading(false);

      });

  }, []);

  const toggleDetails = (id) => {

    setExpandedUserId(expandedUserId === id ? null : id);

  };

  if (loading) {

    return (
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Користувачі</h2>
        <div className="text-center">Завантаження...</div>
      </div>
    );

  }

  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-4">Користувачі</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map(user => (
          <div key={user.id} className="border rounded-lg p-4 shadow-md">
            <h3 className="font-bold text-lg">{user.name}</h3>
            <p className="text-gray-600">{user.email}</p>
            <button
              onClick={() => toggleDetails(user.id)}
              className="mt-2 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
            >
              {expandedUserId === user.id ? 'Приховати' : 'Показати більше'}
            </button>
            {expandedUserId === user.id && (
              <div className="mt-3 text-sm">
                <p>Телефон: {user.phone}</p>
                <p>Місто: {user.address.city}</p>
                <p>Компанія: {user.company.name}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

}

const container = document.getElementById('Inga');
const root = ReactDOM.createRoot(container);
root.render(<UserGrid />);
*/



/* // Task 3
const { useState } = React;

function ProductFilter() {

  const [products] = useState([
    { name: 'Ноутбук', price: 44000 },
    { name: 'Смартфон', price: 28000 },
    { name: 'Планшет', price: 30000 },
    { name: 'Навушники', price: 2000 },
    { name: 'Монітор', price: 10000 },
    { name: 'Клавіатура', price: 3000 },
    { name: 'Мишка', price: 1000 },

  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 border rounded-lg mb-6">
      <h2 className="text-xl font-bold mb-4">Пошук товарів</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border rounded mb-4"
        placeholder="Пошук товарів..."
      />
      <div className="grid gap-2">
        {filteredProducts.map((product, index) => (
          <div key={index} className="flex justify-between items-center border-b py-2">
            <span className="font-medium">{product.name}</span>
            <span className="font-bold text-green-600">{product.price} грн</span>
          </div>
        ))}
      </div>
    </div>
  );

}

const container = document.getElementById('Inga');
const root = ReactDOM.createRoot(container);
root.render(<ProductFilter />);
*/



/* // Task 4
const { useState } = React;

function AdaptiveGrid() {

  const [cards] = useState([ 
    
    {

      image: 'https://pbs.twimg.com/media/GwbxTFvWQAEjdNe?format=jpg&name=large',
      title: '1',
      description: 'Опис'

    },

    {

      image: 'https://pbs.twimg.com/media/GzhSKQiboAAnl8T?format=jpg&name=large',
      title: '2',
      description: 'Опис'

    },

    {

      image: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/10/Genshin-Impact-Columbina.jpg',
      title: '3',
      description: 'Опис'

    },

    {

      image: 'https://upload-os-bbs.hoyolab.com/upload/2025/09/16/147808703/9dd3f592b841cb26b06cf621b33260d8_7841302525010938870.webp?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70',
      title: '4',
      description: 'Опис'

    },

    {

      image: 'https://pbs.twimg.com/media/GwbyLPpWkAABHeK.jpg:large',
      title: '5',
      description: 'Опис'
    },

    {

      image: 'https://pbs.twimg.com/media/GzhSKQcbgAAYkjC?format=jpg&name=large',
      title: '6',
      description: 'Опис'

    },

    {

      image: 'https://pbs.twimg.com/media/G0d5cKabgAIr2pN?format=jpg&name=large',
      title: '7',
      description: 'Опис'

    },

    {

      image: 'https://pbs.twimg.com/media/GvY5sOzWQAAGyXx?format=jpg&name=medium',
      title: '8',
      description: 'Опис'

    },

  ]);

  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-4">Columbina</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

}

const container = document.getElementById('Inga');
const root = ReactDOM.createRoot(container);
root.render(<AdaptiveGrid />);
*/