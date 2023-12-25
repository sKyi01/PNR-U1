

function Newsletter() {
  return (
    <section className="relative flex flex-col items-center justify-center my-2">
      <div className="w-[80%] p-8  rounded-3xl py-12 bg-[#B45F06] flex flex-col justify-center items-center gap-12">
        <p className="text-center font-bold uppercase text-4xl underline underline-offset-4 tracking-[4px] text-[#ffffff]">
          corporate office{" "}
        </p>

        <div className="flex md:flex-row flex-col w-full justify-center">
          <div className="h-[200px] border-black pb-3 md:border-0 border-b  basis-[30%]">
            <h5 className="text-4xl font-semibold text-[#ffffff]">Nepal</h5>
            <p className="pl-5 pt-6">
              Galkupakha, Thamel,
              <br />
              Kathmandu,
              <br />
              Nepal
              <br />
               
            +977 986-7688882
            <br/>
            +977 985-1168573

            </p>
          </div>
          <div className="h-[200px] py-3 border-b md:border-l md:border-b-0 border-black  basis-[30%]">
            <h5 className="md:pl-6 text-4xl font-semibold text-[#ffffff]">Bhutan</h5>
            <p className="pl-5 md:pl-12 pt-6">
              Norzin lam Thimphu,
              <br />
              Bhutan
              <br />
              +975 77 31 99 56
            </p>
          </div>
          <div className="md:border-l py-3 border-black h-[200px]  basis-[30%]">
            <h5 className="md:pl-6 text-4xl font-semibold text-[#ffffff]">Kerala</h5>
            <p className="pl-6 md:pl-12 pt-6">
              Yuvaraj Buliding M C Road,
              <br />
              Perumbavoor, Ernakulam,
              <br />
              Kerala
              <br />
              India
              <br /> +91 8883226229
            </p>
          </div>
        </div>

        <hr className="w-full md:block hidden h-[1px] border-t border-black" />

        <div className="flex md:flex-row flex-col w-full justify-center">
          <div className="h-[200px] basis-[30%] border-b border-black md:border-0 py-3">
            <h5 className="text-4xl font-semibold text-[#ffffff]">Kenya</h5>
            <p className="pl-5 pt-6">
              6th Floor,
              <br />
              Room 615 Commerce House,
              <br />
              Moi Avenue
              <br />
              Kenya, South Africa
              <br /> +254 722 985390
            </p>
          </div>
          <div className="md:border-l py-3 border-b md:border-b-0 border-black h-[200px]  basis-[30%]">
            <h5 className="md:pl-6 text-4xl font-semibold text-[#ffffff]">Coimbatore</h5>
            <p className="pl-6 md:pl-12 pt-6">
              Indra Nagar EXT Mahalingapuram,
              <br />
              Pollachi,
              <br />
              Coimbatore, Tamil Nadu
              <br />
              India
              <br /> +91 8883226229
            </p>
          </div>
          <div className="md:border-l border-b md:border-b-0 py-3 border-black h-[200px]  basis-[30%]">
            <h5 className="md:pl-6 text-4xl font-semibold text-[#ffffff]">Andaman</h5>
            <p className="pl-6 md:pl-12 pt-6">
              Bhathu Basti,
              <br />
              Port Blair,
              <br />
              Andaman and Nicobar Islands,
              <br />
              India
              <br /> +91 91008 72767
            </p>
          </div>
          <div className="md:border-l border-b md:border-b-0 py-3 border-black h-[200px]  basis-[30%]">
            <h5 className="md:pl-6 text-4xl font-semibold text-[#ffffff]">Trichy</h5>
            <p className="pl-6 md:pl-12 pt-6">
            Pattabiram st,
              <br />
              Next to Srinivasa perumal temple,
              <br />
              Trichy, Tamil Nadu,
              <br />
              India
              <br /> +91 83444 49239
            </p>
          </div>
        
        </div>
        

        {/* <img
          src={Graphicelements}
          alt="Graphicelements"
          className="hidden md:inline-block absolute left-36 -top-[5%]"
        /> */}
      </div>
    </section>
  );
}

export default Newsletter;
