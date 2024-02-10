/* eslint-disable react/prop-types */
function LocationCard(props) {
  return (
    <div className="max-w-[20rem] xl:max-w-[27rem] min-w-[18.25rem] w-full h-[19rem] lg:h-auto rounded-xl overflow-hidden m-1">
      <span className="w-full h-[14rem] xl:h-[20rem] overflow-hidden block bg-slate-300">
        <img
          src={props.picture_url.url}
          alt={location.name}
          className="w-full h-[14rem] xl:h-[20rem] transition-all hover:scale-110 duration-300"
        />
      </span>
      <h3 className="text-slate-600 mt-2 ">{props.smart_location}</h3>
      <span className="text-slate-400 text-xs lg:text-[1rem] font-extralight">
        {props.name}
      </span>
      <br />
      <span className="text-slate-400 font-extralight">
        <strong className="text-black">€ {props.price} </strong>
        night
      </span>
    </div>
  );
}

export default LocationCard;
