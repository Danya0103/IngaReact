/* // Task 1
const { useState } = React;

function ClickCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {

    setCount(count + 1);

  };

  return (
    <div className="p-6 border border-gray-300 rounded-xl shadow-lg max-w-sm mx-auto bg-white text-black">
      <h2 className="text-xl font-bold mb-4">Лічильник кліків</h2>
      <p className="mb-6 text-xl">Кліків: <span className="font-extrabold text-blue-600">{count}</span></p>
      <button
        onClick={handleClick}
        className="
          bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg
          transition duration-150 ease-in-out
          active:scale-95 transform
        "
      >
        Натисни мене
      </button>
    </div>
  );
}

const container = document.getElementById('Inga');
const root = ReactDOM.createRoot(container);
root.render(<ClickCounter />);
*/



/* //Task 2
const { useState, useEffect } = React;

function ThemeSwitcher() {

  const [theme, setTheme] = useState('light');

  useEffect(() => {

    const container = document.getElementById('Inga');
    if (!container) return;

    container.className = '';
    container.classList.add('transition-colors', 'duration-500', 'min-h-screen', 'p-8', 'space-y-8');

    if (theme === 'dark') {

      container.classList.add('bg-black', 'text-white');

    } 
    
    else {

      container.classList.add('bg-white', 'text-black');

    }

  }, [theme]);

  const toggleTheme = () => {

    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));

  };

  const buttonText = theme === 'light' ? 'Перемкнути на Темну' : 'Перемкнути на Світлу';
  
  const blockBg = theme === 'light' ? 'bg-gray-100 text-black' : 'bg-gray-800 text-white';

  return (
    <div className={`p-6 max-w-sm mx-auto rounded-xl shadow-lg border border-current ${blockBg}`}>
        <h2 className="text-xl font-bold mb-4">Перемикач теми</h2>
        <p className="mb-6">Поточна тема: <span className="font-semibold">{theme === 'light' ? 'Світла ☀️' : 'Темна 🌙'}</span></p>
        <button
          onClick={toggleTheme}
          className="
            bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg
            transition-colors duration-300 ease-in-out
            active:scale-95 transform
          "
        >
          {buttonText}
        </button>
    </div>
  );
}

const container = document.getElementById('Inga');
const root = ReactDOM.createRoot(container);
root.render(<ThemeSwitcher />);
*/



/* // Task 3
const { useState } = React;

function ToggleBlock() {

  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {

    setIsVisible(!isVisible);

  };
  
  const contentHeightClass = isVisible ? 'max-h-40 p-4 pt-2' : 'max-h-0 p-0';
  const buttonText = isVisible ? 'Приховати інфо' : 'Показати інфо';

  return (
    <div className="border border-gray-300 rounded-xl shadow-lg max-w-lg mx-auto bg-white text-black">
      <h2 className="text-xl font-bold p-4 pb-2">Відображення / приховування</h2>
      
      <button
        onClick={handleToggle}
        className="
          bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg m-4
          transition duration-150 ease-in-out
          active:scale-95 transform
        "
      >
        {buttonText}
      </button>

      <div
        className={`
          bg-green-50 border-t border-gray-200 overflow-hidden
          transition-all duration-500 ease-in-out
          ${contentHeightClass}
        `}
      >
        <p className="text-gray-700">
          Привіт ^^
        </p>
      </div>
    </div>
  );

}

const container = document.getElementById('Inga');
const root = ReactDOM.createRoot(container);
root.render(<ToggleBlock />);
*/
