import { Users, DollarSign, ShoppingCart, ArrowUpRight, ArrowDownRight, Activity } from "lucide-react"
import DashboardLayout from "../components/DashboardLayout"

export default function Dashboard() {
  const stats = [
    { name: "Total Users", value: "1,200", change: "+12.5%", isPositive: true, icon: Users, color: "from-blue-500 to-cyan-400" },
    { name: "Total Revenue", value: "$8,900", change: "+5.2%", isPositive: true, icon: DollarSign, color: "from-emerald-500 to-teal-400" },
    { name: "Active Orders", value: "340", change: "-2.4%", isPositive: false, icon: ShoppingCart, color: "from-purple-500 to-pink-500" },
    { name: "Conversion Rate", value: "3.2%", change: "+1.1%", isPositive: true, icon: Activity, color: "from-orange-500 to-amber-400" },
  ]

  const recentActivity = [
    { user: "Alice Freeman", action: "Created an account", time: "2 minutes ago", avatar: "AF" },
    { user: "Bob Smith", action: "Upgraded plan to Pro", time: "1 hour ago", avatar: "BS" },
    { user: "Charlie Davis", action: "Reset password", time: "3 hours ago", avatar: "CD" },
    { user: "Diana Prince", action: "Completed onboarding", time: "5 hours ago", avatar: "DP" },
  ]

  return (
    <DashboardLayout>
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight">Dashboard Overview</h1>
            <p className="text-slate-400 mt-1">Here's what's happening with your platform today.</p>
          </div>
          <button className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-colors shadow-lg shadow-indigo-500/20">
            Download Report
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => (
            <div 
              key={stat.name} 
              className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-6 hover:bg-slate-900/60 transition-colors duration-300 shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} p-0.5 shadow-lg`}>
                  <div className="w-full h-full bg-slate-900/80 rounded-[10px] flex items-center justify-center backdrop-blur-sm">
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className={`flex items-center text-sm font-medium px-2 py-1 rounded-full ${
                  stat.isPositive ? "text-emerald-400 bg-emerald-400/10" : "text-rose-400 bg-rose-400/10"
                }`}>
                  {stat.change}
                  {stat.isPositive ? <ArrowUpRight className="w-3.5 h-3.5 ml-1" /> : <ArrowDownRight className="w-3.5 h-3.5 ml-1" />}
                </div>
              </div>
              <div>
                <p className="text-slate-400 text-sm font-medium">{stat.name}</p>
                <p className="text-3xl font-bold text-white mt-1 tracking-tight">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Chart Area (Mock) */}
          <div className="col-span-1 lg:col-span-2 bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-6 flex flex-col min-h-[400px]">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-white">Revenue Analytics</h2>
              <select className="bg-slate-950 border border-white/10 text-slate-300 text-sm rounded-lg px-3 py-1.5 outline-none focus:border-indigo-500">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>This Year</option>
              </select>
            </div>
            <div className="flex-1 rounded-xl bg-gradient-to-t from-indigo-500/5 to-transparent border border-white/5 flex items-end p-4 gap-2 h-full opacity-80">
              {/* Fake Bar Chart */}
              {[40, 70, 45, 90, 65, 85, 100].map((height, i) => (
                <div key={i} className="flex-1 flex flex-col justify-end group cursor-pointer">
                  <div 
                    className="w-full bg-indigo-500/20 group-hover:bg-indigo-400/50 rounded-t-sm transition-all duration-300 relative" 
                    style={{ height: `${height}%` }}
                  >
                    <div className="absolute -top-1 w-full h-1 bg-indigo-400 rounded-t-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-6">
            <h2 className="text-lg font-semibold text-white mb-6">Recent Activity</h2>
            <div className="space-y-6">
              {recentActivity.map((activity, i) => (
                <div key={i} className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-sm font-medium text-slate-300 shrink-0 border border-white/5">
                    {activity.avatar}
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-white">{activity.user}</p>
                    <p className="text-sm text-slate-400 mt-0.5">{activity.action}</p>
                    <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-2.5 text-sm font-medium text-indigo-400 hover:text-indigo-300 bg-white/5 hover:bg-white/10 rounded-xl transition-colors">
              View All Activity
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}