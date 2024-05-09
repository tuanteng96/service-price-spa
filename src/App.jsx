import { useState } from "react";

function App() {
  return (
    <div className="w-full min-h-full overflow-auto">
      <div className="max-w-4xl min-h-full mx-auto bg-[#f3ecde]">
        <div className="bg-[#ff898d] flex items-center justify-center py-14">
          <img src="https://cser.vn/app/images/logo-app.png" alt="" />
        </div>
        <div className="p-16">
          <div className="mb-8 last:mb-0">
            <div className="text-[#ff898d] text-[22px] font-semibold border-b-[2px] border-[#ff898d] leading-9 mb-5">
              Combo Services
            </div>
            <div>
              <div className="flex justify-between relative mb-4 last:mb-0 font-medium">
                <div className="bg-[#f3ecde] relative z-10 pr-3">
                  1. Queen's Head and Foot Massage (40Mins)
                </div>
                <div className="bg-[#f3ecde] relative z-10 pl-3">$79</div>
                <div className="absolute w-full h-[1px] border-dotted border-b-[2px] border-black left-0 bottom-1"></div>
              </div>
              <div className="flex justify-between relative mb-4 last:mb-0 font-medium">
                <div className="bg-[#f3ecde] relative z-10 pr-3">
                  2. Queen's Neck, Shoulder and Foot Message (50Mins)
                </div>
                <div className="bg-[#f3ecde] relative z-10 pl-3">$99</div>
                <div className="absolute w-full h-[1px] border-dotted border-b-[2px] border-black left-0 bottom-1"></div>
              </div>
              <div className="flex justify-between relative mb-4 last:mb-0 font-medium">
                <div className="bg-[#f3ecde] relative z-10 pr-3">
                  3. Queen's Head, Neck, Shoulder and Facial (60Mins)
                </div>
                <div className="bg-[#f3ecde] relative z-10 pl-3">$129</div>
                <div className="absolute w-full h-[1px] border-dotted border-b-[2px] border-black left-0 bottom-1"></div>
              </div>
            </div>
          </div>
          <div className="mb-8 last:mb-0">
            <div className="text-[#ff898d] text-[22px] font-semibold border-b-[2px] border-[#ff898d] leading-9 mb-5">
              Head
            </div>
            <div>
              <div className="flex justify-between relative mb-4 last:mb-0 font-medium">
                <div className="bg-[#f3ecde] relative z-10 pr-3">
                  1. Queen's Head and Foot Massage (40Mins)
                </div>
                <div className="bg-[#f3ecde] relative z-10 pl-3">$79</div>
                <div className="absolute w-full h-[1px] border-dotted border-b-[2px] border-black left-0 bottom-1"></div>
              </div>
              <div className="flex justify-between relative mb-4 last:mb-0 font-medium">
                <div className="bg-[#f3ecde] relative z-10 pr-3">
                  2. Queen's Neck, Shoulder and Foot Message (50Mins)
                </div>
                <div className="bg-[#f3ecde] relative z-10 pl-3">$99</div>
                <div className="absolute w-full h-[1px] border-dotted border-b-[2px] border-black left-0 bottom-1"></div>
              </div>
              <div className="flex justify-between relative mb-4 last:mb-0 font-medium">
                <div className="bg-[#f3ecde] relative z-10 pr-3">
                  3. Queen's Head, Neck, Shoulder and Facial (60Mins)
                </div>
                <div className="bg-[#f3ecde] relative z-10 pl-3">$129</div>
                <div className="absolute w-full h-[1px] border-dotted border-b-[2px] border-black left-0 bottom-1"></div>
              </div>
            </div>
          </div>
          <div className="mb-8 last:mb-0">
            <div className="text-[#ff898d] text-[22px] font-semibold border-b-[2px] border-[#ff898d] leading-9 mb-5">
              Foot and Leg Massage
            </div>
            <div>
              <div className="flex justify-between relative mb-4 last:mb-0 font-medium">
                <div className="bg-[#f3ecde] relative z-10 pr-3">
                  1. Queen's Head and Foot Massage (40Mins)
                </div>
                <div className="bg-[#f3ecde] relative z-10 pl-3">$79</div>
                <div className="absolute w-full h-[1px] border-dotted border-b-[2px] border-black left-0 bottom-1"></div>
              </div>
              <div className="flex justify-between relative mb-4 last:mb-0 font-medium">
                <div className="bg-[#f3ecde] relative z-10 pr-3">
                  2. Queen's Neck, Shoulder and Foot Message (50Mins)
                </div>
                <div className="bg-[#f3ecde] relative z-10 pl-3">$99</div>
                <div className="absolute w-full h-[1px] border-dotted border-b-[2px] border-black left-0 bottom-1"></div>
              </div>
              <div className="flex justify-between relative mb-4 last:mb-0 font-medium">
                <div className="bg-[#f3ecde] relative z-10 pr-3">
                  3. Queen's Head, Neck, Shoulder and Facial (60Mins)
                </div>
                <div className="bg-[#f3ecde] relative z-10 pl-3">$129</div>
                <div className="absolute w-full h-[1px] border-dotted border-b-[2px] border-black left-0 bottom-1"></div>
              </div>
            </div>
          </div>
          <div className="mb-8 last:mb-0">
            <div className="text-[#ff898d] text-[22px] font-semibold border-b-[2px] border-[#ff898d] leading-9 mb-5">
              Whole body massage
            </div>
            <div>
              <div className="flex justify-between relative mb-4 last:mb-0 font-medium">
                <div className="bg-[#f3ecde] relative z-10 pr-3">
                  1. Queen's Head and Foot Massage (40Mins)
                </div>
                <div className="bg-[#f3ecde] relative z-10 pl-3">$79</div>
                <div className="absolute w-full h-[1px] border-dotted border-b-[2px] border-black left-0 bottom-1"></div>
              </div>
              <div className="flex justify-between relative mb-4 last:mb-0 font-medium">
                <div className="bg-[#f3ecde] relative z-10 pr-3">
                  2. Queen's Neck, Shoulder and Foot Message (50Mins)
                </div>
                <div className="bg-[#f3ecde] relative z-10 pl-3">$99</div>
                <div className="absolute w-full h-[1px] border-dotted border-b-[2px] border-black left-0 bottom-1"></div>
              </div>
              <div className="flex justify-between relative mb-4 last:mb-0 font-medium">
                <div className="bg-[#f3ecde] relative z-10 pr-3">
                  3. Queen's Head, Neck, Shoulder and Facial (60Mins)
                </div>
                <div className="bg-[#f3ecde] relative z-10 pl-3">$129</div>
                <div className="absolute w-full h-[1px] border-dotted border-b-[2px] border-black left-0 bottom-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
