import { useState } from "react";

const PageViews = () => {
  const [pageviews, setpageviews] = useState({
    PerMonth: 16,
    PerYear: 128,
    views: 2,
    values: [8, 12, 16, 24, 36],
    pviews: ["10k ", "50k ", "100k ", "500k ", "1M "],
    Month: true,
  });

  function onChange(e) {
    setpageviews({
      ...pageviews,
      views: e.target.value,
      PerMonth: pageviews.values[e.target.value],
    });
  }
  const gradientStyle = {
    background: `linear-gradient(90deg, #10d5c2 0%, #10d5c2 ${pageviews.views * 25}%, #eaeefb ${
      pageviews.views * 25
    }%, #eaeefb 100%)`,
  };
  return (
    <div className="flex flex-col items-center gap-2 p-5 text-GrayishBlue ">
      <div className="flex flex-wrap items-center justify-center gap-5 md:justify-between ">
        <p className="md:order-1 w-[150px] uppercase ">
          {pageviews.pviews[pageviews.views]}
          Pageviews
        </p>
        <div className="w-full pb-10 md:order-3">
          <input
            className={" h-[10px] w-full rounded-lg appearance-none cursor-pointer  "}
            type="range"
            onChange={(e) => {
              onChange(e);
            }}
            name="Pageviews"
            id="Pageviews"
            step={1}
            min={0}
            value={pageviews.views}
            max={4}
            style={gradientStyle}
          />
        </div>

        <p className="flex items-center gap-2 md:order-2">
          <span className="text-3xl font-extrabold w-[95px] text-DarkDesaturatedBlue">
            ${pageviews.Month ? pageviews.PerMonth : pageviews.PerMonth * 0.75 * 12}
            .00
          </span>
          <p className=" w-[80px]">{pageviews.Month ? " / month" : " / year"}</p>
        </p>
      </div>
      <div className="flex items-center gap-2 pt-5 md:pt-0 text-[13px]">
        <p>Monthly Billing</p>
        <label className="cursor-pointer " htmlFor="Yearly-Billing">
          <input
            onClick={() => {
              setpageviews({ ...pageviews, Month: !pageviews.Month });
            }}
            className="hidden "
            id="Yearly-Billing"
            name="Yearly-Billing"
            type="checkbox"
          />
          <span
            className={
              "toggle" +
              (!pageviews.Month ? " after:translate-x-5 bg-StrongCyan" : "  bg-LightGrayishBlue2")
            }
          ></span>
        </label>
        <p>Yearly Billing</p>
        <p className="px-2 rounded-full text-LightRed bg-LightGrayishRed">
          25%
          <span className="hidden md:inline"> discount</span>
        </p>
      </div>
    </div>
  );
};

export default PageViews;
