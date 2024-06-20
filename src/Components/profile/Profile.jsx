import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { RiCheckLine, RiPencilFill } from "react-icons/ri";
import "./Profile.css"
import Navbar2 from "../navbar/Navbar2";
import Profile from "../../assets/profile1.svg"

const ProfilePic = () => {
  const [name, setName] = useState("Nisha");
  const [about, setAbout] = useState("DK002");
  const [showInput, setShowInput] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [avatar, setAvatar] = useState("https://static.vecteezy.com/system/resources/thumbnails/009/749/643/small_2x/woman-profile-mascot-illustration-female-avatar-character-icon-cartoon-girl-head-face-business-user-logo-free-vector.jpg");
  const imgRef = useRef(null);

  const handleName = () => {
    setShowInput(!showInput);
  };

  const handleAbout = () => {
    setShowAbout(!showAbout);
  };

  const onImageClick = () => {
    imgRef.current.click();
  };

  const onImgUpload = () => {
    const img = imgRef.current.files[0];
    const url = URL.createObjectURL(img);
    setAvatar(url);
  };

  return (
    <>
<Navbar2 />
<div className="flex justify-center items-center md:flex-row flex-col  gap-16 mt-28 md:lg:xl:mt-16">
  <div>
    <img src={Profile} className="md:h-[550px] md:w-[550px]"/>
  </div>

    <div className=" flex justify-center h-screen items-center p-2 md:mt-8">
      <div className=" border-2 p-2 rounded-md drop-shadow-lg bg-white">
        <div className="flex items-center p-4 bg-green-400 rounded-md">
          <button type="button">
            <FaArrowLeft className="text-3xl" />
          </button>
          <p className=" font-semibold text-2xl ml-6">Profile</p>
        </div>
        <div className="grid place-items-center m-2 ">
          <img className="profile-img " src={avatar} onClick={onImageClick} />
          <input type="file" ref={imgRef} onChange={onImgUpload} hidden />
        </div>
        <div className="my-3 border-2 p-2 bg-white drop-shadow-lg rounded-md">
          <p className=" mb-2 font-semibold ml-[5px]">Your Name</p>
          <div className="flex items-center ">
            {showInput ? (
              <input
                className=" w-full pl-2 py-2 border-2 bg-gray-300 rounded-xl"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            ) : (
              <span className="w-full pl-2 py-2">{name}</span>
            )}
            <button type="button" onClick={handleName}>
              {showInput ? (
                <RiCheckLine className="mx-3 text-xl" />
              ) : (
                <RiPencilFill className="mx-3" />
              )}
            </button>
          </div>
        </div>
        <p className="text-xs px-3">
          This is not your username or PIN. This name will be visible to your
          Whatsapp contacts.
        </p>
        <div className="my-3 border-2 p-2 bg-white drop-shadow-lg rounded-md">
          <p className=" mb-2 font-semibold ml-[5px]">id</p>
          <div className="flex items-center">
            {showAbout ? (
              <input
                className=" w-full pl-2 py-2 border-2 bg-gray-300 rounded-xl"
                type="text"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              />
            ) : (
              <span className="w-full pl-2 py-2">{about}</span>
            )}
            <button type="button" onClick={handleAbout}>
              {showAbout ? (
                <RiCheckLine className="mx-3 text-xl" />
              ) : (
                <RiPencilFill className="mx-3" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
</div>
    </>
  );
};

export default ProfilePic;