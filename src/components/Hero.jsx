import React from "react";

const Hero = () => {
  return (
    <>
      <section id="home" className="pt-36 dark:bg-dark">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="self-center w-full px-4 lg:w-1/2">
              <h1 className="text-base font-semibold md:text-xl">
                <span className="text-hero">Hi, There!👋</span>
                <span className="block mt-1 text-4xl font-bold text-dark dark:text-white lg:text-5xl animate__animated animate__jello">
                  Yayan Rif 'an A.
                </span>
              </h1>
              <h2 className="mt-2 mb-5 text-lg font-medium text-secondary lg:text-2xl">
                informatics engineering student ||{" "}
                <span className="text-title" style={{ color: "#FFA33C" }}>
                  Full Stack developer
                </span>
              </h2>

              <div className="flex items-center mb-5">
                <a
                  href="https://www.instagram.com/yayan_gantenggg/"
                  target="_blank"
                  className="flex items-center justify-center mr-3 border rounded-full icon w-9 h-9 border-slate-300 text-slate-300 animate__animated animate__lightSpeedInRight"
                >
                  <svg
                    role="img"
                    width="20"
                    viewBox="0 0 24 24"
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Instagram</title>
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </a>

                <a
                  href="https://web.facebook.com/yayan.rifan.96"
                  target="_blank"
                  className="flex items-center justify-center mr-3 border rounded-full icon w-9 h-9 border-slate-300 text-slate-300 animate__animated animate__lightSpeedInRight animate__fast"
                >
                  <svg
                    role="img"
                    className="fill-current"
                    width="20"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Facebook</title>
                    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                  </svg>
                </a>

                <a
                  href="https://github.com/Yayan45"
                  target="_blank"
                  className="flex items-center justify-center mr-3 border rounded-full icon w-9 h-9 border-slate-300 text-slate-300 animate__animated animate__lightSpeedInRight animate__slow"
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    width="20"
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>GitHub</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/in/yayan-rif-an-awaludin-b41001254/"
                  target="_blank"
                  className="flex items-center justify-center mr-3 border rounded-full h-9 w-9 border-slate-300 text-slate-300 icon animate__animated animate__lightSpeedInRight animate__slow"
                >
                  <svg
                    role="img"
                    width="20"
                    className="fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>LinkedIn</title>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>

              <a
                href="/img/cv.pdf"
                target="_blank"
                className="px-8 py-2 text-base font-semibold text-white transition duration-300 ease-in-out rounded-full bg-hero hover:opacity-80 hover:shadow-lg"
              >
                Download cv
              </a>
            </div>
            <div className="self-end w-full px-4 lg:w-1/2">
              <div className="relative mt-10 lg:right-0 lg:mt-9">
                <img src="/img/saya.png" className="relative z-10 mx-auto" />
                <span className="absolute bottom-0 -translate-x-1/2 left-1/2 md:scale-125">
                  <svg
                    className="animate__animated animate__infinite animate__tada animate__slower"
                    width="400"
                    height="400"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#FFA33C"
                      d="M47.4,-51C59.2,-35.6,65.1,-17.8,63.4,-1.7C61.7,14.5,52.6,28.9,40.8,36.6C28.9,44.2,14.5,45,-2,47C-18.4,49,-36.8,52.1,-45.4,44.5C-53.9,36.8,-52.5,18.4,-51.2,1.3C-49.9,-15.8,-48.7,-31.7,-40.2,-47.1C-31.7,-62.4,-15.8,-77.3,1,-78.3C17.8,-79.2,35.6,-66.3,47.4,-51Z"
                      transform="translate(100 100) scale(1.1)"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="mt-12 border rounded-lg">
            <h1 className="mt-4 tracking-widest text-center text-dark dark:text-white">
              Tech Stack
            </h1>
            <div className="flex flex-wrap items-center justify-center max-w-md p-4 mx-auto md:max-w-4xl">
              <img src="/img/html.png" className="w-20 md:w-40" />
              <img
                src="/img/css.png"
                className="w-20 -ml-4 md:w-40 md:-ml-12"
              />
              <img src="/img/js.png" className="w-12 md:w-24" />
              <img
                src="/img/tailwind.png"
                className="w-16 ml-2 md:w-30 md:ml-8"
              />
              <img src="/img/react.png" className="w-20 md:w-40" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
