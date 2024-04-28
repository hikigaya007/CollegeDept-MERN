import { useState } from "react";
import cover from "../../../../assets/coverphoto.jpeg";
import { ArrowFatLinesLeft } from "@phosphor-icons/react";
// eslint-disable-next-line react/prop-types
export default function UpdateProfile({updateState}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [sex, setSex] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };
  return (
    <>
      <section className="py-10 my-auto">
        <div className="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4 h-[100dvh]">
          <div className="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center dark:bg-[#111111]">
            <div>
              <button onClick={()=>{updateState(false)}} className="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-serif font-extrabold mb-2 dark:text-orange-600">
              <ArrowFatLinesLeft size={32} weight="duotone" />
              </button>
              <form onSubmit={handleSubmit}>
                <div
                  style={{ backgroundImage: `url(${cover})` }}
                  className="mx-auto flex justify-center w-[141px] h-[141px] bg-blue-300/20 rounded-full bg-[url('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxwcm9maWxlfGVufDB8MHx8fDE3MTEwMDM0MjN8MA&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-center bg-no-repeat"
                >
                  <div className="bg-white/90 rounded-full w-6 h-6 text-center ml-28 mt-4">
                    <input
                      type="file"
                      name="profile"
                      id="upload_profile"
                      hidden
                      required
                    />
                    <label htmlFor="upload_profile">
                      <svg
                        className="w-6 h-5 text-orange-700"
                        fill="none"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                        />
                      </svg>
                    </label>
                  </div>
                </div>
                <h2 className="text-center mt-1 font-semibold dark:text-gray-300">
                  Upload Profile
                </h2>
                <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                  <div className="w-full  mb-4 mt-6">
                    <label
                      htmlFor="first_name"
                      className="mb-2 dark:text-gray-300"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="mt-2 p-4 w-full border-[1px] rounded-lg dark:text-gray-200 dark:border-orange-600 dark:bg-[#111111]"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="w-full  mb-4 lg:mt-6">
                    <label htmlFor="last_name" className=" dark:text-gray-300">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="mt-2 p-4 w-full border-[1px] rounded-lg dark:text-gray-200 dark:border-orange-600 dark:bg-[#111111]"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                  <div className="w-full">
                    <h3 className="dark:text-gray-300 mb-2">Sex</h3>
                    <select
                      value={sex}
                      onChange={(e) => setSex(e.target.value)}
                      className="w-full text-grey border-[1px]  rounded-lg p-4 pl-2 pr-2 dark:text-gray-200 dark:border-orange-600 dark:bg-[#111111]"
                    >
                      <option className="hover:bg-orange-500" disabled value="">
                        Select Sex
                      </option>
                      <option className="hover:bg-orange-500" value="Male">
                        Male
                      </option>
                      <option className="hover:bg-orange-500" value="Female">
                        Female
                      </option>
                    </select>
                  </div>
                  <div className="w-full">
                    <h3 className="dark:text-gray-300 mb-2">Date Of Birth</h3>
                    <input
                      type="date"
                      value={dateOfBirth}
                      onChange={(e) => setDateOfBirth(e.target.value)}
                      className="text-grey p-4 w-full border-[1px] rounded-lg dark:text-gray-200 dark:border-orange-600 dark:bg-[#111111]"
                    />
                  </div>
                </div>
                <div className="w-full rounded-lg bg-orange-600 mt-4 text-white hover:text-[#acabab] text-lg font-semibold hover:bg-orange-900 active:translate-x-0.5 active:translate-y-0.5 active:scale-95 duration-200 ">
                  <button type="submit" className="w-full p-4">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}