// components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-black/50 backdrop-blur-md py-6 text-center text-white">
        <div className="max-w-6xl mx-auto">
          <p>&copy; {new Date().getFullYear()} Sami Melhem. All rights reserved.</p>
        </div>
      </footer>
    )
  }
  