import React from 'react'

function Inputfield({ id, type, label }) {
  return (
    <div className="w-full h-14 relative flex rounded-xl custom-input-shadow">
      <input
        required
        placeholder=" "
        className="peer w-full bg-transparent outline-none p-4 text-base rounded-2xl border-2 border-[var(--black)] focus:border-[3px] focus:border-[var(--black)]"
        id={id}
        type={type}
      />
      <label
        className="absolute top-1/2 translate-y-[-50%] bg-white left-4 px-2 peer-focus:top-0 peer-focus:left-3 font-light peer-focus:font-normal text-base peer-focus:text-sm peer-focus:text-[var(--black)] peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-[var(--black)] duration-150"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  )
}

export default Inputfield;