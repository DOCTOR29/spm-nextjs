import { SubmitForm } from "@/lib/action/formAction";
import React from "react";

const Super30Form = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Form Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Super 30 Batch Registration
        </h2>
        <p className="text-gray-600">
          100% Scholarship for JEE/NEET Aspirants
        </p>
      </div>

      {/* Form Body */}
      <div className="mb-6">
        <div className="bg-yellow-100 p-4 rounded mb-4">
          <strong className="block text-red-600">
            Limited Seats Available!
          </strong>
          <p className="text-gray-700 mt-2">
            Only the most deserving candidates will be selected for this
            prestigious program. Don't miss this golden opportunity!
          </p>
        </div>

        <form
          action={SubmitForm}
          target="_parent"
         
          className="space-y-6"
        >
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="entry.591007344"
                placeholder="Enter your full name"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="entry.6308228"
                placeholder="Enter your email address"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="entry.1464536718"
                placeholder="Enter your phone number"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="school"
                className="block text-sm font-medium text-gray-700"
              >
                School/College <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="school"
                name="entry.693017067"
                placeholder="Enter your school or college name"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Third Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="class"
                className="block text-sm font-medium text-gray-700"
              >
                Current Class <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="class"
                name="entry.527693847"
                placeholder="Enter your current class"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="program"
                className="block text-sm font-medium text-gray-700"
              >
                Interested Program <span className="text-red-500">*</span>
              </label>
              <select
                id="program"
                name="entry.698573846"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="" disabled selected>
                  Select a program
                </option>
                <option value="Super 30 (Medical) - NEET">
                  Super 30 (Medical) - NEET
                </option>
                <option value="Super 30 (JEE) - Engineering">
                  Super 30 (Engineering) - JEE
                </option>
                <option value="Super 30 (15 + 15) - Integrated">
                  Super 30 (15 + 15) - Integrated
                </option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            <i className="fas fa-paper-plane"></i> Submit Application
          </button>
        </form>
      </div>

      {/* Form Footer */}
      <div className="text-center text-sm text-gray-600">
        By submitting this form, you agree to participate in the selection
        process for the Super 30 Batch.
      </div>
    </div>
  );
};

export default Super30Form;