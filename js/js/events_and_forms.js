/* // Task 1
const { useState, useCallback } = React;

function Task1() {

    const handleClick = () => {

        alert("Кнопку натиснуто");

    };

    return (
        <section>
            <h2 className="text-2xl font-semibold mb-3">Кнопка з onClick</h2>
            <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-150"
                onClick={handleClick}
            >
                Натисни мене
            </button>
        </section>
    );

}

const root = ReactDOM.createRoot(document.getElementById('Inga'));
root.render(<Task1 />);
*/



/* // Task 2
const { useState } = React;

function Task2() {

    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {

        setInputValue(event.target.value);

    };

    return (
        <section>
            <h2 className="text-2xl font-semibold mb-3">Поле з onChange</h2>
            <input
                type="text"
                className="border border-gray-400 p-2 rounded w-full max-w-sm mb-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Введіть текст..."
                onChange={handleChange}
            />
            <p className="text-gray-700 mt-2 p-2 bg-gray-100 rounded">
                Поточне значення: <strong className="text-blue-600">"{inputValue}"</strong>
            </p>
        </section>
    );

}

const root = ReactDOM.createRoot(document.getElementById('Inga'));
root.render(<Task2 />);
*/



/* // Task 3
const { useState } = React;

function Task3() {

    const [formValues, setFormValues] = useState({ name: '', email: '' });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormValues(prev => ({ ...prev, [name]: value }));

    };

    const handleSubmit = (event) => {

        event.preventDefault();

        const message = `Відправлені дані:\nІм'я: ${formValues.name}\nEmail: ${formValues.email}`;
        alert(message);
        
    };

    return (
        <section>
            <h2 className="text-2xl font-semibold mb-3">Форма з onSubmit</h2>
            <form onSubmit={handleSubmit} className="space-y-3 p-4 border rounded max-w-md">
                <div>
                    <label htmlFor="task3-name" className="block text-sm font-medium text-gray-700">Ім'я:</label>
                    <input
                        id="task3-name"
                        type="text"
                        name="name"
                        value={formValues.name}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="task3-email" className="block text-sm font-medium text-gray-700">Email:</label>
                    <input
                        id="task3-email"
                        type="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-150"
                >
                    Надіслати
                </button>
            </form>
        </section>
    );

}

const root = ReactDOM.createRoot(document.getElementById('Inga'));
root.render(<Task3 />);
*/



/* // Task 4
const { useState } = React;

function Task4() {

    const [value, setValue] = useState('');

    const handleChange = (event) => {

        const newValue = event.target.value;
        
        const valueWithoutSpaces = newValue.replace(/\s/g, '');
        
        setValue(valueWithoutSpaces);

    };

    return (
        <section>
            <h2 className="text-2xl font-semibold mb-3">Контрольований input без пробілів</h2>
            <input
                type="text"
                className="border border-gray-400 p-2 rounded w-full max-w-sm mb-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Спробуйте ввести пробіл..."
                value={value}
                onChange={handleChange}
            />
            <p className="text-gray-700 mt-2 p-2 bg-gray-100 rounded">
                Поточне значення (без пробілів): <strong className="text-purple-600">"{value}"</strong>
            </p>
        </section>
    );

}

const root = ReactDOM.createRoot(document.getElementById('Inga'));
root.render(<Task4 />);
*/



/* // Task 5
const { useState } = React;

function Task5() {

    const [formData, setFormData] = useState({

        country: 'ua',
        agreed: false

    });

    const handleChange = (event) => {

        const { name, value, type, checked } = event.target;

        setFormData(prev => ({

            ...prev,
            [name]: type === 'checkbox' ? checked : value

        }));

    };

    return (
        <section>
            <h2 className="text-2xl font-semibold mb-3">Контрольований select та checkbox</h2>
            <form className="space-y-3 p-4 border rounded max-w-md">
                {}
                <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Оберіть країну:</label>
                    <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                    >
                        <option value="ua">Україна</option>
                        <option value="pl">Польща</option>
                        <option value="de">Німеччина</option>
                        <option value="us">США</option>
                    </select>
                </div>

                {}
                <div className="flex items-center">
                    <input
                        id="agreed"
                        type="checkbox"
                        name="agreed"
                        checked={formData.agreed}
                        onChange={handleChange}
                        className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    />
                    <label htmlFor="agreed" className="ml-2 block text-sm text-gray-900">
                        Я погоджуюсь з умовами
                    </label>
                </div>
            </form>

            {}
            <div className="mt-4 p-3 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 rounded max-w-md">
                <p>Країна: <strong>{formData.country.toUpperCase()}</strong></p>
                <p>Погодження: <strong>{formData.agreed ? 'Так' : 'Ні'}</strong></p>
            </div>
        </section>
    );

}

const root = ReactDOM.createRoot(document.getElementById('Inga'));
root.render(<Task5 />);
*/


/* // Task 6-7
const { useState } = React;

const useForm = ({ defaultValues }) => {

    const [values, setValues] = useState(defaultValues || { name: '', email: '' });
    const [errors, setErrors] = useState({});

    const validate = (data) => {

        let currentErrors = {};

        if (!data.name || data.name.trim() === '') {

            currentErrors.name = { message: "Ім'я є обов'язковим полем" };

        }
        
        if (!data.email || data.email.trim() === '') {

            currentErrors.email = { message: "Email є обов'язковим полем" };

        } 

        else if (!/\S+@\S+\.\S+/.test(data.email)) {

            currentErrors.email = { message: "Введіть коректний email формат" };

        }
        
        return currentErrors;

    };

    const register = (name) => ({

        name,
        value: values[name] || '',
        onChange: (e) => setValues(prev => ({ ...prev, [name]: e.target.value })),

    });

    const handleSubmit = (onSubmit) => (e) => {

        e.preventDefault();
        
        const currentErrors = validate(values);
        setErrors(currentErrors);

        if (Object.keys(currentErrors).length === 0) {

            onSubmit(values);

        }
    };

    return { register, handleSubmit, formState: {errors} };
};

function Task7() {

    const { register, handleSubmit, formState: {errors} } = useForm({});

    const onSubmit = (data) => {

        console.log("Дані форми (Task 7):", data);
        alert(`Форма відправлена. Дані в консолі: ${JSON.stringify(data)}`);

    };

    return (
        <section>
            <h2 className="text-2xl font-semibold mb-3">RHF + Yup Валідація</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4 border-2 border-red-200 rounded max-w-md">
                
                {}
                <div>
                    <label htmlFor="rhf-name" className="block text-sm font-medium text-gray-700">Ім'я:</label>
                    <input
                        id="rhf-name"
                        type="text"
                        {...register("name")}
                        className={`mt-1 block w-full p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm`}
                    />
                    {}
                    {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                </div>

                {}
                <div>
                    <label htmlFor="rhf-email" className="block text-sm font-medium text-gray-700">Email:</label>
                    <input
                        id="rhf-email"
                        type="email"
                        {...register("email")}
                        className={`mt-1 block w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm`}
                    />
                    {}
                    {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-150"
                >
                    Надіслати
                </button>
            </form>
        </section>
    );

}

const root = ReactDOM.createRoot(document.getElementById('Inga'));
root.render(<Task7 />);
*/