import { Dialog, Transition } from "@headlessui/react";
import { FC, Fragment, memo, useState } from "react";
import { BsExclamationLg } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";

interface Props {
  text?: string;
  title?: string;
  description?: string;
  okText?: string;
  cancelText?: string;
}

const AddClass: FC<Props> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <p
          className="mt-32 text-center text-blue-500 cursor-pointer hover:underline"
          onClick={() => {
            setIsOpen((e) => !e);
          }}
        >
          {props.text}
        </p>
      </div>

      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog open={isOpen} onClose={setIsOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-400"
            enterFrom="opacity-0"
            enterTo="opacity-50"
            entered="opacity-50"
            leave="ease-in-out duration-400"
            leaveFrom="opacity-50"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black"></Dialog.Overlay>
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition-transform duration-400"
            enterFrom="-translate-y-full "
            enterTo="translate-y-0 "
            leave="transition-transform duration-400"
            leaveFrom="translate-y-0"
            leaveTo="-translate-y-full "
          >
            <div className="fixed z-10 transform bg-white rounded-md top-20 right-1/3 w-96">
              <div className="flex justify-center pt-9">
                <BsExclamationLg className="w-20 h-20 text-red-500" />
              </div>
              <button
                className="absolute outline-none top-4 right-4"
                onClick={() => setIsOpen(false)}
              >
                <ImCancelCircle className="w-4 h-4" />
              </button>

              <h2 className="px-10 text-3xl font-medium text-center pt-7">
                {props.title}
              </h2>
              <p className="px-10 pt-8 text-sm text-center text-gray-600">
                {props.description}
              </p>

              <div className="flex justify-center py-10">
                <button
                  className="py-2 mr-3 bg-gray-400 rounded-md w-28 hover:bg-gray-600"
                  onClick={() => setIsOpen(false)}
                >
                  {props.cancelText}
                </button>
                <button className="py-2 bg-red-500 rounded-md w-28 hover:bg-red-600">
                  {props.okText}
                </button>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </>
  );
};

AddClass.defaultProps = {};

export default memo(AddClass);
