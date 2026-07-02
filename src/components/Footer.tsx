export default function Footer() {
  return (
    <footer className="bg-black py-6 text-center text-sm text-white/40">
      © {new Date().getFullYear()} 你的名字. Built with Next.js & Tailwind CSS.
    </footer>
  );
}
