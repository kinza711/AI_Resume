import Navbar from "../components/partials/Navbar";
import Footer from "../components/partials/Footer";
import Login from "../components/auth/Login"

export default function Home() {
  return (
    <div className="bg-[#f7f9fb] text-[#191c1e]">
      <Navbar />
      <main className="pt-24">
        <Login/>
      </main>
      <Footer />
    </div>
  );
}
