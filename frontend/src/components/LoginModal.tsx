import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Link,
  Checkbox,
} from "@nextui-org/react";
import React, { useState } from "react";

export default function LoginModal({ isLogin, setIsLogin }) {
  const [signup, setSignup] = useState(false);
  const handleOpenChange = (open) => {
    if (!open) {
      setIsLogin(false);
    }
  };

  return (
    <Modal
      isOpen={isLogin}
      onOpenChange={handleOpenChange}
      placement="top-center"
      size="md"
      className="text-[24px] p-6"
      classNames={{
        backdrop: "bg-[#f4cd8c7a]/30 backdrop-opaque",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 font-bold text-[22px]">
              {signup ? "Create Account" : "Log in"}
            </ModalHeader>
            <ModalBody>
              <Input
                label="Email"
                placeholder="Enter your email"
                variant="bordered"
                classNames={{
                  input: "text-[15px] h-14 pt-5 pl-2",
                  label: "text-[18px] p-2 pt-0",
                }}
              />
              <Input
                label="Password"
                placeholder="Enter your password"
                type="password"
                variant="bordered"
                classNames={{
                  input: "text-[15px] h-14 pt-5 pl-2",
                  label: "text-[18px] p-2 pt-0",
                }}
              />
              {signup ? (
                <Input
                  label="Confirm Password"
                  placeholder="Re-Enter your password"
                  type="password"
                  variant="bordered"
                  classNames={{
                    input: "text-[15px] h-14 pt-5 pl-2",
                    label: "text-[18px] p-2 pt-0",
                  }}
                />
              ) : null}
            </ModalBody>
            <ModalFooter className="flex flex-col py-10">
              <Button
                onPress={onClose}
                className="bg-orange-500 h-12 text-[20px] text-white font-bold rounded-md"
              >
                {signup ? "Create Account" : "Lets GO!"}
              </Button>
              <div className="flex flex-row text-[18px] pt-2">
                <span className="text-neutral-400">
                  {signup
                    ? "Already an user ?"
                    : "New user? create an account."}
                </span>
                <span
                  className="text-orange-500 font-semibold pl-2 hover:cursor-pointer"
                  onClick={() => setSignup(!signup)}
                >
                  {signup ? "Sign up" : "Sign in"}
                </span>
              </div>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
