export default function PrimaryButton({ children, onClick, loading }) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold text-[15px] transition-all hover:-translate-y-0.5"
    >
      {loading ? "Loading..." : children}
    </button>
  );
}