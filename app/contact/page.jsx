export default function Page() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p className="mt-4">We’ll respond within 24 hours.</p>
      <form className="mt-6 flex flex-col gap-4 max-w-md">
        <input className="border p-3" placeholder="Your Name" />
        <input className="border p-3" placeholder="Email" />
        <textarea className="border p-3" placeholder="Message" />
        <button className="bg-brand text-white py-2 px-4">Send</button>
      </form>
    </div>
  );
}