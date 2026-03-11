import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { User, Mail, Lock, ArrowRight, UserPlus } from "lucide-react"
import API from "../services/api"

export default function Register(){
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match")
      return
    }

    setIsLoading(true)
    setError("")
    
    try {
      const { name, email, password } = form;
      await API.post("/auth/register", { name, email, password })
      navigate("/")
    } catch (err) {
      setError(err.response?.data?.message || "Failed to register. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-slate-950 font-sans">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute top-[10%] -left-[10%] w-[40%] h-[60%] rounded-full bg-indigo-600/20 blur-[120px]" />
        <div className="absolute top-[40%] left-[50%] w-[30%] h-[30%] rounded-full bg-pink-600/20 blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-md px-6 py-12">
        <div className="bg-slate-900/60 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] 
          transform transition-all duration-500 hover:shadow-[0_8px_40px_0_rgba(168,85,247,0.15)] hover:border-white/20">
          
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30">
              <UserPlus className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white tracking-tight">Create Account</h1>
            <p className="text-slate-400 mt-2 text-sm">Join us to get started with SmartPanel</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm text-center">
                {error}
              </div>
            )}

            <div className="space-y-4">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-purple-400 transition-colors">
                  <User className="h-5 w-5" />
                </div>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-950/50 border border-white/5 rounded-xl text-white placeholder-slate-500 
                  focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all duration-300"
                  required
                />
              </div>

              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-purple-400 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <input
                  type="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-950/50 border border-white/5 rounded-xl text-white placeholder-slate-500 
                  focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all duration-300"
                  required
                />
              </div>

              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-purple-400 transition-colors">
                  <Lock className="h-5 w-5" />
                </div>
                <input
                  type="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-950/50 border border-white/5 rounded-xl text-white placeholder-slate-500 
                  focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all duration-300"
                  required
                />
              </div>
              
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-purple-400 transition-colors">
                  <Lock className="h-5 w-5" />
                </div>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={form.confirmPassword}
                  onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-950/50 border border-white/5 rounded-xl text-white placeholder-slate-500 
                  focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all duration-300"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-4 px-4 border border-transparent rounded-xl text-sm font-semibold text-white 
              bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 focus:ring-offset-slate-900
              transition-all duration-300 shadow-lg shadow-purple-500/25 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <span className="flex items-center">
                {isLoading ? "Creating account..." : "Sign up"}
                {!isLoading && <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />}
              </span>
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-slate-400">
            Already have an account?{" "}
            <Link to="/" className="font-medium text-purple-400 hover:text-purple-300 transition-colors">
              Sign in instead
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}