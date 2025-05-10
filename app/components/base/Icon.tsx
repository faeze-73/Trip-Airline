import IconUser from "../icons/IconUser";
import IconPhone from "../icons/IconPhone"
import AirPlane from "../icons/AirPlane";
import ExChange from "../icons/ExChange";

const iconsMap = {
  user: IconUser,
  phone: IconPhone,
  airPlane: AirPlane,
  exChange: ExChange
};

type IconProps = {
  name: keyof typeof iconsMap;
  size?: number;
  color?: string;
  className?: string;
};

export default function Icon({ name, size = 24, color, className = "" }: IconProps) {
  const IconComponent = iconsMap[name];
  if (!IconComponent) return null;
  return <IconComponent width={size} height={size} className={className} color={color} />;
}
