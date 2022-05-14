import React, { Component } from "react";

function Main() {
  return (
    <div class="pl-4 grid grid-rows-7 grid-col-4 gap-1">
      <div>
        <h1
          class="justify-items-center text-[#697CAE] pt-40 text-6xl font-gotu
            content-center tracking-wide col-start-2 col-span-2"
        >
          Spotify-app.
        </h1>
        <h1 class="justify-items-center text-[#697CAE]">
          __________________________________________________________
        </h1>
      </div>
      <div>
        <p class="max-w-prose text-[#697CAE] grid justify-items-center">
          words words words words words words words words words words words
          words words words words words words words words words words words
          words words words words words words words words words words words
          words words words words words words
        </p>
      </div>
      <div>
        <button class="px-8 rounded-md bg-light-blue text-dark-blue">
          Log In
        </button>
      </div>
    </div>
  );
}

export default Main;
