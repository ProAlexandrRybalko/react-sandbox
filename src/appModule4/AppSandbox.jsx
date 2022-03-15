import React, { useEffect } from "react";
import { useCallback } from "react";
import { useMemo, useState } from "react";
import { Header } from "./Header";
import { MyList } from "./List";
import MemoList from "./MemoList";

const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222"
    }
  };

const ThemeContext = React.createContext(themes.light);

const AppSandBox = () => {
    const [colored, setColored] = useState(false);
    const [app, setApp] = useState(false);
    const [contextStyle, setContextStyle] = useState(themes.light);
    const [contextChanged, setContextChanged] = useState(true);

    const styleColor = useMemo(() => {
        return colored ? 
        { color: "black" }
        :
        { color: "red" }
    }, [colored]);
    // const styleColor = 
    //     colored ? { color: "black" }
    //     :
    //     { color: "red" }
    
    const obj = useMemo(() => [
        {id: 1},
        {id: 2},
        {id: 3},
    ], []);

    const setList = useCallback(() => {
        return obj;
    }, [obj]);

    const changeContext = () => {
        setContextChanged(!contextChanged);
        if(contextChanged) {
            setContextStyle(themes.dark);
        }
        else {
            setContextStyle(themes.light);
        }
    }

useEffect(() => {
    console.log('styles changed')
}, [styleColor]);

    return (
        <ThemeContext.Provider value={contextStyle}>
            <div>
                <h1 style={styleColor}>AAA</h1>
                <button onClick={() => setColored(!colored)}>Change color</button>
                <button onClick={() => setApp(!app)}>Change app</button>
                <MyList setList={setList}/>
                <MemoList setList={setList}/>
            </div>
            <Header/>
            <button onClick={changeContext}>ChangeContext</button>
        </ThemeContext.Provider>
    )
}

export {AppSandBox, ThemeContext};