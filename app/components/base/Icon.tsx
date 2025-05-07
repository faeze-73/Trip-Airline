import IconUser from "../icons/IconUser";
import IconPhone from "../icons/IconPhone"

const iconsMap = {
  user: IconUser,
  phone: IconPhone,
};

type IconProps = {
  name: keyof typeof iconsMap;
  size?: number;
  className?: string;
};

export default function Icon({ name, size = 24, className = "" }: IconProps) {
  const IconComponent = iconsMap[name];
  if (!IconComponent) return null;
  return <IconComponent width={size} height={size} className={className} />;
}
