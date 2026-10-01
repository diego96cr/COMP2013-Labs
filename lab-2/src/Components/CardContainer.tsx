import Card from "./Card";
import type {ResortListing} from "../data/data";

interface CardContainer{
  listings:ResortListing[];
}

export default function CardContainer({listings}:CardContainer) {
  return(

     <div className = "CardContainer">
      {listings.map((listing) => (
        <Card 
          key = {listing.id}
          {...listing}
        />
      ))}
    </div>
  );
}