"use client";
// @flow strict
import { isValidEmail } from "@/utils/check-email";
import { personalData } from "@/utils/data/personal-data";
import { useState } from "react";

function ContactForm() {
  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    if (!userInput.email || !userInput.message || !userInput.name) {
      setError({ ...error, required: true });
      setSubmitStatus({ type: "error", message: "Please fill in all required fields." });
      return;
    } else if (error.email) {
      setSubmitStatus({ type: "error", message: "Please provide a valid email." });
      return;
    } else {
      setError({ ...error, required: false });
      setSubmitStatus({ type: "", message: "" });
    };

    try {
      setIsLoading(true);
      const subject = encodeURIComponent(`Portfolio message from ${userInput.name}`);
      const body = encodeURIComponent(
        `Name: ${userInput.name}\nEmail: ${userInput.email}\n\nMessage:\n${userInput.message}`
      );

      window.location.href = `mailto:${personalData.email}?subject=${subject}&body=${body}`;

      setSubmitStatus({
        type: "success",
        message: "Your mail app has been opened with a pre-filled message.",
      });
      setUserInput({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      const message = error?.response?.data?.message || "Failed to send message. Please try again.";
      setSubmitStatus({ type: "error", message });
    } finally {
      setIsLoading(false);
    };
  };

  return (
    <div>
      <p className="font-medium mb-5 text-orange-400 text-xl uppercase">Contact with me</p>
      <div className="max-w-3xl text-white rounded-lg border border-[#2a2a2a] overflow-hidden bg-[#111111]">
        <div className="flex items-center justify-between px-4 py-2 border-b border-[#2a2a2a] bg-[#0a0a0a]">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-orange-500" />
            <span className="h-3 w-3 rounded-full bg-green-500" />
          </div>
          <p className="text-xs text-zinc-400 font-mono">priya@portfolio-terminal</p>
        </div>

        <div className="p-4 lg:p-5 font-mono">
          <p className="text-sm text-zinc-300 mb-4">
            A fake terminal window where you can “type” a message to me.
          </p>

          <div className="mb-3 text-sm text-zinc-400">
            <span className="text-orange-400">&gt;</span> to: {personalData.email}
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-orange-400">&gt;</span>
              <label className="text-zinc-200 shrink-0">name:</label>
              <input
                className="bg-transparent w-full border-b border-[#2a2a2a] focus:border-orange-500 ring-0 outline-0 transition-all duration-300 px-2 py-1 text-zinc-100"
                type="text"
                maxLength="100"
                required={true}
                placeholder="___"
                onChange={(e) => {
                  setUserInput({ ...userInput, name: e.target.value });
                  if (submitStatus.message) setSubmitStatus({ type: "", message: "" });
                }}
                onBlur={checkRequired}
                value={userInput.name}
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-orange-400">&gt;</span>
              <label className="text-zinc-200 shrink-0">email:</label>
              <input
                className="bg-transparent w-full border-b border-[#2a2a2a] focus:border-orange-500 ring-0 outline-0 transition-all duration-300 px-2 py-1 text-zinc-100"
                type="email"
                maxLength="100"
                required={true}
                placeholder="___"
                value={userInput.email}
                onChange={(e) => {
                  setUserInput({ ...userInput, email: e.target.value });
                  if (submitStatus.message) setSubmitStatus({ type: "", message: "" });
                }}
                onBlur={() => {
                  checkRequired();
                  setError({ ...error, email: !isValidEmail(userInput.email) });
                }}
              />
            </div>

            <div className="flex items-start gap-2">
              <span className="text-orange-400 mt-1">&gt;</span>
              <label className="text-zinc-200 shrink-0 mt-1">message:</label>
              <textarea
                className="bg-transparent w-full border border-[#2a2a2a] rounded-md focus:border-orange-500 ring-0 outline-0 transition-all duration-300 px-2 py-2 text-zinc-100"
                maxLength="500"
                name="message"
                required={true}
                placeholder="___"
                onChange={(e) => {
                  setUserInput({ ...userInput, message: e.target.value });
                  if (submitStatus.message) setSubmitStatus({ type: "", message: "" });
                }}
                onBlur={checkRequired}
                rows="5"
                value={userInput.message}
              />
            </div>

            <div className="pt-2">
              <button
                className="font-mono rounded-md bg-gradient-to-r from-orange-500 to-orange-700 px-4 py-2 text-sm text-white transition-all duration-200 hover:from-orange-400 hover:to-orange-600 hover:shadow-[0_0_15px_rgba(249,115,22,0.4)]"
                role="button"
                onClick={handleSendMail}
                disabled={isLoading}
              >
                {isLoading ? "sending..." : "> send_message()"}
              </button>
            </div>

            {error.email && <p className="text-sm text-red-400">Please provide a valid email!</p>}
            {error.required && <p className="text-sm text-red-400">All fields are required!</p>}

            {submitStatus.message && (
              <p
                className={`text-sm ${
                  submitStatus.type === "success" ? "text-green-400" : "text-red-400"
                }`}
              >
                {submitStatus.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;