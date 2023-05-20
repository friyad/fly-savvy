import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { bookAFlight } from "../../../redux/Booking/actionTypes";

const generateUniqueId = () => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

const InputDataSection = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const bookingData = useSelector((state) => state.booking);

  // hanlde Book form on submit
  const onSubmit = (data) => {
    if (bookingData && bookingData.length >= 3) {
      alert("You have already reached the maximum booking limit");
      return;
    }

    dispatch(bookAFlight({ ...data, id: generateUniqueId() }));
  };

  return (
    <div className="mt-[160px] mx-4 md:mt-[160px] relative">
      <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="first-hero lws-inputform"
        >
          {/* From */}
          <div className="des-from">
            <p>Destination From</p>
            <div className="flex flex-row">
              <img src="/img/icons/Frame.svg" alt="" />

              <select
                className="outline-none px-2 py-2 w-full"
                name="from"
                id="lws-from"
                {...register("destinationFrom")}
                required
              >
                <option value="">Please Select</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Sylhet">Sylhet</option>
                <option value="Saidpur">Saidpur</option>
                <option value="Cox's-Bazar">Cox's Bazar</option>
              </select>
            </div>
          </div>

          {/* To */}
          <div className="des-from">
            <p>Destination To</p>
            <div className="flex flex-row">
              <img src="/img/icons/Frame.svg" alt="" />

              <select
                className="outline-none px-2 py-2 w-full"
                name="to"
                id="lws-to"
                {...register("destinationTo")}
                required
              >
                <option value="">Please Select</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Sylhet">Sylhet</option>
                <option value="Saidpur">Saidpur</option>
                <option value="Cox's-Bazar">Cox's Bazar</option>
              </select>
            </div>
          </div>

          {/* Date */}
          <div className="des-from">
            <p>Journey Date</p>
            <input
              type="date"
              className="outline-none px-2 py-2 w-full date"
              name="date"
              id="lws-date"
              {...register("journeyDate")}
              required
            />
          </div>

          {/* Guests */}
          <div className="des-from">
            <p>Guests</p>
            <div className="flex flex-row">
              <img src="/img/icons/Vector (1).svg" alt="" />

              <select
                className="outline-none px-2 py-2 w-full"
                name="guests"
                id="lws-guests"
                {...register("guests")}
                required
              >
                <option value="">Please Select</option>
                <option value={1}>1 Person</option>
                <option value={2}>2 Persons</option>
                <option value={3}>3 Persons</option>
                <option value={4}>4 Persons</option>
              </select>
            </div>
          </div>

          {/* Class */}
          <div className="des-from !border-r-0">
            <p>Class</p>
            <div className="flex flex-row">
              <img src="/img/icons/Vector (3).svg" alt="" />

              <select
                className="outline-none px-2 py-2 w-full"
                name="ticketClass"
                id="lws-ticketClass"
                {...register("classType")}
                required
              >
                <option value="">Please Select</option>
                <option value="Business">Business</option>
                <option value="Economy">Economy</option>
              </select>
            </div>
          </div>

          <button className="addCity" type="submit" id="lws-addCity">
            <svg
              width="15px"
              height="15px"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <span className="text-sm">Book</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputDataSection;
