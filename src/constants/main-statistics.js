import { ActivityIcon, UsersIcon, SessionIcon } from "../components/icons";

export const mainBoxInfo = [
  {
    Icon: ActivityIcon,
    label: "Total event count",
    type: "total-event",
    info: "lorem ipsum dolor sit amet",
  },
  {
    Icon: UsersIcon,
    label: "Events per user",
    type: "events-per-user",
    info: "lorem ipsum dolor sit amet",
  },
  {
    Icon: SessionIcon,
    label: "Events per session",
    type: "events-per-session",
    info: "lorem ipsum dolor sit amet",
  },
];

export const mainBoxData = {
  "total-event": {
    "last-30-days": {
      value: "349,260",
      summaryPercantageValue: 30.3,
    },
    "last-week": {
      value: "452,124",
      summaryPercantageValue: 30.3,
    },
    "last-year": {
      value: "6523,154",
      summaryPercantageValue: 30.3,
    },
  },
  "events-per-user": {
    "last-30-days": {
      value: "247,9",
      summaryPercantageValue: 22.2,
    },
    "last-week": {
      value: "452,124",
      summaryPercantageValue: 30.3,
    },
    "last-year": {
      value: "6523,154",
      summaryPercantageValue: 30.3,
    },
  },
  "events-per-session": {
    "last-30-days": {
      value: "32,5",
      summaryPercantageValue: 4.5,
    },
    "last-week": {
      value: "452,124",
      summaryPercantageValue: 30.3,
    },
    "last-year": {
      value: "6523,154",
      summaryPercantageValue: 30.3,
    },
  },
};
