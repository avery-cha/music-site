import Image from "next/image";

export default function Contact() {
  return (
   <main className="items-center justify-evenly">
    <section className="absolute bg-white bg-opacity-70 mt-44 ml-40 mr-20 dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md ">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-center text-blue-600 dark:text-white">Contact Form</h2>
          <p className="mb-8 p-5 lg:mb-16 font-light text-center text-blue-700 sm:text-xl">Schedule a show, leave feedback from a perforance, ask a question. We will respond soon</p>
          <form action="#" className="space-y-8">
            <div>
              <label  className="block mb-2 text-sm font-medium text-blue-700 dark:text-gray-300">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-blue-700 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@email.com" required/>
            </div>
            <div>
              <label  className="block mb-2 text-sm font-medium text-blue-700 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-blue-700 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Request, Comment, etc." required/>
            </div>
            <div className="sm:col-span-2">
              <label  className="block mb-2 text-sm font-medium text-blue-700 dark:text-gray-400">Your message</label>
              <textarea id="message" className="block p-2.5 w-full text-sm text-blue-700 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Send a message..."></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-blue-700 rounded-lg bg-blue-200 sm:w-fit hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
            </div>
          </form>
      </div>
    </section>
  </main>
  );
}
