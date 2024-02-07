/* eslint-disable react/prop-types */
function LocationCard(props) {
  console.log(props);
  return (
    <div className="max-w-[20rem] min-w-[18.25rem] w-full h-[19rem] rounded-xl overflow-hidden m-1 hover:scale-105">
      <span className="">
        <img
          src={props.picture_url.url}
          alt={location.name}
          className="w-full max-h-[14rem] transition-all"
        />
      </span>
      <h3 className="font-bold">{props.smart_location}</h3>
      <span className="text-slate-500">{props.name}</span> <br />
      <span className="text-slate-500">
        <strong className="text-black">€ {props.price} </strong>
        night
      </span>
    </div>
  );
}

export default LocationCard;
