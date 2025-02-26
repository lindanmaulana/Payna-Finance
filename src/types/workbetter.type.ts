import { ImageWorkBetter } from "@/utils/images";

interface WorkBetter {
  id: number;
  title: string;
  desc: string;
  image: string;
}

export const dataWorkBetter: WorkBetter[] = [
  {
    id: 1,
    title: "Share Insights",
    desc: "Working together with your team to make decisions",
    image: ImageWorkBetter.shareInsights,
  },

  {
    id: 2,
    title: "Track Leads",
    desc: "Working together with your team to make decisions",
    image: ImageWorkBetter.trackLeads,
  },
  {
    id: 3,
    title: "Offline Mode",
    desc: "Working together with your team to make decisions",
    image: ImageWorkBetter.offlineMode,
  },
  {
    id: 4,
    title: "Kanban Mode",
    desc: "Working together with your team to make decisions",
    image: ImageWorkBetter.kanbanMode,
  },
  {
    id: 5,
    title: "Reward System",
    desc: "Working together with your team to make decisions",
    image: ImageWorkBetter.rewardSystem,
  },
  {
    id: 6,
    title: "189 Country",
    desc: "Working together with your team to make decisions",
    image: ImageWorkBetter.country189,
  },
];
