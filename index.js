import React from "react"
import ReactDOM from "react-dom"

function Page() {
    return (
        <div>
            <header>
                <nav>
                    <img src="./react-logo.png" width="40px" />
                </nav>
            </header>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a resourceful, progressive tool for web developers </li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
            <footer>
                <small>© 2022 Melchiade development. All rights reserved.</small>
            </footer>
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))