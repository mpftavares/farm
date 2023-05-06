
export default function Hamburguer({onClick, icon}) {
  return (
    <span
    className="material-symbols-outlined hamburguer"
    onClick={onClick}>
    {icon}
</span>
  )
}
