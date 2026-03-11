import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { LayoutDashboard, Users, BarChart3, Settings, Bell, Search, Menu, X, LogOut } from "lucide-react"

export default function DashboardLayout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const user = JSON.parse(localStorage.getItem("user") || "{}")

  const navItems = [
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    ...(user.role === "admin" ? [{ name: "Admin Panel", path: "/admin", icon: Users }] : []),
    { name: "Analytics", path: "#", icon: BarChart3 },
    { name: "Settings", path: "#", icon: Settings },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans flex overflow-hidden">
      
      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-72 bg-slate-900/50 backdrop-blur-2xl border-r border-white/5 
        transform transition-transform duration-300 ease-in-out flex flex-col
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
        
        <div className="h-20 flex items-center px-8 border-b border-white/5">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mr-3 shadow-lg shadow-indigo-500/20">
            <LayoutDashboard className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            SmartPanel
          </span>
          <button className="ml-auto lg:hidden text-slate-400 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center px-4 py-3.5 rounded-xl transition-all duration-300 group ${
                  isActive 
                    ? "bg-indigo-500/10 text-indigo-400 font-medium" 
                    : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                }`}
              >
                <item.icon className={`w-5 h-5 mr-3 transition-colors ${isActive ? "text-indigo-400" : "text-slate-500 group-hover:text-slate-300"}`} />
                {item.name}
                {isActive && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.5)]" />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-white/5">
          <Link
            to="/"
            className="flex items-center px-4 py-3.5 rounded-xl text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition-colors group"
            onClick={() => localStorage.removeItem("token")}
          >
            <LogOut className="w-5 h-5 mr-3 text-slate-500 group-hover:text-red-400 transition-colors" />
            Logout
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 relative">
        {/* Background Gradients for Main Content */}
        <div className="absolute top-0 left-0 w-full h-[500px] overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-20%] left-[20%] w-[60%] h-[100%] rounded-full bg-indigo-600/10 blur-[120px]" />
          <div className="absolute top-[10%] right-[-10%] w-[40%] h-[80%] rounded-full bg-purple-600/10 blur-[120px]" />
        </div>

        {/* Header */}
        <header className="h-20 flex items-center justify-between px-6 lg:px-10 border-b border-white/5 bg-slate-900/30 backdrop-blur-xl sticky top-0 z-30">
          <div className="flex items-center">
            <button 
              className="mr-4 lg:hidden text-slate-400 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            
            {/* Search */}
            <div className="hidden md:flex relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 bg-slate-950/50 text-sm border border-white/5 rounded-full text-white placeholder-slate-500 
                focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 w-64 transition-all duration-300"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-slate-400 hover:text-white transition-colors rounded-full hover:bg-white/5">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-pink-500 border border-slate-900" />
            </button>
            <div className="h-8 w-px bg-white/10 mx-2 hidden sm:block"></div>
            <div className="flex items-center space-x-3 cursor-pointer p-1.5 pr-3 rounded-full hover:bg-white/5 transition-colors">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-sm font-bold text-white shadow-md">
                {user.name ? user.name.charAt(0).toUpperCase() : "U"}
              </div>
              <div className="hidden sm:block text-sm">
                <p className="font-medium text-slate-200">{user.name || "User"}</p>
                <p className="text-xs text-slate-500 capitalize">{user.role || "user"}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-10 z-0">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
