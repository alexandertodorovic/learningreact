import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Button = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    };
    return (
        <button onClick={toggleTheme}>Switch to {theme} mode.</button>
    );
};

export default Button;