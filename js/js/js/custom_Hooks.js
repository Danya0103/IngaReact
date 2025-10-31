/* // Task 1
const { useState, useEffect } = React;

function useDebounce(value, delay) {

  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {

    const handler = setTimeout(() => {

      setDebouncedValue(value);
    }, delay);

    return () => {

      clearTimeout(handler);

    };
  }, [value, delay]);

  return debouncedValue;

}

function SearchComponent() {

  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 600);

  useEffect(() => {

    if (debouncedSearchTerm) {

      setLoading(true);
      
      setTimeout(() => {

        const mockResults = [
          `Результат по запиту" ${debouncedSearchTerm}" 1`,
          `Результат по запиту" ${debouncedSearchTerm}" 2`,
          `Результат по запиту" ${debouncedSearchTerm}" 3`
        ];
        setResults(mockResults);
        setLoading(false);
      }, 300);
    } 
    
    else {

      setResults([]);

    }
  }, [debouncedSearchTerm]);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Пошук з Debounce</h2>
        <div className="mb-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Введіть пошуковий запит..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {loading && (
          <div className="flex justify-center py-4">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
          </div>
        )}

        <div className="space-y-2">
          {results.map((result, index) => (
            <div key={index} className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              {result}
            </div>
          ))}
        </div>

        {debouncedSearchTerm && !loading && results.length === 0 && (
          <p className="text-gray-500 text-center py-4">Нічого не знайдено</p>
        )}
      </div>
    </div>
  );

}

const container = document.getElementById('Inga');
const root = ReactDOM.createRoot(container);
root.render(<SearchComponent />);
*/



/* // Task 2
const { useState, useEffect } = React;

function useCountdown(initialTime) {

  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {

    if (!isActive || timeLeft <= 0) return;

    const interval = setInterval(() => {

      setTimeLeft(time => time - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const start = () => {

    setIsActive(true);

  };

  const pause = () => {

    setIsActive(false);

  };

  const setTime = (newTime) => {

    setTimeLeft(newTime);
    setIsActive(false);

  };

  return {

    timeLeft,
    isActive,
    start,
    pause,
    setTime

  };

}

function CountdownTimer() {

  const [inputTime, setInputTime] = useState(30);
  const { timeLeft, isActive, start, pause, setTime } = useCountdown(inputTime);

  const handleTimeChange = (newTime) => {

    setInputTime(newTime);
    setTime(newTime);

  };

  const formatTime = (seconds) => {

    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

  };

  return (
    <div className="max-w-md mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <h2 className="text-2xl font-bold mb-6">Таймер</h2>
        
        <div className="text-6xl font-mono font-bold mb-6 text-blue-600">
          {formatTime(timeLeft)}
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Час (секунди):
          </label>
          <input
            type="number"
            value={inputTime}
            onChange={(e) => handleTimeChange(parseInt(e.target.value) || 1)}
            min="1"
            max="3600"
            className="w-32 p-3 border border-gray-300 rounded-lg text-center text-lg font-semibold"
            disabled={isActive}
          />
        </div>

        <div className="flex gap-3 justify-center">
          {!isActive ? (
            <button
              onClick={start}
              className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 font-semibold"
            >
              Старт
            </button>
          ) : (
            <button
              onClick={pause}
              className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 font-semibold"
            >
              Стоп
            </button>
          )}
        </div>

        {timeLeft === 0 && (
          <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            <p className="font-semibold">Час вийшов!</p>
          </div>
        )}
      </div>
    </div>
  );

}

const container = document.getElementById('Inga');
const root = ReactDOM.createRoot(container);
root.render(<CountdownTimer />);
*/



/* // Task 3
const { useState, useEffect } = React;

function useWindowWidth() {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {

      setWidth(window.innerWidth);

    };

    window.addEventListener('resize', handleResize);
    
    return () => {

      window.removeEventListener('resize', handleResize);

    };
  }, []);

  return width;

}

function WindowSizeComponent() {

  const width = useWindowWidth();
  
  const getDeviceType = (width) => {

    if (width < 768) {

      return { type: 'phone', name: 'Телефон', color: 'text-blue-600', bgColor: 'bg-blue-50', borderColor: 'border-blue-200' };

    } 
    
    else if (width < 1024) {

      return { type: 'tablet', name: 'Планшет', color: 'text-green-600', bgColor: 'bg-green-50', borderColor: 'border-green-200' };

    } 
    
    else {

      return { type: 'desktop', name: 'Комп\'ютер', color: 'text-purple-600', bgColor: 'bg-purple-50', borderColor: 'border-purple-200' };

    }

  };

  const device = getDeviceType(width);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-center mb-6">Визначення типу пристрою</h2>
          
          <div className={`p-6 rounded-lg border-2 ${device.bgColor} ${device.borderColor} mb-6`}>
            <div className="text-center">
              <h3 className={`text-3xl font-bold mb-2 ${device.color}`}>
                {device.name}
              </h3>
              <p className="text-4xl font-mono font-bold text-gray-800">
                {width}px
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className={`p-4 rounded-lg border ${width < 768 ? 'bg-blue-100 border-blue-300' : 'bg-gray-100'}`}>
              <h4 className="font-semibold mb-2">Мобільний телефон</h4>
              <p className="text-sm text-gray-600">до 768px</p>
              <div className={`text-lg font-bold ${width < 768 ? 'text-blue-600' : 'text-gray-400'}`}>
                {width < 768 ? 'Поточний' : ''}
              </div>
            </div>

            <div className={`p-4 rounded-lg border ${width >= 768 && width < 1024 ? 'bg-green-100 border-green-300' : 'bg-gray-100'}`}>
              <h4 className="font-semibold mb-2">Планшет</h4>
              <p className="text-sm text-gray-600">768px - 1024px</p>
              <div className={`text-lg font-bold ${width >= 768 && width < 1024 ? 'text-green-600' : 'text-gray-400'}`}>
                {width >= 768 && width < 1024 ? 'Поточний' : ''}
              </div>
            </div>

            <div className={`p-4 rounded-lg border ${width >= 1024 ? 'bg-purple-100 border-purple-300' : 'bg-gray-100'}`}>
              <h4 className="font-semibold mb-2">Комп'ютер</h4>
              <p className="text-sm text-gray-600">1024px і більше</p>
              <div className={`text-lg font-bold ${width >= 1024 ? 'text-purple-600' : 'text-gray-400'}`}>
                {width >= 1024 ? 'Поточний' : ''}
              </div>
            </div>
          </div>

          <div className="mt-6 text-center text-gray-500">
            <p>Змініть розмір вікна браузера, щоб побачити зміни</p>
          </div>
        </div>
      </div>
    </div>
  );

}

const container = document.getElementById('Inga');
const root = ReactDOM.createRoot(container);
root.render(<WindowSizeComponent />);
*/