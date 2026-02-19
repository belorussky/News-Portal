import { Link } from "@inertiajs/react";

interface IProps {
    children: React.ReactNode;
}

function Layout({ children }: IProps) {
    return (
        <>
            <header>
                <nav>
                    <Link className="nav-link" href="/">Home</Link>
                    <Link className="nav-link" href="/posts/create">Create</Link>
                </nav>
            </header>

            <main>
                { children }
            </main>
        </>
    )
}

export default Layout;