import { Link } from "@inertiajs/react";

function Layout({ children }) {
    return (
        <>
            <header>
                <nav>
                    <Link className="nav-link" href="/">Home</Link>
                    <Link className="nav-link" href="/create">Create</Link>
                </nav>
            </header>

            <main>
                { children }
            </main>
        </>
    )
}

export default Layout;