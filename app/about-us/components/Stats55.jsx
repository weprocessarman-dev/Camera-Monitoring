"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Stats55() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-[0.5fr_1fr] lg:items-center lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Numbers</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              What we've built matters
            </h2>
            <p className="md:text-md">
              Real results from real work. These numbers tell the story of
              businesses protected and incidents prevented across the nation.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Learn" variant="secondary">
                Learn
              </Button>
              <Button
                title="More"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                More
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 py-2 md:grid-cols-2">
            <div className="flex flex-col justify-center border border-border-primary p-8 text-center">
              <p className="mb-2 text-10xl font-bold leading-[1.3] md:text-[4rem] lg:text-[5rem]">
                12+
              </p>
              <h3 className="text-md font-bold leading-[1.4] md:text-xl">
                Years in business
              </h3>
            </div>
            <div className="flex flex-col justify-center border border-border-primary p-8 text-center">
              <p className="mb-2 text-10xl font-bold leading-[1.3] md:text-[4rem] lg:text-[5rem]">
                50K+
              </p>
              <h3 className="text-md font-bold leading-[1.4] md:text-xl">
                Cameras monitored daily
              </h3>
            </div>
            <div className="flex flex-col justify-center border border-border-primary p-8 text-center">
              <p className="mb-2 text-10xl font-bold leading-[1.3] md:text-[4rem] lg:text-[5rem]">
                98%
              </p>
              <h3 className="text-md font-bold leading-[1.4] md:text-xl">
                Customer satisfaction rate
              </h3>
            </div>
            <div className="flex flex-col justify-center border border-border-primary p-8 text-center">
              <p className="mb-2 text-10xl font-bold leading-[1.3] md:text-[4rem] lg:text-[5rem]">
                2,400+
              </p>
              <h3 className="text-md font-bold leading-[1.4] md:text-xl">
                Incidents prevented yearly
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
