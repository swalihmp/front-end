import React, { useEffect,useState } from 'react';
import { useRef } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../utils/config';
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

export default function Invoice() {
    const order_id = useParams()
    const pdfRef = useRef();
    const [orderDetails, setOrderdetails] = useState({})

    useEffect(()=>{
        console.log(order_id.id)
        order_details()
    }, [])


    async function order_details() {
        const response = await axios.get(`${BASE_URL}/payment/orders/${order_id.id}`)
        setOrderdetails(response.data)
        console.log(response.data)
    }

    const downloadPdf = () => {
        const input = pdfRef.current;
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4', true);
            console.log(pdf);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            const imgX = (pdfWidth - imgWidth * ratio) / 2;
            const imgY = 30;
            pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
            pdf.save('invoice.pdf')

        });
    }

  return (
    <div className='flex w-full place-content-center place-item-center' >
        <div className='w-4/6' ref={pdfRef}>
            <div className='m-5 min-h-screen border border-black' >
               <div className='flex p-7 place-content-between'>
                    <div className=' text-3xl font-bold text-red-600'>
                        BookEaze
                    </div>
                    <div className='text-2xl font-bold'>
                        Invoice
                    </div>
                </div>
                <div className='flex p-7 place-content-between'>
                    <div className='flex flex-col'>
                        <p className='font-bold pb-1'>BookEaze</p>
                        <p>Kakkand , 23rd Street</p>
                        <p>Kochi </p>
                        <p>Kerala </p>
                        <p>7356243613</p>
                    </div>
                    <div>
                        <p>Invoice No : 001</p>
                        <p>Order Number : {orderDetails.order_id} </p>
                        <p>Order Date : {orderDetails.order_date}</p>
                        <p>Name : {orderDetails.firtname} {orderDetails.lastname}</p>
                    </div>
                </div>
                {/* <div className=' bg-black p-1 ml-7 mr-7'>

                </div> */}
                <hr className='mx-7 font-bold bg-red-600'></hr>
                <div className='flex p-7 place-content-between'>
                    <div className='flex flex-col'>
                        <p className=' font-bold pb-1'>Billed To,</p>
                        <p>{orderDetails.firtname} {orderDetails.lastname} </p>
                        <p>{orderDetails.addrress1} </p>
                        <p>{orderDetails.addrress2} </p>
                        <p>{orderDetails.email}</p>
                        <p>{orderDetails.phone}</p>
                    </div>
                    <div>
                    </div>
                </div>

            <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-7">
                <table class="w-full border-collapse bg-white text-left text-sm text-black">
                    <thead class="bg-gray-50">
                    <tr>
                        <th scope="col" class="px-6 py-4 font-large text-gray-900">Property Name</th>
                        <th scope="col" class="px-6 py-4 font-large text-gray-900">Place</th>
                        <th scope="col" class="px-6 py-4 font-large text-gray-900">Location</th>
                        <th scope="col" class="px-6 py-4 font-large text-gray-900">Propert Type</th>
                    </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100 border-t border-gray-100">
                        <tr class="hover:bg-gray-50">
                            <td class="px-6 py-4">
                                <p>{orderDetails?.property?.name}</p>
                            </td>
                            <td class="px-6 py-4">
                                <p>{orderDetails?.property?.place}</p>
                            </td>

                            <td class="px-6 py-4">
                                <p>{orderDetails?.property?.location}</p>
                            </td>
                            <td class="px-6 py-4">
                                <p>{orderDetails?.property?.room_type}</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='flex place-content-between'>
                <div>
                </div>
                <div class="w-1/3 overflow-hidden rounded-lg border border-gray-200 shadow-md mr-7 mb-7">
                    <table class="w-full border-collapse bg-white text-left text-sm text-black">
                        <tbody class="divide-y divide-gray-100 border-t border-gray-100">
                            
                            <tr class="font-bold">

                                <td class="px-6 py-4">
                                    <p>Total :</p>
                                </td>
                                <td class="px-6 py-4">
                                    <p>{orderDetails.order_amount}</p>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
            <hr className='mx-7 font-bold'></hr>
            <div className='p-7 flex flex-col'>
                <p>Thank You For Choosing Us..... !</p>
                <p><Link className=' underline' onClick={downloadPdf}>Click me to download invoice</Link> </p>
            </div>
            </div>
        
        </div>
        <div>
            <Link to="/">Home....</Link>
        </div>
        
    </div>
  )
}
