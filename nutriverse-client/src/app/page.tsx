import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div id="home">
        <nav className="flex justify-center font-[family-name:var(--font-geist-sans)]">
          <NavBar />
        </nav>
        <main className="flex justify-center font-[family-name:var(--font-geist-sans)]">
          <Hero />
        </main>
        <footer>

        </footer>
    </div>
  );
}