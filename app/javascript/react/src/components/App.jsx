import * as React from "react"
import * as ReactDom from "react-dom/client"
import { Globalstyle } from "../styles/globalstyle"
import { MainLayout } from "../styles/layouts"
import {AppStyled} from "../styles/app-syle"
import {Orb} from "./Orb/Orb";
import {Navigation} from "./Navigation/Navigation";
import {useState} from "react";

const App = () => {
    const [active, setActive] = useState(1)

    return (
        <AppStyled className="App">
            <MainLayout>
                <Navigation active={active} setActive={setActive} />
                <main>
                    hello
                </main>
                <Orb />
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