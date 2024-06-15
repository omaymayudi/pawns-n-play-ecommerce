const FormContact = () => {
  return (
    <div className="w-full bg-white p-5 rounded-lg">
      <form className=" mx-auto">
        <div className="mb-5 flex space-x-4 w-full justify-center items-center ">
          <div className="w-full">
            <label
              htmlFor="first_name"
              className="block mb-2 text-[10px] lg:text-sm font-medium text-gray-900 "
            >
              First name
            </label>
            <input
              type="text"
              id="first_name"
              className="w-full shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-[10px] lg:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 "
              placeholder="First name"
              required
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="last_name"
              className="block mb-2 text-[10px] lg:text-sm font-medium text-gray-900 "
            >
              Last name
            </label>
            <input
              type="text"
              id="last_name"
              className="shadow-sm w-full bg-gray-50 border border-gray-300 text-gray-900 text-[10px] lg:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 "
              placeholder="Last name"
              required
            />
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-[10px] lg:text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-[10px] lg:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="you@company.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="message"
            className="block mb-2 text-[10px] lg:text-sm font-medium text-gray-900 dark:text-white"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-[10px] lg:text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder=""
          ></textarea>
        </div>

        <div className="flex justify-start items-center mb-5">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="terms"
            className="ms-2 text-[10px] lg:text-sm items-center font-medium text-gray-900 "
          >
            You agree to our friendly privacy policy.
          </label>
        </div>
        <button
          type="submit"
          className="bg-gradient-to-l from-slate-700 to-slate-900 rounded-lg py-[10px]  lg:py-5  text-white border-spacing-1 hover:cursor-pointer  text-[10px] lg:text-sm w-full"
        >
          Send message
        </button>
      </form>
    </div>
  );
};

export default FormContact;
