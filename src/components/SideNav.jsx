import React from "react";

const SideNav = () => {
  return (
    <>
      <div>
        <div className="fixed flex min-h-screen w-[251px] flex-col justify-between border-r-[1px] border-[#282a32] bg-[#161821]">
          <div>
            <div className="flex h-[52px] w-full items-center justify-start border-b-[1px] border-[#282a32]">
              <div>
                <img
                  className="ml-[17px] w-[26px] py-[9px]"
                  src="https://www.mintscan.io/assets/icons/cosmostation.png"
                  alt=""
                />
              </div>
              <div className="py-[9px] pl-[14px] text-[16px] font-extrabold tracking-widest text-[#dde0e4]">
                MINTSCAN
              </div>
            </div>
            <div className="p-2 pt-3">
              <div className="mb-1 flex cursor-pointer items-center justify-between px-3 py-[13px] text-[#8d98a5] transition duration-150 ease-out hover:rounded-md hover:bg-[#1c1d2a] hover:text-[#dde0e4] hover:ease-in">
                <div className="text-[14px] font-semibold">EXPLORER</div>
                <div>
                  <svg
                    className="fill-[#8e9096] hover:fill-[#dde0e4]"
                    viewBox="0 0 24 24"
                    style={{width:"01.3rem", height: "1.3rem"}}
                  >
                    <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"></path>
                  </svg>
                </div>
              </div>
              <div className="border-b-[1px] border-[#282a32]"></div>
              <div className="mb-1 mt-1 flex cursor-pointer flex-col items-center px-1 py-[13px] text-[#8d98a5] transition duration-200 ease-out hover:rounded-md hover:bg-[#1c1d2a] hover:ease-in">
                <div className="mb-3 flex w-full items-center justify-between px-2 hover:text-[#dde0e4]">
                  <div className="text-[14px] font-semibold">ANALYTICS</div>
                  <div>
                    <svg
                      className="fill-[#8e9096] hover:fill-[#dde0e4]"
                      viewBox="0 0 24 24"
                      style={{width:"01.3rem", height: "1.3rem"}}
                    >
                      <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
                  <div className="h-[18px] w-[18px]">
                    <svg className="fill-[#8e9096]" viewBox="0 0 24 24">
                      <path d="M16,11.78L20.24,4.45L21.97,5.45L16.74,14.5L10.23,10.75L5.46,19H22V21H2V3H4V17.54L9.5,8L16,11.78Z"></path>
                    </svg>
                  </div>
                  <div className="ml-[9px] text-[14px] font-semibold text-[#dde0e4]">
                    Market
                  </div>
                </div>
                <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
                  <div className="h-[18px] w-[18px]">
                    <svg
                      className="fill-[#8e9096]"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.0056 0.299805L16.8009 3.06835L19.4509 4.64231C19.8158 4.3906 20.2583 4.24321 20.7352 4.24321C21.986 4.24321 23 5.2572 23 6.50802C23 7.45903 22.4138 8.27314 21.5831 8.60877V16.8884L16.7944 19.6532L14.2549 21.1474C14.2633 21.2268 14.2676 21.3074 14.2676 21.389C14.2676 22.6398 13.2536 23.6538 12.0028 23.6538C10.752 23.6538 9.738 22.6398 9.738 21.389C9.738 21.3081 9.74225 21.2281 9.75053 21.1494L7.21692 19.6532L2.4282 16.8884V8.6133C1.59148 8.28051 1 7.46334 1 6.50802C1 5.2572 2.01399 4.24321 3.26481 4.24321C3.74205 4.24321 4.18482 4.39082 4.54995 4.64288L7.2169 3.06454L12.0056 0.299805ZM16.1832 18.5947L13.7927 20.0012C13.3784 19.4676 12.7307 19.1242 12.0028 19.1242C11.2744 19.1242 10.6262 19.4681 10.212 20.0024L7.83324 18.5977L3.65044 16.1828V8.74013C4.71757 8.55708 5.52962 7.62738 5.52962 6.50802C5.52962 6.18369 5.46145 5.87529 5.33865 5.59636L7.83089 4.12142L12.0056 1.71112L16.18 4.12119L18.6618 5.59524C18.5387 5.87447 18.4704 6.18326 18.4704 6.50802C18.4704 7.63133 19.2882 8.56363 20.3609 8.74204V16.1828L16.1832 18.5947ZM12.0014 4.89209L17.2194 7.90468L11.9996 11.3846L6.78147 7.90583L12.0014 4.89209ZM12.6995 12.3602L17.6054 9.08958V14.5984L12.6995 17.4308L12.6995 12.3602ZM11.4995 12.4934V17.5441L6.39746 14.5984V9.09204L11.4995 12.4934Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-[9px] text-[14px] font-semibold text-[#dde0e4]">
                    Network
                  </div>
                </div>
                <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
                  <div className="h-[18px] w-[18px]">
                    <svg
                      className="fill-[#8e9096]"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.6896 2.29289C14.0801 1.90237 14.7132 1.90237 15.1038 2.29289L20.5816 7.77068C20.9721 8.1612 20.9721 8.79436 20.5816 9.18489L14.0318 15.7347C13.9192 15.8472 13.7666 15.9104 13.6075 15.9104H10.3736C10.2145 15.9104 10.0619 15.8472 9.94936 15.7347L5.80567 11.591C5.41515 11.2005 5.41515 10.5673 5.80567 10.1768L13.6896 2.29289ZM3 13.8781H7.36852V15.4145H6.2115C5.75479 15.4145 5.38456 15.7847 5.38456 16.2414C5.38456 16.6981 5.75479 17.0684 6.2115 17.0684H17.7886C18.2454 17.0684 18.6156 16.6981 18.6156 16.2414C18.6156 15.7847 18.2454 15.4145 17.7886 15.4145H16.6326V13.8781H21C21.5523 13.8781 22 14.3259 22 14.8781V21.4496C22 22.0019 21.5523 22.4496 21 22.4496H3C2.44772 22.4496 2 22.0019 2 21.4496V14.8781C2 14.3259 2.44772 13.8781 3 13.8781Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-[9px] text-[14px] font-semibold text-[#dde0e4]">
                    Governance
                  </div>
                </div>
              </div>
              <div className="border-b-[1px] border-[#282a32]"></div>
              <div className="mb-1 mt-1 flex cursor-pointer flex-col items-center px-1 py-[13px] text-[#8d98a5] transition duration-200 ease-out hover:rounded-md hover:bg-[#1c1d2a] hover:ease-in">
                <div className="mb-3 flex w-full items-center justify-between px-2 hover:text-[#dde0e4]">
                  <div className="text-[14px] font-semibold">VISUALIZATIONS</div>
                  <div>
                    <svg
                      className="fill-[#8d98a5] hover:fill-[#dde0e4]"
                      viewBox="0 0 24 24"
                      style={{width:"01.3rem", height: "1.3rem"}}
                    >
                      <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
                  <div className="h-[18px] w-[18px]">
                    <svg
                      className="fill-[#8e9096]"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.0056 0.299805L16.8009 3.06835L19.4509 4.64231C19.8158 4.3906 20.2583 4.24321 20.7352 4.24321C21.986 4.24321 23 5.2572 23 6.50802C23 7.45903 22.4138 8.27314 21.5831 8.60877V16.8884L16.7944 19.6532L14.2549 21.1474C14.2633 21.2268 14.2676 21.3074 14.2676 21.389C14.2676 22.6398 13.2536 23.6538 12.0028 23.6538C10.752 23.6538 9.738 22.6398 9.738 21.389C9.738 21.3081 9.74225 21.2281 9.75053 21.1494L7.21692 19.6532L2.4282 16.8884V8.6133C1.59148 8.28051 1 7.46334 1 6.50802C1 5.2572 2.01399 4.24321 3.26481 4.24321C3.74205 4.24321 4.18482 4.39082 4.54995 4.64288L7.2169 3.06454L12.0056 0.299805ZM16.1832 18.5947L13.7927 20.0012C13.3784 19.4676 12.7307 19.1242 12.0028 19.1242C11.2744 19.1242 10.6262 19.4681 10.212 20.0024L7.83324 18.5977L3.65044 16.1828V8.74013C4.71757 8.55708 5.52962 7.62738 5.52962 6.50802C5.52962 6.18369 5.46145 5.87529 5.33865 5.59636L7.83089 4.12142L12.0056 1.71112L16.18 4.12119L18.6618 5.59524C18.5387 5.87447 18.4704 6.18326 18.4704 6.50802C18.4704 7.63133 19.2882 8.56363 20.3609 8.74204V16.1828L16.1832 18.5947ZM17.6054 8.12753L12.0014 4.89209L6.39746 8.12753V14.5984L12.0014 17.8339L17.6054 14.5984V8.12753Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-[9px] text-[14px] font-semibold text-[#dde0e4]">
                    IBC Network
                  </div>
                </div>
                <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
                  <div className="h-[18px] w-[18px]">
                    <svg
                      className="fill-[#8e9096]"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2 5.25C2 4.55964 2.55964 4 3.25 4H20.75C21.4404 4 22 4.55964 22 5.25V7.5H2V5.25ZM2 8.5H22V18.75C22 19.4404 21.4404 20 20.75 20H3.25C2.55964 20 2 19.4404 2 18.75V8.5ZM7.53033 12.5303C7.82322 12.2374 7.82322 11.7626 7.53033 11.4697C7.23744 11.1768 6.76256 11.1768 6.46967 11.4697L5.01726 12.9221C4.42194 13.5174 4.42194 14.4826 5.01726 15.0779L6.46967 16.5303C6.76256 16.8232 7.23744 16.8232 7.53033 16.5303C7.82322 16.2374 7.82322 15.7626 7.53033 15.4697L6.07792 14.0173C6.07456 14.0139 6.07327 14.0115 6.0725 14.0096C6.07153 14.0072 6.07077 14.0039 6.07077 14C6.07077 13.9961 6.07153 13.9928 6.0725 13.9904C6.07327 13.9885 6.07456 13.9861 6.07792 13.9827L7.53033 12.5303ZM16.4697 16.5303C16.1768 16.2374 16.1768 15.7626 16.4697 15.4697L17.9221 14.0173C17.9254 14.0139 17.9267 14.0115 17.9275 14.0096C17.9285 14.0072 17.9292 14.0039 17.9292 14C17.9292 13.9961 17.9285 13.9928 17.9275 13.9904C17.9267 13.9885 17.9254 13.9861 17.9221 13.9827L16.4697 12.5303C16.1768 12.2374 16.1768 11.7626 16.4697 11.4697C16.7626 11.1768 17.2374 11.1768 17.5303 11.4697L18.9827 12.9221C19.5781 13.5174 19.5781 14.4826 18.9827 15.0779L17.5303 16.5303C17.2374 16.8232 16.7626 16.8232 16.4697 16.5303ZM13.7115 11.2372C13.8425 10.8442 13.6301 10.4195 13.2372 10.2885C12.8442 10.1575 12.4195 10.3699 12.2885 10.7628L10.2885 16.7628C10.1575 17.1558 10.3699 17.5805 10.7628 17.7115C11.1558 17.8425 11.5805 17.6301 11.7115 17.2372L13.7115 11.2372Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-[9px] text-[14px] font-semibold text-[#dde0e4]">
                    Dev Activity
                  </div>
                </div>
                <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
                  <div className="h-[18px] w-[18px]">
                    <svg
                      className="fill-[#8e9096]"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="2"
                        y="4.12402"
                        width="20"
                        height="12.8571"
                        rx="1.11111"
                      ></rect>
                      <rect
                        x="7.71387"
                        y="18.4468"
                        width="8.57143"
                        height="1.42856"
                        rx="0.714282"
                      ></rect>
                      <rect
                        x="11.2861"
                        y="16.8916"
                        width="1.42857"
                        height="1.55544"
                      ></rect>
                    </svg>
                  </div>
                  <div className="ml-[9px] text-[14px] font-semibold text-[#dde0e4]">
                    Heartbeat
                  </div>
                </div>
                <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
                  <div className="h-[18px] w-[18px]">
                    <svg
                      className="fill-[#8e9096]"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 3.25C2 2.55964 2.55964 2 3.25 2H8.62692C9.31728 2 9.87692 2.55964 9.87692 3.25V8.75C9.87692 9.44036 9.31728 10 8.62692 10H3.25C2.55964 10 2 9.44036 2 8.75V3.25Z"></path>
                      <path d="M17.9077 20.25C17.9077 19.5596 18.4674 19 19.1577 19H20.75C21.4404 19 22 19.5596 22 20.25V20.75C22 21.4404 21.4404 22 20.75 22H19.1577C18.4674 22 17.9077 21.4404 17.9077 20.75V20.25Z"></path>
                      <path d="M18 10.25C18 9.55964 18.5596 9 19.25 9H20.6885C21.3788 9 21.9385 9.55964 21.9385 10.25V15.75C21.9385 16.4404 21.3788 17 20.6885 17H19.25C18.5596 17 18 16.4404 18 15.75V10.25Z"></path>
                      <path d="M2 13.25C2 12.5596 2.55964 12 3.25 12H8.62692C9.31728 12 9.87692 12.5596 9.87692 13.25V20.75C9.87692 21.4404 9.31728 22 8.62692 22H3.25C2.55964 22 2 21.4404 2 20.75V13.25Z"></path>
                      <path d="M12 10.25C12 9.55964 12.5596 9 13.25 9H14.6885C15.3788 9 15.9385 9.55964 15.9385 10.25V20.75C15.9385 21.4404 15.3788 22 14.6885 22H13.25C12.5596 22 12 21.4404 12 20.75V10.25Z"></path>
                      <path d="M12 3.25C12 2.55964 12.5596 2 13.25 2H20.5962C21.2865 2 21.8462 2.55964 21.8462 3.25V5.75C21.8462 6.44036 21.2865 7 20.5962 7H13.25C12.5596 7 12 6.44036 12 5.75V3.25Z"></path>
                    </svg>
                  </div>
                  <div className="ml-[9px] text-[14px] font-semibold text-[#dde0e4]">
                    Dominance
                  </div>
                </div>
                <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
                  <div className="h-[18px] w-[18px]">
                    <svg
                      className="fill-[#8e9096]"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13,2.05C18.05,2.55 22,6.82 22,12C22,13.45 21.68,14.83 21.12,16.07L18.5,14.54C18.82,13.75 19,12.9 19,12C19,8.47 16.39,5.57 13,5.08V2.05M12,19C14.21,19 16.17,18 17.45,16.38L20.05,17.91C18.23,20.39 15.3,22 12,22C6.47,22 2,17.5 2,12C2,6.81 5.94,2.55 11,2.05V5.08C7.61,5.57 5,8.47 5,12A7,7 0 0,0 12,19M12,6A6,6 0 0,1 18,12C18,14.97 15.84,17.44 13,17.92V14.83C14.17,14.42 15,13.31 15,12A3,3 0 0,0 12,9L11.45,9.05L9.91,6.38C10.56,6.13 11.26,6 12,6M6,12C6,10.14 6.85,8.5 8.18,7.38L9.72,10.05C9.27,10.57 9,11.26 9,12C9,13.31 9.83,14.42 11,14.83V17.92C8.16,17.44 6,14.97 6,12Z"></path>
                    </svg>
                  </div>
                  <div className="ml-[9px] text-[14px] font-semibold text-[#dde0e4]">
                    Journey
                  </div>
                </div>
                <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
                  <div className="h-[18px] w-[18px]">
                    <svg
                      className="fill-[#8e9096]"
                      viewBox="0 0 24 24"
                    >
                      <path d="M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z"></path>
                    </svg>
                  </div>
                  <div className="ml-[9px] text-[14px] font-semibold text-[#dde0e4]">
                    Validators
                  </div>
                </div>
              </div>
              <div className="border-b-[1px] border-[#282a32]"></div>
              <div className="mb-1 mt-1 flex cursor-pointer flex-col items-center px-1 py-[13px] text-[#8d98a5] transition duration-200 ease-out hover:rounded-md hover:bg-[#1c1d2a] hover:ease-in">
                <div className="mb-3 flex w-full items-center justify-between px-2 hover:text-[#dde0e4]">
                  <div className="text-[14px] font-semibold">INFORMATION</div>
                  <div>
                    <svg
                      className="fill-[#8e9096] hover:fill-[#dde0e4]"
                      viewBox="0 0 24 24"
                      style={{width:"01.3rem", height: "1.3rem"}}
                    >
                      <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
                  <div className="h-[18px] w-[18px]">
                    <svg
                      className="fill-[#8e9096]"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 9.34784 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2C9.34784 2 6.8043 3.05357 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C6.8043 20.9464 9.34784 22 12 22ZM11 7.625C11 7.27982 11.2798 7 11.625 7H12.375C12.7202 7 13 7.27982 13 7.625V8.375C13 8.72018 12.7202 9 12.375 9H11.625C11.2798 9 11 8.72018 11 8.375V7.625ZM11.625 10C11.2798 10 11 10.2798 11 10.625V16.375C11 16.7202 11.2798 17 11.625 17H12.375C12.7202 17 13 16.7202 13 16.375V10.625C13 10.2798 12.7202 10 12.375 10H11.625Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-[9px] text-[14px] font-semibold text-[#dde0e4]">
                    Notice
                  </div>
                </div>
                <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
                  <div className="h-[18px] w-[18px]">
                    <svg
                      className="fill-[#8e9096]"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.72013 3C8.75125 3 7.96583 3.80589 7.96583 4.8V18.6279C7.96446 19.5839 7.53741 20.4376 6.86872 21H20.2457C21.2146 21 22 20.1941 22 19.2V4.8C22 3.80589 21.2146 3 20.2457 3H9.72013ZM2 6.6H7.0887V18.6232C7.0887 19.8226 6.14113 20.7949 4.97221 20.7949H4.10861C3.00164 20.7949 2.09313 19.9229 2 18.8118V6.6ZM11.1167 9.47402C11.1167 9.02328 11.4821 8.65789 11.9328 8.65789H18.6339C19.0846 8.65789 19.45 9.02328 19.45 9.47402C19.45 9.92475 19.0846 10.2901 18.6339 10.2901H11.9328C11.4821 10.2901 11.1167 9.92475 11.1167 9.47402ZM11.9328 13.7102C11.4821 13.7102 11.1167 14.0756 11.1167 14.5264C11.1167 14.9771 11.4821 15.3425 11.9328 15.3425H18.6339C19.0846 15.3425 19.45 14.9771 19.45 14.5264C19.45 14.0756 19.0846 13.7102 18.6339 13.7102H11.9328Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-[9px] text-[14px] font-semibold text-[#dde0e4]">
                    Blog
                  </div>
                </div>
                <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
                  <div className="h-[18px] w-[18px]">
                    <svg
                      className="fill-[#8e9096]"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="5.41642"
                        height="5.41654"
                        rx="1.24998"
                      ></rect>
                      <rect
                        x="16.5835"
                        y="2"
                        width="5.41642"
                        height="5.41654"
                        rx="1.24998"
                      ></rect>
                      <rect
                        x="9.29248"
                        y="2"
                        width="5.41642"
                        height="5.41654"
                        rx="1.24998"
                      ></rect>
                      <rect
                        x="2"
                        y="9.2915"
                        width="5.41642"
                        height="5.41654"
                        rx="1.24998"
                      ></rect>
                      <rect
                        x="16.5835"
                        y="9.2915"
                        width="5.41642"
                        height="5.41654"
                        rx="1.24998"
                      ></rect>
                      <rect
                        x="9.29248"
                        y="9.2915"
                        width="5.41642"
                        height="5.41654"
                        rx="1.24998"
                      ></rect>
                      <rect
                        x="2"
                        y="16.5835"
                        width="5.41642"
                        height="5.41654"
                        rx="1.24998"
                      ></rect>
                      <rect
                        x="16.5835"
                        y="16.5835"
                        width="5.41642"
                        height="5.41654"
                        rx="1.24998"
                      ></rect>
                      <rect
                        x="9.29248"
                        y="16.5835"
                        width="5.41642"
                        height="5.41654"
                        rx="1.24998"
                      ></rect>
                    </svg>
                  </div>
                  <div className="ml-[9px] text-[14px] font-semibold text-[#dde0e4]">
                    Applications
                  </div>
                </div>
                <div className="flex w-full items-center rounded-md px-2 py-2 hover:bg-[#252632]">
                  <div className="h-[18px] w-[18px]">
                    <svg
                      className="fill-[#8e9096]"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21,3H3C1.89,3 1,3.89 1,5V17A2,2 0 0,0 3,19H8V21H16V19H21A2,2 0 0,0 23,17V5C23,3.89 22.1,3 21,3M21,17H3V5H21M16,11L9,15V7"></path>
                    </svg>
                  </div>
                  <div className="ml-[9px] text-[14px] font-semibold text-[#dde0e4]">
                    Release Note
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[52px] w-full items-center justify-end border-t-[1px] border-[#282a32]">
            <svg
              className="mr-4 cursor-pointer fill-[#dde0e4]"
              viewBox="0 0 24 24"
              style={{width:"01.3rem", height: "1.3rem"}}
            >
              <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path>
            </svg>
          </div>
        </div>
        <div className="ml-[252px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          voluptatem eos sit assumenda consequuntur aut iusto exercitationem
          deserunt eaque magnam itaque voluptates laboriosam. Ipsa vero nobis,
          rerum quia error minima aliquam recusandae a? Repellendus cumque, eos
          quos porro quisquam dicta aliquam tempore quaerat consequatur non at
          earum facere quo aliquid? Fugiat sit similique ipsam magnam laboriosam
          quas nesciunt vitae consequuntur accusamus molestias amet voluptatem
          totam perferendis exercitationem iure, nisi autem cum rem? Odio optio
          amet mollitia facere, aperiam natus? Ipsum iusto odit earum
          reiciendis, tenetur sunt illo eius deserunt ducimus nesciunt deleniti
          porro aliquid consectetur adipisci esse doloribus quo nemo voluptatem
          officia qui? Autem unde voluptates aspernatur neque ratione. Iure
          ipsum maxime itaque voluptatibus vitae, nemo sit amet magnam corporis
          officiis accusamus consequatur.
        </div>
      </div>
    </>
  );
};

export default SideNav;
