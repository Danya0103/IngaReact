/* // Task 1
const { useReducer, createContext, useContext } = React;

const CartContext = createContext();

const initialCartState = {

  items: [],
  totalAmount: 0,
  totalPrice: 0

};

function cartReducer(state, action) {

  switch (action.type) {

    case 'ADD_ITEM':
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {

        const updatedItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

        return {

          ...state,
          items: updatedItems,
          totalAmount: state.totalAmount + 1,
          totalPrice: state.totalPrice + action.payload.price

        };

      }
      
      const newItem = { ...action.payload, quantity: 1 };
      return {

        ...state,
        items: [...state.items, newItem],
        totalAmount: state.totalAmount + 1,
        totalPrice: state.totalPrice + action.payload.price

      };

    case 'REMOVE_ITEM':
      const itemToRemove = state.items.find(item => item.id === action.payload);
      if (itemToRemove.quantity === 1) {

        const filteredItems = state.items.filter(item => item.id !== action.payload);
        return {

          ...state,
          items: filteredItems,
          totalAmount: state.totalAmount - 1,
          totalPrice: state.totalPrice - itemToRemove.price

        };

      }
      
      const updatedItems = state.items.map(item =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      return {

        ...state,
        items: updatedItems,
        totalAmount: state.totalAmount - 1,
        totalPrice: state.totalPrice - itemToRemove.price

      };

    case 'CLEAR_CART':
      return initialCartState;

    default:
      return state;

  }

}

function CartProvider({ children }) {

  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  const addItem = (item) => {

    dispatch({ type: 'ADD_ITEM', payload: item });

  };

  const removeItem = (id) => {

    dispatch({ type: 'REMOVE_ITEM', payload: id });

  };

  const clearCart = () => {

    dispatch({ type: 'CLEAR_CART' });

  };

  const value = {

    items: state.items,
    totalAmount: state.totalAmount,
    totalPrice: state.totalPrice,
    addItem,
    removeItem,
    clearCart

  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );

}

function useCart() {

  const context = useContext(CartContext);
  if (!context) {

    throw new Error('useCart must be used within a CartProvider');

  }

  return context;

}

function Product({ product }) {

  const { addItem } = useCart();

  return (
    <div className="bg-white p-4 rounded-lg shadow border">
      <h3 className="font-semibold text-lg">{product.name}</h3>
      <p className="text-gray-600">Ціна: {product.price} грн</p>
      <button
        onClick={() => addItem(product)}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
      >
        Додати в кошик
      </button>
    </div>
  );

}

function Cart() {

  const { items, totalAmount, totalPrice, removeItem, clearCart } = useCart();

  return (
    <div className="bg-white p-4 rounded-lg shadow border">
      <h2 className="text-xl font-bold mb-4">Кошик</h2>
      
      {items.length === 0 ? (
        <p className="text-gray-500">Кошик порожній</p>
      ) : (
        <>
          <div className="space-y-2 mb-4">
            {items.map(item => (
              <div key={item.id} className="flex justify-between items-center border-b pb-2">
                <div>
                  <span className="font-medium">{item.name}</span>
                  <span className="text-gray-600 text-sm ml-2">x{item.quantity}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>{item.price * item.quantity} грн</span>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Видалити
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="border-t pt-2">
            <div className="flex justify-between font-semibold mb-2">
              <span>Всього товарів:</span>
              <span>{totalAmount}</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Загальна сума:</span>
              <span>{totalPrice} грн</span>
            </div>
          </div>
          
          <button
            onClick={clearCart}
            className="mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full"
          >
            Очистити кошик
          </button>
        </>
      )}
    </div>
  );

}

function ShoppingCartApp() {

  const products = [
    { id: 1, name: "Смартфон", price: 15000 },
    { id: 2, name: "Ноутбук", price: 30000 },
    { id: 3, name: "Навушники", price: 2500 },
    { id: 4, name: "Планшет", price: 12000 }
  ];

  return (
    <CartProvider>
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Інтернет-магазин</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-bold mb-4">Товари</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {products.map(product => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          </div>
          
          <div>
            <Cart />
          </div>
        </div>
      </div>
    </CartProvider>
  );

}

const container = document.getElementById('Inga');
const root = ReactDOM.createRoot(container);
root.render(<ShoppingCartApp />);
*/



/* // Task 2
const { useReducer, createContext, useContext } = React;

const ThemeContext = createContext();

const initialThemeState = {

  theme: 'light'

};


function themeReducer(state, action) {

  switch (action.type) {

    case 'TOGGLE_THEME':
      return {

        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light'

      };

    case 'SET_THEME':
      return {

        ...state,
        theme: action.payload

      };

    default:
      return state;

  }

}


function ThemeProvider({ children }) {

  const [state, dispatch] = useReducer(themeReducer, initialThemeState);

  const toggleTheme = () => {

    dispatch({ type: 'TOGGLE_THEME' });

  };

  const setTheme = (theme) => {

    dispatch({ type: 'SET_THEME', payload: theme });

  };

  const value = {

    theme: state.theme,
    toggleTheme,
    setTheme

  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );

}

function useTheme() {

  const context = useContext(ThemeContext);
  if (!context) {

    throw new Error('useTheme must be used within a ThemeProvider');

  }

  return context;

}

function ThemeToggle() {

  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
        theme === 'light' 
          ? 'bg-gray-800 text-white hover:bg-gray-700' 
          : 'bg-yellow-400 text-gray-900 hover:bg-yellow-300'
      }`}
    >
      {theme === 'light' ? '🌙 Темна тема' : '☀️ Світла тема'}
    </button>
  );

}

function Header() {

  const { theme } = useTheme();

  return (
    <header className={`p-4 rounded-lg mb-6 transition-colors ${
      theme === 'light' ? 'bg-blue-500 text-white' : 'bg-gray-800 text-white'
    }`}>
      <h1 className="text-2xl font-bold">Мій додаток</h1>
      <p className="opacity-90">Поточна тема: {theme === 'light' ? 'світла' : 'темна'}</p>
    </header>
  );

}

function Content() {

  const { theme } = useTheme();

  return (
    <div className={`p-6 rounded-lg transition-colors ${
      theme === 'light' ? 'bg-white text-gray-800 border' : 'bg-gray-700 text-white'
    }`}>
      <h2 className="text-xl font-bold mb-4">Головний контент</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className={`p-4 rounded transition-colors ${
          theme === 'light' ? 'bg-blue-50 border border-blue-200' : 'bg-gray-600'
        }`}>
          <h3 className="font-semibold mb-2">1</h3>
          <p>Текст</p>
        </div>
        <div className={`p-4 rounded transition-colors ${
          theme === 'light' ? 'bg-green-50 border border-green-200' : 'bg-gray-600'
        }`}>
          <h3 className="font-semibold mb-2">2</h3>
          <p>Текст</p>
        </div>
      </div>
    </div>
  );

}

function ThemeSwitcherApp() {

  const { theme } = useTheme();

  return (
    <div className={`min-h-screen transition-colors ${
      theme === 'light' ? 'bg-gray-100' : 'bg-gray-900'
    }`}>
      <div className="container mx-auto p-6 max-w-4xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Перемикач тем</h1>
          <ThemeToggle />
        </div>
        
        <Header />
        <Content />
        
      </div>
    </div>
  );

}

function AppWithTheme() {

  return (
    <ThemeProvider>
      <ThemeSwitcherApp />
    </ThemeProvider>
  );

}

const container = document.getElementById('Inga');
const root = ReactDOM.createRoot(container);
root.render(<AppWithTheme />);
*/



/* // Task 3
const { useReducer, createContext, useContext, useState } = React;

const TodoContext = createContext();

const initialTodoState = {

  todos: []

};

function todoReducer(state, action) {

  switch (action.type) {

    case 'ADD_TODO':
      const newTodo = {

        id: Date.now(),
        text: action.payload,
        completed: false

      };
      return {

        ...state,
        todos: [...state.todos, newTodo]
        
      };

    case 'TOGGLE_TODO':
      return {

        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )

      };

    case 'DELETE_TODO':
      return {

        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)

      };

    case 'CLEAR_COMPLETED':
      return {

        ...state,
        todos: state.todos.filter(todo => !todo.completed)

      };

    default:
      return state;

  }

}

function TodoProvider({ children }) {

  const [state, dispatch] = useReducer(todoReducer, initialTodoState);

  const addTodo = (text) => {

    if (text.trim()) {

      dispatch({ type: 'ADD_TODO', payload: text.trim() });

    }

  };

  const toggleTodo = (id) => {

    dispatch({ type: 'TOGGLE_TODO', payload: id });

  };

  const deleteTodo = (id) => {

    dispatch({ type: 'DELETE_TODO', payload: id });

  };

  const clearCompleted = () => {

    dispatch({ type: 'CLEAR_COMPLETED' });

  };

  const value = {

    todos: state.todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted

  };

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );

}

function useTodo() {

  const context = useContext(TodoContext);
  if (!context) {

    throw new Error('useTodo must be used within a TodoProvider');

  }

  return context;

}

function TodoInput() {

  const [inputValue, setInputValue] = useState('');
  const { addTodo } = useTodo();

  const handleSubmit = (e) => {

    e.preventDefault();
    addTodo(inputValue);
    setInputValue('');

  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Що потрібно зробити?"
          className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 font-semibold"
        >
          Додати
        </button>
      </div>
    </form>
  );

}

function TodoItem({ todo }) {

  const { toggleTodo, deleteTodo } = useTodo();

  return (
    <div className={`flex items-center gap-3 p-3 border rounded-lg ${
      todo.completed ? 'bg-green-50 border-green-200' : 'bg-white'
    }`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="w-4 h-4"
      />
      <span className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
        {todo.text}
      </span>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-500 hover:text-red-700 p-1"
      >
        Видалити
      </button>
    </div>
  );

}

function TodoList() {

  const { todos, clearCompleted } = useTodo();

  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">
          Справи ({totalCount})
        </h2>
        {completedCount > 0 && (
          <button
            onClick={clearCompleted}
            className="text-red-500 hover:text-red-700 text-sm"
          >
            Очистити виконані ({completedCount})
          </button>
        )}
      </div>

      {todos.length === 0 ? (
        <p className="text-gray-500 text-center py-8">Список справ порожній</p>
      ) : (
        <div className="space-y-2">
          {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      )}
    </div>
  );

}

function TodoStats() {

  const { todos } = useTodo();

  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;
  const progress = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  return (
    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-6">
      <h3 className="font-semibold text-blue-800 mb-2">Прогрес</h3>
      <div className="flex justify-between text-sm text-blue-700 mb-2">
        <span>Виконано: {completedCount} з {totalCount}</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <div className="w-full bg-blue-200 rounded-full h-2">
        <div
          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );

}

function TodoApp() {

  return (
    <TodoProvider>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto p-6 max-w-2xl">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-3xl font-bold text-center mb-8">Мій список справ</h1>
            
            <TodoInput />
            <TodoList />
            <TodoStats />
          </div>
        </div>
      </div>
    </TodoProvider>
  );

}

const container = document.getElementById('Inga');
const root = ReactDOM.createRoot(container);
root.render(<TodoApp />);
*/