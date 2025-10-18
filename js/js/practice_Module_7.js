/* // Task 1
const { useState } = React;

function LoginGreeting({ isLoggedIn, userName = "Користувач" }) {

  return (
    <div className="p-4 border rounded-lg mb-6">
      <h2 className="text-xl font-bold mb-4">Умовний рендеринг</h2>
      {isLoggedIn ? (
        <div className="bg-green-100 p-4 rounded">
          <h3 className="text-lg font-semibold">Вітаємо, {userName}!</h3>
          <p className="text-gray-600">Ви успішно увійшли в систему</p>
        </div>
      ) : (
        <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
          Увійти
        </button>
      )}
    </div>
  );

}

const container = document.getElementById('Inga');
const root = ReactDOM.createRoot(container);
root.render(<LoginGreeting isLoggedIn={true} userName="Інга" />);
*/



/* // Task 2
const { useState, useEffect } = React;

function DataLoader() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {

      setData({

        title: "Завантажені дані",
        content: "*ДАНІ*",
        items: ["Елемент 1", "Елемент 2", "Елемент 3"]

      });
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-4 border rounded-lg mb-6">
      <h2 className="text-xl font-bold mb-4">Завантаження даних</h2>
      {loading ? (
        <div className="space-y-3">
          <div className="skeleton h-6 w-3/4 bg-gray-200 rounded"></div>
          <div className="skeleton h-4 w-full bg-gray-200 rounded"></div>
          <div className="skeleton h-4 w-5/6 bg-gray-200 rounded"></div>
          <div className="skeleton h-20 w-full bg-gray-200 rounded"></div>
        </div>
      ) : (
        <div className="bg-white p-4 rounded border">
          <h3 className="text-lg font-semibold">{data.title}</h3>
          <p className="text-gray-600 mt-2">{data.content}</p>
          <ul className="mt-3 list-disc list-inside">
            {data.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );

}

const container = document.getElementById('Inga');
const root = ReactDOM.createRoot(container);
root.render(<DataLoader />);
*/

/* // Task 4
const { useState } = React;

function UserStatus({ userStatus }) {

  return (
    <div className="p-4 border rounded-lg mb-6">
      <h2 className="text-xl font-bold mb-4">Стан користувача</h2>
      {userStatus === "loading" ? (
        <div className="space-y-3">
          <div className="skeleton h-8 w-32 bg-gray-200 rounded"></div>
          <div className="skeleton h-4 w-48 bg-gray-200 rounded"></div>
          <div className="skeleton h-4 w-40 bg-gray-200 rounded"></div>
        </div>
      ) : userStatus === "active" ? (
        <div className="bg-green-50 p-4 rounded border">
          <h3 className="text-lg font-semibold text-green-700">Активний користувач</h3>
          <p className="text-green-600">Статус: ✅ Активний</p>
          <p className="text-green-600">Остання активність: сьогодні</p>
        </div>
      ) : (
        <div className="bg-red-50 p-4 rounded border">
          <h3 className="text-lg font-semibold text-red-700">Неактивний користувач</h3>
          <p className="text-red-600">Статус: ❌ Неактивний</p>
          <p className="text-red-600">Користувач не активний останні 30 днів</p>
        </div>
      )}
    </div>
  );

}

const container = document.getElementById('Inga');
const root = ReactDOM.createRoot(container);
root.render(<UserStatus userStatus="active" />);
*/



/* // Task 5
const { useState, useEffect } = React;

function MessageList() {

  const [messages, setMessages] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {

      setMessages([
        { id: 1, text: "Привіт! Як справи?", date: "2025-01-01 10:30" },
        { id: 2, text: "Не забудь про зустріч", date: "2025-01-01 11:15" },
        { id: 3, text: "Файли відправлені", date: "2025-01-01 12:00" },
        { id: 4, text: "Дякую за допомогу!", date: "2025-01-01 14:20" },
        { id: 5, text: "До зустрічі!", date: "2025-01-01 16:45" }
      ]);
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const refreshMessages = () => {

    if (!loading) {

      setMessages(null);
      setLoading(true);
      setTimeout(() => {

        setMessages([
          { id: 6, text: "Нове повідомлення!", date: "2025-01-01 17:00" },
          { id: 7, text: "Оновлені дані", date: "2025-01-01 17:05" }
        ]);
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <div className="p-4 border rounded-lg mb-6">
      <h2 className="text-xl font-bold mb-4">Список повідомлень</h2>
      <button
        onClick={refreshMessages}
        disabled={loading}
        className={`mb-4 px-4 py-2 rounded ${
          loading 
            ? "bg-gray-400 cursor-not-allowed" 
            : "bg-blue-500 hover:bg-blue-600"
        } text-white`}
      >
        {loading ? "Завантаження..." : "Оновити"}
      </button>

      <div className="space-y-3">
        {loading ? (

          Array(5).fill(0).map((_, index) => (
            <div key={index} className="border rounded p-3">
              <div className="skeleton h-4 w-3/4 bg-gray-200 rounded mb-2"></div>
              <div className="skeleton h-3 w-1/3 bg-gray-200 rounded"></div>
            </div>
          ))
        ) : (

          messages.map(message => (
            <div key={message.id} className="border rounded p-3 bg-white">
              <p className="text-gray-800">{message.text}</p>
              <p className="text-sm text-gray-500 mt-1">{message.date}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );

}

const container = document.getElementById('Inga');
const root = ReactDOM.createRoot(container);
root.render(<MessageList />);
*/



/* // Task 3
const { useState } = React;

function SimpleDataDisplay({ data }) {

  return (
    <div className="p-4 border rounded-lg mb-6">
      <h2 className="text-xl font-bold mb-4">Обробка даних</h2>
      
      {data === null ? (

        <div className="space-y-2 animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>
      ) : data && data.name ? (

        <div className="bg-green-50 p-4 rounded border">
          <h3 className="text-lg font-semibold text-green-800">{data.name}</h3>
          <p className="text-green-600">Email: {data.email}</p>
          {data.age && <p className="text-green-600">Вік: {data.age}</p>}
        </div>
      ) : (

        <div className="bg-yellow-50 p-4 rounded border">
          <p className="text-yellow-800">Дані відсутні</p>
        </div>
      )}
    </div>
  );
}

const testData = [
  null,
  {},
  { name: "Марія", email: "maria@gmail.com" },
  { name: "Іван", email: "ivan@gmail.com", age: 25 }

];

function App() {

  const [currentTest, setCurrentTest] = useState(0);

  return (
    <div className="p-4">
      <SimpleDataDisplay data={testData[currentTest]} />
      <div className="mt-4 space-x-2">
        <button 
          onClick={() => setCurrentTest(0)}
          className="bg-gray-500 text-white px-3 py-1 rounded"
        >
          Завантаження
        </button>
        <button 
          onClick={() => setCurrentTest(1)}
          className="bg-yellow-500 text-white px-3 py-1 rounded"
        >
          Пусті дані
        </button>
        <button 
          onClick={() => setCurrentTest(2)}
          className="bg-green-500 text-white px-3 py-1 rounded"
        >
          Правильні дані
        </button>
        <button 
          onClick={() => setCurrentTest(3)}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Дані з віком
        </button>
      </div>
    </div>
  );

}

const container = document.getElementById('Inga');
const root = ReactDOM.createRoot(container);
root.render(<App />);
*/