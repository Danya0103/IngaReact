/* // Task 1
const { useState, useEffect } = React;

function Today() {

    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {

        const timerID = setInterval(() => {

            setCurrentDate(new Date());

        }, 
        
        60000); 

        return () => clearInterval(timerID);
    }, []); 

    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
    const year = currentDate.getFullYear();

    const formattedDate = `${day}.${month}.${year}`;

    const hour = currentDate.getHours();
    let greeting = '';

    if (hour >= 5 && hour < 12) {

        greeting = 'Доброго ранку! ☕';

    } 
    
    else if (hour >= 12 && hour < 18) {

        greeting = 'Доброго дня! ☀️';

    } 
    
    else if (hour >= 18 && hour < 22) {

        greeting = 'Доброго вечора! 🌙';

    } 
    
    else {

        greeting = 'Доброї ночі! 🦉';

    }

    return (
        <div 
            style={{

                fontFamily: 'Arial, sans-serif',
                padding: '20px',
                border: '2px solid #007bff',
                borderRadius: '10px',
                textAlign: 'center',
                maxWidth: '320px',
                margin: '30px auto',
                boxShadow: '0 4px 10px rgba(0, 123, 255, 0.1)'

            }}
        >
            <h2 style={{ color: '#333', marginBottom: '10px' }}>{greeting}</h2>

            <p style={{ 

                fontSize: '1.4em', 
                fontWeight: 'bold', 
                color: '#007bff',
                borderTop: '1px dashed #ccc',
                paddingTop: '10px'

            }}>
                Сьогодні: {formattedDate}
            </p>
        </div>
    );
}

const appContainer = document.getElementById('Inga');
const root = ReactDOM.createRoot(appContainer);
root.render(<Today />);
*/

/* // Task 2
const { useState } = React;

function CoffeeCounter() {
    
    const [count, setCount] = useState(0);

    const handleCoffeeClick = () => {

        setCount(prevCount => prevCount + 1);

    };

    const isTooMuch = count > 3;

    return (
        <div style={{ 

            fontFamily: 'Arial, sans-serif',
            padding: '20px', 
            border: '2px solid #964B00',
            margin: '30px auto', 
            borderRadius: '10px', 
            textAlign: 'center',
            maxWidth: '300px',
            backgroundColor: '#F5F5DC'

        }}>
            <h2 style={{ color: '#654321' }}>Випито чашок кави: {count}</h2>
            
            <button 
                onClick={handleCoffeeClick} 

                style={{ 

                    padding: '10px 20px', 
                    fontSize: '1em', 
                    cursor: 'pointer', 
                    backgroundColor: '#8B4513',
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '5px',
                    fontWeight: 'bold',
                    margin: '10px 0'

                }}
            >
                Ще чашка кави
            </button>
            
            {isTooMuch && (
                <p style={{ color: '#FF0000', fontWeight: 'bold', marginTop: '15px', borderTop: '1px dashed #ccc', paddingTop: '10px' }}>
                    Можливо досить? ^^ ☕
                </p>
            )}
        </div>
    );
}

const rootElement = document.getElementById('Inga');

if (typeof ReactDOM !== 'undefined' && rootElement) {

    const root = ReactDOM.createRoot(rootElement);
    root.render(<CoffeeCounter />);

}
*/

/* // Task 3
const { useState } = React;

function ContactForm() {

    const [formData, setFormData] = useState({

        name: '',
        email: '',
        message: ''

    });

    const handleChange = (e) => {

        const { name, value } = e.target;
        setFormData(prevData => ({

            ...prevData,
            [name]: value

        }));
    };

    const handleSubmit = (e) => {

        e.preventDefault(); 
        
        if (formData.name) {

            alert(`Привіт, ${formData.name}! Ваше повідомлення отримано.`);

        } 
        
        else {

            alert('Будь ласка, введіть своє ім\'я.');

        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ 

            fontFamily: 'Arial, sans-serif',
            padding: '20px', 
            border: '2px solid #3498db', 
            margin: '30px auto', 
            borderRadius: '10px', 
            maxWidth: '400px',
            backgroundColor: '#ecf0f1'

        }}>
            <h2 style={{ color: '#2c3e50', textAlign: 'center' }}>Напиши мені</h2>
            
            <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Ім'я:</label>
                <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    style={{ width: '100%', padding: '8px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }} 
                />
            </div>
            
            <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email:</label>
                <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    style={{ width: '100%', padding: '8px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }} 
                />
            </div>
            
            <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Повідомлення:</label>
                <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    rows="4" 
                    style={{ width: '100%', padding: '8px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }} 
                ></textarea>
            </div>
            
            <button 
                type="submit" 
                style={{ 

                    padding: '10px 20px', 
                    fontSize: '1em', 
                    cursor: 'pointer', 
                    backgroundColor: '#2ecc71', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '5px',
                    fontWeight: 'bold',
                    display: 'block',
                    width: '100%'

                }}
            >
                Надіслати
            </button>
        </form>
    );
}

const rootElement = document.getElementById('Inga');

if (typeof ReactDOM !== 'undefined' && rootElement) {

    const root = ReactDOM.createRoot(rootElement);
    root.render(<ContactForm />);

}
*/

/* // Task 4
const { useState } = React;

const moodStyles = {

    'Веселий': { 

        backgroundColor: '#D4F1F4', 
        color: '#05668D', 
        text: 'Супер! Життя прекрасне! 😊' 

    },

    'Спокійний': { 

        backgroundColor: '#FCF8E8', 
        color: '#8A6D3B', 
        text: 'Дзен. Усе під контролем. 🧘' 

    },

    'Злий': { 

        backgroundColor: '#F2DEDE', 
        color: '#A94442', 
        text: 'Краще не чіпай! 😡' 

    }
};

function MoodColor() {

    const [mood, setMood] = useState(null); 

    const currentStyle = mood ? moodStyles[mood] : { 

        backgroundColor: '#f5f5f5', 
        color: '#333', 
        text: 'Оберіть ваш настрій' 

    };

    const moods = Object.keys(moodStyles);

    return (
        <div style={{ 

            fontFamily: 'Arial, sans-serif',
            padding: '20px', 
            border: '2px solid #5D5D5D', 
            margin: '30px auto', 
            borderRadius: '10px', 
            maxWidth: '450px',
            backgroundColor: '#e6e6e6'

        }}>
            <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '15px' }}>Колір вашого настрою</h2>
            
            <div style={{ 

                padding: '20px', 
                marginBottom: '20px', 
                borderRadius: '8px',
                backgroundColor: currentStyle.backgroundColor,
                color: currentStyle.color,
                transition: 'background-color 0.5s, color 0.5s',
                fontWeight: 'bold',
                minHeight: '40px',
                textAlign: 'center',
                fontSize: '1.2em'

            }}>
                {currentStyle.text}
            </div>

            <div style={{ textAlign: 'center' }}>
                {moods.map((m) => (
                    <button
                        key={m}
                        onClick={() => setMood(m)}
                        style={{

                            padding: '10px 15px',
                            margin: '5px',
                            cursor: 'pointer',
                            backgroundColor: mood === m ? '#3498db' : '#bdc3c7',
                            color: mood === m ? 'white' : '#333',
                            border: 'none',
                            borderRadius: '5px',
                            fontWeight: 'bold'

                        }}
                    >
                        {m}
                    </button>
                ))}
            </div>
        </div>
    );
}

const rootElement = document.getElementById('Inga');

if (typeof ReactDOM !== 'undefined' && rootElement) {

    const root = ReactDOM.createRoot(rootElement);
    root.render(<MoodColor />);

}
*/