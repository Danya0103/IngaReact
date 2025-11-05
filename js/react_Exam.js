/*
const mockProducts = [

    { id: 1, name: 'Ноутбук ProX', description: 'Потужний ноутбук для професіоналів.', price: 2500, details: '16GB RAM, 512GB SSD, 4K дисплей. Ідеальний для розробки та графіки.' },
    { id: 2, name: 'Смартфон Alpha', description: 'Сучасний смартфон з відмінною камерою.', price: 999, details: '5G, 128GB пам\'яті, 6.7" OLED екран. Довготривала робота батареї.' },
    { id: 3, name: 'Монітор UltraView', description: '32-дюймовий монітор з високою роздільною здатністю.', price: 650, details: '4K UHD, IPS-панель, 144Hz. Чудовий вибір для геймінгу та роботи.' },
    { id: 4, name: 'Клавіатура MechKey', description: 'Механічна клавіатура з підсвічуванням.', price: 150, details: 'Червоні свічі, RGB підсвічування, металевий корпус.' },
    { id: 5, name: 'Миша WirelessG', description: 'Бездротова геймерська миша.', price: 80, details: 'Низька затримка, 16000 DPI, ергономічний дизайн.' },
    { id: 6, name: 'Навушники SoundMax', description: 'Бездротові навушники з шумозаглушенням.', price: 290, details: 'Активне шумозаглушення, 30 годин роботи, зручні амбушюри.' },
    { id: 7, name: 'Планшет TabLite', description: 'Легкий планшет для навчання та розваг.', price: 450, details: '10.5" дисплей, 64GB пам\'яті, підтримка стилуса.' },
    { id: 8, name: 'Вебкамера HD', description: 'Вебкамера для якісних відеодзвінків.', price: 60, details: 'Full HD 1080p, вбудований мікрофон, автоматичне фокусування.' },
    { id: 9, name: 'Зарядний блок PowerUp', description: 'Швидкий зарядний пристрій на 65W.', price: 40, details: 'GaN технологія, 2 порти USB-C та 1 USB-A. Універсальна сумісність.' },
    { id: 10, name: 'Роутер WiFast', description: 'Високошвидкісний Wi-Fi 6 роутер.', price: 120, details: 'Дводіапазонний Wi-Fi 6, площа покриття до 200 м², просте налаштування.' },

];

const { useState, useEffect } = React;

const ProductSkeleton = () => (
    <div className="border border-gray-200 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div className="animate-pulse flex flex-col space-y-4">
            <div className="h-6 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            <div className="h-6 bg-gray-300 rounded w-1/4 self-end"></div>
            <div className="h-10 bg-gray-300 rounded w-full"></div>
        </div>
    </div>
);

const LazyLoadWrapper = (Component) => {

    return (props) => {

        const [isLoaded, setIsLoaded] = useState(false);
        useEffect(() => {

            const timer = setTimeout(() => {

                setIsLoaded(true);
            }, 500);
            return () => clearTimeout(timer);
        }, []);

        if (!isLoaded) {

            return <div className="text-center p-8 text-xl text-gray-500">Завантаження компонента...</div>;

        }

        return <Component {...props} />;

    };
};

const AboutPage = LazyLoadWrapper(() => (
    <div className="p-8">
        <h2 className="text-3xl font-bold mb-4">Про нас</h2>
        <p className="text-lg">Ми — компанія, що спеціалізується на продажу високоякісної електроніки. Наша мета — надати клієнтам найкращі продукти за конкурентними цінами.</p>
        <p className="mt-4 text-gray-600">Дякуємо, що обрали нас!</p>
    </div>
));

const ProductDetailsPage = LazyLoadWrapper(({ currentPath }) => {

    const idMatch = currentPath.match(/\/products\/(\d+)/);
    const productId = idMatch ? parseInt(idMatch[1]) : null;
    const product = mockProducts.find(p => p.id === productId);

    if (!productId) {

        return <div className="p-8 text-red-500">Помилка: Товар не знайдено або відсутній ID.</div>;

    }

    if (!product) {

        return <div className="p-8 text-red-500">Товар з ID {productId} не знайдено.</div>;

    }

    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-indigo-700">{product.name}</h2>
            <div className="bg-white shadow-lg rounded-lg p-6">
                <p className="text-2xl font-semibold mb-4 text-green-600">Ціна: ${product.price}</p>
                <h3 className="text-xl font-semibold mb-2">Детальний опис:</h3>
                <p className="text-gray-700 mb-4">{product.details}</p>
                <p className="text-gray-500">Короткий опис: {product.description}</p>
                <button 
                    className="mt-6 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded transition duration-200"
                    onClick={() => window.history.pushState(null, '', '/products')}
                >
                    &larr; Назад до каталогу
                </button>
            </div>
        </div>
    );
});

const ProductModal = ({ product, onClose }) => {

    if (!product) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 m-4 transform transition-all duration-300 scale-100">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-indigo-700">{product.name}</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl leading-none">&times;</button>
                </div>
                <div className="mt-2">
                    <p className="text-lg font-semibold text-green-600 mb-3">Ціна: ${product.price}</p>
                    <p className="text-gray-800">**Деталі:** {product.details}</p>
                    <p className="text-gray-600 mt-2">Короткий опис: {product.description}</p>
                </div>
                <div className="mt-6 flex justify-end">
                    <button
                        onClick={onClose}
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-200"
                    >
                        Закрити
                    </button>
                </div>
            </div>
        </div>
    );
};

const ProductCard = ({ product, onDetailsClick }) => (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col justify-between p-5 border border-gray-100">
        <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 truncate" title={product.name}>{product.name}</h3>
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
            <p className="text-2xl font-bold text-green-600 mb-4">${product.price}</p>
        </div>
        <button
            onClick={() => onDetailsClick(product)}
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 rounded-lg transition duration-200"
        >
            Детальніше
        </button>
    </div>
);

const ProductsPage = ({ onDetailsClick }) => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        setIsLoading(true);
        const timer = setTimeout(() => {

            setProducts(mockProducts); 
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const numberOfSkeletons = 8;

    if (isLoading) {

        return (
            <div className="p-8">
                <h1 className="text-3xl font-bold mb-6 text-gray-800">Каталог товарів ⏳</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {Array.from({ length: numberOfSkeletons }).map((_, index) => (
                        <ProductSkeleton key={index} />
                    ))}
                </div>
            </div>
        );

    }

    if (products.length === 0) {

        return (
            <div className="p-8 text-center">
                <h1 className="text-3xl font-bold mb-4">Каталог товарів</h1>
                <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4" role="alert">
                    <p className="font-bold">Увага</p>
                    <p>Список товарів порожній або не знайдено збігів.</p>
                </div>
            </div>
        );

    }

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Каталог товарів</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onDetailsClick={onDetailsClick}
                    />
                ))}
            </div>
        </div>
    );
};

const Header = ({ onNavigate, currentPath }) => {

    const Link = ({ to, children }) => (
        <button
            onClick={() => onNavigate(to)}
            className={`px-4 py-2 rounded-lg transition duration-200 ${
                currentPath === to ? 'bg-indigo-600 text-white font-bold' : 'text-gray-700 hover:bg-gray-200'
            }`}
        >
            {children}
        </button>
    );

    return (
        <header className="bg-white shadow-md p-4 sticky top-0 z-10">
            <nav className="flex justify-center space-x-4">
                <Link to="/">Головна</Link>
                <Link to="/about">Про нас</Link>
                <Link to="/products">Каталог</Link>
            </nav>
        </header>
    );

};

const HomePage = LazyLoadWrapper(() => (
    <div className="p-8 text-center">
        <h1 className="text-5xl font-extrabold mb-4 text-indigo-700">Ласкаво просимо до нашого SPA!</h1>
        <p className="text-xl text-gray-600">Перегляньте наш каталог товарів або дізнайтеся більше про нас.</p>
        <div className="mt-8">
        </div>
    </div>
));

const App = () => {

    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    const [modalProduct, setModalProduct] = useState(null);

    useEffect(() => {

        const handlePopState = () => {

            setCurrentPath(window.location.pathname);

        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    const handleNavigate = (path) => {

        window.history.pushState(null, '', path);
        setCurrentPath(path);

    };

    const handleDetailsClick = (product) => {

        setModalProduct(product);

    };
    
    const closeModal = () => setModalProduct(null);

    let ComponentToRender;
    let props = { onNavigate: handleNavigate, currentPath };

    if (currentPath === '/products') {

        ComponentToRender = ProductsPage;
        props = { ...props, onDetailsClick: handleDetailsClick };

    }
    
    else if (currentPath.startsWith('/products/')) {

        ComponentToRender = ProductDetailsPage;

    } 
    
    else if (currentPath === '/about') {

        ComponentToRender = AboutPage;

    } 
    
    else {

        ComponentToRender = HomePage;

    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Header onNavigate={handleNavigate} currentPath={currentPath} />

            <main className="container mx-auto py-8">
                <div className="p-4 bg-white shadow-lg rounded-lg">
                    <ComponentToRender {...props} />
                </div>
            </main>

            <ProductModal 
                product={modalProduct} 
                onClose={closeModal} 
            />
        </div>
    );

};

const container = document.getElementById('Inga');
const root = ReactDOM.createRoot(container);
root.render(<App />);

if (window.location.pathname === '/') {

    window.history.replaceState(null, '', '/products');

}
*/