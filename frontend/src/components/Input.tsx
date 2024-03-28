import { useState } from "react";

const sampleData = [
  {
    name: "First Baptist Church",
    street: "1234 Elm St",
    city: "Springfield",
    state: "IL",
    denomination: "Baptist",
    day: "Sunday",
    times: "9:00am, 11:00am",
    website: "www.example.com",
  },
  {
    name: "St. Mary's Catholic Church",
    street: "5678 Oak St",
    city: "Springfield",
    state: "IL",
    denomination: "Catholic",
    day: "Saturday",
    times: "5:00pm",
    website: "www.example.com",
  },
  {
    name: "Grace United Methodist Church",
    street: "5161 Gay St",
    city: "Alton",
    state: "IL",
    denomination: "Methodist",
    day: "Sunday",
    times: "9:00am, 4:00pm",
    website: "www.example.com",
  },
];

const Input = () => {
  const [zipCode, setZipCode] = useState<string>("");

  return (
    <div className="w-1/2 border-2 border-black border-opacity-5 rounded-xl h-screen block mx-auto shadow-lg">
      <input
        type="text"
        className="w-1/2 border-black border-2 border-opacity-5 shadow-inner bg-inherit rounded-xl h-10 p-4 m-4"
        placeholder="Zip Code"
        onChange={(e) => setZipCode(e.target.value)}
      ></input>
      <button
        className="border-2 border-black rounded-xl py-1 px-4 hover:bg-slate-300"
        onClick={() => {
          alert(zipCode);
        }}
      >
        Search
      </button>
      <br />
      {sampleData.map((church, index) => (
        <div key={index} className=" shadow-inner rounded-xl m-4 p-4 h-36">
          <h1 className="text-xl font-bold">{church.name}</h1>
          <h2>{church.street}</h2>
          <h3>
            {church.city}, {church.state}
          </h3>
          <p>
            {church.day} {church.times}
          </p>
          <a
            href={church.website}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:underline"
          >
            {church.website}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Input;
