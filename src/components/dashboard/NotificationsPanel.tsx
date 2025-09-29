"use client";

import React from "react";
import Image from "next/image";

type Notification = {
  id: string;
  name: string;
  message: string;
  project: string;
  time: string;
  avatar: string;
  status: "online" | "offline" | "busy";
};

const sample: Notification[] = [
  {
    id: "1",
    name: "Terry Franci",
    message: "requests permission to change",
    project: "Project – Nganter App",
    time: "5 min ago",
    avatar: "/avatar-1.png",
    status: "online",
  },
  {
    id: "2",
    name: "Alena Franci",
    message: "requests permission to change",
    project: "Project – Nganter App",
    time: "8 min ago",
    avatar: "/avatar-2.png",
    status: "online",
  },
  {
    id: "3",
    name: "Jocelyn Kenter",
    message: "requests permission to change",
    project: "Project – Nganter App",
    time: "15 min ago",
    avatar: "/avatar-3.png",
    status: "offline",
  },
  {
    id: "4",
    name: "Brandon Philips",
    message: "requests permission to change",
    project: "Project – Nganter App",
    time: "1 hr ago",
    avatar: "/avatar-1.png",
    status: "busy",
  },
];

export default function NotificationsPanel({
  onClose,
  items = sample,
}: {
  onClose?: () => void;
  items?: Notification[];
}) {
  return (
    <div
      role="dialog"
      aria-label="Notifications"
      className="w-[361px] bg-white rounded-[16px] shadow-lg"
      style={{ boxShadow: "0px 8px 24px rgba(0,0,0,0.1)" }}
    >
      <div className="px-6 pt-6 pb-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3
            className="text-[20px] font-semibold"
            style={{ color: "#111827" }}
          >
            Notifications
          </h3>
          <button
            aria-label="Close notifications"
            onClick={onClose}
            className="inline-flex items-center justify-center w-6 h-6 rounded"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 6L14 14M14 6L6 14"
                stroke="#6B7280"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* List */}
        <div
          className="notifications-scroll overflow-y-auto"
          style={{ maxHeight: 360, paddingRight: 8 }}
        >
          {items.map((it, idx) => (
            <div key={it.id}>
              <div className="flex items-start py-4">
                <div className="relative mr-3" style={{ minWidth: 40 }}>
                  <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-100">
                    <Image
                      src={it.avatar}
                      alt={it.name}
                      width={40}
                      height={40}
                    />
                  </div>
                  {/* status badge */}
                  <span
                    className="absolute bottom-0 right-0 rounded-full border-2"
                    style={{
                      width: 10,
                      height: 10,
                      borderColor: "#FFFFFF",
                      backgroundColor:
                        it.status === "online"
                          ? "#10B981"
                          : it.status === "busy"
                          ? "#EF4444"
                          : "#9CA3AF",
                    }}
                  />
                </div>

                <div className="flex-1">
                  <div
                    className="text-sm leading-[1.5]"
                    style={{ color: "#374151" }}
                  >
                    <span className="font-bold">{it.name}</span>
                    <span className="font-normal"> {it.message} </span>
                    <span className="font-bold">{it.project}</span>
                  </div>
                  <div
                    className="flex items-center text-xs mt-1"
                    style={{ color: "#6B7280" }}
                  >
                    <span>{"Project"}</span>
                    <span className="mx-2">•</span>
                    <span>{it.time}</span>
                  </div>
                </div>
              </div>

              {/* divider except last */}
              {idx !== items.length - 1 && (
                <div className="border-t" style={{ borderColor: "#E5E7EB" }} />
              )}
            </div>
          ))}
        </div>

        {/* Footer button */}
        <div className="flex  w-full justify-center pt-4 pb-4">
          <button
            type="button"
            className="text-sm  w-full font-medium rounded-md"
            style={{
              padding: "10px 20px",
              color: "#374151",
              background: "#FFFFFF",
              border: "1px solid #D1D5DB",
              borderRadius: 8,
            }}
          >
            View All Notification
          </button>
        </div>
      </div>

      <style jsx>{`
        .notifications-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .notifications-scroll::-webkit-scrollbar-thumb {
          background: #e4e7ec;
          border-radius: 999px;
        }
        .notifications-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
      `}</style>
    </div>
  );
}
