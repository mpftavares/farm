
export default function Hamburguer({onClick, icon}) {
  return (
    <span
    className="material-symbols-outlined icon"
    onClick={onClick}>
    {icon}
</span>
  )
}
