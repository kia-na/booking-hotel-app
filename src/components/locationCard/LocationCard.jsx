/* eslint-disable react/prop-types */
function LocationCard(props) {
  console.log(props);
  return (
    <div className="max-w-[20rem] min-w-[18.25rem] w-full h-[19rem] rounded-xl overflow-hidden m-1">
      <span className="w-full h-[14rem] overflow-hidden block bg-red-600">
        <img
          src={props.picture_url.url}
          alt={location.name}
          className="w-full h-[14rem] transition-all hover:scale-110 duration-300"
        />
      </span>
      <h3 className="font-bold mt-2 ">{props.smart_location}</h3>
      <span className="text-slate-500 text-xs">{props.name}</span> <br />
      <span className="text-slate-500">
        <strong className="text-black">€ {props.price} </strong>
        night
      </span>
    </div>
  );
}

export default LocationCard;
