import { menu_list } from "../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <>
      <div className="flex flex-col gap-6 m-[120px]" id="menu">
        <h1 className="font-bold text-[28px]" >Explore our menu.</h1>
        <p className="w-[60%]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
          similique, atque fugit obcaecati cupiditate autem hic optio dolor in
          amet, aliquam asperiores quasi reiciendis voluptates voluptatibus.
          Quibusdam, debitis? Eligendi, similique.
        </p>
        <div className="flex flex-row gap-[30px] items-center justify-between text-center overflow-x-hidden mx-5">
          {menu_list.map((item) => {
            return (
              <div
                onClick={() =>
                  setCategory(
                    category === item.menu_name ? "All" : item.menu_name
                  )
                }
              >
                <img
                  src={item.menu_image}
                  alt={item.menu_name}
                  className={`${
                    category === item.menu_name
                      ? 'border-4 border-orange-500 p-1 shadow-lg'
                      : ''
                  } hover:cursor-pointer min-w-[80px] max-w-[150px] h-[150px] rounded-full`}
                />
                <p className="m-2 text-[20px] font-medium hover:cursor-pointer">
                  {item.menu_name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ExploreMenu;
