import { MapPin, Clock, Phone, Mail, Facebook } from 'lucide-react';
import Link from 'next/link';

export default function TopBar() {
  return (
    <div className="hidden lg:flex w-full bg-[#84CC16] text-white text-[11px] xl:text-[13px] font-medium py-1.5 px-4 sm:px-6 lg:px-10 justify-between items-center z-[10000] relative">
      {/* Left side: Address & Hours */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <MapPin fill="white" className="w-3.5 h-3.5 text-[#84CC16]" />
          <span>Budak 1a, Stankovci, Croatia</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-3.5 h-3.5" />
          <span>RADNO VRIJEME: Pon-Pet: 08:00-16:00, Subota: uz najavu</span>
        </div>
      </div>

      {/* Right side: Contact */}
      <div className="flex items-center gap-6">
        <a href="tel:+38523681232" className="flex items-center gap-2 hover:text-black transition-colors">
          <Phone fill="white" className="w-3.5 h-3.5 text-[#84CC16]" />
          <span>023 681 232</span>
        </a>
        <a href="tel:+385957773505" className="flex items-center gap-2 hover:text-black transition-colors">
          <Phone fill="white" className="w-3.5 h-3.5 text-[#84CC16]" />
          <span>095 777 3505</span>
        </a>
        <a href="mailto:pugb.alu@gmail.com" className="flex items-center gap-2 hover:text-black transition-colors">
          <Mail className="w-3.5 h-3.5" />
          <span>pugb.alu@gmail.com</span>
        </a>
        <a href="https://web.facebook.com/p/ALU-i-PVC-stolarija-Orlovi%C4%87-100063548771189/?locale=hr_HR&_rdc=1&_rdr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-black transition-colors">
          <Facebook className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
