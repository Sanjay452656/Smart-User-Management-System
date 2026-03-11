import { useEffect, useState } from "react"
import { Search, MoreVertical, Edit2, Trash2, Mail, ShieldAlert, Users } from "lucide-react"
import DashboardLayout from "../components/DashboardLayout"
import API from "../services/api"

export default function AdminPanel() {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = () => {
    setIsLoading(true)
    API.get("/admin/users", {
      headers: { Authorization: localStorage.getItem("token") }
    })
      .then(res => {
        setUsers(res.data)
        setIsLoading(false)
      })
      .catch(err => {
        setError(err.response?.data?.message || "Failed to fetch users.")
        setIsLoading(false)
      })
  }

  const handleDelete = async (userId) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return

    try {
      await API.delete(`/admin/users/${userId}`, {
        headers: { Authorization: localStorage.getItem("token") }
      })
      // Instantly remove from UI
      setUsers(users.filter(u => (u._id || u.id) !== userId))
    } catch (err) {
      setError(err.response?.data?.message || "Failed to delete user.")
    }
  }

  return (
    <DashboardLayout>
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight">User Management</h1>
            <p className="text-slate-400 mt-1">Manage all registered users on the platform.</p>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-slate-500" />
              </div>
              <input
                type="text"
                placeholder="Search users..."
                className="pl-9 pr-4 py-2 bg-slate-900/40 text-sm border border-white/10 rounded-xl text-white placeholder-slate-500 
                focus:outline-none focus:border-indigo-500/50 w-full sm:w-64 transition-colors"
              />
            </div>
          </div>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center text-red-400">
            <ShieldAlert className="w-5 h-5 mr-3" />
            {error}
          </div>
        )}

        <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-slate-900/60 border-b border-white/5">
                <tr>
                  <th className="px-6 py-4 font-medium text-slate-300">Name</th>
                  <th className="px-6 py-4 font-medium text-slate-300">Email</th>
                  <th className="px-6 py-4 font-medium text-slate-300">Registration Date</th>
                  <th className="px-6 py-4 font-medium text-slate-300">Role</th>
                  <th className="px-6 py-4 font-medium text-slate-300">Status</th>
                  <th className="px-6 py-4 font-medium text-slate-300 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {isLoading ? (
                  <tr>
                    <td colSpan="5" className="px-6 py-12 text-center text-slate-500">
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin"></div>
                        <span>Loading users...</span>
                      </div>
                    </td>
                  </tr>
                ) : users.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="px-6 py-12 text-center text-slate-500">
                      <Users className="w-12 h-12 mx-auto mb-3 text-slate-600 opacity-50" />
                      No users found.
                    </td>
                  </tr>
                ) : (
                  users.map((user) => (
                    <tr key={user._id || user.id || Math.random()} className="hover:bg-white/[0.02] transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-medium text-sm shadow-sm">
                            {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                          </div>
                          <span className="ml-3 font-medium text-white">{user.name || "Unknown"}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center text-slate-400 group-hover:text-slate-300 transition-colors">
                          <Mail className="w-4 h-4 mr-2 opacity-70" />
                          {user.email}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-slate-400">
                          {new Date(user.createdAt || Date.now()).toLocaleDateString('en-GB')}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                          {user.role || "User"}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 shadow-[0_0_8px_rgba(52,211,153,0.5)]"></span>
                          <span className="text-emerald-400 text-xs font-medium">Active</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button 
                            onClick={() => handleDelete(user._id || user.id)}
                            title="Delete user"
                            className="p-1.5 text-slate-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          
          <div className="px-6 py-4 border-t border-white/5 flex items-center justify-between text-sm text-slate-400">
            <span>Showing {users.length} users</span>
            <div className="flex space-x-1">
              <button disabled className="px-3 py-1 bg-slate-800 text-slate-500 rounded disabled:opacity-50">Prev</button>
              <button className="px-3 py-1 bg-white/5 hover:bg-white/10 text-white rounded transition-colors">Next</button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}