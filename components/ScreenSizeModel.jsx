import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";

export default function ScreenSizeModel() {

  let [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto md:hidden text-white"
          onClose={()=>setIsOpen(isOpen)}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden align-middle transition-all transform bg-gray-900 shadow-xl rounded-2xl text-center border-2 border-white">
                <Dialog.Title
                  as="div"
                  className="text-lg font-medium leading-6"
                >
                  <h1 className="text-2xl font-bold text-white">SORRY :(</h1>
                  <div className="text-center border-b-2 py-2">
                    <h1 className="mb-1 font-medium text-xl md:text-3xl dark:text-white">
                      <span className="text-orange-600">F</span>
                      <span className="text-yellow-600">E</span>
                      <span className="text-blue-400">D</span> 
                      <span className="text-white">{" "}Docs Playground</span>
                    </h1>
                    <p className="text-sm text-gray-300">
                      IDE doesn&apos;t support screen widths smaller than 768px
                      at the moment! To give you an idea why, we&apos;ve kept
                      every non-responsive piece transparent in the background!
                    </p>
                    <h1 className="my-2 font-bold text-white">YUP! Pretty broken. :)</h1>
                  </div>
                </Dialog.Title>

                <div className="mt-4">
                  <p className="text-sm text-gray-400">
                    Move to a bigger screen size, fix your aspect ratio or just
                    zoom out to sort this issue. IDE&apos;s shouldn&apos;t have
                    mobile views in the first place but we&apos;re working on it
                    for you. Hope you had fun interacting with a fellow dev who
                    wanted to vent.
                  </p>
                </div>

                <div className="mt-4">
                  <h3 className="font-semibold">
                    Thanks for hearing me out! HAPPY CODING. :)
                  </h3>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
