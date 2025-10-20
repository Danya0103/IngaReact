/*
const { useState, useEffect } = React;

function UserCard({ user }) {

  return (
    <div className="bg-white p-4 rounded border shadow-sm mb-3">
      <h3 className="font-bold text-blue-600">{user.name}</h3>
      <p className="text-gray-600 text-sm">{user.email}</p>
      <p className="text-gray-500 text-xs mt-1">ID: {user.id}</p>
    </div>
  );

}

function UsersList({ users }) {

  if (users.length === 0) {

    return <p className="text-gray-500 text-center">Немає користувачів</p>;

  }

  return (
    <div>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );

}

function SearchInput({ value, onChange }) {

  return (
    <div className="mb-4">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Пошук за іменем..."
        className="w-full p-2 border rounded"
      />
    </div>
  );

}

function AddUserForm({ onAddUser }) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const handleSubmit = async (e) => {

    e.preventDefault();
    
    if (!name) {

      alert("Введіть ім'я");
      return;

    }

    setIsAdding(true);

    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newUser = {

      id: Math.random() * 1000000,
      name: name,
      email: email || 'email@gmail.com'

    };

    onAddUser(newUser);
    setName('');
    setEmail('');
    setIsAdding(false);
    
    console.log("Користувача додано");

  };

  return (
    <div className="bg-gray-50 p-4 rounded border mb-6">
      <h2 className="font-bold mb-3">Додати нового користувача</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="block text-sm mb-1">Ім'я *</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
            disabled={isAdding}
          />
        </div>
        <div className="mb-3">
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            disabled={isAdding}
          />
        </div>
        <button 
          type="submit" 
          disabled={isAdding}
          className={`w-full p-2 rounded text-white ${
            isAdding ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          {isAdding ? 'Додаємо...' : 'Додати'}
        </button>
      </form>
    </div>
  );

}

function UserApp() {

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {

    const getUsers = async () => {

      try {

        setIsLoading(true);
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
        setHasError(false);
      } 
      
      catch (error) {

        console.error('Помилка:', error);
        setHasError(true);

      } 
      
      finally {

        setIsLoading(false);

      }

    };

    getUsers();
  }, []);

  const addNewUser = (user) => {

    setUsers([user, ...users]);

  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-2xl font-bold text-center mb-6">Список користувачів</h1>
      
      <AddUserForm onAddUser={addNewUser} />
      
      <SearchInput value={searchText} onChange={setSearchText} />
      
      {isLoading ? (
        <div className="text-center">
          <p>Завантаження...</p>
          <div className="inline-block mt-2 w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : hasError ? (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>Не вдалося завантажити користувачів</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
          >
            Спробувати знову
          </button>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-semibold">Всі користувачі:</h2>
            <span className="text-sm text-gray-500">
              Знайдено: {filteredUsers.length}
            </span>
          </div>
          <UsersList users={filteredUsers} />
        </>
      )}
    </div>
  );

}

const appContainer = document.getElementById('Inga');
const appRoot = ReactDOM.createRoot(appContainer);
appRoot.render(<UserApp />);
*/