/* // Task 1
const UserFetcher = () => {

    const [users, setUsers] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {

        const fetchUsers = async () => {

            try {

                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!response.ok) {

                    throw new Error(`HTTP error! status: ${response.status}`);

                }

                const data = await response.json();
                setUsers(data);
            } 
            
            catch (err) {

                setError(err.message);

            } 
            
            finally {

                setLoading(false);

            }

        };

        fetchUsers();
    }, []); 

    if (loading) return <p className="text-center p-4 text-blue-500">Завантаження користувачів...</p>;
    if (error) return <p className="text-center p-4 text-red-500">Помилка завантаження: {error}</p>;

    return (
        <div className="container mx-auto p-4 max-w-xl">
            <h2 className="text-xl font-bold mb-3 text-indigo-700">Користувачі з API</h2>
            <ul className="space-y-2 p-4 bg-gray-50 rounded shadow-md">
                {users.slice(0, 5).map(user => (
                    <li key={user.id} className="p-2 border-b border-gray-200 hover:bg-white transition duration-150">
                        <span className="font-semibold">{user.name}</span> (<span className="text-sm text-gray-600">{user.email}</span>)
                    </li>
                ))}
            </ul>
        </div>
    );

};

const root = ReactDOM.createRoot(document.getElementById('Inga'));
root.render(<UserFetcher />);
*/



/* // Task 2
const themes = {

    light: 'bg-white text-gray-800 border-gray-300',
    dark: 'bg-gray-800 text-white border-gray-600',
    blue: 'bg-blue-100 text-blue-800 border-blue-400',
    green: 'bg-green-100 text-green-800 border-green-400',

};

const ThemeSwitcher = () => {

    const getInitialTheme = () => {

        const storedTheme = localStorage.getItem('appTheme');
        return storedTheme && themes[storedTheme] ? storedTheme : 'light';

    };

    const [currentTheme, setCurrentTheme] = React.useState(getInitialTheme);

    React.useEffect(() => {

        localStorage.setItem('appTheme', currentTheme);
        document.body.className = `min-h-screen ${themes[currentTheme]}`;
    }, [currentTheme]);

    return (
        <div className="container mx-auto p-4 max-w-xl">
            <h2 className="text-xl font-bold mb-3 text-indigo-700">Вибір теми</h2>
            <div className={`p-4 border-2 rounded shadow-md ${themes[currentTheme]}`}>
                <p className="mb-3">Поточна тема: <span className="capitalize font-semibold">{currentTheme}</span></p>
                <div className="flex space-x-2 flex-wrap gap-2">
                    {Object.keys(themes).map(themeName => (
                        <button
                            key={themeName}
                            onClick={() => setCurrentTheme(themeName)}
                            className={`py-2 px-3 text-sm rounded transition duration-150 ${
                                currentTheme === themeName 
                                    ? 'ring-2 ring-offset-2 ring-indigo-500 font-bold' 
                                    : 'hover:opacity-80'
                            } ${themes[themeName].split(' ')[0]} ${themes[themeName].split(' ')[1]}`}
                            style={{ borderColor: themes[themeName].split(' ')[2] }}
                        >
                            {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );

};

const root = ReactDOM.createRoot(document.getElementById('Inga'));
root.render(<ThemeSwitcher />);
*/



/* // Task 3
const AutoSaveInput = () => {

    const getInitialText = () => localStorage.getItem('savedText') || '';
    
    const [text, setText] = React.useState(getInitialText);

    React.useEffect(() => {

        localStorage.setItem('savedText', text);
    }, [text]);

    return (
        <div className="container mx-auto p-4 max-w-xl">
            <h2 className="text-xl font-bold mb-3 text-indigo-700">Автозбереження тексту</h2>
            <div className="p-4 bg-white border border-gray-300 rounded shadow-md">
                <p className="text-sm text-gray-500 mb-2">Текст зберігається локально при кожній зміні.</p>
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Почніть вводити текст..."
                    className="w-full p-2 border border-gray-400 rounded focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 h-24"
                />
            </div>
        </div>
    );

};

const root = ReactDOM.createRoot(document.getElementById('Inga'));
root.render(<AutoSaveInput />);
*/



/* // Task 4
const CommentList = () => {

    const [comments, setComments] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {

        const fetchComments = async () => {

            try {

                const response = await fetch('https://jsonplaceholder.typicode.com/comments');
                if (!response.ok) {

                    throw new Error(`HTTP error! status: ${response.status}`);

                }

                const data = await response.json();
                setComments(data);
            } 
            
            catch (err) {

                setError(err.message);

            } 
            
            finally {

                setLoading(false);

            }

        };

        fetchComments();
    }, []);

    if (loading) return <p className="text-center p-4 text-blue-500">Завантаження коментарів...</p>;
    if (error) return <p className="text-center p-4 text-red-500">Помилка завантаження: {error}</p>;

    return (
        <div className="container mx-auto p-4 max-w-xl">
            <h2 className="text-xl font-bold mb-3 text-indigo-700">Список коментарів</h2>
            <div className="p-4 bg-white border border-gray-300 rounded shadow-md">
                <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                    {comments.slice(0, 5).map(comment => (
                        <div key={comment.id} className="p-3 bg-gray-50 border-l-4 border-indigo-400 rounded">
                            <p className="font-semibold text-gray-800">{comment.name}</p>
                            <p className="text-xs text-indigo-600 mb-1">by {comment.email}</p>
                            <p className="text-sm text-gray-700 italic">{comment.body.substring(0, 100)}...</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

};

const root = ReactDOM.createRoot(document.getElementById('Inga'));
root.render(<CommentList />);
*/



/* // Task 5
const LocalStorageCounter = () => {

    const getInitialCount = () => {

        const storedCount = localStorage.getItem('counterValue');
        return storedCount !== null ? parseInt(storedCount, 10) : 0;

    };

    const [count, setCount] = React.useState(getInitialCount);

    React.useEffect(() => {

        localStorage.setItem('counterValue', count);
    }, [count]);

    const increment = () => {

        setCount(prevCount => prevCount + 1);

    };

    return (
        <div className="container mx-auto p-4 max-w-xl">
            <h2 className="text-xl font-bold mb-3 text-indigo-700 text-center">Лічильник з пам'яттю</h2>
            <div className="p-4 bg-white border border-gray-300 rounded shadow-md text-center">
                <p className="text-4xl font-extrabold mb-4 text-red-600">{count}</p>
                <button
                    onClick={increment}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Збільшити (+1)
                </button>
                <p className="mt-2 text-sm text-gray-500">Перезавантажте сторінку: значення збережене.</p>
            </div>
        </div>
    );

};

const root = ReactDOM.createRoot(document.getElementById('Inga'));
root.render(<LocalStorageCounter />);
*/