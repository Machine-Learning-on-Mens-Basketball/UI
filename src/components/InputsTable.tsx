import React from "react";

export const InputsTable: React.FC = () => (
  <div className="container mx-auto px-4 sm:px-8 max-w-screen-md">
    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Home
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Res.
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Res.
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Away
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10 hidden sm:table-cell">
                    <img
                      className="w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-900 whitespace-no-wrap">Team 1</p>
                  </div>
                </div>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap text-center">
                  0
                </p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap text-center">
                  3
                </p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">
                <div className="flex items-center float-right">
                  <div className="mr-3">
                    <p className="text-gray-900 whitespace-no-wrap text-right">
                      Team 2
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 hidden sm:table-cell">
                    <img
                      className="w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                      alt=""
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10 hidden sm:table-cell">
                    <img
                      className="w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-900 whitespace-no-wrap">Team 3</p>
                  </div>
                </div>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap text-center">
                  0
                </p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap text-center">
                  3
                </p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">
                <div className="flex items-center float-right">
                  <div className="mr-3">
                    <p className="text-gray-900 whitespace-no-wrap text-right">
                      Team 4
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 hidden sm:table-cell">
                    <img
                      className="w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                      alt=""
                    />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
