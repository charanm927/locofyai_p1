import type { NextPage } from "next";

const Frame: NextPage = () => {
  return (
    <div className="w-full relative flex flex-col items-start justify-start text-left text-17xl text-neutral-d-grey font-body-medium-body-2">
      <div className="self-stretch bg-neutral-silver overflow-hidden flex flex-col items-center justify-center py-[22px] px-[105px] text-base text-text-gray-900 lg:pl-[50px] lg:pr-[50px] lg:box-border mq350small:pl-5 mq350small:pr-5 mq350small:box-border">
        <div className="self-stretch flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-start gap-[8px]">
            <img className="w-[35px] relative h-6" alt="" src="/icon.svg" />
            <img
              className="w-[111.5px] relative h-[20.7px]"
              alt=""
              src="/nexcent.svg"
            />
          </div>
          <div className="flex-1 overflow-hidden flex flex-col items-center justify-center py-0 px-[15px] md:hidden">
            <div className="self-stretch overflow-hidden flex flex-row items-center justify-between">
              <div className="flex flex-row items-center justify-start">
                <div className="relative leading-[24px] font-medium">Home</div>
              </div>
              <div className="flex flex-row items-center justify-start">
                <div className="relative leading-[24px]">Service</div>
              </div>
              <div className="flex flex-row items-center justify-start">
                <div className="relative leading-[24px]">Feature</div>
              </div>
              <div className="flex flex-row items-center justify-start">
                <div className="relative leading-[24px]">Product</div>
              </div>
              <div className="flex flex-row items-center justify-start">
                <div className="relative leading-[24px]">Testimonial</div>
              </div>
              <div className="flex flex-row items-center justify-start">
                <div className="relative leading-[24px]">FAQ</div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden flex flex-row items-center justify-start gap-[14px]">
            <button className="cursor-pointer [border:none] py-2.5 px-5 bg-neutral-silver rounded-md flex flex-row items-center justify-start sm:hidden">
              <div className="relative text-sm leading-[20px] font-medium font-body-medium-body-2 text-brand-primary text-center">
                Login
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-2.5 px-5 bg-brand-primary rounded-md flex flex-row items-center justify-start sm:hidden">
              <div className="relative text-sm leading-[20px] font-medium font-body-medium-body-2 text-default-white text-center">
                Sign up
              </div>
            </button>
            <div className="w-[26px] hidden flex-col items-start justify-start gap-[8px] md:flex md:w-[23px]">
              <div className="self-stretch relative box-border h-0.5 border-t-[2px] border-solid border-black" />
              <div className="self-stretch relative box-border h-0.5 border-t-[2px] border-solid border-black" />
              <div className="self-stretch relative box-border h-0.5 border-t-[2px] border-solid border-black" />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[40px] text-center">
        <div className="self-stretch bg-neutral-silver flex flex-row items-center justify-start py-24 px-36 gap-[104px] text-left text-45xl lg:pl-[120px] lg:pr-[120px] lg:box-border md:flex-col md:pl-20 md:pr-20 md:box-border sm:pl-[30px] sm:pr-[30px] sm:box-border">
          <div className="flex-1 flex flex-col items-start justify-start gap-[32px] md:flex-[unset] md:self-stretch sm:items-start sm:justify-start">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch relative leading-[76px] font-semibold">
                <span>{`Lessons and insights `}</span>
                <span className="text-brand-primary">from 8 years</span>
              </div>
              <div className="self-stretch relative text-base leading-[24px] text-neutral-grey">
                Where to grow your business as a photographer: site or social
                media?
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-3.5 px-8 bg-brand-primary rounded flex flex-row items-center justify-center">
              <div className="relative text-base leading-[24px] font-medium font-body-medium-body-2 text-default-white text-center">
                Register
              </div>
            </button>
          </div>
          <img
            className="h-[407px] w-[391px] relative lg:w-full"
            alt=""
            src="/illustration.svg"
          />
        </div>
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-36 gap-[16px] lg:pl-[120px] lg:pr-[120px] lg:box-border md:pl-20 md:pr-20 md:box-border sm:pl-[30px] sm:pr-[30px] sm:box-border">
          <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
            <div className="self-stretch relative leading-[44px] font-semibold">
              Our Clients
            </div>
            <div className="self-stretch relative text-base leading-[24px] text-neutral-grey">
              We have been working with some Fortune 500+ clients
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between md:flex-row md:flex-wrap">
            <img
              className="w-12 relative rounded-lg h-12"
              alt=""
              src="/logo.svg"
            />
            <img
              className="w-12 relative rounded-lg h-12"
              alt=""
              src="/logo1.svg"
            />
            <img
              className="w-12 relative rounded-lg h-12"
              alt=""
              src="/logo2.svg"
            />
            <img
              className="w-12 relative rounded-lg h-12"
              alt=""
              src="/logo3.svg"
            />
            <img
              className="w-12 relative rounded-lg h-12"
              alt=""
              src="/logo4.svg"
            />
            <img
              className="w-12 relative rounded-lg h-12"
              alt=""
              src="/logo5.svg"
            />
            <img
              className="w-12 relative rounded-lg h-12"
              alt=""
              src="/logo2.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
            <div className="self-stretch relative leading-[44px] font-semibold">
              Manage your entire community in a single system
            </div>
            <div className="self-stretch relative text-base leading-[24px] text-neutral-grey">
              Who is Nextcent suitable for?
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between py-0 px-36 text-9xl lg:pl-[70px] lg:pr-[70px] lg:box-border md:flex-col md:items-center md:justify-center">
            <div className="w-[299px] rounded-lg bg-default-white shadow-[0px_2px_4px_rgba(171,_190,_209,_0.2)] flex flex-col items-center justify-start py-6 px-8 box-border gap-[8px]">
              <div className="w-[267px] flex flex-col items-center justify-start gap-[16px]">
                <div className="w-[65px] relative h-14">
                  <div className="absolute top-[56px] left-[65px] rounded-tl-[18px] rounded-tr-8xs rounded-br-[10px] rounded-bl-8xs bg-honeydew w-[50px] h-[49px] [transform:_rotate(-180deg)] [transform-origin:0_0]" />
                  <img
                    className="absolute top-[0px] left-[0px] w-12 h-12"
                    alt=""
                    src="/icon1.svg"
                  />
                </div>
                <b className="self-stretch relative leading-[36px]">
                  Membership Organisations
                </b>
              </div>
              <div className="flex flex-row items-start justify-start text-sm text-neutral-grey">
                <div className="w-[251px] relative leading-[20px] inline-block shrink-0">
                  Our membership management software provides full automation of
                  membership renewals and payments
                </div>
              </div>
            </div>
            <div className="w-[299px] rounded-lg bg-default-white shadow-[0px_2px_4px_rgba(171,_190,_209,_0.2)] flex flex-col items-center justify-start py-6 px-8 box-border gap-[8px]">
              <div className="w-[267px] flex flex-col items-center justify-start gap-[16px]">
                <img
                  className="w-[65px] relative h-14"
                  alt=""
                  src="/icon2.svg"
                />
                <b className="self-stretch relative leading-[36px]">
                  National Associations
                </b>
              </div>
              <div className="flex flex-row items-start justify-start text-sm text-neutral-grey">
                <div className="w-60 relative leading-[20px] inline-block shrink-0">
                  Our membership management software provides full automation of
                  membership renewals and payments
                </div>
              </div>
            </div>
            <div className="w-[299px] rounded-lg bg-default-white shadow-[0px_2px_4px_rgba(171,_190,_209,_0.2)] flex flex-col items-center justify-start py-6 px-8 box-border gap-[8px]">
              <div className="w-[267px] flex flex-col items-center justify-start gap-[16px]">
                <img
                  className="w-[65px] relative h-14"
                  alt=""
                  src="/icon3.svg"
                />
                <b className="w-[231px] relative leading-[36px] inline-block">
                  Clubs And Groups
                </b>
              </div>
              <div className="flex flex-row items-start justify-start text-sm text-neutral-grey">
                <div className="w-[251px] relative leading-[20px] inline-block shrink-0">
                  Our membership management software provides full automation of
                  membership renewals and payments
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-center gap-[48px]">
        <div className="self-stretch overflow-x-auto flex flex-row items-start justify-between">
          <div className="flex-1 flex flex-row items-center justify-between py-0 px-36 lg:flex-col lg:pl-[120px] lg:pr-[120px] lg:box-border md:flex-col md:pl-20 md:pr-20 md:box-border sm:pl-[30px] sm:pr-[30px] sm:box-border">
            <img
              className="w-[442px] relative h-[433px] lg:w-full"
              alt=""
              src="/frame-35.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start gap-[32px] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[16px]">
                <div className="self-stretch relative leading-[44px] font-semibold">
                  The unseen of spending three years at Pixelgrade
                </div>
                <div className="self-stretch relative text-sm leading-[20px] text-neutral-grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  sit amet justo ipsum. Sed accumsan quam vitae est varius
                  fringilla. Pellentesque placerat vestibulum lorem sed porta.
                  Nullam mattis tristique iaculis. Nullam pulvinar sit amet
                  risus pretium auctor. Etiam quis massa pulvinar, aliquam quam
                  vitae, tempus sem. Donec elementum pulvinar odio.
                </div>
              </div>
              <button className="cursor-pointer [border:none] py-3.5 px-8 bg-brand-primary rounded flex flex-row items-center justify-center">
                <div className="relative text-base leading-[24px] font-medium font-body-medium-body-2 text-default-white text-center">
                  Learn More
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-neutral-silver flex flex-row items-center justify-between py-16 px-36 lg:flex-col lg:pl-[120px] lg:pr-[120px] lg:box-border md:pl-20 md:pr-20 md:box-border sm:pl-[30px] sm:pr-[30px] sm:box-border">
          <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[8px] lg:flex-[unset] lg:self-stretch">
            <div className="overflow-hidden flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[44px] font-semibold">
                <span>{`Helping a local `}</span>
                <span className="text-brand-primary">
                  business reinvent itself
                </span>
              </div>
            </div>
            <div className="self-stretch relative text-base leading-[24px] text-text-gray-900">
              We reached here with our hard work and dedication
            </div>
          </div>
          <div className="flex-1 overflow-hidden flex flex-col items-center justify-start gap-[40px] text-9xl lg:mt-[30px] lg:flex-[unset] lg:self-stretch">
            <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[30px] sm:flex-col">
              <div className="flex-1 flex flex-row items-center justify-start gap-[16px] sm:flex-[unset] sm:self-stretch">
                <img
                  className="w-12 relative h-12 overflow-hidden shrink-0"
                  alt=""
                  src="/icon4.svg"
                />
                <div className="overflow-hidden flex flex-col items-start justify-start">
                  <b className="relative leading-[36px]">2,245,341</b>
                  <div className="relative text-base leading-[24px] text-neutral-grey">
                    Members
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-row items-center justify-start gap-[16px] sm:flex-[unset] sm:self-stretch">
                <img className="w-12 relative h-12" alt="" src="/icon5.svg" />
                <div className="overflow-hidden flex flex-col items-start justify-start">
                  <b className="relative leading-[36px]">46,328</b>
                  <div className="relative text-base leading-[24px] text-neutral-grey">
                    Clubs
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[30px] sm:flex-col">
              <div className="flex-1 flex flex-row items-center justify-start gap-[16px] sm:flex-[unset] sm:self-stretch">
                <img
                  className="w-12 relative h-12 overflow-hidden shrink-0"
                  alt=""
                  src="/icon6.svg"
                />
                <div className="overflow-hidden flex flex-col items-start justify-start">
                  <b className="relative leading-[36px]">828,867</b>
                  <div className="relative text-base leading-[24px] text-neutral-grey">
                    Event Bookings
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-row items-center justify-start gap-[16px] sm:flex-[unset] sm:self-stretch">
                <img
                  className="w-12 relative h-12 overflow-hidden shrink-0"
                  alt=""
                  src="/icon7.svg"
                />
                <div className="overflow-hidden flex flex-col items-start justify-start">
                  <b className="relative leading-[36px]">1,926,436</b>
                  <div className="relative text-base leading-[24px] text-neutral-grey">
                    Payments
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch overflow-x-auto flex flex-row items-start justify-start text-[8.1px] text-gainsboro font-montserrat">
          <div className="flex-1 flex flex-row items-center justify-between py-0 px-36 lg:flex-col lg:pl-[120px] lg:pr-[120px] lg:box-border md:flex-col md:pl-20 md:pr-20 md:box-border sm:pl-[30px] sm:pr-[30px] sm:box-border">
            <div className="w-[441.5px] relative h-[433.4px] lg:w-full">
              <img
                className="absolute h-[87.82%] w-full top-[0%] right-[0%] bottom-[12.18%] left-[0%] max-w-full overflow-hidden max-h-full opacity-[0]"
                alt=""
              />
              <img
                className="absolute h-[68.85%] w-[72.55%] top-[20.24%] right-[16.56%] bottom-[10.91%] left-[10.89%] max-w-full overflow-hidden max-h-full opacity-[0]"
                alt=""
              />
              <img
                className="absolute h-[0.12%] w-[72.62%] top-[99.88%] right-[14.75%] bottom-[0%] left-[12.64%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/floor.svg"
              />
              <img
                className="absolute h-[34.1%] w-[19.46%] top-[45.34%] right-[15.45%] bottom-[20.56%] left-[65.1%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/plant.svg"
              />
              <img
                className="absolute h-[23.77%] w-[19.5%] top-[1.11%] right-[16.53%] bottom-[75.13%] left-[63.96%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/padlock.svg"
              />
              <div className="absolute h-[79.58%] w-[35.4%] top-[11.65%] right-[27.68%] bottom-[8.77%] left-[36.92%]">
                <img
                  className="absolute h-[88.23%] w-[95.52%] top-[0%] right-[4.48%] bottom-[11.77%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector.svg"
                />
                <img
                  className="absolute h-[82.49%] w-[86.69%] top-[2.61%] right-[8.89%] bottom-[14.9%] left-[4.41%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector1.svg"
                />
                <img
                  className="absolute h-[7.02%] w-[50.93%] top-[68.31%] right-[26.74%] bottom-[24.67%] left-[22.33%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector2.svg"
                />
                <div className="absolute h-[29.98%] w-[63.47%] top-[70.05%] left-[36.53%] inline-block">
                  SING UP
                </div>
                <img
                  className="absolute h-[1.45%] w-[17.02%] top-[24.21%] right-[66.99%] bottom-[74.34%] left-[15.99%] max-w-full overflow-hidden max-h-full object-contain"
                  alt=""
                  src="/vector3.svg"
                />
                <img
                  className="absolute h-[1.45%] w-[17.02%] top-[24.21%] right-[66.99%] bottom-[74.34%] left-[15.99%] max-w-full overflow-hidden max-h-full object-contain opacity-[0.1]"
                  alt=""
                  src="/vector4.svg"
                />
                <img
                  className="absolute h-[5.28%] w-[68.27%] top-[27.66%] right-[15.99%] bottom-[67.06%] left-[15.74%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector5.svg"
                />
                <img
                  className="absolute h-[1.33%] w-[31.09%] top-[29.34%] right-[47.79%] bottom-[69.32%] left-[21.11%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector6.svg"
                />
                <img
                  className="absolute h-[1.33%] w-[31.09%] top-[29.34%] right-[47.79%] bottom-[69.32%] left-[21.11%] max-w-full overflow-hidden max-h-full opacity-[0.2]"
                  alt=""
                  src="/vector7.svg"
                />
                <img
                  className="absolute h-[1.45%] w-[17.02%] top-[37.11%] right-[67.11%] bottom-[61.44%] left-[15.87%] max-w-full overflow-hidden max-h-full object-contain"
                  alt=""
                  src="/vector8.svg"
                />
                <img
                  className="absolute h-[1.45%] w-[17.02%] top-[37.11%] right-[67.11%] bottom-[61.44%] left-[15.87%] max-w-full overflow-hidden max-h-full object-contain opacity-[0.1]"
                  alt=""
                  src="/vector9.svg"
                />
                <img
                  className="absolute h-[5.28%] w-[68.27%] top-[40.59%] right-[16.12%] bottom-[54.13%] left-[15.61%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector10.svg"
                />
                <img
                  className="absolute h-[1.45%] w-[17.02%] top-[50.59%] right-[67.24%] bottom-[47.96%] left-[15.74%] max-w-full overflow-hidden max-h-full object-contain"
                  alt=""
                  src="/vector11.svg"
                />
                <img
                  className="absolute h-[1.45%] w-[17.02%] top-[50.59%] right-[67.24%] bottom-[47.96%] left-[15.74%] max-w-full overflow-hidden max-h-full object-contain opacity-[0.1]"
                  alt=""
                  src="/vector12.svg"
                />
                <img
                  className="absolute h-[5.28%] w-[68.27%] top-[54.02%] right-[16.19%] bottom-[40.71%] left-[15.55%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector13.svg"
                />
                <img
                  className="absolute h-[1.39%] w-[31.09%] top-[42.56%] right-[48.5%] bottom-[56.05%] left-[20.41%] max-w-full overflow-hidden max-h-full object-contain"
                  alt=""
                  src="/vector14.svg"
                />
                <img
                  className="absolute h-[1.39%] w-[31.09%] top-[42.56%] right-[48.5%] bottom-[56.05%] left-[20.41%] max-w-full overflow-hidden max-h-full object-contain opacity-[0.2]"
                  alt=""
                  src="/vector15.svg"
                />
                <img
                  className="absolute h-[1.25%] w-[2.75%] top-[56.19%] right-[76.71%] bottom-[42.56%] left-[20.54%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector16.svg"
                />
                <img
                  className="absolute h-[1.33%] w-[2.75%] top-[56.19%] right-[72.49%] bottom-[42.48%] left-[24.76%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector17.svg"
                />
                <img
                  className="absolute h-[1.25%] w-[2.75%] top-[56.19%] right-[68.27%] bottom-[42.56%] left-[28.98%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector18.svg"
                />
                <img
                  className="absolute h-[1.25%] w-[2.75%] top-[56.22%] right-[64.11%] bottom-[42.53%] left-[33.14%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector19.svg"
                />
                <img
                  className="absolute h-[1.25%] w-[2.75%] top-[56.22%] right-[59.88%] bottom-[42.53%] left-[37.36%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector20.svg"
                />
                <img
                  className="absolute h-[1.25%] w-[2.75%] top-[56.22%] right-[55.66%] bottom-[42.53%] left-[41.59%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector21.svg"
                />
                <img
                  className="absolute h-[1.33%] w-[2.75%] top-[56.25%] right-[51.44%] bottom-[42.42%] left-[45.81%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector22.svg"
                />
                <img
                  className="absolute h-[1.25%] w-[2.75%] top-[56.25%] right-[47.22%] bottom-[42.51%] left-[50.03%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector23.svg"
                />
                <img
                  className="absolute h-[1.25%] w-[2.75%] top-[56.25%] right-[42.99%] bottom-[42.51%] left-[54.25%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector24.svg"
                />
                <img
                  className="absolute h-[1.36%] w-[36.4%] top-[56.19%] right-[43.06%] bottom-[42.45%] left-[20.54%] max-w-full overflow-hidden max-h-full opacity-[0.2]"
                  alt=""
                  src="/group.svg"
                />
                <img
                  className="absolute h-[4.32%] w-[8.77%] top-[11.42%] right-[45.55%] bottom-[84.26%] left-[45.68%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector25.svg"
                />
                <img
                  className="absolute h-[4.32%] w-[8.77%] top-[11.42%] right-[45.55%] bottom-[84.26%] left-[45.68%] max-w-full overflow-hidden max-h-full opacity-[0.1]"
                  alt=""
                  src="/vector26.svg"
                />
                <img
                  className="absolute h-[1.77%] w-[31.22%] top-[16.87%] right-[34.8%] bottom-[81.36%] left-[33.97%] max-w-full overflow-hidden max-h-full object-contain"
                  alt=""
                  src="/vector27.svg"
                />
                <img
                  className="absolute h-[1.77%] w-[31.22%] top-[16.87%] right-[34.8%] bottom-[81.36%] left-[33.97%] max-w-full overflow-hidden max-h-full object-contain opacity-[0.2]"
                  alt=""
                  src="/vector28.svg"
                />
              </div>
              <img
                className="absolute h-[13.96%] w-[12.07%] top-[32.1%] right-[74.56%] bottom-[53.95%] left-[13.36%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/speechbubble.svg"
              />
              <img
                className="absolute h-[66.38%] w-[33.52%] top-[33.53%] right-[47.09%] bottom-[0.09%] left-[19.39%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/character.svg"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[32px] text-17xl text-neutral-d-grey font-body-medium-body-2 lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <div className="self-stretch relative leading-[44px] font-semibold">
                  How to design your site footer like we did
                </div>
                <div className="self-stretch relative text-sm leading-[20px] text-neutral-grey">
                  Donec a eros justo. Fusce egestas tristique ultrices. Nam
                  tempor, augue nec tincidunt molestie, massa nunc varius arcu,
                  at scelerisque elit erat a magna. Donec quis erat at libero
                  ultrices mollis. In hac habitasse platea dictumst. Vivamus
                  vehicula leo dui, at porta nisi facilisis finibus. In euismod
                  augue vitae nisi ultricies, non aliquet urna tincidunt.
                  Integer in nisi eget nulla commodo faucibus efficitur quis
                  massa. Praesent felis est, finibus et nisi ac, hendrerit
                  venenatis libero. Donec consectetur faucibus ipsum id gravida.
                </div>
              </div>
              <button className="cursor-pointer [border:none] py-3.5 px-8 bg-brand-primary rounded flex flex-row items-center justify-center">
                <div className="relative text-base leading-[24px] font-medium font-body-medium-body-2 text-default-white text-center">
                  Learn More
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-neutral-silver flex flex-row items-center justify-start py-8 px-36 gap-[74px] text-base text-neutral-grey lg:flex-col lg:pl-[120px] lg:pr-[120px] lg:box-border md:pl-20 md:pr-20 md:box-border sm:pl-[30px] sm:pr-[30px] sm:box-border">
          <img
            className="h-[326px] w-[326px] relative rounded-lg object-cover lg:w-full"
            alt=""
            src="/image-9@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-[32px] lg:flex-[unset] lg:self-stretch">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch relative leading-[24px] font-medium">
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin
                eu enim metus. Vivamus sed libero ornare, tristique quam in,
                gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
                laoreet elit at ligula molestie, nec molestie mi blandit.
                Suspendisse cursus tellus sed augue ultrices, quis tristique
                nulla sodales. Suspendisse eget lorem eu turpis vestibulum
                pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                vitae placerat ante feugiat eget. Quisque vulputate odio neque,
                eget efficitur libero condimentum id. Curabitur id nibh id sem
                dignissim finibus ac sit amet magna.
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-xl text-brand-primary">
                <div className="self-stretch relative leading-[28px] font-semibold">
                  Tim Smith
                </div>
                <div className="self-stretch relative text-base leading-[24px] text-neutral-l-grey">
                  British Dragon Boat Racing Association
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[32px]">
              <div className="flex flex-row items-center justify-start gap-[41px] flex-wrap">
                <img
                  className="w-12 relative rounded-lg h-12"
                  alt=""
                  src="/logo6.svg"
                />
                <img
                  className="w-12 relative rounded-lg h-12"
                  alt=""
                  src="/logo7.svg"
                />
                <img
                  className="w-12 relative rounded-lg h-12"
                  alt=""
                  src="/logo8.svg"
                />
                <img
                  className="w-12 relative rounded-lg h-12"
                  alt=""
                  src="/logo9.svg"
                />
                <img
                  className="w-12 relative rounded-lg h-12"
                  alt=""
                  src="/logo10.svg"
                />
                <img
                  className="w-12 relative rounded-lg h-12"
                  alt=""
                  src="/logo11.svg"
                />
              </div>
              <button className="cursor-pointer [border:none] p-2 bg-[transparent] flex-1 flex flex-row items-center justify-start gap-[8px]">
                <div className="flex-1 relative text-xl leading-[28px] font-semibold font-body-medium-body-2 text-brand-primary text-left">
                  Meet all customers
                </div>
                <img
                  className="w-6 relative h-6 object-contain"
                  alt=""
                  src="/24arrows--directionsright@2x.png"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[16px] text-center">
          <div className="self-stretch flex flex-col items-center justify-start py-0 px-[30px] gap-[8px]">
            <div className="self-stretch relative leading-[44px] font-semibold">
              Caring is the new marketing
            </div>
            <div className="self-stretch relative text-base leading-[24px] text-neutral-grey">
              The Nexcent blog is the best place to read about the latest
              membership insights, trends and more. See who's joining the
              community, read about how our community are increasing their
              membership income and lot's more.​
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center py-0 px-36 gap-[24px] text-xl text-neutral-grey lg:flex-row lg:flex-wrap lg:pl-[120px] lg:pr-[120px] lg:box-border md:flex-col md:items-center md:justify-center md:pl-20 md:pr-20 md:box-border sm:pl-[30px] sm:pr-[30px] sm:box-border">
            <div className="flex flex-col items-center justify-start">
              <img
                className="w-[368px] relative rounded-lg h-[286px] object-cover lg:w-full"
                alt=""
                src="/image-18@2x.png"
              />
              <div className="rounded-lg bg-neutral-silver shadow-[0px_8px_16px_rgba(171,_190,_209,_0.4)] flex flex-col items-center justify-start p-4 gap-[16px] mt-[-96px]">
                <div className="w-[285px] relative leading-[28px] font-semibold inline-block">
                  Creating Streamlined Safeguarding Processes with OneRen
                </div>
                <button className="cursor-pointer [border:none] p-2 bg-[transparent] self-stretch flex flex-row items-center justify-center gap-[8px]">
                  <div className="relative text-xl leading-[28px] font-semibold font-body-medium-body-2 text-brand-primary text-left">
                    Readmore
                  </div>
                  <img
                    className="w-6 relative h-6 object-contain"
                    alt=""
                    src="/24arrows--directionsright1@2x.png"
                  />
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start">
              <img
                className="w-[368px] relative rounded-lg h-[286px] object-cover lg:w-full"
                alt=""
                src="/image-19@2x.png"
              />
              <div className="rounded-lg bg-neutral-silver shadow-[0px_8px_16px_rgba(171,_190,_209,_0.4)] flex flex-col items-center justify-start p-4 gap-[16px] mt-[-96px]">
                <div className="w-[285px] relative leading-[28px] font-semibold inline-block">
                  What are your safeguarding responsibilities and how can you
                  manage them?
                </div>
                <button className="cursor-pointer [border:none] p-2 bg-[transparent] self-stretch flex flex-row items-center justify-center gap-[8px]">
                  <div className="relative text-xl leading-[28px] font-semibold font-body-medium-body-2 text-brand-primary text-left">
                    Readmore
                  </div>
                  <img
                    className="w-6 relative h-6 object-contain"
                    alt=""
                    src="/24arrows--directionsright1@2x.png"
                  />
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start">
              <img
                className="w-[368px] relative rounded-lg h-[286px] object-cover lg:w-full"
                alt=""
                src="/image-20@2x.png"
              />
              <div className="rounded-lg bg-neutral-silver shadow-[0px_8px_16px_rgba(171,_190,_209,_0.4)] flex flex-col items-center justify-start p-4 gap-[16px] mt-[-96px]">
                <div className="w-[285px] relative leading-[28px] font-semibold inline-block">
                  Revamping the Membership Model with Triathlon Australia
                </div>
                <button className="cursor-pointer [border:none] p-2 bg-[transparent] self-stretch flex flex-row items-center justify-center gap-[8px]">
                  <div className="relative text-xl leading-[28px] font-semibold font-body-medium-body-2 text-brand-primary text-left">
                    Readmore
                  </div>
                  <img
                    className="w-6 relative h-6 object-contain"
                    alt=""
                    src="/24arrows--directionsright1@2x.png"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start text-center text-45xl text-neutral-black">
        <div className="self-stretch bg-neutral-silver flex flex-col items-center justify-start py-8 px-36 gap-[32px] lg:pl-[100px] lg:pr-[100px] lg:box-border md:pl-20 md:pr-20 md:box-border sm:pl-[30px] sm:pr-[30px] sm:box-border">
          <div className="relative leading-[76px] font-semibold md:text-[54px] sm:text-[40px]">
            Pellentesque suscipit fringilla libero eu.
          </div>
          <button className="cursor-pointer [border:none] py-3.5 px-8 bg-brand-primary rounded flex flex-row items-center justify-center gap-[8px]">
            <div className="relative text-base leading-[24px] font-medium font-body-medium-body-2 text-default-white text-center">
              Get a Demo
            </div>
            <img
              className="w-4 relative h-4 object-contain"
              alt=""
              src="/16arrows--directionsright@2x.png"
            />
          </button>
        </div>
        <div className="self-stretch bg-neutral-black flex flex-row items-start justify-between py-16 px-[165px] text-left text-sm text-neutral-silver lg:pl-[120px] lg:pr-[120px] lg:box-border md:flex-col md:pl-20 md:pr-20 md:box-border sm:pl-[30px] sm:pr-[30px] sm:box-border">
          <div className="overflow-hidden flex flex-col items-start justify-start gap-[40px]">
            <div className="flex flex-row items-center justify-start gap-[9.89px]">
              <img
                className="w-[43.3px] relative h-[29.7px]"
                alt=""
                src="/icon8.svg"
              />
              <img
                className="w-[137.8px] relative h-[25.5px]"
                alt=""
                src="/nexcent1.svg"
              />
            </div>
            <div className="overflow-hidden flex flex-col items-center justify-start gap-[8px]">
              <div className="w-[350px] relative leading-[20px] inline-block">
                Copyright © 2020 Nexcent ltd.
              </div>
              <div className="w-[350px] relative leading-[20px] inline-block">
                All rights reserved
              </div>
            </div>
            <div className="overflow-hidden flex flex-row items-start justify-start gap-[16px]">
              <img
                className="w-8 relative h-8"
                alt=""
                src="/social-icons.svg"
              />
              <img
                className="w-8 relative h-8"
                alt=""
                src="/social-icons1.svg"
              />
              <img
                className="w-8 relative h-8"
                alt=""
                src="/social-icons2.svg"
              />
              <img
                className="w-8 relative h-8"
                alt=""
                src="/social-icons3.svg"
              />
            </div>
          </div>
          <div className="overflow-hidden flex flex-row items-start justify-start gap-[30px] text-xl text-default-white lg:flex-row lg:flex-wrap">
            <div className="overflow-hidden flex flex-col items-start justify-start gap-[24px]">
              <div className="w-40 relative leading-[28px] font-semibold inline-block">
                Company
              </div>
              <div className="overflow-hidden flex flex-col items-start justify-start gap-[12px] text-sm text-neutral-silver">
                <div className="w-40 relative leading-[20px] inline-block">
                  About us
                </div>
                <div className="w-40 relative leading-[20px] inline-block">
                  Blog
                </div>
                <div className="w-40 relative leading-[20px] inline-block">
                  Contact us
                </div>
                <div className="w-40 relative leading-[20px] inline-block">
                  Pricing
                </div>
                <div className="w-40 relative leading-[20px] inline-block">
                  Testimonials
                </div>
              </div>
            </div>
            <div className="overflow-hidden flex flex-col items-start justify-start gap-[24px]">
              <div className="w-40 relative leading-[28px] font-semibold inline-block">
                Support
              </div>
              <div className="overflow-hidden flex flex-col items-start justify-start gap-[12px] text-sm text-neutral-silver">
                <div className="w-40 relative leading-[20px] inline-block">
                  Help center
                </div>
                <div className="w-40 relative leading-[20px] inline-block">
                  Terms of service
                </div>
                <div className="w-40 relative leading-[20px] inline-block">
                  Legal
                </div>
                <div className="w-40 relative leading-[20px] inline-block">
                  Privacy policy
                </div>
                <div className="w-40 relative leading-[20px] inline-block">
                  Status
                </div>
              </div>
            </div>
            <div className="overflow-hidden flex flex-col items-start justify-start gap-[24px]">
              <div className="w-40 relative leading-[28px] font-semibold inline-block">
                Stay up to date
              </div>
              <div className="w-[255px] relative h-10">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-default-white opacity-[0.2]" />
                <img
                  className="absolute h-[45%] w-[7.06%] top-[27.5%] right-[4.71%] bottom-[27.5%] left-[88.24%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/essential-icons--send.svg"
                />
                <input
                  className="[border:none] [outline:none] font-body-medium-body-2 text-sm bg-[transparent] absolute top-[22.5%] left-[4.71%] leading-[20px] text-text-gray-300 text-left"
                  placeholder="Your email address"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
