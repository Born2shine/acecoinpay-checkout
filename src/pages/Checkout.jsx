import * as IMAGE from "../assets/images";
import * as ICONS from "../assets/icons";
import { Circle, Input, Label, Ripple, SingleCardInfo, SingleDot, SingleTimeCounter } from "../components";
import { MASTER_CARD_ICON } from "../assets/svgs";

const Checkout = () => {
  return (
    <main>
      <section className="p-4 pt-8 m-4 bg-white relative md:w-[85%] md:mx-auto lg:w-[90%] xl:w-[70%] md:pt-12 md:mt-8">

        <span className="absolute right-0 top-0 p-1 px-2 bg-[#f9fbfc] text-isDark5">
          <ICONS.MdClose />
        </span>
          <section className="">
              <div className="md:w-[61%] md:mr-auto md:ml-4 md:mb-7 flex items-center justify-between">
                <div className="flex items-center gap-x-1">
                  <img src={IMAGE.LOGO} alt="" />
                  <span className="text-isDark font-bold">
                    AceCoin<span className="text-isDark5 font-thin">Pay</span>{" "}
                  </span>
                </div>
                <div className="flex items-center gap-x-1">
                  <div className="flex gap-x-[1px]">
                    <SingleTimeCounter value={0} />
                    <SingleTimeCounter value={1} />
                  </div>
                  <span>:</span>
                  <div className="flex gap-x-[1px]">
                    <SingleTimeCounter value={1} />
                    <SingleTimeCounter value={9} />
                  </div>
                </div>
              </div>
            <section className="flex flex-col md:flex-row">
              <section className="md:w-[60%] md:mx-auto pt-6 md:pt-0">
                <form action="">
                  <div>
                    <div className="flex justify-between items-center">
                      <Label
                        title="Card Number"
                        subtext="Enter the 16-digit card number on the card"
                      />
                      <div className="cursor-pointer">
                        <span className="flex items-center text-isPrimary gap-x-1 text-sm">
                          <ICONS.BiPencil /> <span>Edit</span>
                        </span>
                      </div>
                    </div>
                    <div className="relative mt-3">
                      <span className="absolute left-3 top-3.5 text-isPrimary w-2">
                        <MASTER_CARD_ICON />
                      </span>
                      <Input type="text" placeholder="2412     -     7512     -     3412     -     3456" classes='md:text-left md:pl-12' />
                      <span className="absolute right-3 top-3.5 text-isPrimary">
                        <ICONS.MdVerified />
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col mt-4 md:flex-row md:justify-between md:items-center">
                    <Label
                      title="CVV Number"
                      subtext="Enter the 3 or 4 digit number on the card"
                    />
                    <div className="relative mt-3">
                      <Input type="text" placeholder="CVV" classes="pl-3 md:w-[250px]" />
                      <span className="absolute right-3 top-3.5 text-isDark5">
                        <ICONS.TbGridDots />
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col mt-4 md:flex-row md:justify-between md:items-center">
                    <Label
                      title="Expiry Date"
                      subtext="Enter the expiration date of the card"
                    />
                    <div className="relative mt-3">
                      <div className="flex items-center gap-x-3">
                        <Input type="text" placeholder="09" classes="" />
                        <span>/</span>
                        <Input type="text" placeholder="22" classes="pl-3" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col mt-4 md:flex-row md:justify-between md:items-center">
                    <Label title="Password" subtext="Enter your dynamic password" />
                    <div className="relative mt-3">
                      <Input type="password" placeholder="******" classes="pl-3 md:w-[250px] md:text-left md:pl-6" />
                      <span className="absolute right-3 top-3.5 text-isDark5">
                        <ICONS.TbGridDots />
                      </span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <button className="bg-isPrimary p-3 w-full rounded-md text-isWhite5 hover:bg-blue-700">
                      Pay Now
                    </button>
                  </div>
                </form>
              </section>
              <aside className="-order-1 md:order-1 md:w-[28%] md:mx-auto">
                <section className="bg-isGray10 px-8 py-1.5 pb-4 mt-6 rounded-lg md:mt-0 md:px-10">
                  <div className="hidden bg-white px-5 py-8 rounded-xl relative overflow-hidden w-[85%] mx-auto drop-shadow-2xl md:block md:w-[100%] md:-mt-20">
                    <span className="absolute w-16 h-1 bg-isPrimary -top-[2px] left-[30%]"></span>
                    <Ripple classes='w-72 h-72 -bottom-20 -left-10'/>
                    <Ripple classes='w-64 h-64 -bottom-16 -left-4'/>
                    <Ripple />
                    <div className="flex items-center justify-between">
                      <span className="text-4xl rotate-90">
                        <ICONS.FcSimCardChip />
                      </span>
                      <span className="text-3xl">
                        <ICONS.AiOutlineWifi />
                      </span>
                    </div>
                    <div className="mt-16 md:mt-12">
                      <div>
                        <span className="text-xs">Jonathan Michael</span>
                        <div className="flex items-center gap-x-4">
                          <div className="flex text-3xl tracking-tighter space- gap-x-2">
                            <SingleDot />
                            <SingleDot />
                            <SingleDot />
                            <SingleDot />
                          </div>
                          <h3 className="font-semibold text-isDark text-xs">3456</h3>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-6">
                        <h2 className="font-semibold text-isDark text-xs">09/22</h2>
                        <span className="fle flex-col items-center tracking-tighter leading-none">
                          <MASTER_CARD_ICON width={40} />
                          <span className="text-[9px]">mastercard</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <ul >
                      <SingleCardInfo
                        title='Company'
                        value='Apple'
                        valueIcon={<span className="bg-isDark rounded-full p-[2px] grid place-content-center text-xs text-isWhite5">
                        <ICONS.AiFillApple />
                      </span>}
                      />
                      <SingleCardInfo
                        title='Order Number'
                        value='1226704'
                      />
                      <SingleCardInfo
                        title='Product'
                        value='Macbook Air'
                      />
                      <SingleCardInfo
                        title='VAT (20%)'
                        value='$100.00'
                      />
                    </ul>
                    <span className="block border border-dashed border-b-isDark5 my-8 relative">
                      <Circle classes='-left-12 md:-left-16' />
                      <Circle classes='-right-12 md:-right-16' />
                    </span>
                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <span className="text-xs text-gray-600">You have to Pay</span>
                        <h2 className="font-semibold text-lg">549<span className="text-isDark font-thin text-xs">.99 USD</span> </h2>
                      </div>
                      <img className="w-5 h-5" src={IMAGE.DOCKET} alt="" />
                    </div>
                  </div>
                </section>
              </aside>
           </section>
          </section>
      </section>
    </main>
  );
};

export default Checkout;
