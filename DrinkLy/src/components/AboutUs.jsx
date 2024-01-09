import cocktails from "../components/assets/images/m-s-meeuwesen-QYWYnzvPTAQ-unsplash new.jpg";

let AboutUs = () => {
  return (
    <div className="">
      <div className="relative">
        <img className="w-100v h-70v object-cover" src={cocktails} />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <p className="text-white text-7xl font-extrabold">About Us</p>
        </div>
        <div className="flex justify-center items-center">
          <div className="rounded-full bg-white -translate-y-16 w-60v shadow-lg p-4">
            <p className="p-6 rounded-full">
              Explore the world of mixology with DrinkLy! Discover a diverse
              collection of enticing drink recipes, from classic cocktails to
              trendy libations. Unleash your inner bartender with step-by-step
              instructions for crafting delicious beverages. Cheers to
              creativity and unforgettable sips with DrinkLy!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
