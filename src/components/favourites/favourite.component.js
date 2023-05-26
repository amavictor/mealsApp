import { useContext } from "react";
import { FavouritesContext } from "../../../service/favourites/favourites.context";

export const Favourite = () => {
    const {
        favourites,
        addToFavourites,
        removeFromFavourites
    } = useContext(FavouritesContext);
    return (
        null
    )
}