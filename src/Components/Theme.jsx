import React, { useState } from "react";


const Theme = () => {

    const [isDarkTheme, setIsDarkTheme] = useState("🌙 Dark");

    return(
            <button
            className=" text-black bg-green-200 w-22 rounded-lg"
            onClick={() => {
              isDarkTheme === "☀️ Light" ? setIsDarkTheme("🌙 Dark") : setIsDarkTheme("☀️ Light");
            }}
          >
            {isDarkTheme}
          </button>
    )}

export default Theme;    

