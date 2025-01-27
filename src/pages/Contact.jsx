import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section - Leave A Reply */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Leave A Reply</h2>
          <p className="mb-4 text-gray-400 text-sm">
            Your email address will not be published. Required fields are marked *
          </p>
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-gray-800 p-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-gray-800 p-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white-500"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Write Comments"
                rows="5"
                className="w-full bg-gray-800 p-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="border-2 border-white text-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-white transition-all duration-300"
            >
              Submit Comment →
            </button>
          </form>
        </div>

        
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Feel Free To Contact Me Anytime</h2>
          <div className="space-y-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-sm text-gray-400">Email</h3>
              <p className="text-lg font-medium">abdunnoor@gmail.com</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-sm text-gray-400">Phone</h3>
              <p className="text-lg font-medium">+8801535452284</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-sm text-gray-400">Address</h3>
              <p className="text-lg font-medium">Mirpur-11, Dhaka-1216</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
