import type { ResortListing} from "../data/data";
export default function Card({
  pic,
  country,
  location,
  rating,
  price,
}: ResortListing) {
  return (
    <div className="Card">
      <img src={pic} alt="" />
      <h2>{country}</h2>
      <p><i>{location}</i></p>
      <p style={rating>4.0?{ color: "green" }:{color: "red"}}>★{rating}</p>
      <p>${price}/night</p>
    </div>
  );
}