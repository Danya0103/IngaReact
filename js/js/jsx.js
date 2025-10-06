/* // Task 1
const { useState } = React;

function UserCard({ user }) {

  const statusColor = user.isOnline ? 'bg-green-500' : 'bg-gray-400';

  return (
    <div className="p-6 border border-gray-300 rounded-xl shadow-lg max-w-sm mx-auto bg-white text-black">
      <h2 className="text-xl font-bold mb-3 flex items-center">
        {user.name}
        <span className={`ml-3 w-3 h-3 rounded-full ${statusColor} inline-block`}></span>
      </h2>
      <p className="text-gray-600">Вік: <span className="font-semibold">{user.age}</span></p>
      <p className="mt-2 text-sm text-gray-500">
        Статус: {user.isOnline ? 'Онлайн' : 'Офлайн'}
      </p>
    </div>
  );

}

function App1() {
  const testUser = {

    name: "Олена Коваль",
    age: 28,
    isOnline: true

  };

  return <UserCard user={testUser} />;

}

const container = document.getElementById('Inga');
const root = ReactDOM.createRoot(container);
root.render(<App1 />);
*/



/* // Task 2
const { useState } = React;

function CounterButton() {

  const [count, setCount] = useState(0);

  const handleClick = () => {

    setCount(count + 1);

  };

  return (
    <div className="p-6 border border-gray-300 rounded-xl shadow-lg max-w-sm mx-auto bg-white text-black text-center">
      <h2 className="text-xl font-bold mb-4">Лічильник</h2>
      <button
        onClick={handleClick}
        className="
          bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full
          transition duration-150 ease-in-out
          active:scale-95 transform shadow-md hover:shadow-lg
        "
      >
        Натиснуто {count} разів
      </button>
    </div>
  );

}

const container = document.getElementById('Inga');
const root = ReactDOM.createRoot(container);
root.render(<CounterButton />);
*/



/* // Task 3
const { useState } = React;

function LoginForm() {

  return (
    <div className="p-8 border border-gray-300 rounded-xl shadow-2xl max-w-sm mx-auto bg-white text-black">
      <h2 className="text-2xl font-bold mb-6 text-center">Вхід до системи</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Bаш @gmail.com"
            className="
              shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
              transition duration-200
            "
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Пароль
          </label>
          <input
            id="password"
            type="password"
            placeholder="**********"
            className="
              shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
              transition duration-200
            "
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="
              bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg
              focus:outline-none focus:shadow-outline
              shadow-md hover:shadow-xl transition-all duration-300
              w-full
            "
          >
            Увійти
          </button>
        </div>
      </form>
    </div>
  );

}

const container = document.getElementById('Inga');
const root = ReactDOM.createRoot(container);
root.render(<LoginForm />);
*/



/* // Task 4
const { useState } = React;

function ResponsiveMessage() {

  return (
    <div className="p-6 border border-gray-300 rounded-xl shadow-lg mx-auto max-w-xl bg-white text-center">
      <h2 className="text-xl font-bold mb-4">Адаптивний рендеринг</h2>
      
      <p 
        className="
          text-sm text-green-600 font-bold 
          sm:text-2xl sm:text-blue-600 
          transition-colors duration-300
        "
      >
        Змініть розмір вікна браузера!
      </p>

      <p className="text-base text-gray-700 sm:hidden mt-3">
        Ви використовуєте мобільний пристрій (width &lt; 640px).
      </p>

      <p className="hidden sm:block text-base text-gray-700 mt-3">
        Ви використовуєте десктоп (width &ge; 640px).
      </p>
    </div>
  );

}

const container = document.getElementById('Inga');
const root = ReactDOM.createRoot(container);
root.render(<ResponsiveMessage />);
*/



/* // Task 5
const { useState } = React;

function InteractiveCard() {

  return (
    <div 
      className="
        p-8 max-w-sm mx-auto rounded-xl shadow-lg border-2 border-gray-200
        bg-white text-black
        hover:bg-yellow-100 hover:shadow-2xl
        dark:bg-gray-900 dark:text-white dark:border-gray-700
        dark:hover:bg-gray-700
        transition-all duration-300 ease-in-out
      "
    >
      <div className="text-center">
        <h2 
          className="
            text-2xl font-extrabold mb-4
            hover:text-orange-500
            transition-colors duration-300
          "
        >
          Інтерактивна Картка
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Наведіть курсор на картку та сфокусуйтеся на кнопці, а потім спробуйте темну тему.
        </p>
        <button
          className="
            bg-indigo-600 text-white font-bold py-2 px-6 rounded-full
            focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50
            hover:bg-indigo-700
            transition-all duration-200 ease-in-out
          "
        >
          Дія
        </button>
      </div>
    </div>
  );

}

const container = document.getElementById('Inga');
const root = ReactDOM.createRoot(container);
root.render(<InteractiveCard />);
*/