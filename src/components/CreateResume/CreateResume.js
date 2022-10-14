import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import bgCorner1 from "../../Assets/bgCorner1.png";
import bgCorner2 from "../../Assets/bgCorner2.png";
import bghome from "../../Assets/bghome.png";

const CreateResume = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="top-0 absolute bg-cover">
        <img className="w-screen h-screen" src={bghome} alt="" />
        <img
          className="w-60  flex absolute left-0 top-0"
          src={bgCorner2}
          alt=""
        />
        <img
          className="w-60 absolute bottom-0 right-0 "
          src={bgCorner1}
          alt=""
        />
      </div>
      <div className="flex justify-center items-center h-screen">
        <div className="card bg-lightGrey bg-opacity-25 px-10 w-109">
          <div>
            <h2 className="text-2xl font-aclonica pt-14 pb-14 text-left pl-12 text-white">
              Create a resume
            </h2>
            <form
              className="flex flex-col items-center justify-center"
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* name start  */}

              <div className="flex  gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className=" text-base text-white">First Name</span>
                  </label>
                  <input
                    type="text"
                    className="input h-7 w-53 bg-opacity-10 rounded-md"
                    {...register("firstName", {
                      required: {
                        value: true,
                        message: "Name is required",
                      },
                    })}
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className=" text-base text-white">Middle Name</span>
                  </label>
                  <input
                    type="text"
                    className="input h-7 w-53 bg-opacity-10 rounded-md"
                    {...register("middleName", {
                      required: {
                        value: true,
                        message: "Name is required",
                      },
                    })}
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className=" text-base text-white">Last Name</span>
                  </label>
                  <input
                    type="text"
                    className="input h-7 w-53 bg-opacity-10 rounded-md"
                    {...register("lastName", {
                      required: {
                        value: true,
                        message: "Name is required",
                      },
                    })}
                  />
                </div>
              </div>

              {/* name end  */}

              {/* email start  */}

              <div className="form-control ">
                <label className="label">
                  <span className=" text-base  text-white">Email</span>
                </label>
                <input
                  type="email"
                  className="input w-113 h-7 bg-opacity-10 rounded-md"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid email",
                    },
                  })}
                />
              </div>

              {/* email end  */}

              {/* phone start  */}

              <div className="flex justify-evenly gap-9">
                <div className="form-control">
                  <label className="label">
                    <span className=" text-base text-white">Ph no.</span>
                  </label>
                  <input
                    type="number"
                    className="input w-80 h-7  bg-opacity-10 rounded-md"
                    {...register("phNumber", {
                      required: {
                        value: true,
                        message: "Number is required",
                      },
                    })}
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className=" text-base text-white">
                      Alternate Ph no.
                    </span>
                  </label>
                  <input
                    type="number"
                    className="input w-80 h-7 bg-opacity-10 rounded-md"
                    {...register("altPhNumber", {
                      required: {
                        value: true,
                        message: "Number is required",
                      },
                    })}
                  />
                </div>
              </div>

              {/* phone end  */}

              {/* location input start  */}

              <div className="form-control">
                <label className="label">
                  <span className=" text-base text-white">Location</span>
                </label>
                <select className=" bg-white bg-opacity-10  w-113 h-7 rounded-md">
                  <option disabled selected></option>
                  <option>India</option>
                  <option>USA</option>
                </select>
              </div>

              {/* location input end  */}

              {/* qualification, Board, University input start  */}

              <div className="flex gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className=" text-base text-white">Qualification</span>
                  </label>
                  <select className="input h-7 w-53 bg-opacity-10 rounded-md">
                    <option disabled selected></option>
                    <option>B.A</option>
                    <option>B.Sc</option>
                    <option>M.Sc</option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className=" text-base text-white">Board</span>
                  </label>
                  <input
                    type="text"
                    className="input h-7 w-53 bg-opacity-10 rounded-md"
                    {...register("boardName", {
                      required: {
                        value: true,
                        message: "Name is required",
                      },
                    })}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className=" text-base text-white">University</span>
                  </label>
                  <input
                    type="text"
                    className="input h-7 w-53 bg-opacity-10 rounded-md"
                    {...register("universityName", {
                      required: {
                        value: true,
                        message: "Name is required",
                      },
                    })}
                  />
                </div>
              </div>

              {/* qualification, Board, University input end  */}

              {/* age gender input start   */}

              <div className="flex gap-9">
                <div className="form-control">
                  <label className="label">
                    <span className=" text-base text-white">Age</span>
                  </label>
                  <input
                    type="number"
                    className="input bg-white bg-opacity-10  w-80 h-7 rounded-md "
                    {...register("number", {
                      required: {
                        value: true,
                        message: "Number is required",
                      },
                    })}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className=" text-base text-white">Sex</span>
                  </label>
                  <select className="input bg-white bg-opacity-10  w-80 h-7 rounded-md">
                    <option disabled selected></option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Others</option>
                  </select>
                </div>
              </div>

              {/* age gender input end   */}

              {/* application , occupation input start   */}

              <div className="flex gap-9">
                <div className="form-control">
                  <label className="label">
                    <span className=" text-base text-white">
                      Application type
                    </span>
                  </label>
                  <select className="input bg-white bg-opacity-10  w-80 h-7 rounded-md">
                    <option disabled selected></option>
                    <option>Internship</option>
                    <option>Contract</option>
                    <option>Full time</option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className=" text-base text-white">Occupation</span>
                  </label>
                  <select className="input bg-white bg-opacity-10  w-80 h-7 rounded-md">
                    <option disabled selected></option>
                    <option>Student</option>
                    <option>Engineer</option>
                    <option>Developer</option>
                  </select>
                </div>
              </div>

              {/* application , occupation input end   */}

              {/* job type, year of exp input start   */}

              <div className="flex gap-9">
                <div className="form-control">
                  <label className="label">
                    <span className=" text-base text-white">Job type</span>
                  </label>
                  <select className="input bg-white bg-opacity-10  w-80 h-7 rounded-md">
                    <option disabled selected></option>
                    <option>Front End Developer</option>
                    <option>Backend Developer</option>
                    <option>Full Stack Developer</option>
                  </select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className=" text-base text-white">
                      Year of experience
                    </span>
                  </label>
                  <input
                    type="number"
                    className="input w-80 h-7  bg-opacity-10 rounded-md"
                    {...register("number", {
                      required: {
                        value: true,
                        message: "Number is required",
                      },
                    })}
                  />
                </div>
              </div>

              {/* job type, year of exp input end   */}

              {/* <button
                className="btn border-none mt-7 mb-7 w-56 bg-rosewood hover:bg-azure"
                type="submit"
                value="Upload photo"
              /> */}

              <button className=" rounded-lg mt-12 mb-7 h-8 w-44 bg-rosewood text-white text-xs  hover:bg-azure"> <Link  to='/uploadphoto'>Upload photo</Link></button>

              <input
                className="btn border-none mt-4 mb-7 w-56 bg-rosewood hover:bg-azure"
                type="submit"
                value="Create"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateResume;
