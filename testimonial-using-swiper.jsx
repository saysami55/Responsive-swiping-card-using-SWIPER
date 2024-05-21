return (
    <div className="px-[45px] lg:px-[] md:mt-[200px] mt-[80px] 2xl:mx-auto 2xl:w-[1440px]">
      <h1 className="text-[24px] mx-auto w-[80%] lg:w-full md:text-[48px] text-blck text-center font-bold">
        What
        <span
          style={{
            fontWeight: 800,
            background: "linear-gradient(to bottom right, #8B396E, #38346C)",
            WebkitTextFillColor: "transparent",
            WebkitBackgroundClip: "text",
            textAlign: "center",
            // marginLeft: "10px",
          }}
        >
          &nbsp;learners
        </span>
        <span>&nbsp;say about</span>
        <span
          style={{
            fontWeight: 800,
            background: "linear-gradient(to bottom right, #8B396E, #38346C)",
            WebkitTextFillColor: "transparent",
            WebkitBackgroundClip: "text",
            textAlign: "center",
            // marginLeft: "10px",
          }}
        >
          &nbsp;us
        </span>
      </h1>
      <hr className="mx-auto max-w-[18%]  mt-1 pb-[5px] lg:pb-[50px]"></hr>

      

      <Swiper
        spaceBetween={30}
        
  breakpoints={{
    0: {
      slidesPerView: 1,
    },
    865:{
      slidesPerView:2
    },
    1200:{
      slidesPerView:3
    }
  }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mx-auto max-w-[100%]"
        style={{
          "--swiper-pagination-color": "#8B396E",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "16px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
      >
        {testimonial?.map((data, index) => {
          // Determine the background color based on even or odd index
          const bgColor = index % 2 === 0 ? 'bg-[#912A6C]' : 'bg-[#2E2A6E]'; // Example: Dark magenta for even, white for odd
          /* Frame 1000000986 */

          /* Auto layout */
          return (
            <SwiperSlide key={data.id}>
              <div className="flex items-center justify-center gap-[18px] mt-[24px] mb-[55px] w-full ml-[4px]">
                <div className={` 
            border-[0.5px] rounded-[20px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]
            w-[95%] sm:max-w-[227px] md:max-w-[500px] lg:max-w-[405px]
            h-auto 
         
            ${bgColor} // Apply dynamic background color
          `}
                >
                  <Image
                    width={5000}
                    height={5000}
                    className="w-[38px] h-[38px] mt-[-15px] ml-[-5px] lg:w-[58px] lg:h-[58px] lg:mt[-25px] lg:ml-[-15px]"
                    src={CommaSVG}
                    alt="user"
                  />
                  <div className={` px-[10px] py-[20px] lg:px-[20px] lg:py-[20px]`}>
                    <p className={`${openSans.className} text-[12px] px-[5px] py-[5px] lg:text-[20px] text-white italic line-clamp-6`}>
                      Sami Infotech is one of the best Academy to learn Tally, GST, Basic of Computers. Faculty of this institute are very cooperative, polite and humble with their students. The best part of this institute is they provide online learning facilities.
                    </p>
                  </div>
                  <div className="flex justify-center px-[20px]">

                    <Image
                      width={5000}
                      height={5000}
                      className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] lg:w-[75px] lg:h-[75px] rounded-full object-cover border-[2px] border-[solid] border-[white]"
                      src={`${imageBaseUrl}/${data.student_img}`}
                      alt="user"
                    />

                    <div className="pl-[10px] lg:pl-[15px]">
                      <h1 className={`
                      ${montserrat.className} 
                      text-[12px] md:text-[18px] 
                      text-white text-left font-bold 
                      line-clamp-1 
                      w-[140px]`}>
                        {" "}
                        {data.student_name}
                      </h1>
                      <p className={`${openSans.className} 
                      text-[10px] md:text-[14px] 
                      text-white  text-left line-clamp-1 w-[140px]`}>
                        {data.subtitle}
                      </p>
                    </div>


                  </div>
                  <Image
                    width={5000}
                    height={5000}
                    className="w-[38px] h-[38px] ml-auto mb-[-15px] mr-[-5px] lg:w-[58px] lg:h-[58px] lg:mb-[-25px] lg:mr-[-15px]"
                    src={reverseComma}
                    alt="user"
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

    </div>
  );