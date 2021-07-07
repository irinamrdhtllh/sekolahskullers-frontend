import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main style={{minHeight: '100vh'}}>
                {children}
            </main>
            <Footer />
        </>
    );
}