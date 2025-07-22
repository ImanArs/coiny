import { BriefcaseBusiness, Home } from "lucide-react";
import { SavingsChart } from "@/shared/ui/line-charts";
import { Button } from "@/shared/ui/button";

export const MainPage = () => {
  const data = [
    { label: "янв", value: 0 },
    { label: "мар", value: 80 },
    { label: "май", value: 70 },
    { label: "июл", value: 80 },
    { label: "сен", value: 130 },
    { label: "ноя", value: 160 },
    { label: "ноя", value: 160 },
    { label: "ноя", value: 160 },
    { label: "ноя", value: 160 },
  ];
  return (
    <div className="text-white max-w-[600px] mx-auto my-10 flex flex-col gap-5 px-4">
      <div className="p-4 rounded-[10px] bg-[#4e4e4e5d] backdrop-blur-[1px] flex gap-2 justify-between items-center">
        <BriefcaseBusiness />
        <Button>123</Button>
        <div className="text-[20px] w-7/10 flex gap-2">
          <h2 className="">
            в этом <br />
            месяце ты отложил
          </h2>
          <p className="mt-auto text-nowrap">+100 KGS</p>
        </div>
      </div>

      <div className="p-4 rounded-[10px] bg-[#4e4e4e5d] min-h-40 backdrop-blur-[1px] flex gap-2 justify-between">
        <div className="flex flex-col gap-3 mt-auto relative z-1">
          <h3 className="text-[32px] font-medium">Машина</h3>
          <p className="text-[26px] font-normal">
            <span className="text-[#d9d9d9]">накоплено</span> 250.768 $
          </p>
        </div>
        <img
          className="w-[55%] h-[70%] object-cover absolute top-4 right-4"
          src="https://pngimg.com/d/mercedes_PNG1894.png"
          alt=""
        />
      </div>

      <div className="grid grid-cols-4 w-full gap-2">
        {[1, 2, 3, 4].map(() => (
          <div className="p-3 rounded-[10px] bg-[#4e4e4e5d] flex flex-col justify-center items-center">
            <Home />
            <span>Еще</span>
          </div>
        ))}
      </div>

      <SavingsChart data={data} />
    </div>
  );
};
