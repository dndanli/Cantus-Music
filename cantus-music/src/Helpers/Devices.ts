export {};

interface DevicesInterface {
  mobileS: string;
  mobileM: string;
  mobileL: string;
  desktop: string;
}

const size: DevicesInterface = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  desktop: `(max-width: ${size.desktop})`,
};
