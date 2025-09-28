"use client";
import Link from "next/link";

import Container from "../components/ui/Container";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };
  return (
    <html>
      <body>
        <main className="min-h-[70vh] bg-white relative flex items-center justify-center py-16 px-4 sm:py-20">
          <span className="absolute top-0 right-0 hidden md:block">
            <svg
              width="450"
              height="254"
              viewBox="0 0 450 254"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.50555 45.1132L450 45.1132L450 44.6073L0.50555 44.6073L0.50555 45.1132Z"
                fill="url(#paint0_linear_332_944)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M205.546 253.529L205.546 2.11875e-05L205.04 2.11663e-05L205.04 253.529L205.546 253.529Z"
                fill="url(#paint1_linear_332_944)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.505546 97.2165L450 97.2165L450 96.7106L0.505546 96.7106L0.505546 97.2165Z"
                fill="url(#paint2_linear_332_944)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M256.806 253.529L256.806 2.56688e-05L256.3 2.56477e-05L256.3 253.529L256.806 253.529Z"
                fill="url(#paint3_linear_332_944)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.505837 253.529L0.505859 3.26228e-06L0 3.24118e-06L-2.21642e-05 253.529L0.505837 253.529Z"
                fill="url(#paint4_linear_332_944)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.505541 149.321L450 149.321L450 148.815L0.505541 148.815L0.505541 149.321Z"
                fill="url(#paint5_linear_332_944)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M308.066 253.529L308.066 3.015e-05L307.56 3.01289e-05L307.56 253.529L308.066 253.529Z"
                fill="url(#paint6_linear_332_944)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M51.7662 253.529L51.7662 7.74361e-06L51.2603 7.7225e-06L51.2603 253.529L51.7662 253.529Z"
                fill="url(#paint7_linear_332_944)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.505537 201.424L450 201.424L450 200.918L0.505537 200.918L0.505537 201.424Z"
                fill="url(#paint8_linear_332_944)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M359.326 253.529L359.326 3.46314e-05L358.82 3.46103e-05L358.82 253.529L359.326 253.529Z"
                fill="url(#paint9_linear_332_944)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M103.026 253.529L103.026 1.22249e-05L102.52 1.22038e-05L102.52 253.529L103.026 253.529Z"
                fill="url(#paint10_linear_332_944)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M410.586 253.529L410.586 3.91126e-05L410.08 3.90915e-05L410.08 253.529L410.586 253.529Z"
                fill="url(#paint11_linear_332_944)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M154.286 253.529L154.286 1.67062e-05L153.78 1.66851e-05L153.78 253.529L154.286 253.529Z"
                fill="url(#paint12_linear_332_944)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_332_944"
                  x1="277.872"
                  y1="3.26124e-05"
                  x2="194.87"
                  y2="235.867"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E5E7EB" />
                  <stop offset="1" stop-color="#E5E7EB" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_332_944"
                  x1="277.872"
                  y1="3.26124e-05"
                  x2="194.87"
                  y2="235.867"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E5E7EB" />
                  <stop offset="1" stop-color="#E5E7EB" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_332_944"
                  x1="277.872"
                  y1="3.26124e-05"
                  x2="194.87"
                  y2="235.867"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E5E7EB" />
                  <stop offset="1" stop-color="#E5E7EB" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_332_944"
                  x1="277.872"
                  y1="3.26124e-05"
                  x2="194.87"
                  y2="235.867"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E5E7EB" />
                  <stop offset="1" stop-color="#E5E7EB" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_332_944"
                  x1="277.872"
                  y1="3.26124e-05"
                  x2="194.87"
                  y2="235.867"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E5E7EB" />
                  <stop offset="1" stop-color="#E5E7EB" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear_332_944"
                  x1="277.872"
                  y1="3.26124e-05"
                  x2="194.87"
                  y2="235.867"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E5E7EB" />
                  <stop offset="1" stop-color="#E5E7EB" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint6_linear_332_944"
                  x1="277.872"
                  y1="3.26124e-05"
                  x2="194.87"
                  y2="235.867"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E5E7EB" />
                  <stop offset="1" stop-color="#E5E7EB" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint7_linear_332_944"
                  x1="277.872"
                  y1="3.26124e-05"
                  x2="194.87"
                  y2="235.867"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E5E7EB" />
                  <stop offset="1" stop-color="#E5E7EB" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint8_linear_332_944"
                  x1="277.872"
                  y1="3.26124e-05"
                  x2="194.87"
                  y2="235.867"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E5E7EB" />
                  <stop offset="1" stop-color="#E5E7EB" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint9_linear_332_944"
                  x1="277.872"
                  y1="3.26124e-05"
                  x2="194.87"
                  y2="235.867"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E5E7EB" />
                  <stop offset="1" stop-color="#E5E7EB" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint10_linear_332_944"
                  x1="277.872"
                  y1="3.26124e-05"
                  x2="194.87"
                  y2="235.867"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E5E7EB" />
                  <stop offset="1" stop-color="#E5E7EB" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint11_linear_332_944"
                  x1="277.872"
                  y1="3.26124e-05"
                  x2="194.87"
                  y2="235.867"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E5E7EB" />
                  <stop offset="1" stop-color="#E5E7EB" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint12_linear_332_944"
                  x1="277.872"
                  y1="3.26124e-05"
                  x2="194.87"
                  y2="235.867"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E5E7EB" />
                  <stop offset="1" stop-color="#E5E7EB" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>

          <div className="w-full flex flex-col items-center text-center px-4">
            <h1 className="text-[96px] sm:text-[140px] md:text-[200px] font-semibold leading-tight text-[#1F2937]">
              404
            </h1>

            <h4 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight text-[#1F2937] mt-2">
              Page Not Found
            </h4>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-[#6B7280] leading-6 max-w-xl">
              Don&apos;t worry — you can head back to the homepage or use the
              navigation menu to find what you need.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 items-center justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-md text-sm font-medium w-full sm:w-auto"
              >
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.75 6L9.5 12.25L15.75 18.5"
                    stroke="#1F2937"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Go Back
              </Link>
              <button
                onClick={handleGoBack}
                className="inline-flex items-center justify-center px-6 py-3 bg-[#1D4ED8] text-white rounded-md text-sm font-medium w-full sm:w-auto"
              >
                Back to Home
              </button>
            </div>
          </div>

          <span className="absolute bottom-0 left-0 hidden md:block">
            <svg
              width="450"
              height="254"
              viewBox="0 0 450 254"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M449.494 208.887L-7.88783e-06 208.887L-7.79939e-06 209.393L449.494 209.393L449.494 208.887Z"
                fill="url(#paint0_linear_332_939)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M244.454 0.471271L244.454 254L244.96 254L244.96 0.471271L244.454 0.471271Z"
                fill="url(#paint1_linear_332_939)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M449.494 156.783L-1.69979e-05 156.784L-1.69094e-05 157.289L449.494 157.289L449.494 156.783Z"
                fill="url(#paint2_linear_332_939)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M193.194 0.47128L193.194 254L193.7 254L193.7 0.47128L193.194 0.47128Z"
                fill="url(#paint3_linear_332_939)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M449.494 0.471235L449.494 254L450 254L450 0.471235L449.494 0.471235Z"
                fill="url(#paint4_linear_332_939)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M449.494 104.679L-2.61081e-05 104.679L-2.60197e-05 105.185L449.494 105.185L449.494 104.679Z"
                fill="url(#paint5_linear_332_939)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M141.934 0.471289L141.934 254L142.44 254L142.44 0.471289L141.934 0.471289Z"
                fill="url(#paint6_linear_332_939)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M398.234 0.471244L398.234 254L398.74 254L398.74 0.471244L398.234 0.471244Z"
                fill="url(#paint7_linear_332_939)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M449.494 52.5757L-3.52181e-05 52.5758L-3.51297e-05 53.0816L449.494 53.0816L449.494 52.5757Z"
                fill="url(#paint8_linear_332_939)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M90.6737 0.471298L90.6738 254L91.1796 254L91.1796 0.471298L90.6737 0.471298Z"
                fill="url(#paint9_linear_332_939)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M346.974 0.471253L346.974 254L347.48 254L347.48 0.471253L346.974 0.471253Z"
                fill="url(#paint10_linear_332_939)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M39.4141 0.471307L39.4141 254L39.92 254L39.9199 0.471306L39.4141 0.471307Z"
                fill="url(#paint11_linear_332_939)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M295.714 0.471262L295.714 254L296.22 254L296.22 0.471262L295.714 0.471262Z"
                fill="url(#paint12_linear_332_939)"
              />
              <rect
                opacity="0.3"
                width="50.7536"
                height="51.5982"
                transform="matrix(1 -1.74846e-07 -1.74846e-07 -1 91.1797 208.886)"
                fill="#E5E7EB"
              />
              <rect
                opacity="0.3"
                width="50.756"
                height="51.5985"
                transform="matrix(1 -1.74846e-07 -1.74846e-07 -1 142.441 156.784)"
                fill="#E5E7EB"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_332_939"
                  x1="172.128"
                  y1="254"
                  x2="255.13"
                  y2="18.1334"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E5E7EB" />
                  <stop offset="1" stop-color="#E5E7EB" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_332_939"
                  x1="172.128"
                  y1="254"
                  x2="255.13"
                  y2="18.1334"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E5E7EB" />
                  <stop offset="1" stop-color="#E5E7EB" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_332_939"
                  x1="172.128"
                  y1="254"
                  x2="255.13"
                  y2="18.1334"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E5E7EB" />
                  <stop offset="1" stop-color="#E5E7EB" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_332_939"
                  x1="172.128"
                  y1="254"
                  x2="255.13"
                  y2="18.1334"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E5E7EB" />
                  <stop offset="1" stop-color="#E5E7EB" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_332_939"
                  x1="172.128"
                  y1="254"
                  x2="255.13"
                  y2="18.1334"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E5E7EB" />
                  <stop offset="1" stop-color="#E5E7EB" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear_332_939"
                  x1="172.128"
                  y1="254"
                  x2="255.13"
                  y2="18.1334"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E5E7EB" />
                  <stop offset="1" stop-color="#E5E7EB" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint6_linear_332_939"
                  x1="172.128"
                  y1="254"
                  x2="255.13"
                  y2="18.1334"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E5E7EB" />
                  <stop offset="1" stop-color="#E5E7EB" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint7_linear_332_939"
                  x1="172.128"
                  y1="254"
                  x2="255.13"
                  y2="18.1334"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E5E7EB" />
                  <stop offset="1" stop-color="#E5E7EB" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint8_linear_332_939"
                  x1="172.128"
                  y1="254"
                  x2="255.13"
                  y2="18.1334"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E5E7EB" />
                  <stop offset="1" stop-color="#E5E7EB" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint9_linear_332_939"
                  x1="172.128"
                  y1="254"
                  x2="255.13"
                  y2="18.1334"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E5E7EB" />
                  <stop offset="1" stop-color="#E5E7EB" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint10_linear_332_939"
                  x1="172.128"
                  y1="254"
                  x2="255.13"
                  y2="18.1334"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E5E7EB" />
                  <stop offset="1" stop-color="#E5E7EB" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint11_linear_332_939"
                  x1="172.128"
                  y1="254"
                  x2="255.13"
                  y2="18.1334"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E5E7EB" />
                  <stop offset="1" stop-color="#E5E7EB" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint12_linear_332_939"
                  x1="172.128"
                  y1="254"
                  x2="255.13"
                  y2="18.1334"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E5E7EB" />
                  <stop offset="1" stop-color="#E5E7EB" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </main>
      </body>
    </html>
  );
}
