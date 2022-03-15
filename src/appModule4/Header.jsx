import { useContext } from "react"
import { ThemeContext } from "./AppSandbox";

export const Header = () => {
    const theme = useContext(ThemeContext);

    return (
        <div style={theme}>
            Text
        </div>
    )
}