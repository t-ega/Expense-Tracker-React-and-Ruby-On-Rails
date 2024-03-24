import * as React from "react"
import * as ReactDom from "react-dom/client"
import { Globalstyle } from "../styles/globalstyle"
import { MainLayout, InnerLayout } from "../styles/layouts"
import {AppStyled} from "../styles/app-syle"
import {Orb} from "./Orb/Orb";

const App = () => {
    return (
        <AppStyled className="App">
            <MainLayout>
                <h1>Hello World</h1>
                <Orb></Orb>
            </MainLayout>
    </AppStyled>
    )
}

const root = ReactDom.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <Globalstyle />
        <App />
    </React.StrictMode>
)
export default App;