import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"

const colors = {
    brand: {
        900: "#1a365d",
        800: "#153e75",
        700: "#2a69ac",
    },
}
const theme = extendTheme({colors})

const App = () => {
    // Create the count state.
    const [count, setCount] = useState(0);
    // Create the counter (+1 every second).
    useEffect(() => {
        const timer = setTimeout(() => setCount(count + 1), 1000);
        return () => clearTimeout(timer);
    }, [count, setCount]);
    // Return the App component.
    return (
        <ChakraProvider theme={theme}>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <p>
                        Page has been open for <code>{count}</code> seconds.
                    </p>
                    <p>
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn React
                        </a>
                    </p>
                </header>
            </div>
        </ChakraProvider>

    );
}

export default App;
