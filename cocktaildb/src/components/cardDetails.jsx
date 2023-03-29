import { useContext } from "react";
import { DataContext } from "./data";
import { useParams } from "react-router";


let CardDetails = () => {
  let [
    data,
    isError,
    isLoading,
    isFetching,
    error,
    refetch,
    linkInfo,
    setLinkInfo,
  ] = useContext(DataContext);
  let param = useParams();
  /* useEffect(
        ()=>{
            setLinkInfo({
                query:"lookup",
                drinkName:param.id,
                variable:'i'
            })
            refetch()
        },[param.id]
    )*/
  let detail = data.drinks.filter((drink) => drink.idDrink === param.id);


  return (
    <div className="w-100v h-80v flex justify-center items-center">
    <div className="emd:w-[80vw] lg:w-[71vw]">
      {detail.map((drink) => (
        <div className="emd:flex emd:border-[1.5px] border-[#454545] rounded-md emd:p-2">
          
          <img src={drink.strDrinkThumb} key={drink.idDrink} 
          className="emd:w-[50vw] md:w-[45vw] lg:w-[30vw]"
          />
          <div className="flex flex-col items-center">
          <p className="text-4xl font-semibold" key={drink.idDrink * 8}>
            {drink.strDrink}
          </p>
          <p className="" key={drink.idDrink * 6}>
            {drink.strAlcoholic}
          </p>
          <p className="" key={drink.idDrink * 9}>
            {drink.strInstructions}
          </p>
          </div>
        </div>
      ))}
      
    </div>
    </div>
  );
};

export default CardDetails;
