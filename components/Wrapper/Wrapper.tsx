import React from "react";
import Modal from "./Modal";
import Brand from "./Brand";
import Fetch from "@/lib/getData";
type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const Wrapper = async (props: Props) => {
  const searchParams = props.searchParams;

  const gclid = searchParams && searchParams["gclid"];

  const data = await Fetch(gclid);
  if (data.length === 0) {
    return;
  } else {
    return (
      <Modal isVisible={true}>
        <div className="bg-gradient-to-b from-[#111132] to-[#0b0b1e]">
          <div className="text-white py-10 px-4 md:px-10 max-w-screen-lg mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Best Real Money Online Casino Sites
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                  – 2025
                </span>
              </h1>
              <p className="hidden sm:block text-lg max-w-3xl mx-auto text-gray-300">
                Discover the leading{" "}
                <span className="text-yellow-400 font-semibold">Best NZ</span>{" "}
                casinos and sports betting platforms. Enjoy top-tier games like
                Slots, Roulette, Blackjack, Poker, and more — with fast payouts
                and mobile support.
              </p>

              {/* Icons */}
              <div className="flex justify-center gap-8 mt-6 text-sm text-gray-300">
                <div>🔐 Safe & Secure</div>
                <div>📲 Mobile Compatible</div>
                <div>⚡ Quick Withdrawals</div>
              </div>
            </div>

            {/* Casino Cards */}
            <div className="space-y-8">
              {data?.map((item: any, index: any) => {
                return (
                  <>
                    <Brand
                      key={item.id}
                      item={item}
                      gclid={gclid}
                      index={index}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </Modal>
    );
  }
};

export default Wrapper;
