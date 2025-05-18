import IconUser from "../icons/IconUser";
import IconPhone from "../icons/IconPhone"
import AirPlaneOutline from "../icons/AirPlaneOutline";
import ExChange from "../icons/ExChange";
import HistoryClock from "../icons/HistoryClock";
import ArrowIcon from "../icons/ArrowIcon";
import CrossSquare from "../icons/CrossSquare";
import AirPlane from "../icons/AirPlane";
import Instagram from "../icons/socialMedia/Instagram";
import Twitter from "../icons/socialMedia/Twitter";
import FaceBook from "../icons/socialMedia/FaceBook";
import YouTube from "../icons/socialMedia/YouTube";
import Telegram from "../icons/socialMedia/Telegram";
import Linkedin from "../icons/socialMedia/Linkedin";

const iconsMap = {      
  user: IconUser,
  phone: IconPhone,
  airPlaneOutline: AirPlaneOutline,
  exChange: ExChange,
  historyClock: HistoryClock,
  arrowIcon: ArrowIcon,
  crossSquare: CrossSquare,
  airPlane: AirPlane,
  faceBook: FaceBook,
  instagram: Instagram,
  twitter: Twitter,
  youTube: YouTube,
  telegram: Telegram,
  linkedin: Linkedin,
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
