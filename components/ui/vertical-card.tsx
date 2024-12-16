export default function VerticalCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-[30rem] bg-zinc-900 rounded-md shadow-xl flex flex-col items-center justify-between p-6">
      {children}
    </div>
  )
}