import React from 'react';
import Inputfield from '../../../components/inputfield';
import Button from '../../../components/button';

const services = ["SEO", "PPC", "Social Media", "Email", "Other"];

function Quote() {
  return (
    <section id={"quote"}>
      <div className="container mx-auto flex flex-col p-6 gap-y-8">
        <div className='grid grid-cols-12 gap-x-12 items-center'>
          <div className='col-span-12'>
            <div className='grid grid-cols-12 gap-x-8 items-center'>
              <div className='col-span-2'>
                <h2 className='bg-[var(--accent)] text-[40px] text-center font-semibold p-1 rounded-lg'>Quote</h2>
              </div>
              <div className='col-span-7'>
                <p>Ready to Grow? Let’s Talk.<br />Let us know about your goals, and we’ll tailor a strategy just for you.</p>
              </div>
            </div>
          </div>
        </div>
        <form className='grid place-items-center'>
          <div className="grid grid-cols-12 gap-6 max-w-4xl w-full">
            <div className="col-span-6">
              <Inputfield id={"name"} label={"Name"} type={"text"} />
            </div>
            <div className="col-span-6">
              <Inputfield id={"phone"} label={"Phone"} type={"tel"} />
            </div>
            <div className="col-span-12">
              <Inputfield id={"email"} label={"Email"} type={"email"} />
            </div>
            <div className="col-span-6">
              <Inputfield id={"company_name"} label={"Company"} type={"text"} />
            </div>
            <div className="col-span-6">
              <Inputfield id={"budget"} label={"Budget"} type={"number"} />
            </div>
            <div className="col-span-12">
              <div className='p-4 flex flex-col gap-4 border-2 rounded-2xl custom-input-shadow'>
                <p className='font-light'>What services are you interested in?</p>
                <div className='flex items-center gap-6'>
                  {services.map((item, ind) => (
                    <div key={ind} className='flex items-center gap-1'>
                      <input type="checkbox" id={item} className='w-[18px] h-[18px]' />
                      <label htmlFor={item}>{item}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-12">
              <div className="w-full h-24 relative flex rounded-xl custom-input-shadow">
                <textarea
                  required
                  placeholder=" "
                  rows={4}
                  className="peer w-full bg-transparent outline-none p-4 text-base rounded-2xl border-2 border-[var(--black)] focus:border-[3px] focus:border-[var(--black)]"
                  id={"message"}
                  type={"text"}
                />
                <label
                  className="absolute top-6 translate-y-[-50%] bg-white left-4 peer-focus:top-0 peer-focus:left-3 font-light peer-focus:font-normal text-base peer-focus:text-sm peer-focus:text-[var(--black)] peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-[var(--black)] px-2 duration-150"
                  htmlFor={"message"}
                >
                  Message
                </label>
              </div>
            </div>
            <div className="col-span-12">
              <Button title={"Submit"} fullWidth={true} />
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Quote;