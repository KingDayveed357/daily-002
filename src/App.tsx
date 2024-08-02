
import paypal from "./assets/images/paypal2.png"
import visa from "./assets/images/visa.jpeg"; // Add the path to your Visa image
import mastercard from "./assets/images/mastercard-img.png";
import discover from "./assets/images/discover.png";
import amex from "./assets/images/amex.png"

function App() {


  return (
    <>
    <main className="max-w-screen-xl mx-5 lg:mx-auto py-12">
         <h1 className="text-3xl mb-3 font-semibold">Checkout</h1>
  
      <div className="grid text-lg gap-16 grid-cols-1 lg:grid-cols-2">
       <div className="border-t-2">
      
        <div className="flex justify-between mt-2 mb-5">
        <p className="text-xl font-semibold">Shipping</p>
        <p className="text-green-700 font-semibold text-sm">Edit</p>
        </div>
        <div className="mb-3">
        <p>Rowena Benivedez</p>
        <p>29181 West River Drive, Sacramento, CS 95833</p>
        </div>
      
         <div>
         <p>Standard Shipping: Free</p>
         <p className="font-semibold">Arrive Thursday, October 31st</p>
         </div>
        <div className="border-t-2 mt-5">
          <p className="font-semibold text-xl mt-4">Payment Method</p>
        </div>
        <button className="mt-10 bg-[#FFD140] btn w-full hover:bg-[#FFD140] btn-lg text-white flex items-center justify-center">
            <img src={paypal} className="w-20 bg-transparent" alt="PayPal" />
          </button>

        <div className="flex items-center mx-20 font-extralight py-4 mt-2 text-sm">
              <hr className="flex-grow  border-gray-200" />
              <p className="text-center text-gray-700 mx-2">or</p>
              <hr className="flex-grow border-gray-200" />
            </div>
        <form action="#" className="">
        <div className="relative form-control">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="input input-bordered w-full my-5"
                />
                <div className="absolute inset-y-0 right-0 flex gap-2 mr-2 items-center pl-2">
                  <img src={visa} alt="Visa" className="h-6 w-11 rounded-sm" />
                  <img src={amex} alt="Visa" className="h-9 w-10 " />
                  <img src={mastercard} alt="MasterCard" className="h-6 w-10" />
                  <img src={discover} alt="Visa" className="h-8 w-10 " />
                </div>
              </div>
          <div className=" flex gap-4 mb-5">
          <input type="text" placeholder="Expiration" className="input input-bordered w-full" />
          <input type="text" placeholder="CVV" className="input input-bordered w-full " />
          </div>
          <div className="flex gap-4 mb-5">
          <input type="text" placeholder="First name" className="input input-bordered w-full " />
          <input type="text" placeholder="Last name" className="input input-bordered w-full " />
          </div>
          <div className="mb-5">
          <input type="text" placeholder="Billing zip code" className="input input-bordered w-full " />
          </div>
          <button className="uppercase bg-[#299976] my-5 text-white hover:bg-[#248465] btn btn-lg w-full ">Place order</button>
        </form>
  <p className="text-center text-sm">By clicking Place Order you agree to the <span className="text-green-400">Terms & Conditions</span> .</p>
       </div>
     
       <div className="md:mx-5 mx-0 ">
        <div className="border  flex flex-col">
        
          <div className="md:mx-7 mx-4 py-5">
      <div className=" flex justify-between my-5">
      <p className="font-semibold">Shopping Cart</p>
      <p className="text-green-700 font-semibold text-sm">Edit</p>
      </div>
      <div className="">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>$38.00</p>
          </div>
          <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>Free</p>
          </div>
          <div className="flex justify-between">
          <p>Tax</p>
          <p>$4.00</p>
          </div>
          
      </div>
      <div className="flex my-3 font-bold justify-between">
          <p>Order Total</p>
          <p>$38.00</p>
          </div>
          </div>
          <hr/>
          <div className="py-12 mx-0 md:mx-5">
          <div className="overflow-x-auto">
  <table className="table font-serif">
    {/* head */}
    <thead>
      <tr>
        <th>ITEM</th>
        <th></th>
        <th>QTY</th>
        <th>PRICE</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className="border-b-0 bg-base-200">
        <td></td>
        <td>Drip Coffee Funnel 8 cups / 64 ounces</td>
        <td>1</td>
        <td>$38.00</td>
      </tr>
    </tbody>
  </table>
</div>
          </div>
      
      </div>
      
      </div>
      </div>
     
    </main>
    </>
  )
}

export default App
