const Card = ({icon, title, value, unit}) => {
  return (
    <div className="bg-white rounded-lg shadow flex px-4 py-5 items-center">
      <div className="text-3xl">
        <i className={'bi ' + icon}></i>
      </div>
      <div className="pl-4">
        <div className="font-semibold">{ title }</div>
        <div className="text-sm">{ value } { unit }</div>
      </div>
    </div>
  )
}

export default Card;