import planeloading from "../assets/PNR/furniture.gif";

function Loading() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[#F1B432]">
      {/* <svg
        className="pl-8 h-20 w-20"
        version="1.1"
        id="L5"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
      >
        <circle fill="#fff" stroke="none" cx="6" cy="50" r="6">
          <animateTransform
            attributeName="transform"
            dur="1s"
            type="translate"
            values="0 15 ; 0 -15; 0 15"
            repeatCount="indefinite"
            begin="0.1"
          />
        </circle>
        <circle fill="#fff" stroke="none" cx="30" cy="50" r="6">
          <animateTransform
            attributeName="transform"
            dur="1s"
            type="translate"
            values="0 10 ; 0 -10; 0 10"
            repeatCount="indefinite"
            begin="0.2"
          />
        </circle>
        <circle fill="#fff" stroke="none" cx="54" cy="50" r="6">
          <animateTransform
            attributeName="transform"
            dur="1s"
            type="translate"
            values="0 5 ; 0 -5; 0 5"
            repeatCount="indefinite"
            begin="0.3"
          />
        </circle>
      </svg>{" "} */}
      <img src={planeloading} alt="loading" />
    </div>
  );
}

export default Loading;
