const StartMyTrail = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-5 p-5 pb-10 md:flex-row text-GrayishBlue text-start">
      <div className="StartMyTrial">
        <p>
          <span>
            <img src={require("../assets/images/icon-check.svg").default} alt="" />
          </span>
          Unlimited websites
        </p>
        <p>
          <span>
            {" "}
            <img src={require("../assets/images/icon-check.svg").default} alt="" />
          </span>{" "}
          100% data ownership
        </p>
        <p>
          <span>
            {" "}
            <img src={require("../assets/images/icon-check.svg").default} alt="" />
          </span>{" "}
          Email reports
        </p>
      </div>

      <button className="w-1/2 p-2 rounded-full hover:text-white h-fit text-GrayishBlue bg-DarkDesaturatedBlue">
        {" "}
        Start my trial{" "}
      </button>
    </div>
  );
};

export default StartMyTrail;
