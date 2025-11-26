"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout525() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Beyond</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              More industries, same protection
            </h2>
            <p className="md:text-md">
              We serve any business that needs security
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
          <div className="relative flex flex-col justify-center p-6 md:p-8 lg:p-12">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-black/50" />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="size-full object-cover"
                alt="Relume placeholder image"
              />
            </div>
            <div className="relative z-10">
              <p className="mb-2 inline-block text-sm font-semibold text-text-alternative">
                Dealerships
              </p>
              <h2 className="mb-5 text-4xl font-bold leading-[1.2] text-text-alternative md:mb-6 md:text-5xl lg:text-6xl">
                Car lots need constant surveillance
              </h2>
              <p className="text-text-alternative">
                Vehicles attract thieves and vandals. We monitor your inventory
                with the same dedication we bring to every client.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button title="Explore" variant="secondary-alt">
                  Explore
                </Button>
                <Button
                  title="Learn"
                  variant="link-alt"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Learn
                </Button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="relative flex flex-col p-6 md:p-8 lg:p-6">
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-black/50" />
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    className="size-full object-cover"
                    alt="Relume placeholder image"
                  />
                </div>
                <div className="relative z-10 flex flex-1 flex-col justify-between">
                  <div>
                    <div className="mb-3 md:mb-4">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
                        className="size-12"
                        alt="Relume logo"
                      />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-text-alternative md:text-2xl">
                      Storage facilities require full coverage
                    </h3>
                    <p className="text-text-alternative">
                      Units stay secure with 24/7 monitoring
                    </p>
                  </div>
                  <div className="mt-5 flex items-center md:mt-6">
                    <Button
                      title="Learn"
                      variant="link-alt"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      Learn
                    </Button>
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col p-6 md:p-8 lg:p-6">
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-black/50" />
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    className="size-full object-cover"
                    alt="Relume placeholder image"
                  />
                </div>
                <div className="relative z-10 flex flex-1 flex-col justify-between">
                  <div>
                    <div className="mb-3 md:mb-4">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
                        className="size-12"
                        alt="Relume logo"
                      />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-text-alternative md:text-2xl">
                      Fitness centers and medical offices
                    </h3>
                    <p className="text-text-alternative">
                      Member safety and patient privacy protected
                    </p>
                  </div>
                  <div className="mt-5 flex items-center md:mt-6">
                    <Button
                      title="Learn"
                      variant="link-alt"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      Learn
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col p-6 md:p-8 lg:p-12">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/50" />
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="size-full object-cover"
                  alt="Relume placeholder image"
                />
              </div>
              <div className="relative z-10 flex flex-1 flex-col justify-between">
                <div>
                  <div className="mb-3 md:mb-4">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
                      className="size-12"
                      alt="Relume logo"
                    />
                  </div>
                  <h3 className="mb-5 text-4xl font-bold leading-[1.2] text-text-alternative md:mb-6 md:text-5xl lg:text-6xl">
                    Your industry here
                  </h3>
                  <p className="text-text-alternative">
                    Not listed above? We build custom solutions for any business
                    type.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Consult" variant="secondary-alt">
                    Consult
                  </Button>
                  <Button
                    title="Learn"
                    variant="link-alt"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Learn
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
