import React from "react";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import type { StatsSummary } from "@/types";

type Props = {
  summary?: StatsSummary | null;
  loading?: boolean;
  error?: string | null;
};

const MonthlyTargetGauge = ({ summary, loading, error }: Props) => {
  if (loading) {
    return (
      <div className="w-[328px] md:w-[450px] h-[200px] bg-white rounded-3xl shadow-sm flex items-center justify-center">
        <LoadingSpinner label="Loading target…" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-[328px] md:w-[450px] h-[200px] bg-white rounded-3xl shadow-sm flex items-center justify-center">
        <div className="text-sm text-red-600">{error}</div>
      </div>
    );
  }

  const progress = summary ? Math.min(1, summary.revenue / 20000) : 0.7555; // fallback

  const r = 110;
  const stroke = 14;

  return (
    <div className="w-[328px] md:w-[450px] h-[494px] bg-gray-100 rounded-3xl shadow-sm overflow-hidden">
      {/* Top main body ~80% */}
      <div
        className="bg-white p-4 md:p-6 min-h-[402px] rounded-2xl"
        style={{ height: "80%" }}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg md:text-lg font-semibold leading-7 text-[#1D2939]">
              Monthly Target
            </h3>
            <p className="text-sm leading-5 text-[#667085] mt-1">
              Target you&apos;ve set for each month
            </p>
          </div>

          <button
            aria-label="More"
            className="inline-flex items-center justify-center h-8 w-8 rounded-full hover:bg-gray-100 text-[#667085] leading-6"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6a2 2 0 100-4 2 2 0 000 4zM12 14a2 2 0 100-4 2 2 0 000 4zM12 22a2 2 0 100-4 2 2 0 000 4z"
                fill="#667085"
                leading-6
              />
            </svg>
          </button>
        </div>

        {/* Gauge area (centered) */}
        <div
          className="flex flex-col items-center justify-center"
          style={{ height: "calc(100% - 84px)" }}
        >
          <div
            className="relative"
            style={{ width: 2 * (r + stroke), height: r + stroke }}
          >
            <div className="mt-8 flex flex-col items-center justify-center pointer-events-none">
              <div
                className="absolute -top-10 flex items-center justify-center z-0 w-[280px] md:w-[328px]"
                role="img"
                aria-label={`Monthly progress ${(progress * 100).toFixed(0)}%`}
              >
                <svg
                  width="100%"
                  height="164"
                  viewBox="0 0 328 164"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-hidden
                >
                  <defs>
                    <clipPath id="monthly-target-clip">
                      <rect
                        x={0}
                        y={0}
                        width={328}
                        height={164}
                        style={{
                          transformOrigin: "0 0",
                          transform: `scaleX(${progress})`,
                          transition:
                            "transform 900ms cubic-bezier(.2,.9,.2,1)",
                        }}
                      />
                    </clipPath>
                  </defs>

                  <path
                    d="M321.44 164.019C325.063 164.019 328.014 161.079 327.869 157.459C326.225 116.348 309.172 77.2594 279.966 48.053C249.21 17.2971 207.496 0.018558 164 0.0185547C120.505 0.0185514 78.7905 17.2971 48.0345 48.053C18.8281 77.2594 1.77529 116.348 0.131095 157.459C-0.0136858 161.079 2.93701 164.019 6.56 164.019C10.183 164.019 13.1051 161.079 13.2625 157.46C14.8985 119.829 30.566 84.076 57.3117 57.3303C85.6072 29.0348 123.984 13.1385 164 13.1385C204.016 13.1386 242.393 29.0348 270.688 57.3303C297.434 84.076 313.102 119.829 314.738 157.46C314.895 161.079 317.817 164.019 321.44 164.019Z"
                    fill="#E4E7EC"
                  />

                  <g clipPath="url(#monthly-target-clip)">
                    <path
                      d="M275.327 52.6916C277.889 50.1298 277.897 45.9655 275.235 43.5082C253.072 23.0505 225.66 9.0705 195.995 3.16976C164.182 -3.15821 131.207 0.0895443 101.24 12.5023C71.2728 24.9151 45.6595 45.9354 27.639 72.9051C10.8351 98.0539 1.33707 127.323 0.131155 157.46C-0.0136987 161.08 2.93701 164.019 6.56 164.019C10.183 164.019 13.1051 161.08 13.2626 157.46C14.4606 129.919 23.1858 103.185 38.5478 80.1941C55.1268 55.382 78.691 36.0434 106.261 24.6236C133.83 13.2039 164.167 10.2159 193.435 16.0377C220.555 21.4321 245.628 34.166 265.95 52.7936C268.621 55.2417 272.765 55.2535 275.327 52.6916Z"
                      fill="#3758F9"
                    />
                  </g>
                </svg>
              </div>
              <div className="text-3xl md:text-4xl font-bold leading-11 text-[#1D2939] relative z-10">
                75.00%
              </div>
              <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full bg-green-100/70 text-green-600 text-sm">
                +10.7%
              </div>
              <p className="text-center w-full md:min-w-[400px] mt-6 md:mt-8 text-[14px] md:text-[16px] text-[#667085] leading-6">
                You earn $3287 today, its higher than last month. Keep up your
                good work!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer layer bottom 20% */}
      <div className="" style={{ height: "20%" }}>
        <div className="grid grid-cols-3 h-full items-center text-center px-4 md:px-6">
          <div className="flex flex-col items-center justify-center">
            <div className="text-xs md:text-sm text-[#667085]">Target</div>
            <div className="mt-1 inline-flex items-center gap-2">
              <span className="text-base md:text-lg font-bold text-[#1D2939] leading-7">
                $20K
              </span>
              <svg
                width="10"
                height="14"
                viewBox="0 0 10 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#344054]"
              >
                <path
                  d="M4.9974 1.66602L4.9974 12.3336M1 5.66334L4.99987 1.66602L9 5.66334"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="text-xs md:text-sm text-[#667085] leading-6">
              Revenue
            </div>
            <div className="mt-1 inline-flex items-center gap-2">
              <span className="text-base md:text-lg font-bold text-[#1D2939] leading-7">
                $16K
              </span>
              <svg
                width="10"
                height="14"
                viewBox="0 0 10 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#344054]"
              >
                <path
                  d="M4.9974 1.66602L4.9974 12.3336M1 5.66334L4.99987 1.66602L9 5.66334"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="text-xs md:text-sm text-[#667085] leading-6">
              Today
            </div>
            <div className="mt-1 inline-flex items-center gap-2">
              <span className="text-base md:text-lg font-bold text-[#1D2939] leading-7">
                $1.5K
              </span>
              <svg
                width="10"
                height="14"
                viewBox="0 0 10 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#344054]"
              >
                <path
                  d="M4.9974 12.3339L4.9974 1.66632M1 8.3365L4.99987 12.3338L9 8.3365"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyTargetGauge;
