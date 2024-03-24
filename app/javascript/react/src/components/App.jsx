import * as React from "react"
import * as ReactDom from "react-dom/client"
import { Globalstyle } from "../styles/globalstyle"
import { MainLayout } from "../styles/layouts"
import {AppStyled} from "../styles/app-syle"
import {Orb} from "./Orb/Orb";
import {Navigation} from "./Navigation/Navigation";
import { Dashboard } from "./Dashboard/Dashboard"
import {useState} from "react";
import {Incomes} from "./Incomes/Incomes";
import {Expenses} from "./Expenses/Expenses";

const App = () => {
    const [active, setActive] = useState(1)
    const displayData = () => {
        switch (active){
            case 1:
                return <Dashboard />
            case 2:
                return <Dashboard />
            case 3:
                return <Incomes />
            case 4:
                return <Expenses />
            default:
                return <Dashboard />
        }
    }

    return (
        <AppStyled className="App">
            <MainLayout>
                <Navigation active={active} setActive={setActive} />
                <main>
                    {displayData()}
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