const Card = ({icon, title, value, unit}) => {
  return (
    <div className="bg-white rounded-lg shadow flex px-4 py-5 items-center">
      <div className="text-2xl">
        <i className={'bi ' + icon}></i>
      </div>
      <div className="pl-3">
        <div className="font-semibold text-sm">{ title }</div>
        <div className="text-xs">{ value } { unit }</div>
      </div>
    </div>
  )
}

export default Card;