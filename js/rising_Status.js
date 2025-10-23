/* // Task 1
const { useState } = React;

function TaskList({ tasks, onToggleTask }) {

  return (
    <div className="bg-white p-4 rounded-lg shadow border mb-6">
      <h2 className="text-xl font-bold mb-4">Список завдань</h2>
      <div className="space-y-2">
        {tasks.map(task => (
          <div key={task.id} className="flex items-center gap-3 p-2 border rounded">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleTask(task.id)}
              className="w-4 h-4"
            />
            <span className={task.completed ? "line-through text-gray-500" : "text-gray-800"}>
              {task.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

}

function CompletedCounter({ completedCount, totalCount }) {

  return (
    <div className="bg-green-50 p-4 rounded-lg shadow border mb-6">
      <h2 className="text-xl font-bold mb-2">Прогрес</h2>
      <p className="text-green-700">
        Виконано: {completedCount} з {totalCount} завдань
      </p>
      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
        <div 
          className="bg-green-600 h-2 rounded-full" 
          style={{ width: `${totalCount > 0 ? (completedCount / totalCount) * 100 : 0}%` }}
        ></div>
      </div>
    </div>
  );

}

function TaskManager() {

  const [tasks, setTasks] = useState([
    { id: 1, text: "Вивчити React", completed: false },
    { id: 2, text: "Створити проект", completed: true },
    { id: 3, text: "Додати стилі", completed: false },
    { id: 4, text: "Тестування", completed: false }
  ]);

  const completedCount = tasks.filter(task => task.completed).length;
  const totalCount = tasks.length;

  const toggleTask = (taskId) => {

    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));

  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Менеджер завдань</h1>
      <CompletedCounter completedCount={completedCount} totalCount={totalCount} />
      <TaskList tasks={tasks} onToggleTask={toggleTask} />
    </div>
  );

}

const container = document.getElementById('Inga');
const root = ReactDOM.createRoot(container);
root.render(<TaskManager />);
*/



/* // Task 2
const { useState } = React;

function CelsiusInput({ celsius, onTemperatureChange }) {

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Температура в Цельсіях:
      </label>
      <input
        type="number"
        value={celsius}
        onChange={(e) => onTemperatureChange(e.target.value, 'celsius')}
        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
        placeholder="Введіть температуру"
      />
    </div>
  );

}

function FahrenheitInput({ fahrenheit, onTemperatureChange }) {

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Температура в Фаренгейтах:
      </label>
      <input
        type="number"
        value={fahrenheit}
        onChange={(e) => onTemperatureChange(e.target.value, 'fahrenheit')}
        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
        placeholder="Введіть температуру"
      />
    </div>
  );

}

function TemperatureConverter() {

  const [temperature, setTemperature] = useState({ celsius: '', fahrenheit: '' });

  const handleTemperatureChange = (value, scale) => {

    if (value === '') {

      setTemperature({ celsius: '', fahrenheit: '' });
      return;

    }

    const numValue = parseFloat(value);
    if (isNaN(numValue)) return;

    if (scale === 'celsius') {

      setTemperature({

        celsius: value,
        fahrenheit: (numValue * 9/5 + 32).toFixed(2)

      });
    } 
    
    else {
        
      setTemperature({

        celsius: ((numValue - 32) * 5/9).toFixed(2),
        fahrenheit: value

      });

    }

  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Калькулятор температур</h1>
      <div className="bg-white p-6 rounded-lg shadow border">
        <CelsiusInput 
          celsius={temperature.celsius} 
          onTemperatureChange={handleTemperatureChange} 
        />
        <FahrenheitInput 
          fahrenheit={temperature.fahrenheit} 
          onTemperatureChange={handleTemperatureChange} 
        />
        
        {temperature.celsius && (
          <div className="mt-4 p-3 bg-blue-50 rounded border">
            <p className="text-sm text-blue-700">
              {temperature.celsius}°C = {temperature.fahrenheit}°F
            </p>
          </div>
        )}
      </div>
    </div>
  );

}

const container = document.getElementById('Inga');
const root = ReactDOM.createRoot(container);
root.render(<TemperatureConverter />);
*/



/* // Task 3
const { useState } = React;

function StarRating({ rating, onRatingChange }) {

  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="bg-white p-4 rounded-lg shadow border mb-4">
      <h3 className="font-semibold mb-3">Оцініть товар:</h3>
      <div className="flex gap-1">
        {stars.map(star => (
          <button
            key={star}
            onClick={() => onRatingChange(star)}
            className={`text-2xl ${
              star <= rating ? 'text-yellow-500' : 'text-gray-300'
            } hover:text-yellow-400 transition-colors`}
          >
            ★
          </button>
        ))}
      </div>
    </div>
  );

}

function RatingDisplay({ rating }) {

  const getRatingText = (rating) => {

    const texts = {

      1: "Погано",
      2: "Так собі", 
      3: "Нормально",
      4: "Добре",
      5: "Відмінно"

    };
    return texts[rating] || "Без оцінки";

  };

  return (
    <div className="bg-green-50 p-4 rounded-lg shadow border">
      <h3 className="font-semibold mb-2">Ваша оцінка:</h3>
      {rating ? (
        <div className="flex items-center gap-3">
          <div className="flex">
            {[1, 2, 3, 4, 5].map(star => (
              <span
                key={star}
                className={`text-xl ${
                  star <= rating ? 'text-yellow-500' : 'text-gray-300'
                }`}
              >
                ★
              </span>
            ))}
          </div>
          <span className="text-green-700 font-medium">
            {rating}/5 - {getRatingText(rating)}
          </span>
        </div>
      ) : (
        <p className="text-gray-500">Оберіть оцінку зірочками вище</p>
      )}
    </div>
  );
}

function ProductRating() {

  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {

    setRating(newRating);

  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Оцінка товару</h1>
      <div className="space-y-4">
        <StarRating rating={rating} onRatingChange={handleRatingChange} />
        <RatingDisplay rating={rating} />
        
        {rating > 0 && (
          <button
            onClick={() => alert(`Дякуємо за оцінку ${rating} зірок!`)}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Підтвердити оцінку
          </button>
        )}
      </div>
    </div>
  );

}

const container = document.getElementById('Inga');
const root = ReactDOM.createRoot(container);
root.render(<ProductRating />);
*/