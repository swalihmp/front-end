import React from 'react'
import Sidebar from '../../components/admin/Sidebar'
import { Toaster } from 'react-hot-toast'
import {BiHomeAlt2} from 'react-icons/bi'
import {BsBook} from 'react-icons/bs'

export default function AdminHome() {
  return (
    <div className='flex bg-acontent'>
        <Sidebar/>
        <div className='px-5 w-full h-full min-h-screen mx-5 mt-2  py-5 font-poppins flex flex-col place-content-start place-items-center bg-white shadow-xl rounded-2xl'>
          <div className=" h-20 w-full flex place-content-start place-items-center px-5">
              <h3 className='font-semibold text-primaryViolet text-2xl text-start'>Dashboard</h3>
          </div>
          <div class="overflow-hidden  m-5 w-full">
          <Toaster position='top-center' reverseOrder='false' ></Toaster>
            <div className="w-full h-auto pr-8 pl-5 flex place-items-center place-content-between gap-3">
              <div className="bg-cards w-72 h-35 shadow-xl p-5 m-3 rounded-xl flex flex-col">
                 <div className="w-full h-full flex flex-col gap-3 place-content-center">
                  <h3 className='text-white font-semibold text-xl'>Total Hotels</h3>
                  <div className='flex place-content-between'>
                    <h4 className='font-semibold text-white text-2xl'>15</h4>
                    <BiHomeAlt2 size={30} className=' text-white'></BiHomeAlt2>
                  </div>
                  
                 </div>
              </div>
              <div className="bg-cards w-72 h-35 shadow-xl rounded-xl p-5">
                <div className="w-full h-full flex flex-col gap-3 place-content-center">
                    <h3 className='text-white font-semibold text-xl'>Total Bookings</h3>
                    <div className='flex place-content-between'>
                      <h4 className='font-semibold text-white text-2xl'>15</h4>
                      <BsBook size={30} className=' text-white'></BsBook>
                    </div>
                    
                </div>
              </div>
              <div className="bg-cards w-72 h-35 rounded-xl  shadow-xl p-5">
                <div className="w-full h-full flex flex-col gap-3 place-content-center">
                    <h3 className='text-white font-semibold text-xl'>Total Revenue</h3>
                    <div className='flex place-content-between'>
                      <h4 className='font-semibold text-white text-2xl'>15000/-</h4>
                      <BiHomeAlt2 size={30} className=' text-white'></BiHomeAlt2>
                    </div>
                    
                </div>
              </div>
            </div>


            <div className="w-full flex place-content-between pb-10 pt-10">
                <div className="w-full h-full mt-10">
                  <h3 className=' font-bold'>Recent Bookings</h3>
                    
              <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5 w-auto">
              <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
              <thead class="bg-gray-50">
              <tr>
                  <th scope="col" class="px-6 py-4 font-medium text-gray-900">SI No.</th>
                  <th scope="col" class="px-6 py-4 font-medium text-gray-900">Booking Id</th>
                  <th scope="col" class="px-6 py-4 font-medium text-gray-900">Hotel</th>
                  <th scope="col" class="px-6 py-4 font-medium text-gray-900">Customer</th>
                  <th scope="col" class="px-6 py-4 font-medium text-gray-900 ">Date</th>
                  <th scope="col" class="px-6 py-4 font-medium text-gray-900">Status</th>
                  <th scope="col" class="px-6 py-4 font-medium text-gray-900">Action</th>
              </tr>
              </thead>
              <tbody class="divide-y divide-gray-100 border-t border-gray-100">
                <tr class="hover:bg-gray-50">
                    <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
                      <div class="px-6 py-4">
                          <p>1</p>
                      </div>
                    </th>
                    <td class="px-6 py-4">
                      <p>fdghfd dfgfdg fdg</p>
                    </td>
                    <td class="px-6 py-4">
                        <p>fdghfd dfgfdg fdg</p>
                    </td>
                    <td class="px-6 py-4">
                        <p>fdghfd dfgfdg fdg</p>
                    </td>
                    <td class="px-6 py-4">
                        <p>fdghfd dfgfdg fdg</p>
                    </td>
                    <td class="px-6 py-4">
                        <p>fdghfd dfgfdg fdg</p>
                    </td>
                    <td class="px-6 py-4">
                        <p>fdghfd dfgfdg fdg</p>
                    </td>
                    
                </tr>
              </tbody>
              </table>
                  
              </div>
            </div>
            </div>
          </div>
        </div>
    </div>
  )
}
