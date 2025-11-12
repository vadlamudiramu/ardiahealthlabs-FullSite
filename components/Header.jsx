export default function Header() {
  return (
    <header className="w-full py-6 bg-dark text-white flex justify-between px-10">
      <h1 className="text-xl font-bold">Ardia Health</h1>
      <nav className="flex gap-8">
        <a href="/" className="hover:text-brand">Home</a>
        <a href="/solutions/flow" className="hover:text-brand">Flow AI</a>
        <a href="/solutions/predict" className="hover:text-brand">Predict AI</a>
        <a href="/research" className="hover:text-brand">Research</a>
        <a href="/blog" className="hover:text-brand">Blog</a>
        <a href="/contact" className="hover:text-brand">Contact</a>
      </nav>
    </header>
  );
}