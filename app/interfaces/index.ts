export interface ITechnology {
  id: number;
  name: string;
  icon: string;
}

export interface IExperience {
  id: number;
  designation: string;
  companyName: string;
  companyLogo: string;
  iconBg: string;
  serviceTimeline: string;
  achievements: Array<string>;
}
