import RegisterForm from "../forms/RegisterForm";

export default function Register() {
  return (
    <main className="flex min-h-screen bg-[#f7f9fb] text-[#191c1e]">
      {/* LEFT SIDE */}
      <section className="hidden lg:flex lg:w-1/2 relative bg-[#1a237e] overflow-hidden">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBC4VjR_k8HKHNapJetZ_5YoSs55CqluATdOoZUXMYksTWdQPzhp6nuzMPB70bcwl1kidrrWSlKthBNDYzkd0Rq5-O1cLGtmfNe6N46hPeJGUdT0hddGPgMKYAI1SOEBCvk2i7qai_3kXs5Own9k71TkyBoDcKimimzcl4nx5M3eP-Ss27BX_L5xEZRKiw9hWCz5qYIAVnScra6dHY9cljTERJfwvkrUGDxv-OWuAh7M1VKftdvFOI7tDCSW8okEu9zi9YvFvQKe3B3"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          alt=""
        />

        <div className="relative z-10 flex flex-col justify-end p-16 bg-gradient-to-t from-black/60 to-transparent w-full">
          <div className="max-w-xl text-white">
            <h1 className="text-5xl font-extrabold mb-6 leading-tight">
              Engineer Your <br />
              <span className="bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">
                Career Trajectory
              </span>
            </h1>

            <p className="text-lg opacity-80 mb-10">
              Join thousands shaping their future with intelligent resumes.
            </p>

            <div className="bg-white/10 backdrop-blur-xl p-6 rounded-xl flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i}`}
                    className="w-10 h-10 rounded-full border-2 border-white"
                    alt=""
                  />
                ))}
              </div>
              <div>
                <p className="font-bold">4.9/5 Rating</p>
                <p className="text-sm opacity-80">Trusted by professionals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RIGHT SIDE */}
      <section className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Heading */}
          <div className="mb-10">
            <h2 className="text-4xl font-bold mb-2">Create Your Account</h2>
            <p className="text-gray-500">Start building your future today.</p>
          </div>

          {/* FORM */}
          <RegisterForm />

          {/* Terms */}
          <p className="text-center text-xs text-gray-400 mt-10 uppercase tracking-widest">
            By signing up, you agree to Terms & Privacy Policy
          </p>
        </div>
      </section>
    </main>
  );
}
