import Image from "next/image";

import { FaBars } from "react-icons/fa";

import logo from "../public/logo.png";

import sec from "../public/Image sec 11.png";

import aa from "../public/zzz.png";

import Carda from "./(compoments)/carda/carda";

import Side from "./(compoments)/side/side";

import Cardc from "./(compoments)/cardc/cardc";

import Cardb from "./(compoments)/cardb/cardb";

import Cardd from "./(compoments)/cardd/cardd";

import Carde from "./(compoments)/carde/carde";

import ha from "../public/Photo div.png";

import gro from "../public/Icons group.png";

import butt from "../public/back button.png";

import tt from "../public/Timer.png";

export default function Home() {
  return (
    <>
      {/* navber */}

      <nav className="container items-center">
        <div class="logo">
          <Image src={logo} alt="ak" />
        </div>
        <input type="checkbox" id="click" />
        <label for="click">
          <FaBars className="text-white" />
        </label>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Markites</a>
          </li>
          <li>
            <a href="#">Place</a>
          </li>
          <li>
            <a href="#">
              <button className="border-2 border-green-800 py-2 rounded-md px-4 hover:bg-green-600">
                Search
              </button>
            </a>
          </li>
        </ul>
      </nav>

      {/* section 1 Close */}

      {/* section 2 start */}

      <div className="lg:flex lg:flex-row px-1 lg:px-0 md:px-10 mx-auto justify-around container">
        <div className="max-w-[600px] lg:pt-20 pt-8">
          <p className="text-white lg:text-6xl md:text-5xl text-4xl leading-[95%]">
            Discover digital art & Collect NFTs
          </p>

          <p className="pt-3">
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists
          </p>

          <div className="pt-9">
            <button className="bg-purple-600 py-3 px-5">Get start</button>
          </div>

          <div className="flex flex-row gap-9 pt-10">
            <div>
              <p className="lg:text-3xl md:text-2xl text-xl">240k+</p>
              <p className="pt-4">Total Sale</p>
            </div>

            <div>
              <p className="lg:text-3xl md:text-2xl text-xl">240k+</p>
              <p className="pt-4">Total Sale</p>
            </div>

            <div>
              <p className="lg:text-3xl md:text-2xl text-xl">240k+</p>
              <p className="pt-4">Total Sale</p>
            </div>
          </div>
        </div>

        <div className="bg-[#3B3B3B] mx-auto md:mx-0 text-white max-w-[500px] mt-10 rounded-2xl">
          <Image src={sec} alt="by" />
          <p className="pt-3 px-3 text-2xl">Space Walking</p>
          <div className="flex gap-4 pt-3 px-3 pb-3">
            <Image src={aa} alt="h" />
            <p>Animakid</p>
          </div>
        </div>
      </div>

      {/* section 2 Close */}

      {/* sections 3 start */}

      <div className="mt-20 max-w-[400px] lg:mx-16 px-1">
        <p className="lg:text-4xl md:text-3xl text-2xl font-bold">
          Trending Collection
        </p>
        <p className="pt-1">Checkout our weekly updated trending collection.</p>
      </div>

      {/* section 3 Close */}

      {/* section 4 start */}

      <div className="mt-10 gap-12 grid lg:grid-cols-3 mx-auto md:grid-cols-2 space-y-6 max-w-[1450px] md:px-14 justify-center">
        <Carda
          imgsrc={require("../public/card 1 1.png")}
          imgsamll1={require("../public/card 1 111.png")}
          imgsmall2={require("../public/cars 1 22.png")}
        />
        <Carda
          imgsrc={require("../public/card img 3.png")}
          imgsamll1={require("../public/card img 3 11.png")}
          imgsmall2={require("../public/card imh 3 333.png")}
        />
        <Carda
          imgsrc={require("../public/card img 2.png")}
          imgsamll1={require("../public/card img 2 1.png")}
          imgsmall2={require("../public/card img 2 2.png")}
        />
      </div>

      <div className="mt-28 md:px-10">
        <Side />
      </div>

      <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 gap-5  max-w-[1450px] mx-auto md:px-14 justify-center">
        <Cardc src={require("../public/card 2.png")} />
        <Cardc src={require("../public/Image card 2 2img.png")} />
        <Cardc src={require("../public/Image card 2.png")} />
      </div>

      <div className="mt-28 md:px-10">
        <Side />
      </div>

      <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-2 gap-8  mx-auto max-w-[1450px] md:px-20 justify-center">
        <Cardb per={require("../public/01.png")} kala="Keepitreal" />
        <Cardb per={require("../public/02.png")} kala="DigiLab" />
        <Cardb per={require("../public/03.png")} kala="GravityOne" />
        <Cardb per={require("../public/04.png")} kala="GravityOne" />
        <Cardb per={require("../public/05.png")} kala="BlueWhale" />
        <Cardb per={require("../public/06.png")} kala="mr fox" />
        <Cardb per={require("../public/07.png")} kala="Shroomie" />
        <Cardb per={require("../public/08.png")} kala="robotica" />
        <Cardb per={require("../public/09.png")} kala="RustyRobot" />
        <Cardb per={require("../public/10.png")} kala="animakid" />
        <Cardb per={require("../public/04.png")} kala="Dotgu" />
        <Cardb per={require("../public/02.png")} kala="Ghiblier" />
      </div>

      {/* section 4 Close */}

      <div className="max-w-[400px] md:mx-10 mt-12">
        <p className="lg:text-4xl md:text-3xl text-2xl pl-3 font-bold">
          Browse Categories
        </p>
      </div>

      {/* section 5 start */}

      <div className=" mt-10 grid gap-5 lg:grid-cols-4 md:grid-cols-2 max-w-[1450px] mx-auto md:px-28 justify-center">
        <Cardd hr={require("../public/music 1.png")} />
        <Cardd hr={require("../public/music 2.png")} />
        <Cardd hr={require("../public/music 3.png")} />
        <Cardd hr={require("../public/music 4.png")} />
        <Cardd hr={require("../public/music 5.png")} />
        <Cardd hr={require("../public/music 6.png")} />
        <Cardd hr={require("../public/music 7.png")} />
        <Cardd hr={require("../public/music 8.png")} />
      </div>

      {/* section 5 close */}

      {/* section 6 start */}

      <div className="mt-14 max-w-[350px] pl-3 md:mx-10">
        <p className="lg:text-4xl md:text-3xl text-2xl font-bold">
          How it works
        </p>
        <p className="pt-2">Find out how to get started</p>
      </div>

      {/* section 6 Close */}

      <div className=" mt-10 grid lg:grid-cols-3 md:grid-cols-2 max-w-[1450px] mx-auto md:mx-14 justify-center">
        <Carde gr={require("../public/c.png")} />
        <Carde gr={require("../public/c1.png")} />
        <Carde gr={require("../public/c2.png")} />
      </div>

      {/* section 7 start */}

      <div className="bg-[#3B3B3B] text-white max-w-[1300px] rounded-3xl pb-8 mx-auto mt-11 ">
        <div className="md:flex md:flex-row gap-5 md:px-7 px-1 justify-around">
          <div className="max-w-[400px] mx-auto md:mx-0">
            <Image className="py-12" src={ha} alt="d" />
          </div>

          <div className="max-w-[600px] px-1 md:pt-24 pt-10">
            <p className="text-3xl font-bold">Join our weekly digest</p>

            <p className="pt-3 max-w-[350px]">
              Get exclusive promotions & updates straight to your inbox.
            </p>

            <div className="pt-12">
              <input
                className="text-black outline-none px-6 py-3 md:px-3 rounded-xl"
                type="text"
                placeholder="Enter your email here"
              />
              <button className="px-6 md:px-4 py-3 bg-purple-700 text-white -ml-10 rounded-2xl">
                Subrices
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* section 7 Close */}

      {/* section 8 start */}

      <div className="max-w-[1600px] mt-10 aaa">
        <div className="md:flex md:flex-row justify-around">
          <div className="max-w-[500px] pt-28 pb-5 px-2">
            <Image className="pt-10" src={butt} alt="" />

            <p className="lg:text-6xl md:text-5xl text-4xl font-bold pt-10">
              Magic Mashrooms
            </p>

            <div className="pt-7 pb-6">
              <button className="bg-white text-black px-6 py-4 border-0 ">
                See NFT
              </button>
            </div>
          </div>

          <div className="max-w-[600px] pb-5 md:pt-60">
            <Image src={tt} className="mx-auto" alt="kk" />
          </div>
        </div>
      </div>

      {/* section 8 Close */}

      {/* section 9 start */}

      <div className="bg-[#3B3B3B] text-white w-[100%] pt-16 pb-10 mt-20 rounded-2xl ">
        <div className="grid lg:grid-cols-3 lg:mx-24 md:grid-cols-2  md:px-4 px-1 md:space-y-5 md:text-start text-center">
          <div className="mt-5">
            <Image className="mx-auto md:mx-0" src={logo} alt="" />
            <p className="opacity-15 pt-5 pl-7">NFT marketplace</p>
            <p className="opacity-15 pt-5 pl-7">UI created with</p>
            <p className="opacity-15 pt-5 pl-7">Anima for Figma.</p>
            <p className="opacity-15 pt-5 pl-7">Join our community</p>

            <Image className="pt-5 mx-auto md:mx-5" src={gro} alt="" />
          </div>

          <div>
            <p className="text-3xl font-bold">Explore</p>

            <p className="opacity-15 pt-5">Marketplace</p>
            <p className="opacity-15 pt-5">Rankings</p>
            <p className="opacity-15 pt-5">Connect a wallet</p>
          </div>

          <div>
            <p className="text-3xl font-bold">Join our weekly digest</p>

            <p className="pt-7 opacity-15 ">Get exclusive promotions & </p>
            <p className="opacity-15">updates straight to your inbox.</p>

            <div className="pt-12">
              <input
                className="text-black outline-none px-6 py-3 rounded-xl"
                type="text"
                placeholder="Enter your email here"
              />
              <button className="px-[20px] py-[14px] bg-purple-700 text-white -ml-10 rounded-2xl">
                Subrices
              </button>
            </div>
          </div>
        </div>

        <div className="md:max-w-[1380px] mx-auto w-[100%] mt-11">
          <hr className="opacity-15" />
        </div>

        <div className="max-w-[450px] text-center mx-auto pt-10 opacity-15">
          <p>Ⓒ NFT Market. Use this template freely.</p>
        </div>
      </div>

      {/* section 9 Close */}
    </>
  );
}
