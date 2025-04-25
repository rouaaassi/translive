/* eslint-disable prettier/prettier */
import Footer from "@/components/Footer";
import Ticket from "@/components/Ticket";
import { ticketData } from "@/components/DataCard";
export default function AboutPage() {
  const dataTicket = ticketData.map((item, index) => (
    <Ticket  key={index} para={item.para} title={item.title}  />
  ));

  return (
    <div className="w-full h-screen font-bold text-xl">
      <section className="  container lg:px-4 mx-auto px-27 max-w-1344 bg-black bg-cover w-full h-[80vh] sm:mb-4 ">
        <div>
          <div className=" flex flex-col  items-start h-full text-left pt-16   ">
            <h3 className="text-gray-300  mb-10 font-bold mt-2">ABOUT US</h3>
            <h1 className="mb-6  text-gray-100 text-6xl font-extrabold">
              Empowering brands to create and connect through live video
            </h1>
            <div>
              <p className="text-gray-300 mb-7 text-lg ">
                Millions of people around the world use TransLive to reach,
                engage and monetize their audiences.
                <br />
                Our customers include professional and amateur gamers, Fortune
                500 companies, media, <br /> politicians and celebrities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="absolute bg-white   w-full h-200 left-0 right-0">
        <div className="flex justify-center items-center text-center pt-14 bg-slate-300 h-44 w-full bg-[https://restream.io/landings-assets/img/facts-border-0a53ba273d037d823c8fe97780bed843.svg] bg-cover bg-center">
          <div className="text-black font-extrabold text-7xl px-7 ">
            8M+
            <div className="text-black text-base">
              broadcasts delivered monthly
            </div>
          </div>
          <div className="text-black font-extrabold text-7xl px-7 ">
            600M+
            <div className="text-black text-base">viewers engaged monthly</div>
          </div>
        </div>
        <div>
          <h1 className="text-black font-extrabold text-5xl px-28 mt-36 ">
            Our products
          </h1>
          <p className="text-black mt-8  px-28 text-1.5xl mb-10">
            At TransLive, we keep nurturing our product portfolio to empower
            content creators to reach wider
            <br /> audiences, and brands to spread their messages throughout a
            massive network of streamers.
          </p>
        </div>
        <div>
          <div>
            <div className="md:flex gap-4 md:justify-center grid grid-cols-1 px-4  ">
              {dataTicket}
            </div>
          </div>
          <div className="flex flex-col md:items-center md:flex-row items-center justify-center md:space-x-1  px-10  pt-24">
            <img
              alt="Convert File to Audio"
              className="w-full md:w-[30%] mt-2 md:mt-0 rounded-md"
              data-nimg="intrinsic"
              decoding="async"
              src="https://restream.io/landings-assets/img/how-it-started-img-85ad567c5ef4674a2d5da7f69adf9237.jpg"
            />
            <div className="w-full flex flex-col">
              <h1 className="text-black font-extrabold text-5xl px-20 mt-32">
                How it started
              </h1>
              <p className="text-black mt-8  px-20 text-1.5xl mb-10">
                Andrew Surzhynskyi and Alexander Khuda founded Restream in 2015
                with an obsession to help streamers get a wider audience.
              </p>
              <p className="text-black mt-8  px-20 text-1.5xl mb-10">
                Focusing first on the gaming community, and building initially a
                free product, they soon saw the potential of how Restream could
                help in all kind of circumstances – from every day IRL streaming
                to professional keynote broadcasting.
              </p>
              <p className="text-black mt-8  px-20 text-1.5xl mb-10">
                Over the next 5 years, Restream flourished into the robust
                ecosystem of tools it is today. Restream goes beyond streaming
                technology and into the complex infrastructure that continues to
                create millions of jobs for content creators worldwide.
              </p>
            </div>
          </div>
          <div className="bg-gray-200 h-100 flex justify-center items-center flex-col md:items-center md:flex-row md:space-x-1  px-10  pt-24 ">
            <div className="pt-28">
              <h1 className="text-black font-extrabold text-5xl px-20">
                Join our team
              </h1>
              <p className="text-black font-extrabold text-xl px-20 mt-10">
                We're looking for curious, data-driven, and result oriented
                <br /> teammates who want to make a lasting impact in the <br />
                livestreaming ecosystem.
              </p>
              <button className="bg-[#286fff] tarnsition-background duration-200 ease-in rounded-md  font-extrabold font-serif text-xl px-5 py-3 mt-10 ml-20 mb-12">
                View Careers
              </button>
            </div>
            <div className="bg-white mb-8 rounded-3xl w-100 h-70 flex justify-center  gap-5 px-10 py-20">
              <div className="text-black ">
                {/* <svg></svg> */}
                <h1 className="font-extrabold text-xl">Austin</h1>
                <span>Headquarters</span>
                <p>
                  515 Congress Ave, Suite
                  <br />
                  1050 Austin, TX 78701
                </p>
              </div>
              <div className="text-black">
                {/* <svg></svg> */}
                <h1 className="font-extrabold text-xl">Kyiv</h1>
                <span>Tech heart</span>
                <p>
                  70, Volodymyrska Street
                  <br />
                  Kyiv, Ukraine, 02000
                </p>
              </div>
            </div>
          </div>
          <div className="bg-black flex justify-center items-center text-center">
            <Footer />
          </div>
        </div>
      </section>
    </div>
  );
}
